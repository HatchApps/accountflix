<template>
    <article>
        <h1>{{ material.title }}</h1>
        <div v-html="$md.render(material.body)" />
    </article>
</template>

<script>
export default {
    async asyncData ({ params, payload }) {
        if (payload) {
            return { material: payload };
        } else {
            return {
                material: await require(`~/assets/content/on-demand/${params.onDemand}.json`),
            };
        }
    },
};
</script>
