module.exports = {
    configureWebpack: {
    },
    css: {
        requireModuleExtension: true,
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/css/variables.scss";`
            },
        }
    }
}