<template>
    <v-layout
        column
        justify-center
        align-center
    >
        <v-flex
            xs12
            sm8
            md6
        >
            <v-card>
                <v-card-title class="headline text-center">
                    A collection of upcoming webinars and the latest training materials for accountants.
                </v-card-title>
                <v-card-text class="text-center">
                    <p>
                        Jump up a webinar if you find yourself with a spare hour.
                        Because who can keep track of all the emails?
                    </p>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
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
