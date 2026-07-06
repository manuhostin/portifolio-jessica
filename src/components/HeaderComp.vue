<script setup>
import { useLanguageStore } from '../stores/language'

const languageStore = useLanguageStore()

function toggleLanguage() {
  languageStore.setLanguage(languageStore.isEnglish ? 'pt' : 'en')
}
</script>

<template>
  <header>
    <nav>
      <router-link to="/" class="logo">Jess Wilbert</router-link>

      <div class="links">
        <router-link to="/sobre">{{ languageStore.t('header.about') }}</router-link>
        <router-link to="/contato">{{ languageStore.t('header.contact') }}</router-link>
        <router-link to="/">{{ languageStore.t('header.projects') }}</router-link>
        <button class="lang-toggle" type="button" @click="toggleLanguage">
          {{ languageStore.isEnglish ? 'PT' : 'EN' }}
        </button>
      </div>
    </nav>
  </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
header {
  color: #fff;
  padding: 1rem;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.links {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.logo {
  font-weight: 300;
  margin-right: 0;
}
a,
.lang-toggle {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  font-family: Poppins, sans-serif;
  transition: color 0.3s ease;
}

.lang-toggle {
  border: 1px solid #4f4f4f;
  background: transparent;
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
  cursor: pointer;
  font-size: 0.85rem;
}

a:hover,
.lang-toggle:hover {
  color: #bbbbbb;
}
</style>
