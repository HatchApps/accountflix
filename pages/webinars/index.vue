<template>
    <div>
        <v-toolbar dense>
            <v-toolbar-title>Webinars</v-toolbar-title>

            <v-spacer />

            <span class="mr-1">Starting:</span>

            <v-btn-toggle
                v-model="starting"
                borderless
            >
                <v-btn value="sooner">
                    Sooner
                </v-btn>

                <v-btn value="later">
                    Later
                </v-btn>
            </v-btn-toggle>

            <v-spacer />

            <span class="mr-1">View:</span>

            <v-btn-toggle
                v-model="view"
                borderless
            >
                <v-btn value="upcoming">
                    Upcoming
                </v-btn>

                <v-btn value="archive">
                    Finished
                </v-btn>
            </v-btn-toggle>
        </v-toolbar>

        <VWebinarPreview
            v-for="(webinar, i) in webinars"
            :key="i"
            :webinar="webinar"
        />
    </div>
</template>

<script>
export default {
    data () {
        return {
            starting: 'sooner',
            view: 'upcoming',
        };
    },
    computed: {
        webinars () {
            const sooner = this.starting === 'sooner';
            const viewArchive = this.view === 'archive';
            const now = new Date();

            const webinars = this.$store.state.webinars.slice(0)
                .filter(w => viewArchive
                    ? this.$dateFns.isBefore(this.$dateFns.parseISO(w.webinarDate), now)
                    : this.$dateFns.isAfter(this.$dateFns.parseISO(w.webinarDate), now));

            return webinars.sort((a, b) => sooner
                ? a.webinarDate.localeCompare(b.webinarDate)
                : b.webinarDate.localeCompare(a.webinarDate));
        },
    },
};
</script>
