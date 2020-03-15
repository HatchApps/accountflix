<template>
    <v-app dark>
        <v-navigation-drawer
            v-model="drawer"
            app
        >
            <v-list nav>
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    link
                    :to="item.to"
                    router
                    exact
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <template v-slot:append>
                <div class="text-center pb-1">
                    <span class="caption text--secondary">
                        Maintained with <v-icon>mdi-heart</v-icon> by
                        <a href="https://xavier-analytics.com" target="_blank">Xavier Analytics</a>
                    </span>
                </div>
            </template>
        </v-navigation-drawer>
        <v-app-bar app dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>{{ title }}</v-toolbar-title>
        </v-app-bar>
        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    data () {
        return {
            drawer: null,
            title: 'Accountflix',
            items: [
                { title: 'Home', icon: 'mdi-home', to: '/' },
                { title: 'Webinars', icon: 'mdi-presentation-play', to: '/webinars' },
                { title: 'On Demand', icon: 'mdi-video-vintage', to: '/on-demand' },
            ],
        };
    },
};
</script>
