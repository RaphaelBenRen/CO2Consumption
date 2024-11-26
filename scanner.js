let alternativeProductSearched = false;

document.getElementById('startButton').addEventListener('click', () => {
    startScanner();
});

function startScanner() {
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#interactive')
        },
        decoder: {
            readers: ["ean_reader"] // Use the EAN barcode reader
        }
    }, function (err) {
        if (err) {
            console.error('Quagga initialization failed:', err);
            document.getElementById('result').innerHTML = `<p>Error initializing scanner.</p>`;
            return;
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
    });

    Quagga.onDetected(async function (result) {
        const code = result.codeResult.code;
        console.log(`Barcode detected: ${code}`);
        await fetchProductData(code);
    });
}

async function fetchProductData(barcode) {
    try {
        const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode}?fields=product_name,environment,ecoscore_score,ecoscore_grade,categories_tags`);
        const data = await response.json();
        console.log('API Response:', data);
        displayProductInfo(data);
    } catch (error) {
        console.error('Error fetching product data:', error);
        document.getElementById('result').innerHTML = `<p>Error fetching product data.</p>`;
    }
}

function displayProductInfo(data) {
    // Clear the previous content
    document.getElementById('result').innerHTML = '';

    if (data && data.product) {
        const productName = data.product.product_name || "Unknown Product";
        const environmentInfo = data.product.environment || {};
        const ecoscore = data.product.ecoscore_score || "Not available";
        const ecoscoreGrade = data.product.ecoscore_grade || "Not available";

        console.log('Environment Info:', environmentInfo);

        let co2Info = calculateCO2Consumption(ecoscore);

        if (environmentInfo.knowledge_panels && environmentInfo.knowledge_panels.environment) {
            const environmentPanel = environmentInfo.knowledge_panels.environment;
            if (environmentPanel.topics) {
                environmentPanel.topics.forEach(topic => {
                    if (topic.name === 'carbon-footprint') {
                        co2Info = topic.value;
                    }
                });
            }
        }

        document.getElementById('result').innerHTML = `
            <h2>Product Information</h2>
            <p><strong>Name:</strong> ${productName}</p>
            <p><strong>CO2 Consumption:</strong> ${co2Info}</p>
            <p><strong>Eco-score:</strong> ${ecoscore}</p>
            <p><strong>Eco-score Grade:</strong> ${ecoscoreGrade}</p>
        `;

        if (co2Info !== "Non disponible" && parseFloat(co2Info) > 50 && !alternativeProductSearched) {
            alternativeProductSearched = true;
            findSimilarProductWithLowerCO2(data.product);
        }
    } else {
        document.getElementById('result').innerHTML = `
            <p>Product not found in the database.</p>
        `;
    }
    Quagga.stop();
}

function calculateCO2Consumption(ecoscore) {
    if (ecoscore === "Not available") {
        return "Non disponible";
    }
    const x = ecoscore / 100;
    const score = 100 - (Math.log(10 * x + 1) / Math.log(2 + (1 / (100 * x)))) * 20;
    return score.toFixed(2); // Return the score formatted to 2 decimal places
}

async function findSimilarProductWithLowerCO2(currentProduct) {
    const productName = currentProduct.product_name;
    const categories = currentProduct.categories_tags || [];

    try {
        const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(productName)}&search_simple=1&action=process&json=1`);
        const data = await response.json();
        const products = data.products || [];

        let bestAlternative = null;
        let lowestCO2 = Number.MAX_VALUE;

        for (const product of products) {
            if (product.product_name && product.product_name.toLowerCase() === productName.toLowerCase()) {
                continue;
            }

            const productCategories = product.categories_tags || [];
            const isRelated = categories.some(category => productCategories.includes(category));

            if (!isRelated) {
                continue;
            }

            const ecoscore = product.ecoscore_score || "Not available";
            let co2Info = calculateCO2Consumption(ecoscore);

            if (co2Info !== "Non disponible" && parseFloat(co2Info) < lowestCO2) {
                lowestCO2 = parseFloat(co2Info);
                bestAlternative = product;
            }
        }

        if (bestAlternative) {
            document.getElementById('result').innerHTML += `
                <h2>Alternative Product with Lower CO2 Consumption</h2>
                <p><strong>Name:</strong> ${bestAlternative.product_name || "Unknown Product"}</p>
                <p><strong>CO2 Consumption:</strong> ${lowestCO2.toFixed(2)}</p>
                <p><strong>Eco-score:</strong> ${bestAlternative.ecoscore_score || "Not available"}</p>
                <p><strong>Eco-score Grade:</strong> ${bestAlternative.ecoscore_grade || "Not available"}</p>
            `;
        } else {
            document.getElementById('result').innerHTML += `<p>No alternative product found with lower CO2 consumption.</p>`;
        }
    } catch (error) {
        console.error('Error fetching alternative products:', error);
        document.getElementById('result').innerHTML += `<p>Error fetching alternative products.</p>`;
    }
}
