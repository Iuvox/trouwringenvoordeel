<template>
    <div>
        <div class="md:flex md:m-auto md:py-14 md:w-2/3 md:items-center">
            <div class="md:w-1/2">
                <img
                    src="/winactie-banner.jpg"
                    class="w-full h-[300px] object-cover"
                    alt
                />
            </div>
            <div class="px-4 py-3 md:w-1/2">
                <h1 class="text-xl font-bold text-primary">Doe mee en maak kans op €250 shoptegoed!</h1>
                <form @submit.prevent="submitForm($event)">
                    <BaseInput
                        v-for="input in fields"
                        :id="input.id"
                        :type="input.type"
                        :autocomplete="input.autocomplete"
                        :label="input.label"
                        :checked="input.checked"
                        :fields="input.fields"
                        :required="input.required"
                    />

                    <BaseButton class="mt-3">Ja, ik wil shoptegoed winnen!</BaseButton>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import BaseInput from "../components/BaseInput.vue"
import BaseButton from "../components/BaseButton.vue"
import getSplitTest from "../plugins/splittesting.js"
import axios from 'axios'
import { fbTrack } from "../plugins/facebook"

export default {
    data() {
        return {
            fields: [
                {
                    id: "name",
                    type: "text",
                    autocomplete: "name",
                    required: true,
                    label: "Je naam",
                },
                {
                    id: "email",
                    type: "email",
                    required: true,
                    autocomplete: "email",
                    label: "E-mailadres"
                },
                {
                    id: "phone",
                    type: "phone",
                    required: true,
                    autocomplete: "phone",
                    label: "Telefoonnummer"
                },
                {
                    id: "woonplaats",
                    type: "text",
                    required: true,
                    autocomplete: "address-level2",
                    label: "Je Woonplaats",
                    fieldId: 3
                },
                {
                    type: "multi",
                    label: "Interesses",
                    fieldId: 21,
                    fields: [
                        {
                            id: "trouwringen",
                            type: "checkbox",
                            checked: false,
                            label: "Trouwringen"
                        },
                        {
                            id: "aanzoeksringen",
                            type: "checkbox",
                            checked: false,
                            label: "Aanzoeksringen"
                        },
                        {
                            id: "vriendschapsringen",
                            type: "checkbox",
                            checked: false,
                            label: "Vriendschapsringen"
                        },
                    ]
                },
                {
                    id: "terms",
                    type: "checkbox",
                    checked: true,
                    required: true,
                    label: "Ja, ik ga akkoord met de algemene voorwaarden"
                },
            ]
        }
    },
    methods: {
        submitForm(event = SubmitEvent) {
            const formEl = event.target.elements
            const contact = this.createContact(formEl)

            Object.keys(contact.contact).forEach(key => {
                const val = contact.contact[key]
                if (
                    val === undefined ||
                    val === null ||
                    val === ''
                ) {
                    delete contact.contact[key]
                }
            })

            axios.post('https://trouwringen.merces.me/api/activecampaign/createcontact', contact).then(res => {
                console.log(res.data)
                fbTrack('track', 'Form Success V2')
                this.$router.push({
                    name: 'Winactie Succes'
                })
            })

            
        },
        createContact(inputs = HTMLCollection) {
            const fieldValues = []
            Object.keys(this.fields).forEach(el => {
                const val = this.fields[el]

                if (val.type === 'multi') {
                    fieldValues.push({
                        field: val.fieldId,
                        value: this.getFormValue(val.label, inputs, true)
                    })
                } else if ('fieldId' in val) {
                    fieldValues.push({
                        field: val.fieldId,
                        value: this.getFormValue(val.id, inputs)
                    })
                }
            })

            return {
                contact: {
                    email: this.getFormValue('email', inputs),
                    phone: this.getFormValue('phone', inputs),
                    firstName: this.getFormValue('name', inputs).split(' ')[0],
                    lastName: this.getFormValue('name', inputs).split(' ')[1],
                    fieldValues: fieldValues
                }
            }
        },
        getFormValue(el = String, inputs = HTMLCollection, list = false) {
            try {
                const str = inputs.namedItem(el)
                if (list) {
                    const checkedItems = []
                    str.forEach(el => {
                        console.log(el.label)
                        if(el.checked) checkedItems.push(el.value)
                    })
                    return `||${checkedItems.join('||')}||`
                } else {
                    return str.value
                }
            } catch (error) {
                return null
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