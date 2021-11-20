module.exports = {
    devServer: {
        host: 'localhost'
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/cold-lemonade/' : '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/main.scss";`
            }
        }
    }
}