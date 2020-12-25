module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/early-learning-web-app/tsconfig.spec.json',
      stringifyContentPathRegex: "\\.html$",
      astTransformers: {
        before: [
          "jest-preset-angular/build/InlineFilesTransformer",
          "jest-preset-angular/build/StripStylesTransformer"
        ]
      }
    }
  },
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/projects/early-learning-web-app/e2e"]
}
