<script setup lang="ts">
import { onTick, Application } from 'vue3-pixi'
import { useElementSize } from '@vueuse/core'
import { ref } from 'vue';
import Lightning from './components/Lightning.vue'

const scale = ref(0)

const contentRef = ref()
const containerRef = ref()

const { width, height } = useElementSize(contentRef)

function inc() {
  scale.value += 0.01
}
function dec() {
  scale.value -= 0.01
}
onTick(() => {
  if (scale.value > 2)
    scale.value = 0
  inc()
})
</script>

<template>
  <div class="container" ref="containerRef">
    <div class="content" ref="contentRef">
      <Application :antialias="true" class="canvas" background-color="#000" :width="width" :height="height" :resolution="2">
        <text @click="inc"> + </text>
        <text @click="dec" :x="30"> - </text>
        <Lightning  :scale="scale" />
      </Application>
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
