<script setup lang="ts">
import ClassesEditor from "./components/ClassesEditor.vue";
import TeamsViewer from "./components/viewers/TeamsViewer.vue";
import { useMainStore } from "./stores/main";

const mainStore = useMainStore();
</script>

<template>
	<header>
		<button
			@click="mainStore.generateTeams()"
			style="margin-bottom: var(--spacing); width: 100%"
		>
			Génerer les équipes
		</button>
	</header>
	<div style="display: flex; flex-direction: row; gap: 6px; flex-wrap: wrap">
		<ClassesEditor style="flex-shrink: 1; flex-grow: 1" />
		<TeamsViewer />
	</div>
</template>
