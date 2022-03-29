<template>
    <header class="sticky top-0 bg-white shadow-md z-20">
        <div
            class="flex bg-primary gap-3 text-white p-3 items-center md:justify-center md:px-40 md:gap-10"
        >
            <div>
                <button  @click="menuOpen = !menuOpen">
                    <Menu />
                </button>
                <nav v-if="menuOpen" class="absolute px-5 -z-10 mt-5 pt-5 pb-2 bg-white text-black">
                    <TheHeaderItem v-for="menu in menus">{{menu.name}}</TheHeaderItem>
                </nav>
            </div>
            <a href="https://trouwringenvoordeel.nl/?utm_source=iuvox_landingspagina&utm_content=header">
                <img
                    class="h-10"
                    src="https://www.trouwringenvoordeel.nl/Files/10/258000/258892/Protom/3028733/Media/trouwringenvoordeel-logo.png"
                    alt
                />
            </a>
            <div class="hidden md:flex w-[12rem] ml-40 justify-center md:grow">
                <TheSearchbar class="w-full" />
            </div>
            <div class="flex grow gap-5 justify-end">
                <a
                    href="https://www.trouwringenvoordeel.nl/website/index.php?Show=WebShopUserLogin&utm_source=iuvox_landingspagina&utm_content=header"
                    class="md:flex"
                >
                    <User />
                    <span class="hidden md:block">Account</span>
                </a>
                <a
                    href="https://www.trouwringenvoordeel.nl/website/index.php?Show=CustomerWishlistLogin&utm_source=iuvox_landingspagina&utm_content=header"
                >
                    <Heart />
                </a>
                <a href="https://www.trouwringenvoordeel.nl/website/index.php?Show=WebShopBasket&utm_source=iuvox_landingspagina&utm_content=header">
                    <ShoppingCart />
                </a>
            </div>
        </div>
        <TheSearchbar class="md:hidden" />
    </header>
</template>

<script>
import { Menu, Search, User, Heart, ShoppingCart } from 'lucide-vue-next'
import TheSearchbar from './TheSearchbar.vue';
import TheHeaderItem from './TheHeaderItem.vue';

export default {
    data() {
        return {
            searchValue: null,
            menuOpen: false,
            menus: [
                {
                    name: 'Home',
                    link: '#'
                },
                {
                    name: 'Vestigingen',
                    link: '#'
                },
                {
                    name: 'Top 10 trouwringen',
                    link: '#'
                },
                {
                    name: 'Trouwringen',
                    link: '#'
                },
                {
                    name: 'Actie Trouwringen',
                    link: '#'
                },
                {
                    name: 'Vriendschapsringen',
                    link: '#'
                },
                {
                    name: 'Verlovingsringen',
                    link: '#'
                },
                {
                    name: 'Gratis Dummy Ringen',
                    link: '#'
                },
                {
                    name: 'Gratis Ringenbos',
                    link: '#'
                },
                {
                    name: 'Bruidssierraden NIEUW',
                    link: '#'
                },
                {
                    name: 'Ontwerp je Eigen Trouwring',
                    link: '#'
                },
                {
                    name: 'Trouwringen Lente Voordeel',
                    link: '#'
                },
            ]
        }
    },
    methods: {
        search() {
            window.open(`https://www.trouwringenvoordeel.nl/website/index.php?Show=Search&KeyWord=${this.searchValue}`);
        }
    },
    components: { Menu, Search, User, Heart, ShoppingCart, TheSearchbar, TheHeaderItem }
}

</script>