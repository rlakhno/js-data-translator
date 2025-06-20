require('dotenv').config();

const { fetchData } = require('./fetcher');
const { transformData } = require('./transformer');
const logger = require('./logger');

async function run() {
    try{
    logger.info('🔗 Fetching raw data...');
    const rawData = await fetchData();

    logger.info('🧪 Transforming data...');
    const transformed = transformData(rawData);

    console.log('🤖 Transformed sample:', JSON.stringify(transformed.slice(0, 2), null, 2));

    } catch (err) {
        logger.error('❌ Error in fetch-transform flow:', err);
    }
}

run();