# CO2 Consumption Scanner

## Results and Project Overview

### Objectives:
The **CO2 Consumption Scanner** is a web application that allows users to scan product barcodes and view their CO2 consumption along with other environmental information like the eco-score. The application also suggests more eco-friendly alternatives for products with a high carbon footprint.

### Motivation and Importance:
In the context of growing ecological awareness, it is essential for consumers to make informed decisions about the environmental impact of their purchases. This project addresses this need by providing quick access to environmental data through a simple barcode scan.

### Expected Results:
- Allow users to scan a barcode using their device's camera.
- Display information about the product's CO2 consumption, eco-score, and environmental impact.
- Suggest eco-friendly alternatives when necessary.

  Here's an example of the expected result:  
  ![image](https://github.com/user-attachments/assets/e8d0fba6-319a-489c-af3b-f355c8f82c58)

  If the product is not in the database, a message is displayed:  
  ![image](https://github.com/user-attachments/assets/36c1f5a5-276f-491a-90ba-1fbf4c445267)

### Context:
This project aims to raise consumer awareness about reducing their carbon footprint by making environmental information accessible through a simple and intuitive interface.

---

## Dependencies

- **QuaggaJS**: A JavaScript library for scanning barcodes via the camera.
- **Open Food Facts API**: Provides data about food products, including their environmental impact, eco-score, and CO2 consumption.

---

## Performance Metrics

### Performance Criteria

- **Scanner Accuracy**: 
  - Capable of reading standard EAN barcodes.
  - Average detection time: **< 3 seconds** under normal lighting conditions.

- **API Speed**:
  - Average time to retrieve product data: **1 to 3 seconds** (depending on internet connection quality).

- **Memory Efficiency**:
  - Low resource consumption thanks to asynchronous requests.

---

### Future Improvements

- **Detection Optimization**:
  - Improve scanner accuracy in low-light environments or with poorly printed barcodes.

- **Latency Reduction**:
  - Optimize API requests to reduce response times.

---

## Usage

1. **Open** the `index.html` page in a modern browser (e.g., Chrome or Firefox).
2. **Click** the **Start Scanning** button to activate the scanner.
3. **Place** a product with a barcode in front of the camera.
4. **View** the product information:
   - CO2 consumption.
   - Eco-score.
   - Suggested alternatives (if available) for a reduced environmental impact.

### Important Notes:

1. **Product Compatibility**:
   - The project uses the Open Food Facts API, which does not contain data for all products.
   - Some products may not be recognized or may display partial information.
   - Example of a working product: **Nutella**. For this product, environmental information (eco-score, alternatives) is displayed correctly.
   - For less common or newer products, the API may not return any data.

2. **Scanning Another Product**:
   - To scan a new product after already scanning one, you must **refresh the page** before starting a new scan.
   - This resets the scanner and avoids conflicts or display errors from the previously scanned product.

---

## References and Documentation

- **QuaggaJS**: [Official Documentation](https://github.com/serratus/quaggaJS)  
  Library used for barcode scanning.

- **Open Food Facts API**: [Product Database](https://world.openfoodfacts.org/data)  
  API used to retrieve environmental information about products.

- **CO2 Calculation Algorithm**:
  - Based on the eco-score returned by the Open Food Facts API.
  - A logarithmic transformation is applied to estimate CO2 consumption.

---

## Issues and Contributions

### Known Issues
- **Reading Difficulties**: 
  - Poorly printed barcodes or scans in poorly lit environments may cause problems.
- **Incomplete Data**:
  - Some information may be missing for less common or recently added products.

### How to Contribute
1. **Report Bugs**: Use GitHub issues to report any problems encountered.
2. **Add Improvements**: Suggest new features or optimize project performance.
3. **Fork the Project**:
   ```bash
   git fork https://github.com/your-username/CO2Consumption.git

  

## Future Work

### Potential Improvements

- **Scanner Accuracy**:  
  Develop more robust algorithms to improve barcode reading in difficult conditions, such as low light or damaged barcodes.

- **Expanded Database**:  
  Add more products to the database with detailed environmental impact information for broader coverage.

- **More Accurate Carbon Footprint Calculation**:  
  Integrate specialized APIs to provide a more granular evaluation of the carbon footprint.


## Future Development

- **Mobile Version**:  
  Create a dedicated mobile application to provide an optimized user experience for smaller screens, with improved performance on mobile devices.

- **Personalized Recommendations**:  
  Implement a feature to suggest products based on users' ecological preferences, with the ability to save their favorite products for quick access.










