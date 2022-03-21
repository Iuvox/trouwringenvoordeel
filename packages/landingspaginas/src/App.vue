<script setup>
import TheHeader from '/src/components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
    <TheHeader />
    <router-view />
    <TheFooter />
</template>
