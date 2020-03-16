<template>
    <div>
        <VWebinarPreview
            v-for="(webinar, i) in webinars"
            :key="i"
            :webinar="webinar"
        />
    </div>
</template>

<script>
export default {
    computed: {
        webinars () {
            return this.$store.state.webinars;
        },
    },
};
</script>
