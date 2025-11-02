import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'prismjs/themes/prism-tomorrow.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faGithub, faInstagram, faLinkedin)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
//createApp(App).use(router).mount('#app')

