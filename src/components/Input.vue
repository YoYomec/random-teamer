<script lang="ts" setup>
import { useMainStore } from '@/stores/main';
import ClassEditorVue from './ClassEditor.vue';

const mainStore = useMainStore()
</script>

<template>
    <ClassEditorVue />
</template>
