export const state = () => ({
    webinars: [],
});

export const mutations = {
    setWebinars (state, list) {
        state.webinars = list;
    },
};

export const actions = {
    async nuxtServerInit ({ commit }) {
        const webinarFiles = await require.context('~/assets/content/webinars/', false, /\.json$/);
        const webinars = webinarFiles.keys().map((key) => {
            const res = webinarFiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setWebinars', webinars);
    },
};
