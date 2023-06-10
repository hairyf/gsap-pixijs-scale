import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { isCustomElement, transformAssetUrls } from 'vue3-pixi'


const elementNames = [
  "container-2d",
  "container-3d",
  "sprite-2d",
  "sprite-3d",
  "sprite-2s",
  "camera-3d",
  "text-2d",
  "text-2s",
  "text-3d",
  "tiling-sprite-2d",
  "mesh-2d",
  "mesh-3d-2d",
  "simple-mesh-2d",
  "simple-mesh-3d-2d",
]

function isCustomProjectionElement(tag: string) {
  let normalizedName = tag.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)
  if (normalizedName.startsWith('-'))
    normalizedName = normalizedName.slice(1)
  return elementNames.includes(normalizedName)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => isCustomElement(tag) || isCustomProjectionElement(tag),
        },
        transformAssetUrls
      }
    })
  ],
})
