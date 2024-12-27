<script setup>
import { ref, onMounted, nextTick } from "vue";
import play from "@/components/icons/play.vue";
import pause from "@/components/icons/pause.vue";

// تعریف props برای دریافت اطلاعات صوتی
const props = defineProps({
  musicAdress: {
    type: String,
    required: true, // مسیر فایل صوتی الزامی است
  },
  musicId: {
    type: Number,
    required: true, // شناسه یکتا الزامی است
  },
});

// مدیریت وضعیت پخش
const isPlay = ref(false);

// Wavesurfer instance
let wavesurfer = ref(null);

onMounted(async () => {
  // اطمینان از رندر کامل DOM
  await nextTick();

  // دریافت Wavesurfer از پلاگین Nuxt
  const WaveSurfer = useNuxtApp().$wavesurfer;

  // ایجاد Wavesurfer
  wavesurfer.value = WaveSurfer.create({
    container: `#waveform-${props.musicId}`, // استفاده از id یکتا
    waveColor: "#fff", // رنگ موج
    progressColor: "#F15A29", // رنگ پیشرفت
    barWidth: 4, // عرض میله
    barGap: 2, // فاصله بین میله‌ها
    barRadius: 0, // گردی میله‌ها
    width: 250,
    height: 60, // ارتفاع
  });

  // بارگذاری فایل صوتی
  wavesurfer.value.load(props.musicAdress);
});

// مدیریت پخش/توقف
const togglePlay = () => {
  isPlay.value = !isPlay.value; // تغییر وضعیت پخش
  wavesurfer.value.playPause(); // اجرای تابع پخش/توقف
};
</script>

<template>
  <div class="player-section">
    <!-- دکمه پخش/توقف -->
    <div @click="togglePlay" class="icon">
      <pause v-if="isPlay" color="#F1F2F2" />
      <play v-else color="#F1F2F2" />
    </div>
    <!-- موج صوتی -->
    <div :id="`waveform-${props.musicId}`" class="waveform"></div>
  </div>
</template>

<style scoped>
.player-section {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.icon {
  background-color: var(--secondary-color);
  padding: 0.6rem;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
}

.waveform {
  flex-grow: 1;
}

</style>
