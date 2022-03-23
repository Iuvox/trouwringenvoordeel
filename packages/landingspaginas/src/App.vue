<script setup>
import TheHeader from '/src/components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

import { onMounted } from 'vue'
import { fbInit } from './plugins/facebook'

onMounted(() => {
    fbInit()
})

</script>

<template>
    <TheHeader />
    <router-view />
    <TheFooter />
</template>
