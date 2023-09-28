<script lang="ts" setup>
import { useMainStore } from '@/stores/main';
import ClassEditor from './ClassEditor.vue';

const mainStore = useMainStore()
</script>

<template>
    <ClassEditor />
</template>
