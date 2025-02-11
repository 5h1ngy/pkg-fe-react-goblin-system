/** @type {import('jest').Config} */
module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',  // Usa ts-jest per i file TS/TSX
    },
    testMatch: ['**/__tests__/**/*.test.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    moduleNameMapper: {
        // Se importi CSS/SCSS in TS, evita errori
        '\\.(css|scss)$': 'identity-obj-proxy'
    },
    // Se vuoi ignorare la cartella dist, build, ecc. 
    // testPathIgnorePatterns: ['/node_modules/', '/dist/', '/build/']
}