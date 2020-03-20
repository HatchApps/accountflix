<template functional>
    <v-toolbar dense class="mb-3">
        <v-toolbar-title>{{ props.title }}</v-toolbar-title>

        <v-spacer />

        <slot />
    </v-toolbar>
</template>
