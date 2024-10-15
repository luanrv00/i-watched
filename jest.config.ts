/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  clearMocks: true,
  coverageProvider: 'v8',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
}

export default createJestConfig(config)
