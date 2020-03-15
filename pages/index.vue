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
                    <v-card-title class="headline justify-center">
                        Upcoming Webinars
                    </v-card-title>
                    <v-card-text class="text-center">
                        <p class="mb-1">
                            A list of webinars to go here
                        </p>
                    </v-card-text>
                    <v-card-actions class="justify-center">
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
            <v-col>
                <v-card>
                    <v-card-title class="headline justify-center">
                        Recent On-Demand Material
                    </v-card-title>
                    <v-card-text class="text-center">
                        <p class="mb-1">
                            A list of training material to go here
                        </p>
                    </v-card-text>
                    <v-card-actions class="justify-center">
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
    head () {
        return {
            script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
        };
    },
};
</script>
