<template>
    <div class="mt-2" :class="parentClass">
        <label :for="id" class="order-2" :class="labelClass">{{ label }}</label>
        <input :type="type" :id="id" :autocomplete="autocomplete" v-model="value" :checked="checked" class="border-[thin] px-2 py-1 rounded-sm" :class="classes" :placeholder="placeholder" />
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    id: {
        type: String,
    },
    label: {
        type: String,
    },
    type: {
        type: String
    },
    autocomplete: {
        type: String
    },
    value: {
        type: String,
        default: null
    },
    placeholder: {
        type: String,
        default: null
    },
    checked: {
        type: Boolean,
        default: false
    }
})

const classes = computed(() => {

    if(props.type === 'checkbox') {
        return 'order-1 mr-2'
    } else {
        return 'block w-full'
    }
})

const parentClass = computed(() => {
    if(props.type === 'checkbox') {
        return 'flex items-center'
    }
})
const labelClass = computed(() => {
    if(props.type === 'checkbox') {
        return 'text-sm'
    }
})

</script>