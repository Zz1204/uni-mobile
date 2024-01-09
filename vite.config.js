import { defineConfig } from 'vite'
import Uni from '@dcloudio/vite-plugin-uni'
import UniHelperManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniHelperPages from '@uni-helper/vite-plugin-uni-pages'
import UniHelperLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/uni-helper/vite-plugin-uni-manifest
    UniHelperManifest(),
    // https://github.com/uni-helper/vite-plugin-uni-pages
    UniHelperPages({
      dts: './src/uni-pages.d.ts',
    }),
    // https://github.com/uni-helper/vite-plugin-uni-layouts
    UniHelperLayouts(),
    Uni(),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCSS(),
  ],
  server: {
    port: 8088,
  },
})
