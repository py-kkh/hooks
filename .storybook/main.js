module.exports = {
  stories: ["../stories/*.story.mdx", "../stories/*.story.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.md?$/,
      loader: "markdown-loader",
    });

    // Return the altered config
    return config;
  },
};
