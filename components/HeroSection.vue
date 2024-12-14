<script setup>
import Waveform from "@/components/Waveform.vue";
</script>

<template>
  <div class="background">
    <div class="hero-section container">
      <div class="hero-content">
        <h1 class="hero-name">Amirhossein Amirikia</h1>
        <h2 class="hero-job">SoundDesigner<br />VoiceActor</h2>
        <div class="hero-art">
          <Waveform :musicId="1" musicAdress="/audio/Linkin Park - In The End.mp3" />
        </div>
      </div>
      <div class="profile-img"></div>
    </div>
    <div class="hero-btns container">
      <NuxtLink class="about-me-btn" to="">Aboute Me</NuxtLink>
      <NuxtLink class="my-work-btn" to="">my Works</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-color: rgb(207, 196, 196);
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 10rem;
  padding-top: 8rem;
  padding-bottom: 4rem;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}

.hero-name {
  padding: 0.5rem 0;
  font-size: 5rem;
}

.hero-job {
  padding: 0.5rem 0;
  color: gray;
}

.hero-art {
  padding: 5rem 0;
}

.profile-img {
  width: 35rem;
  height: 35rem;
  background-color: rgb(229, 177, 135);
  border-radius: 1.6rem;
  transform: rotate(-10deg);
}
.hero-btns {
  display: flex;
  align-items: center;
  gap: 0 2rem;
  overflow: hidden;
  width: calc(100%);
  height: 8rem;
}
.hero-btns a {
  position: relative;
  top: 4rem;
  font-size: 2rem;
  background-color: white;
  width: 16rem;
  height: 10rem;
  display: flex;
  align-items: start;
  justify-content: center;
  border-radius: 4rem;
  padding-top: 1.5rem;
}

</style>
