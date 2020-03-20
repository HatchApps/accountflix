<template>
    <v-text-field
        v-model="modelBinding"
        hide-details
        prepend-inner-icon="mdi-magnify"
        single-line
        max-width="50"
    />
</template>

<script>
export default {
    props: {
        value: { type: String, default: null },
    },
    computed: {
        modelBinding: {
            get () {
                return this.value;
            },
            set (input) {
                this.$emit('input', input);
            },
        },
    },
};
</script>
