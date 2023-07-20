module.exports = {
  // Type check TypeScript files
  'src/**/*.(ts|tsx)': () => 'npx tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  'src/**/*.(ts|tsx|js)': filenames => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  'src/**/*.(md|json)': filenames =>
    `npx prettier --write ${filenames.join(' ')}`,
};
