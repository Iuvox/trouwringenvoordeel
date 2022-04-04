<script setup>
import TheHeader from '/src/components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

import { onMounted, computed } from 'vue'
import { fbInit } from './plugins/facebook'

import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'

const route = useRoute()


onMounted(() => {
    fbInit()
})
useHead({
    title: computed(() => route.meta.title ),
    meta: [
        {
            name: 'facebook-domain-verification',
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
