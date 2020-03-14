<template>
    <article>
        <h1>{{ webinar.title }}</h1>
        <div>{{ webinar.body }}</div>
    </article>
</template>

<script>
export default {
    async asyncData ({ params, payload }) {
        if (payload) {
            return { webinar: payload };
        } else {
            return {
                webinar: await require(`~/assets/content/webinars/${params.webinar}.json`),
            };
        }
    },
};
</script>
