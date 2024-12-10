<script setup>
import { ref, onMounted } from 'vue';

let wavesurfer;

onMounted(() => {
  const WaveSurfer = useNuxtApp().$wavesurfer;

  // ایجاد Wavesurfer
  wavesurfer = WaveSurfer.create({
    container: "#waveform", // محل نمایش موج
    waveColor: "#4caf50", // رنگ موج
    progressColor: "#ff5722", // رنگ پیشرفت
    height: 200, // ارتفاع

      // Set a bar width
  barWidth: 10,
  // Optionally, specify the spacing between bars
  barGap: 5,
  // And the bar radius
  barRadius: 0,
  });

  // بارگذاری فایل صوتی
  wavesurfer.load("/audio/Linkin Park - In The End.mp3"); // مسیر فایل صوتی
});

// پخش یا توقف
const togglePlay = () => {
  wavesurfer.playPause();
};
</script>

<template>
  <div>
    <div id="waveform"></div>
    <button @click="togglePlay">Play / Pause</button>
  </div>
</template>
