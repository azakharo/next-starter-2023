module.exports = {
  // Type check TypeScript files
  'src/**/*.(ts|tsx)': () => 'npx tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  'src/**/*.(ts|tsx|js)': () => [
    'npx eslint --fix .',
  ],

  // Format MarkDown and JSON
  'src/**/*.(md|json)': () =>
    'npx prettier --write .',
};
