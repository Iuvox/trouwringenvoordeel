<script setup>
import TheHeader from '/src/components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

import { onMounted } from 'vue'
import { fbInit } from './plugins/facebook'

import { useHead } from '@vueuse/head'

onMounted(() => {
    fbInit()
})
useHead({
    meta: [
        {
            name: 'facebook-domain-verfication',
            content: 'cspt0ayns6le0i415mn6dm9f05x8di'
        }
    ]
})

</script>

<template>
    <TheHeader />
    <router-view />
    <TheFooter />
</template>
