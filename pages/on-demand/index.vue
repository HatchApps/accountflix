<template>
    <div>
        <VMaterialPreview
            v-for="(material, i) in materials"
            :key="i"
            :material="material"
        />
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
