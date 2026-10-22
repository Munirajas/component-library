import type { StorybookConfig } from '@storybook/react-vite';
import healthcheck from './healthcheck';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-themes"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(healthcheck()); // ✅ add as Vite plugin
    return config;
  }
};
export default config;