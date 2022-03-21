<template>
        <form @submit.prevent="search()">
            <div class="p-3 w-full">
                <div class="flex border-2 p-2 rounded-md bg-white text-black">
                    <input
                        type="text"
                        v-model="searchValue"
                        placeholder="Waar ben je naar op zoek?"
                        class="w-11/12 outline-none"
                    />
                    <Search class="text-black" />
                </div>
            </div>
        </form>
</template>

<script>
import { Menu, Search, User, Heart, ShoppingCart } from 'lucide-vue-next'

export default {
    data() {
        return {
            searchValue: null
        }
    },
    methods: {
        search() {
            window.open(`https://www.trouwringenvoordeel.nl/website/index.php?Show=Search&KeyWord=${this.searchValue}`);
        }
    },
    components: { Menu, Search, User, Heart, ShoppingCart }
}

</script>