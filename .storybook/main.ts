import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "core": {
    "builder": '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  "framework": {
    "name": "@storybook/nextjs-vite",
    "options": {}
  },
  // async viteFinal(config, options) {
  //   // Add your configuration here
  //   // フォントの初期化問題を解決するため
  //   config.define = {
  //     ...config.define,
  //     'process.env.__NEXT_FONT_OPTIMIZATION': 'false',
  //   };
  //   // フォントの参照を無効化
  //   config.resolve = {
  //     ...config.resolve,
  //     alias: {
  //       ...config.resolve?.alias,
  //       '@next/font': false,
  //       'next/font': false,
  //     },
  //   };
  //
  //   return config;
  // },
  "staticDirs": [
    "../public"
  ]
};


export default config;