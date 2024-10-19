/** @type {import("prettier").Config} */
export default {
    plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-glsl'],
    printWidth: 100,
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    jsxSingleQuote: true,
    bracketSameLine: false,
    singleAttributePerLine: true,
    importOrder: [
        '.*\\.(css|scss)$',
        '^react$',
        '^@?\\w',
        '^(?!@/types)(@/|.)(?!.*.glsl$)',
        '^@/types',
        '.*\\.glsl$',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
}
