<script lang="ts" setup>
import { useMainStore } from '@/stores/main';
import { computed, ref, type Ref } from 'vue';

const mainStore = useMainStore()

var savingClassKey = ref(mainStore.currentClass);

function stringToList(text: string) {
    return text.split("\n")
}

function listToString(list: string[]) {
    return list.join("\n")
}
</script>

<template>
    <fieldset>
        <select v-model="mainStore.currentClass">
        <option v-for="classKey of Object.keys(mainStore.classes)" :value="classKey">
            {{ classKey }}
        </option>
        </select>
        <button @click="mainStore.deleteClass(mainStore.currentClass)" :disabled="!mainStore.canDeleteClass(mainStore.currentClass)">Supprimer la classe</button>

        <div style="display: flex; flex-direction: row; gap: var(--spacing); flex-wrap: wrap; width: 100%;">
            <textarea style="height: 325px; flex-grow: 1; width: 150px;" v-for="students, i of mainStore.students" :value="listToString(mainStore.students[i])" @input="mainStore.students[i] = stringToList(($event.target as HTMLInputElement).value)" ></textarea>
        </div>

        <label for="save-class-name">Nom de la classe à sauvegarder :</label>
        <input type="text" id="save-class-name" v-model="savingClassKey" placeholder="Nom de la classe" style="max-width: 125px;"/>
        <button @click="mainStore.saveClass(savingClassKey, mainStore.students)" name="Sauvegarder" data-tooltip="Savegarder la classe en choisisant un nom, ou modifier une classe existante">Sauvegarder</button>
    </fieldset>
</template>