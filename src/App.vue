<script setup lang="ts">
import { Stage as PixiStage, useScreen } from 'vue3-pixi'
import { useElementSize } from '@vueuse/core'
import { ref } from 'vue';
import { Texture, SCALE_MODES } from 'pixi.js'
import lightningLineSVG from './assets/lightning_2.svg'
import lightningRectSVG from './assets/lightning_1.svg'

const lightningLine = Texture.from(lightningLineSVG, { scaleMode: SCALE_MODES.NEAREST })
const lightningRect = Texture.from(lightningRectSVG, { scaleMode: SCALE_MODES.NEAREST })

const screen = useScreen()
const scale = ref(0.1)

const contentRef = ref()
const containerRef = ref()

const { width, height } = useElementSize(contentRef)

function inc() {
  scale.value += 0.1
}
function dec() {
  scale.value -= 0.1
}
</script>

<template>
  <div class="container" ref="containerRef">
    <div class="content" ref="contentRef">
      <pixi-stage class="canvas" background="#fff" :width="width" :height="height" :resolution="2">
        <text @click="inc"> + </text>
        <text @click="dec" :x="30"> - </text>
        <sprite
          :texture="lightningRect" 
          :anchor="0.5"
          :scale="1 + scale"
          :x="screen.width / 2" 
          :y="screen.height / 2"
        />
        <sprite
          :texture="lightningLine" 
          :anchor="0.5"
          :scale="10 * scale"
          :x="screen.width / 2" 
          :y="screen.height / 2" 
        />
        <sprite
          :texture="lightningLine" 
          :anchor="0.5"
          :scale="9 * scale"
          :x="screen.width / 2" 
          :y="screen.height / 2" 
        />
      </pixi-stage>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 200vh;
}

.content {
  height: 100vh;
  background-color: #2a4073;
}

.canvas {
  width: 100%;
  height: 100%;
}
</style>
