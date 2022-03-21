<template>
    <div class="hidden relative h-44 md:flex justify-center items-center">
        <h2 class="text-white font-semibold text-2xl bg-primary p-1">Win €250 shoptegoed</h2>
        <img src="https://trouwringenvoordeel.merces.me/assets/images/Bannervrouwmetman.png" class="absolute pointer-events-none object-cover w-full h-full inset-0 -z-10" alt="">
    </div>
    <div class="md:flex md:m-auto md:py-14 md:w-2/3 md:items-center">
        <div class="md:w-1/2">
            <img
                src="https://www.trouwringenvoordeel.nl/Files/10/258000/258892/FileBrowser/categoriebanners/trouwringen-kopen.jpg"
                class="w-full h-[300px] object-cover"
                alt
            />
        </div>
        <div class="px-4 py-3 md:w-1/2">
            <h1 class="text-xl font-bold text-primary">Doe mee en maak kans op €250 shoptegoed!</h1>
            <form @submit.prevent>
                <BaseInput id="name" type="text" autocomplete="name" label="Je naam" />
                <BaseInput id="email" type="email" autocomplete="email" label="E-mailadres" />
                <BaseInput
                    id="terms"
                    type="checkbox"
                    :checked="true"
                    label="Ja, ik ga akkoord met de algemene voorwaarden"
                />
                <BaseButton class="mt-3">Ja, ik wil shoptegoed winnen!</BaseButton>
            </form>
        </div>
    </div>
</template>

<script>
import BaseInput from "../components/BaseInput.vue"
import BaseButton from "../components/BaseButton.vue"
import getSplitTest from "../plugins/splittesting.js"

export default {
    data() {
        return {
            subscriber: {
                name: null,

            }
        }
    },
    computed: {
        splitTest() {
            return getSplitTest()
        }
    },
    components: { BaseInput, BaseButton }
}
</script>