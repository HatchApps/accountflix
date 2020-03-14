<template>
    <div>
        <div v-for="webinar in webinars" :key="webinar.slug">
            <a :href="`/webinars/${webinar.slug}`">{{ webinar.title }}</a>
        </div>
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
