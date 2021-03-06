const path = require("path");

module.exports = {
    extends: [
        "plugin:@typescript-eslint/recommended",
    ],
    rules: {
        "no-void": "off",
        "max-len": [
            "error",
            { code: 150
            }
        ],
        "max-classes-per-file": [
            "warn",
            5
        ],
        "operator-linebreak": [
            "error",
            "after"
        ],
        "no-continue": "off",
        "no-restricted-syntax": [
            "error",
            "WithStatement"
        ],
        "no-constant-condition": [
            "error",
            { checkLoops: false
            }
        ],
        "no-fallthrough": [
            "error"
        ],
        "no-return-assign": [
            "error",
            "except-parens"
        ],
        "padded-blocks": [
            "error",
            {
                classes: "always",
                switches: "never",
            },
            {
                allowSingleLineBlocks: false,
            },
        ],
        "no-param-reassign": [
            "error",
            {
                props: false,
            },
        ],
        "space-unary-ops": [
            "error",
            {
                words: true,
                nonwords: false,
                overrides: {
                    new: false,
                    "++": true,
                    "--": true,
                },
            },
        ],
        "no-plusplus": [
            "error",
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        "@typescript-eslint/no-shadow": [
            "off"
        ],
        "@typescript-eslint/no-use-before-define": [
            "off"
        ],
        "@typescript-eslint/no-empty-function": [
            "off"
        ],
        "@typescript-eslint/no-loop-func": [
            "off"
        ],
        "import/prefer-default-export": [
            "off"
        ],
        "import/no-extraneous-dependencies": [
            "off"
        ],
        "import/no-useless-path-segments": [
            "off"
        ],
        "import/no-cycle": [
            "off"
        ],
        "class-methods-use-this": [
            "off"
        ],
        "default-case": [
            "off"
        ],
        "no-return-await": [
            "off"
        ],
        "no-restricted-properties": [
            "off"
        ],
        "no-multi-assign": [
            "off"
        ],
        "no-await-in-loop": [
            "off"
        ],
        "arrow-body-style": [
            "off"
        ],
        "no-underscore-dangle": [
            "off"
        ],
        "guard-for-in": [
            "off"
        ],
        "prefer-template": [
            "off"
        ],
        "no-else-return": [
            "off"
        ],
        "quote-props": [
            "off"
        ],
        "no-console": [
            "off"
        ],
        "object-curly-newline": [
            "off"
        ],
        "@typescript-eslint/quotes": [
            "error",
            "double"
        ],
        "@typescript-eslint/no-misused-promises": [
            "error"
        ],
        "@typescript-eslint/consistent-type-imports": [
            "error",
            { prefer: "type-imports"
            }
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: false,
                argsIgnorePattern: "^_",
                caughtErrors: "all",
            },
        ],
        "@typescript-eslint/member-ordering": [
            "error",
            {
                default: [
                    "field",
                    "constructor",
                    "method"
                ],
            },
        ],
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                allowExpressions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: true,
            },
        ],
        "@typescript-eslint/lines-between-class-members": [
            "error",
            "none",
            {
                exceptAfterSingleLine: true,
            },
        ],
        "@typescript-eslint/return-await": 0,
        "@typescript-eslint/indent": [
            "error",
            4,
            {
                flatTernaryExpressions: true,
                offsetTernaryExpressions: true,
                ignoredNodes: [
                    "JSXElement *",
                    "JSXElement"
                ],

                SwitchCase: 1,
                MemberExpression: "off",
                VariableDeclarator: "first",
                ArrayExpression: "first",
                ObjectExpression: "first",
                ImportDeclaration: "first",
                FunctionDeclaration: {
                    body: 1,
                    parameters: "first",
                },
                FunctionExpression: {
                    body: 1,
                    parameters: "first",
                },
                CallExpression: {
                    arguments: "first",
                },
            },
        ],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "default",
                format: [
                    "camelCase"
                ],
                leadingUnderscore: "allow",
            },
            {
                selector: "property",
                format: [],
                leadingUnderscore: "allow",
            },
            {
                selector: "variable",
                format: [
                    "camelCase",
                    "PascalCase"
                ],
                leadingUnderscore: "allow",
            },
            {
                selector: "class",
                format: [
                    "PascalCase"
                ],
                leadingUnderscore: "allow",
            },
            {
                selector: "enumMember",
                format: [
                    "PascalCase"
                ],
                leadingUnderscore: "allow",
            },
            {
                selector: "enum",
                format: [
                    "PascalCase"
                ],
                leadingUnderscore: "allow",
            },
            {
                selector: "interface",
                format: [
                    "PascalCase"
                ],
                leadingUnderscore: "allow",
            },
            {
                selector: "typeAlias",
                format: [
                    "PascalCase"
                ],
                leadingUnderscore: "allow",
            },
            {
                selector: "typeParameter",
                format: [
                    "UPPER_CASE"
                ],
                leadingUnderscore: "allow",
            },
        ],
    },
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
        "project": path.resolve(__dirname, "./tsconfig.json"),
    },
    "plugins": [
        "@typescript-eslint"
    ],
};
