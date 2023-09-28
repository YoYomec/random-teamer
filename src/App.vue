<script setup lang="ts">
import StudentsEditor from './components/ClassEditor.vue';
import Input from './components/Input.vue';
import TeamsViewer from './components/TeamsViewer.vue';
import { useMainStore } from './stores/main';


const mainStore = useMainStore()
</script>

<template>
    <header>
        <button @click="mainStore.generateTeams()" style="margin-bottom: var(--spacing); width: 100%;">Génerer les équipes</button>
    </header>
    <div style="display: flex; flex-direction: row; gap: 6px; flex-wrap: wrap;">
        <Input />
        <TeamsViewer />
    </div>
</template>