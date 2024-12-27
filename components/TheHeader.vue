<script setup></script>

<template>
  <div class="fixed-navbar">
    <ul class="header-links">
      <li class="logo"><img src="../assets/logo/logo.svg" alt="" /></li>
      <li class="link">Sound Library</li>
      <li class="link">My Articles</li>
      <li class="link">Contact Me</li>
      <li class="link">Podcast</li>
    </ul>
  </div>
</template>

<style scoped>

.fixed-navbar {
position: fixed;
top: 0;
width: 100%;
z-index: 10;
}

.header-links {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-color);
  height: 10rem;
  border-radius: 0 0 5rem 5rem;
  gap: 0 6rem;
  font-size: 1.6rem;

}

.logo {
  position: absolute;
  top: 50%;
  left: 20rem;
  transform: translate(-50%, -50%);
  
}

.logo img {
  width: 60px;
  cursor: pointer;
}

.link {
  cursor: pointer;
  color: var(--light-text-color);
  transition: all 0.3s ease-in-out;
}

.link:hover {
  color: var(--primary-color);
}
</style>
