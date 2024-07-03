export default {
  testEnvironment: "jsdom",
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@assets/(.*)$": "<rootDir>/mocks/fileMock.ts",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@icons/(.*)$": "<rootDir>/src/icons/$1",
    "^@style/theme.css": "<rootDir>/mocks/themeMock.ts",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
