<template>
    <v-card
        color="blue-grey darken-2"
        :to="`/webinars/${webinar.slug}`"
        nuxt
        hover
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="headline mb-2">
                    <VWebinarIcon />
                    {{ webinar.title }}
                </v-list-item-title>
                <v-list-item-subtitle class="mb-4">
                    {{ webinar.description }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                    <v-icon small>
                        mdi-calendar-month-outline
                    </v-icon>
                    {{ webinarDate }}
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-card-actions>
            <v-btn
                text
                nuxt
                :to="`/webinars/${webinar.slug}`"
            >
                More Info
            </v-btn>
            <v-btn
                v-if="webinar.registrationLink"
                text
                nuxt
                :to="webinar.registrationLink"
            >
                Register
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        webinar: { type: Object, required: true },
    },
    data () {
        return {
            webinarDate: null,
        };
    },
    mounted () {
        this.webinarDate = this.$dateFns.format(this.webinar.webinarDate, 'dd MMM yyyy HH:mm');
    },
};
</script>
