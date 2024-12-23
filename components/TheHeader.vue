<script setup></script>

<template>
  <ul class="header-links">
    <li class="logo"><img src="../assets/logo/logo.svg" alt="" /></li>
    <li>Sound Library</li>
    <li>My Articles</li>
    <li>Contact Me</li>
    <li>Podcast</li>
  </ul>
</template>

<style scoped>
.header-links {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(31, 30, 30);
  height: 10rem;
  border-radius: 0 0 5rem 5rem;
  gap: 0 6rem;
  color: white;
  font-size: 1.6rem;
}

.logo {
  position: absolute;
  width: 60px;
  left: 15%;
}
</style>
