import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

<<<<<<< HEAD
// Importar Bootstrap CSS y JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Estilos personalizados
import './assets/styles/main.css'

const app = createApp(App)

=======
const app = createApp(App)
>>>>>>> 83219ff927eb918c061175c01cf2571805142c7c
app.use(router)
app.mount('#app')

