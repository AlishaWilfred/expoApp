// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: [
//       // Required for expo-router
//       'expo-router/babel',
//     ],
//   };
// };

// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      require.resolve("expo-router/babel")
    ],
  };
};