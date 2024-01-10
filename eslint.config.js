const uni = require('@uni-helper/eslint-config')
const unocss = require('@unocss/eslint-plugin')

module.exports = uni(
  {
    rules: {
      'no-console': 'off',
      'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
      'antfu/top-level-function': 'off',
    },
  },
  unocss.configs.flat,
)
