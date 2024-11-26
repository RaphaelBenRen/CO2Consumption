# CO2 Consumption Scanner

**CO2 Consumption Scanner** is a web-based application that allows users to scan product barcodes and retrieve detailed information about their CO2 consumption and eco-scores. The goal is to help consumers make more sustainable choices by providing them with alternative products that have lower carbon footprints.

## Features

- **Barcode Scanning**: Users can scan barcodes using their device’s camera.
- **CO2 Consumption**: Displays the CO2 consumption of the scanned product.
- **Eco-score**: Shows the eco-score of the product to help assess its environmental impact.
- **Alternative Product Search**: If the CO2 consumption is high, the app suggests an alternative product with a lower carbon footprint.
- **Live Stream Scanning**: Utilizes the **QuaggaJS** library for live barcode scanning.

## Technologies Used

- **HTML**: For the structure of the page.
- **CSS**: For the styling of the application.
- **JavaScript**: For the functionality of the barcode scanner and API calls.
  - **QuaggaJS**: A barcode reading library for live stream scanning.
  - **Open Food Facts API**: To fetch product data, including CO2 consumption, eco-score, and related information.

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/CO2Consumption.git
