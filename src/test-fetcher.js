
// Load environment variables from .env file
require('dotenv').config();

// Import fetchData function from fetcher module
const { fetchData } = require('./fetcher');

async function test() {
  try {
    const data = await fetchData();
    console.log('Fetched data sample:', JSON.stringify(data, null, 2).slice(0, 500));
  } catch (err) {
    console.error('Error fetching data:', err);
  }
}

test();