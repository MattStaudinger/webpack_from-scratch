module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: ">0.25%",

        useBuiltIns: "usage",
        corejs: "2",
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
