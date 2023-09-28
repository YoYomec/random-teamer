import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { shuffle } from '@/utils/utils';
import type { Team } from '@/utils/types';

export const useMainStore = defineStore('counter', () => {
  /*const classes: Ref<{[key: string]: string[][]}> = ref({
    "6A": [["Moi I", "Moi II", "Moi III", "Moi de trop", "Moi"], ["Toi I", "Toi II", "Toi III"]],
    "6B": [["La", "class"], ["des", "6", "B"]]
  })*/
  const classes: Ref<{[key: string]: string[][]}> = ref(JSON.parse(localStorage.getItem("classes")?localStorage.getItem("classes")!:`
  {
    "6A": [["Moi I", "Moi II", "Moi III", "Moi de trop", "Moi"], ["Toi I", "Toi II", "Toi III"]],
    "6B": [["La", "class"], ["des", "6", "B"]]
  }
  `) as {[key: string]: string[][]})
  var currentClass = ref("6A")
  const students = computed(()=>([...classes.value[currentClass.value]]))

  const teams: Ref<Team[]> = ref([]);
  const aloneStudents: Ref<string[]> = ref([])


  function generateTeams() {
    const newTeams: Team[] = []

    // destructure the students
    const mainStudents = [...students.value[0]]
    const othersStudents = [...students.value[1]]
    const newAloneStudents: string[] = []

    for (let student of shuffle(mainStudents)) {
      if (othersStudents.length > 0) {
        let otherStudentIndex = Math.floor(Math.random() * othersStudents.length)
        newTeams.push([student, othersStudents[otherStudentIndex]])
        othersStudents.splice(otherStudentIndex, 1)
      }
      else {
        newAloneStudents.push(student)
      }
    }

    for (let student of othersStudents) {
      newAloneStudents.push(student)
    }

    aloneStudents.value = [...newAloneStudents]
    teams.value = [...newTeams]
  }

  generateTeams()

  function saveAll() {
    localStorage.setItem("classes", JSON.stringify(classes.value))
  }

  function saveClass(classKey: string, students: string[][]) {
    classes.value[classKey] = students
    saveAll()
  }

  function canDeleteClass(classKey: string) {
    return Object.keys(classes.value).length >= 2 && Object.keys(classes.value).includes(classKey)
  }

  function deleteClass(classKey: string) {
    if (canDeleteClass(classKey)) {
      delete classes.value[classKey]
      currentClass.value = Object.keys(classes.value)[0]
    }
  }

  return {classes, currentClass, students, teams, aloneStudents, generateTeams, saveClass, canDeleteClass, deleteClass}
})