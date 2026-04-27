<template>
  <header>
    <nav>
      <router-link to="/" class="logo">Jess Wilbert</router-link>

      <div class="links">
        <router-link to="/sobre">SOBRE</router-link>
        <router-link to="/contato">CONTATO</router-link>
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
}

.logo {
  font-weight: 300;
  margin-right: 0;
}
a {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
  font-family: Poppins, sans-serif;
  transition: color 0.3s ease;
}

a:hover {
  color: #bbbbbb;
}
</style>

<script setup></script>
