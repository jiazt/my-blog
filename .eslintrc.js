module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.wpy files
    plugins: ['html'],
    settings: {
        'html/html-extensions': ['.html', '.wpy']
    },
    globals: {
        wx: true
    },
    // add your custom rules here
    "rules": {
        "accessor-pairs": 2,
        "arrow-spacing": 2,
        "block-scoped-var": 2,
        "comma-dangle": 0,
        "computed-property-spacing": 2,
        "default-case": 2,
        "dot-location": [2, "property"],
        "eqeqeq": [2, "smart"],
        "func-style": [2, "declaration", {
            "allowArrowFunctions": true
        }],
        "indent": [2, 4, {
            "SwitchCase": 1
        }],
        "max-depth": 2,
        "max-params": [2, 4],
        "new-parens": 2,
        "no-alert": 2,
        "no-array-constructor": 2,
        "no-bitwise": 2,
        "no-caller": 2,
        "no-confusing-arrow": 2,
        "no-console": 0,
        "no-div-regex": 2,
        "no-duplicate-imports": 2,
        "no-else-return": 2,
        "no-empty-label": 0,
        "no-empty": 0,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-parens": 2,
        "no-floating-decimal": 2,
        "no-implied-eval": 2,
        "no-inline-comments": 2,
        "no-iterator": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-mixed-requires": 2,
        "no-nested-ternary": 2,
        "no-new-func": 2,
        "no-new-object": 2,
        "no-new-require": 2,
        "no-new-wrappers": 2,
        "no-new": 2,
        "no-octal-escape": 2,
        "no-path-concat": 2,
        "no-proto": 2,
        "no-restricted-modules": 2,
        "no-return-assign": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-shadow-restricted-names": 2,
        "no-this-before-super": 2,
        "no-throw-literal": 2,
        "no-trailing-spaces": 2,
        "no-undef": 0,
        // "no-undef-init": 2,
        "no-unneeded-ternary": 2,
        "no-unused-expressions": 2,
        "no-unused-vars": 0,
        "no-use-before-define": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-void": 2,
        "object-curly-spacing": ["error", "always"],
        "object-shorthand": 2,
        "operator-assignment": 2,
        "operator-linebreak": 0,
        "prefer-const": 2,
        "prefer-spread": 2,
        "radix": 2,
        "semi": ["error", "never"],
        "sort-vars": 2,
        "space-before-function-paren": 0,
        "valid-jsdoc": 2,
        "wrap-regex": 2,

        "arrow-parens": [2, "as-needed"],
        "generator-star-spacing": [2, "before"]
    }
};
