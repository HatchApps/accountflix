<template>
    <div>
        <div v-for="material in materials" :key="material.slug">
            <a :href="`/on-demand/${material.slug}`">{{ material.title }}</a>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        materials () {
            return this.$store.state.materials;
        },
    },
};
</script>
