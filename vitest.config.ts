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
    environment: "happy-dom",
    environmentMatchGlobs: [
      ["**/*.test.tsx", "happy-dom"],
      ["**/*.component.test.ts", "happy-dom"],
    ],
    coverage: {
      statements: 54.92,
      thresholdAutoUpdate: true,
      include: ["src/**/*"],
      exclude: [
        "test/**",
        "vite.*.ts",
        "**/*.d.ts",
        "**/*.config.*",
        "**/snapshot-tests/**",
        "**/coverage/**",
      ],
      all: true,
    },
  },
});
