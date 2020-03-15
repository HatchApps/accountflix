<template>
    <article>
        <h1>{{ material.title }}</h1>
        <div>{{ material.body }}</div>
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
