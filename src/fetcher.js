// Import Axios for HTTP requests
const axios = require('axios');

// Import custom logger for consistent logging
const logger = require('./logger');

// Asynchronuos function to fetch data from a remote API
async function fetchData() {
    logger.info('🚀 Fetching data from remote source... 🚀')

    // Use Axios to make a Get request to the API defined in .env
    const response = await axios.get(process.env.SOURCE_URL);

    // Return the JSON response body
    return response.data;
}

mudule.export = { fetchData };
