import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { getContainer } from './configuration/inversify/container';
import containerAccessor from './configuration/inversify/containerAccessor';

containerAccessor.updateContainer(getContainer());

const pinia = createPinia();

createApp(App).use(pinia).mount('#app')
