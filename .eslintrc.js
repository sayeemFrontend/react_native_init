module.exports = {
  root: true,
  extends: '@react-native',

  'editor.fontSize': 17,
  'editor.parameterHints.cycle': true,
  'editor.formatOnSave': true,
  'editor.defaultFormatter': 'esbenp.prettier-vscode',
  '[javascript]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
  },
  'emmet.excludeLanguages': ['markdown'],
  'emmet.includeLanguages': {
    javascript: 'javascriptreact',
  },
  'cSpell.showAutocompleteSuggestions': true,
  'javascript.updateImportsOnFileMove.enabled': 'always',
  'css.lint.unknownAtRules': 'ignore',
  'prettier.printWidth': 250,
  'typescript.updateImportsOnFileMove.enabled': 'always',
  'javascript.validate.enable': false,
  'prettier.jsxSingleQuote': true,
  'prettier.singleQuote': true,
  'html.format.wrapLineLength': 110,
  'autoimport.absolute': true,
  'settingsSync.ignoredSettings': [],
  'editor.codeActionsOnSave': {
    'source.organizeImports': false,
  },
  'workbench.iconTheme': 'vscode-icons',
  'gitlens.currentLine.dateFormat': '',
  'prettier.endOfLine': 'auto',
  'eslint.timeBudget.onFixes': {
    warn: 3000,
    error: 6000,
  },
};
