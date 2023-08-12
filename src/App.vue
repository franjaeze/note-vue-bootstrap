<script setup>
import { reactive, onMounted, ref } from "vue";
import { getNotes } from './services/noteServices.js'
const notes = ref();
const showNotes = ref(false);


onMounted(async () => {
  notes.value = await getNotes()

})

const toggleNotes = () => {
  showNotes.value = !showNotes.value;
}


</script>

<template>
  <div class="d-flex flex-column">
    <h1 class="">Welcome to Note App! </h1><i class="fas fa-plus-square"></i>
    <div class="container">
      <button class="btn btn-sm main-btn " @click="toggleNotes()"> open notes</button>
    </div>

    <div class="d-flex flex-wrap">
      <div v-for="note in notes" :key="note.title" class="" v-if="showNotes">
        <div class="card container p-1 m-2 note-card" draggable="true">
          <div class="card-body">
            <h5 class="card-title">{{ note.title }}</h5>

            <div class="container d-flex justify-content-end btn-container">
              <button href="#" class="btn btn-sm btn-secondary p-1 m-1" data-bs-toggle="collapse"
                :data-bs-target="'#' + note._id" aria-expanded="false" :aria-controls="note._id">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                  viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" />
                </svg></button>
              <button href="#" class="btn btn-sm btn-secondary p-1 m-1"><svg xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" />
                </svg></button>
              <button href="#" class="btn btn-sm btn-secondary p-1 m-1"><svg xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M497.94 74.17l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.75 18.75-49.15 0-67.91zm-246.8-20.53c-15.62-15.62-40.94-15.62-56.56 0L75.8 172.43c-6.25 6.25-6.25 16.38 0 22.62l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l101.82-101.82 22.63 22.62L93.95 290.03A327.038 327.038 0 0 0 .17 485.11l-.03.23c-1.7 15.28 11.21 28.2 26.49 26.51a327.02 327.02 0 0 0 195.34-93.8l196.79-196.79-82.77-82.77-84.85-84.85z" />
                </svg></button>
            </div>
            <div class="collapse" :id="note._id">
              <p class="card-text">{{ note.body }}</p>
            </div>
          </div>
        </div>


      </div>


    </div>
  </div>
</template>

<style>
.note-card {
  max-width: 15rem;
}

body {
  background-color: #d8d4d486;
}

.hide {
  display: none;
}

.main-btn {
  background-color: rgba(20, 20, 23, 0.786);
  color: white;
  text-transform: uppercase;
}

.btn-container button {
  display: flex;
  align-items: center;
  justify-content: center;

}

.btn-container button svg {
  fill: white;

}</style>
