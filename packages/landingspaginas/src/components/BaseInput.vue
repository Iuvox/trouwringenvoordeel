<template>
    <div class="mt-2" :class="parentClass" v-if="type !== 'multi'">
        <label :for="id" class="order-2" :class="labelClass">{{ label }}</label>
        <input
            :type="type"
            :id="id"
            :autocomplete="autocomplete"
            :name="id"
            :checked="checked"
            :required="required"
            class="border-[thin] px-2 py-1 rounded-sm"
            :class="classes"
            :placeholder="placeholder"
        />
    </div>
    <div v-if="type === 'multi'" class="my-2">
        <h3>{{label}}</h3>
        <div v-for="input in fields" class="flex items-center">
            <label :for="input.id" class="order-2 text-md">{{ input.label }}</label>
            <input
                :type="input.type"
                :id="input.id"
                :autocomplete="input.autocomplete"
                :name="label"
                :value="input.label"
                :checked="input.checked"
                class="border-[thin] px-2 py-1 rounded-sm order-1 mr-2"
                :placeholder="input.placeholder"
            />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    id: {
        type: String,
    },
    name: {
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
    placeholder: {
        type: String,
        default: null
    },
    checked: {
        type: Boolean,
        default: false
    },
    required: {
        type: Boolean,
        default: false,
    },
    fields: {
        type: Array,
        default: []
    }
})

const classes = computed(() => {

    if (props.type === 'checkbox') {
        return 'order-1 mr-2'
    } else {
        return 'block w-full'
    }
})

const parentClass = computed(() => {
    if (props.type === 'checkbox') {
        return 'flex items-center'
    }
})
const labelClass = computed(() => {
    if (props.type === 'checkbox') {
        return 'text-sm'
    }
})


</script>