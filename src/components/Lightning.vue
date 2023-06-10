<script lang="ts" setup>
import { useScreen } from 'vue3-pixi'
import { Texture, SCALE_MODES } from 'pixi.js'
import lightningLineSVG from '../assets/lightning_2.svg'
import lightningRectSVG from '../assets/lightning_1.svg'
import { computed } from 'vue';
import {Camera3d} from 'pixi-projection'
new Camera3d().euler
defineProps<{
  scale: number
}>()

const lightningLine = Texture.from(lightningLineSVG, { scaleMode: SCALE_MODES.NEAREST })
const lightningRect = Texture.from(lightningRectSVG, { scaleMode: SCALE_MODES.NEAREST })

const screen = useScreen()

const center = computed(() => ({
  x: screen.value.width / 2,
  y: screen.value.height / 2
}))
</script>

<template>
  <camera-3d :focus="350" :near="-5000" :far="10000" :orthographic="false" :position="center" :position-3d="center">
    <sprite-3d :position="center" :texture="lightningRect" :anchor="0.5" :position-3d-z="1 + scale" />
    <sprite-3d :position="center" :texture="lightningLine" :anchor="0.5" :position-3d-z="2 * scale" />
    <sprite-3d :position="center" :texture="lightningLine" :anchor="0.5" :position-3d-z="3 * scale" />
    
  </camera-3d>
</template>
