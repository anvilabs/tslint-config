const resolvePkg = require('resolve-pkg');

module.exports = {
  rulesDirectory: ['tslint-immutable/rules', 'tslint-sonarts/lib/rules'].map(
    rulesDir => resolvePkg(rulesDir, {cwd: __dirname})
  ),
  rules: {
    // TS-specific core rules not provided by the ESLint plugin
    // TODO: track at https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md
    'callable-types': true,
    'no-for-in-array': true, // requires type info
    'no-inferred-empty-object-type': true, // requires type info
    'no-mergeable-namespace': true,
    'no-unnecessary-qualifier': true, // requires type info
    'no-unnecessary-type-assertion': true, // requires type info
    'restrict-plus-operands': true, // requires type info
    'return-undefined': true, // requires type info
    'strict-boolean-expressions': [
      // requires type info
      false, // TODO: enable when https://github.com/palantir/tslint/issues/3279 is fixed
      'allow-null-union',
      'allow-undefined-union',
      'allow-mix',
    ],
    'strict-type-predicates': true, // requires type info
    'unified-signatures': true,
    'use-default-type-parameter': true, // requires type info

    // tslint-immutable rules
    'no-array-mutation': true,
    'no-object-mutation': [true, {'ignore-prefix': ['this.']}],

    // tslint-sonarts rules
    'arguments-order': false,
    'bool-param-default': false,
    'cognitive-complexity': true,
    'max-switch-cases': false,
    'no-accessor-field-mismatch': true,
    'no-alphabetical-sort': false,
    'no-array-delete': true,
    'no-case-with-or': true,
    'no-collapsible-if': true,
    'no-collection-size-mischeck': true,
    'no-dead-store': true,
    'no-duplicate-in-composite': true,
    'no-duplicated-branches': true,
    'no-element-overwrite': true,
    'no-empty-array': true,
    'no-gratuitous-expressions': true,
    'no-identical-conditions': true,
    'no-identical-expressions': true,
    'no-ignored-initial-value': true,
    'no-ignored-return': true,
    'no-in-misuse': true,
    'no-invariant-return': true,
    'no-inverted-boolean-check': true,
    'no-misleading-array-reverse': true,
    'no-nested-switch': false,
    'no-redundant-boolean': true,
    'no-redundant-jump': true,
    'no-small-switch': true,
    'no-try-promise': true,
    'no-unconditional-jump': true,
    'no-undefined-argument': true,
    'no-unused-array': true,
    'no-useless-catch': false,
    'no-useless-increment': true,
    'prefer-promise-shorthand': true,
    'prefer-type-guard': false,
  },
};
