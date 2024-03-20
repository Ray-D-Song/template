import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import { presetIcons, presetWind } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

function resolveAlias(dirName: string) {
	return path.resolve(__dirname, `src/${dirName}`)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: [
        {
          src: 'src/page'
        }
      ]
    }),
    vue(),
    vueJsx(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
      ],
      imports: [
        'vue',
        'pinia',
      ]
    }),
    UnoCSS({
      transformers: [
				transformerDirectives(),
			],
			presets: [
				presetIcons(),
				presetWind(),
			],
    })
  ],
  resolve: {
    alias: {
      '@page': resolveAlias('page'),
			'@component': resolveAlias('component'),
			'@router': resolveAlias('router'),
			'@assets': resolveAlias('assets'),
    }
  }
})
