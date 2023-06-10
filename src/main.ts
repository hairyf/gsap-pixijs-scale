import { renderer } from 'vue3-pixi'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ProjectionRenderer from 'vue3-pixi-projection'

renderer.use(ProjectionRenderer)
createApp(App).mount('#app')