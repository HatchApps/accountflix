<template>
    <div>
        <VIndexToolbar title="On-Demand">
            <VSearch v-model="search" />
        </VIndexToolbar>

        <VMaterialPreview
            v-for="(material, i) in materials"
            :key="i"
            :material="material"
        />
    </div>
</template>

<script>
export default {
    data () {
        return {
            search: '',
        };
    },
    computed: {
        materials () {
            const materials = this.$store.state.materials.slice(0);

            return this.search
                ? materials.filter(m => m.title.toLowerCase().includes(this.search.toLowerCase()))
                : materials;
        },
    },
};
</script>
