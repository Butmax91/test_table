module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/test_table/dist/'
        : '/'
}