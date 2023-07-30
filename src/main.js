import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
	components,
	directives,
})

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/', name: 'Home', component: Home},
		{path: '/about', name: 'About', component: About}
	]
})

createApp(App).use(vuetify).use(router).mount('#app')
