const resolvePkg = require('resolve-pkg');

module.exports = {
  rulesDirectory: ['tslint-immutable/rules', 'tslint-sonarts/lib/rules'].map(
    rulesDir => resolvePkg(rulesDir, {cwd: __dirname})
  ),
  rules: {
    // only TS-specific core rules
    // TODO: keep an eye on https://github.com/nzakas/eslint-plugin-typescript/issues/5
    'adjacent-overload-signatures': true,
    'array-type': [true, 'array'],
    'callable-types': true,
    'interface-name': [true, 'never-prefix'],
    'interface-over-type-literal': true,
    'member-access': [true, 'check-accessor', 'check-constructor'],
    'no-angle-bracket-type-assertion': true,
    'no-empty-interface': true,
    'no-for-in-array': true,
    'no-inferrable-types': true,
    'no-inferred-empty-object-type': true,
    'no-internal-module': true,
    'no-mergeable-namespace': true,
    'no-misused-new': true,
    'no-namespace': [true, 'allow-declarations'],
    'no-parameter-properties': true,
    'no-reference': true,
    'no-unnecessary-qualifier': true,
    'no-unnecessary-type-assertion': false, // false positives
    'no-void-expression': true,
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
    'no-array-mutation': true,
    'no-object-mutation': [true, {'ignore-prefix': ['this.']}],

    // all SonarTS rules
    'cognitive-complexity': true,
    'no-accessor-field-mismatch': true,
    'no-array-delete': true,
    'no-case-with-or': true,
    'no-collection-size-mischeck': true,
    'no-dead-store': true,
    'no-duplicate-in-composite': true,
    'no-duplicate-string': true,
    'no-duplicated-branches': true,
    'no-element-overwrite': true,
    'no-gratuitous-expressions': true,
    'no-identical-conditions': true,
    'no-identical-expressions': true,
    'no-identical-functions': true,
    'no-ignored-initial-value': true,
    'no-ignored-return': true,
    'no-in-misuse': true,
    'no-misleading-array-reverse': true,
    'no-redundant-boolean': true,
    'no-redundant-jump': true,
    'no-small-switch': true,
    'no-unconditional-jump': true,
    'no-undefined-argument': true,
    'no-unused-array': true,
    'no-useless-cast': true,
    'no-useless-increment': true,
    'prefer-promise-shorthand': true,
    'use-type-alias': true,
  },
};
