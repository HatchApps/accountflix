<template>
    <v-app dark>
        <v-navigation-drawer
            v-model="drawer"
            app
        >
            <v-list nav>
                <v-list-item
                    link
                    to="/"
                    nuxt
                    exact
                >
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item
                    link
                    to="/webinars"
                    nuxt
                    exact
                >
                    <v-list-item-icon>
                        <VWebinarIcon />
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Webinars</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item
                    link
                    to="/on-demand"
                    nuxt
                    exact
                >
                    <v-list-item-icon>
                        <VMaterialIcon />
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>On Demand</v-list-item-title>
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
            <v-toolbar-title>Accountflix</v-toolbar-title>
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
        };
    },
};
</script>
