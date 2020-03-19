<template>
    <v-card
        color="black darken-2"
        class="mb-5"
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
                :href="webinar.registrationLink"
                target="_blank"
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
