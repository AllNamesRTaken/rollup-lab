module.exports = {
  coverageDirectory: 'coverage',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
  ],
  preset: 'ts-jest',
  testMatch: [
    '**/__tests__/*.+(ts|tsx|js)',
  ],
}