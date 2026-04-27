import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* --- ADIÇÕES DO FONT AWESOME --- */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Importe os ícones de redes sociais (brands) que você quer usar
import { faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEye, faComment, faUsers } from '@fortawesome/free-solid-svg-icons'

library.add(faLinkedin, faInstagram, faWhatsapp, faEye, faComment, faUsers)
/* ------------------------------ */

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Registra o componente globalmente para usar como <font-awesome-icon />
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
