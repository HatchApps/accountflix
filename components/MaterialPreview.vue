<template functional>
    <v-card
        color="teal darken-2"
        :to="`/on-demand/${props.material.slug}`"
        nuxt
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                    <VMaterialIcon />
                    {{ props.material.title }}
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{ props.material.description }}
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-card-actions>
            <v-btn
                text
                nuxt
                :to="`/on-demand/${props.material.slug}`"
            >
                More Info
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
