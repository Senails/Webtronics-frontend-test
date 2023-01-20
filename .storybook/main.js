module.exports = {
  "stories": [
    "../shared/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../features/**/*.stories.@(js|jsx|ts|tsx)",
    "../widgets/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-addon-next'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "staticDirs": ['../public']
}