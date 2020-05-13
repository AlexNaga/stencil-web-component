module.exports = {
  stories: ["../src/**/*.stories.(js|mdx)"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-links/register",
    "@storybook/addon-a11y/register",
    "@storybook/addon-notes",
    {
      name: "@storybook/addon-docs/preset",
      options: { transcludeMarkdown: true }
    }
  ]
};
