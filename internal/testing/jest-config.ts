import type { Config } from "@jest/types";

import swc from "./swc-config";

const jestConfig: Config.InitialOptions = {
  rootDir: "../../",
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/?(*.)test.ts"],
  testPathIgnorePatterns: ["node_modules", "internal", "target"],
  transform: { "^.+\\.ts$": ["@swc/jest", swc] },
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
  },
};

export default jestConfig;
