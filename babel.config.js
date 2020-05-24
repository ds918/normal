module.exports = {
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      {
        polyfills: ["es.promise", "es.symbol"],
      },
    ],
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true,
      },
      "vant",
    ],
  ],
};
