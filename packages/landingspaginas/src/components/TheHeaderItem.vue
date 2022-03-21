<template>
    <div class="p-2 hover:bg-slate-100 rounded-md">
        <a href="#" class="flex ">
            <span>
                <slot></slot>
            </span>
            <span class="grow flex justify-end">
                <ChevronRight />
            </span>
        </a>
    </div>
</template>

<script setup>
import { ChevronRight } from 'lucide-vue-next';

</script>