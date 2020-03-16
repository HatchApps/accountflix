<template>
    <v-container>
        <v-row no-gutters class="mb-5">
            <v-col>
                <v-card>
                    <v-card-title class="headline justify-center">
                        A collection of upcoming webinars and the latest training materials for accountants.
                    </v-card-title>
                    <v-card-text class="text-center">
                        <p class="mb-1">
                            Jump up a webinar if you find yourself with a spare hour.
                            Because who can keep track of all the emails?
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="headline">
                        Upcoming Webinars
                    </v-card-title>
                    <div class="pa-4">
                        <VWebinarPreview
                            v-for="(webinar, i) in webinars"
                            :key="i"
                            :webinar="webinar"
                        />
                    </div>
                    <v-card-actions class="pl-4">
                        <v-btn
                            color="primary"
                            nuxt
                            to="/webinars"
                        >
                            See More
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="headline">
                        Recent On-Demand Material
                    </v-card-title>
                    <div class="pa-4">
                        <VMaterialPreview
                            v-for="(material, i) in materials"
                            :key="i"
                            :material="material"
                        />
                    </div>
                    <v-card-actions class="pl-4">
                        <v-btn
                            color="primary"
                            nuxt
                            to="/on-demand"
                        >
                            See More
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    computed: {
        webinars () {
            return this.$store.state.webinars;
        },
        materials () {
            return this.$store.state.materials;
        },
    },
    head () {
        return {
            script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
        };
    },
};
</script>
