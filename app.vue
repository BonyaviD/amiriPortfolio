<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutMeBackground from "@/components/background/AboutMeBackground.vue";
</script>

<template>
  <div>
    <TheHeader />
    <HeroSection />
    <div class="about-me-section container">
      <div class="about-me-title">
        <AboutMeBackground />
        <span class="about-me">about me</span>
      </div>
      <div class="about-me-content">
        <div class="about-me-content-text">
          I am a multimedia arts expert with extensive experience in sound design, voiceover, podcast production, and audio content. Also, by
          mastering professional voiceover and sound design tools, I can creatively and accurately produce the effects and sounds needed for various
          projects. In addition, I have experience in professional voiceover and performance for podcasts and audio programs, and I continuously seek
          to improve the quality of expression and message transmission in the best possible way. My skills in video editing and sound and image
          mixing allow me to produce engaging and professional video content that tells the story in harmony with the audio content.
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<style scoped>
.about-me-section {
  display: flex;
  align-items: center;
  gap: 5rem 15rem;
  padding: 8rem 5rem;
}
.about-me-title {
  position: relative;
  padding-top: 8rem;
}

.about-me {
  position: absolute;
  top: 10rem;
  left: 1rem;
  font-size: 4rem;
}

.about-me-content {
  position: relative;
  transform: rotate(-5deg);
  width: clamp(250px, 60%, 550px);
  height: 400px;
  border-radius: 24px;
  background-color: rgb(228, 174, 138);
}

.about-me-content-text {
  position: absolute;
  top: -5px;
  left: 0;
  transform: rotate(5deg);
  font-size: 2.4rem;
}

@media (max-width: 1080px) {
  .about-me-section {
    gap: 5rem;
  }
}

@media (max-width: 960px) {
  .about-me-section {
    flex-direction: column;
  }
}

@media (max-width: 896px) {
  .about-me-content-text {
    font-size: 2rem;
  }
}

@media (max-width: 896px) {
  .about-me-content-text { 
    font-size: 1.6rem;
  }
}
</style>
