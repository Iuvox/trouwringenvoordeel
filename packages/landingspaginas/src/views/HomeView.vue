<template>
    <div class="py-20 text-center">
        <h1 class="font-bold text-4xl text-primary">{{query.title}}</h1>
        <p v-html="query.content" class="text-xl mt-2"></p>
        <a href="https://trouwringenvoordeel.nl/?utm_source=iuvox_landingspagina&utm_campaign=afspraakbevestiging&utm_content=optie_gekozen">
            <BaseButton class="md:w-1/3 mt-4">Bekijk onze collectie</BaseButton>
        </a>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import  BaseButton from '../components/BaseButton.vue'

const route = useRoute()


const query = computed(() => {
    return {
        title: filter(route.query.title),
        content: filter(route.query.content)
    }
    // return route.query.replace(/<script>.*?<\/script>/gmi, '')
})

const filter = (string) => {
    return string
        .replace(/<script>.*?<\/script>/gmi, '')
}

</script>