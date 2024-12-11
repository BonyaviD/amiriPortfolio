<script setup>
import Waveform from "@/components/Waveform.vue";
</script>

<template>
  <div>
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-name">Amirhossein Amirikia</h1>
        <h2 class="hero-job">SoundDesigner<br />VoiceActor</h2>
        <div class="hero-art">
          <Waveform :musicId="1" musicAdress="/audio/Linkin Park - In The End.mp3" />
        </div>
      </div>
      <div class="profile-img"></div>
    </div>
    <NuxtLink to="">Aboute Me</NuxtLink>
    <NuxtLink to="">my Works</NuxtLink>
  </div>
</template>

<style scoped>
.hero-section {
  background-color: rgb(207, 196, 196);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 10rem;
  padding: 5rem;
}

.hero-content {
/* background-color: red; */
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
  width: 30rem;
  height: 30rem;
  background-color: rgb(229, 177, 135);
  border-radius: 1.6rem;
  transform: rotate(-10deg);
}
</style>