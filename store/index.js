export const state = () => ({
    webinars: [],
    materials: [],
});

export const mutations = {
    setWebinars (state, list) {
        state.webinars = list;
    },
    setMaterials (state, list) {
        state.materials = list;
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

        const materialFiles = await require.context('~/assets/content/on-demand/', false, /\.json$/);
        const materials = materialFiles.keys().map((key) => {
            const res = materialFiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setMaterials', materials);
    },
};
