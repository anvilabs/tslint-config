const resolvePkg = require('resolve-pkg');

module.exports = {
  rulesDirectory: [
    'tslint-immutable/rules',
    'tslint-sonarts/lib/rules',
    'tslint-misc-rules/rules',
  ].map(rulesDir => resolvePkg(rulesDir, {cwd: __dirname})),
  rules: {
    // only TS-specific core rules
    // TODO: keep an eye on https://github.com/nzakas/eslint-plugin-typescript/issues/5
    'array-type': [true, 'array'],
    'await-promise': false, // false positives with knex
    'callable-types': true,
    'match-default-export-name': false, // conflicts with some packages
    'no-boolean-literal-compare': true,
    'no-floating-promises': false, // sometimes, it is intended
    'no-for-in-array': true,
    'no-import-side-effect': false, // sometimes, it is intended
    'no-inferrable-types': true,
    'no-inferred-empty-object-type': true,
    'no-mergeable-namespace': true,
    'no-misused-new': true,
    'no-non-null-assertion': false, // still using from time to time
    'no-object-literal-type-assertion': false, // too strict for now
    'no-unbound-method': false, // too strict for now
    'no-unnecessary-qualifier': true,
    'no-unnecessary-type-assertion': true,
    'no-unsafe-any': false, // too strict for now
    'no-void-expression': true,
    'object-literal-sort-keys': false, // TODO: consider enabling when a fixer is added
    'prefer-readonly': false, // too strict
    'promise-function-async': true,
    'restrict-plus-operands': false, // false posities with phantom types (`As<T>`)
    'return-undefined': true,
    'strict-boolean-expressions': [
      false, // TODO: enable when https://github.com/palantir/tslint/issues/3279 is fixed
      'allow-null-union',
      'allow-undefined-union',
      'allow-mix',
    ],
    'strict-type-predicates': true,
    'unified-signatures': true,
    'use-default-type-parameter': true,

    // all tslint-immutable rules
    'no-class': false, // too strict
    'no-delete': true,
    'no-expression-statement': false, // too strict
    'no-if-statement': false, // too strict
    'no-let': [true, 'ignore-local'],
    'no-loop-statement': false, // too strict
    'no-method-signature': true,
    'no-mixed-interface': false, // too strict
    'no-object-mutation': [true, {'ignore-prefix': ['this.']}],
    'no-this': false, // too strict
    'readonly-array': false, // too strict
    'readonly-keyword': false, // too strict

    // all SonarTS rules
    'cognitive-complexity': true,
    'mccabe-complexity': false, // disabled in favor of `cognitive-complexity`
    'no-accessor-field-mismatch': true,
    'no-all-duplicated-branches': true,
    'no-array-delete': true,
    'no-case-with-or': true,
    'no-collection-size-mischeck': true,
    'no-commented-code': false, // seems too problematic
    'no-dead-store': true,
    'no-duplicated-branches': true,
    'no-element-overwrite': true,
    'no-empty-destructuring': false, // ESLint's `no-empty-pattern` takes care of this
    'no-empty-nested-blocks': false, // ESLint's `no-empty` takes care of this
    'no-gratuitous-expressions': true,
    'no-identical-conditions': true,
    'no-identical-expressions': true,
    'no-identical-functions': true,
    'no-ignored-initial-value': true,
    'no-ignored-return': true,
    'no-inconsistent-return': false, // TSC's `noImplicitReturns` takes care of this
    'no-misleading-array-reverse': true,
    'no-misspelled-operator': false, // useless, as these operators wouldn't compile after formatting
    'no-multiline-string-literals': false, // ESLint's `no-multi-str` takes care of this
    'no-redundant-parentheses': false, // prettier takes care of this
    'no-same-line-conditional': false, // prettier takes care of this
    'no-self-assignment': false, // ESLint's `no-self-assign` takes care of this
    'no-unconditional-jump': true,
    'no-unenclosed-multiline-block': false, // prettier makes this impossible
    'no-unthrown-error': false, // doesn't work with non-standard errors and already covered by ESLint's `no-new`
    'no-unused-array': true,
    'no-use-of-empty-return-value': false, // same thing as `no-void-expression`
    'no-useless-cast': true,
    'no-useless-increment': true,
    'no-variable-usage-before-declaration': false, // ESLint's `no-shadow` and `no-use-before-define` make this impossible
    'prefer-immediate-return': false, // I like to be explicit
    'use-primitive-type': false, // ESLint's `no-new-wrappers` takes care of this
    'use-type-alias': true,

    // all misc TSLint rules
    'camel-case-local-functions': false, // too strict for now
    'class-method-newlines': true,
    'declare-class-methods-after-use': false, // we do the other way around
    'jsx-attribute-spacing': false, // conflicts with prettier
    'jsx-expression-spacing': false, // conflicts with prettier
    'jsx-no-braces-for-string-attributes': false, // conflicts with prettier
    'jsx-no-closing-bracket-newline': false, // conflicts with prettier
    'no-braces-for-single-line-arrow-functions': false, // conflicts with `no-void-expression`
    'no-property-initializers': false, // using this from time to time
    'no-unnecessary-parens-for-arrow-function-arguments': false, // prettier takes care of this
    'prefer-es6-imports': false, // not needed with "es6" module target
    'prefer-or-operator-over-ternary': false, // prettier makes with impossible
    'react-lifecycle-order': true, // TODO: disable when https://github.com/yannickcr/eslint-plugin-react/pull/1470 is released
    'sort-imports': [false, 'whitespace-insensitive'], // doesn't work with import groups
  },
};
