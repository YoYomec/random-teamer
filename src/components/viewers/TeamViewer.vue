<script lang="ts" setup>
import type { Team } from "@/utils/types"
import StudentsViewer from "./StudentViewer.vue";

defineProps<{team: Team}>()
</script>

<template>
    <StudentsViewer :student="team[0]" /> avec <StudentsViewer :student="team[1]" />
</template>
