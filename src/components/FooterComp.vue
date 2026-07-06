<script setup>
import { useLanguageStore } from '../stores/language'

const languageStore = useLanguageStore()
</script>

<template>
  <footer>
    <a href="https://www.instagram.com/jesswil.art" target="_blank">
      <font-awesome-icon :icon="['fab', 'instagram']" class="icon" />
    </a>

    <a href="https://br.linkedin.com/in/jesswilbert" target="_blank">
      <font-awesome-icon :icon="['fab', 'linkedin']" class="icon" />
    </a>
    <a href="https://wa.me/554791888898" target="_blank">
      <font-awesome-icon :icon="['fab', 'whatsapp']" class="icon" />
    </a>
    <p>&copy; 2026, Jess Wilbert.</p>
    <p>{{ languageStore.t('footer.developedBy') }}</p>
  </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.icon {
  color: white;
  font-size: 2rem;
  transition: color 0.3s;
}
.icon:hover {
  color: #bbb;
}
footer {
  color: #fff;
  padding: 1rem;
  text-align: center;
  font-family: Poppins, sans-serif;
}
</style>
