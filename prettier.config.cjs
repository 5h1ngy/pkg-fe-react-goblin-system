module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  printWidth: 100,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
}

