module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: ">0.25%",

        useBuiltIns: "usage",
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
