<script setup>
import instagram from '@/components/icons/instagram.vue';
import linkedin from '@/components/icons/linkedin.vue';
</script>


<template>
    <div class="footer">
        <NuxtLink class="icons" to="https://www.instagram.com/amirhosseinamirikia/" target="_blank" rel="noopener noreferrer" external>
            <instagram color="#F1F2F2" viewBox="0 0 24 24" />
        </NuxtLink>
        <NuxtLink class="icons" to="https://www.linkedin.com/in/amirhosseinamirikia/" target="_blank" rel="noopener noreferrer" external>
            <linkedin color="#F1F2F2" viewBox="0 0 20 24"/>
        </NuxtLink>
    </div>
</template>

<style scoped>
.footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 1rem;
    background-color: var(--secondary-color);
    border-radius: 5rem 5rem 0 0;
    padding: 4rem 0;
}

.icons {
    width: 4rem;
    height: auto;
}
</style>