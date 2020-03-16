<template>
    <article>
        <h1>{{ webinar.title }}</h1>
        <div v-html="$md.render(webinar.body)" />
        <div>
            <v-btn
                v-if="webinar.registration_link"
                color="primary"
                :to="webinar.registration_link"
            >
                Register Now
            </v-btn>
        </div>
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
