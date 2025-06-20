
// Trnsform raw API data into database-ready format
function transformData(rawData) {

    // Example: assume RawData is an array of posts from jsonplaceholder
    return rawData.map(item => ({
        postId: item.id,
        usedId: item.userId,
        title: item.title.trim(),
        content: item.body.trim()
    })); 
}

module.exports = { transformData };