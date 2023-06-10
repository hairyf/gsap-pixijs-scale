<script setup lang="ts">
import { Application } from 'vue3-pixi'
import { useElementSize } from '@vueuse/core'
import { ref } from 'vue';
import Lightning from './components/Lightning.vue'

const scale = ref(0.1)

const contentRef = ref()
const containerRef = ref()

const { width, height } = useElementSize(contentRef)

function inc() {
  scale.value += 5
}
function dec() {
  scale.value -= 5
}
</script>

<template>
  <div class="container" ref="containerRef">
    <div class="content" ref="contentRef">
      <Application class="canvas" background="#fff" :width="width" :height="height" :resolution="2">
        <text @click="inc"> + </text>
        <text @click="dec" :x="30"> - </text>
        <Lightning :scale="scale" />
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
