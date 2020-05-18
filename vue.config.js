module.exports = {
  "publicPath": "/",
  "assetsDir": "static",
  "filenameHashing": true,
  "lintOnSave": process.env.NODE_ENV !== "production",
  "productionSourceMap": false,
  "crossorigin": "anonymous",
  "pages": {
    "index": {
      "entry": "src/main.js",
      "template": "public/index.html",
      "filename": "index.html",
      "title": "MY APP",
      "chunks": [
        "chunk-vendors",
        "chunk-common",
        "index"
      ]
    },
    "extra": {
      "entry": "src/extra/extra.js",
      "template": "public/extra.html",
      "filename": "extra.html",
      "title": "MY APP",
      "chunks": [
        "chunk-vendors",
        "chunk-common",
        "extra"
      ]
    }
  },
  "devServer": {
    "overlay": {
      "warnings": true,
      "errors": true
    },
    "proxy": {
      "/api": {
        "target": "http://www.example.org",
        "ws": true,
        "changeOrigin": true
      }
    }
  },
  "configureWebpack": { devtool: 'source-map' },
  "css": {
    "requireModuleExtension": true,
    "loaderOptions": {
      "scss": {
        "prependData": "@import \"~@/styles/scss/variables.scss\";"
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}