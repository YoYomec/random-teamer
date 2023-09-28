<script lang="ts" setup>
import { useMainStore } from '@/stores/main';
import TeamViewer from './TeamViewer.vue';
import StudentViewer from './StudentViewer.vue';

const mainStore = useMainStore()
</script>

<template>
    <output>
        <label v-if="mainStore.aloneStudents.length > 1">Sont tout seuls :</label>
        <ul v-if="mainStore.aloneStudents.length > 1">
            <li v-for="student of mainStore.aloneStudents">
                <StudentViewer :student="student" />
            </li>
        </ul>

        <label v-else-if="mainStore.aloneStudents.length === 1">
            <StudentViewer :student="mainStore.aloneStudents[0]" /> est tout seul
        </label>
        <p>Voici les équipes :</p>
        <ul>
            <li v-for="team of mainStore.teams">
                <TeamViewer :team="team" />
            </li>
        </ul>
    </output>
</template>
