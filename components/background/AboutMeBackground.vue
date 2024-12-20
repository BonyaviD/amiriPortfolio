<script setup>

const props = defineProps({
  color: {
    type: String,
    default: "white",
  },
  viewBox: {
    type: String,
    default: "0 0 24 24",
  },
});
</script>

<template>
    <svg width="280" height="120" viewBox="0 0 163 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5019 72.2036L0.90172 17.8908C-0.081775 14.2322 2.52975 10.5891 6.3104 10.3456L153.769 0.848638C162.665 0.275742 165.69 12.4855 157.556 16.132L23.7508 76.1209C20.3816 77.6314 16.4605 75.7693 15.5019 72.2036Z" fill="url(#paint0_linear_560_21074)"/>
<defs>
<linearGradient id="paint0_linear_560_21074" x1="47" y1="17" x2="29.5" y2="86" gradientUnits="userSpaceOnUse">
<stop offset="0.302601" stop-color="#D3D3D3"/>
<stop offset="1" stop-color="#E5EFE6"/>
</linearGradient>
</defs>
</svg>

</template>