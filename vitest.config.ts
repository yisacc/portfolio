import path from 'node:path';
import { defineConfig, defaultExclude } from 'vitest/config';
import configuration from './vite.config';

export default defineConfig({
  ...configuration,
  resolve: {
    alias: {
      ...configuration?.resolve?.alias,
      test: path.resolve(__dirname, "./test"),
    },
  },
  test: {
    globals: true,
    setupFiles: path.resolve(__dirname, "test/setup.ts"),
    environment: "jsdom",
    exclude: [...defaultExclude, "e2e/**", "tests-examples/**"],
    environmentMatchGlobs: [
      ["**/*.test.tsx", "jsdom"],
      ["**/*.component.test.ts", "jsdom"],
    ],
    coverage: {
      statements: 54.92,
      thresholdAutoUpdate: true,
      include: ["src/**/*"],
      exclude: [
        "e2e/**",
        "test/**",
        "vite.*.ts",
        "**/*.d.ts",
        "**/*.config.*", 
        "**/snapshot-tests/**",
        "**/coverage/**",
        "test-results/**",
      ],
      all: true,
    },
  },
});
