<script setup>
import { ref, onMounted } from 'vue';

import WouldYouRather from './components/WouldYouRather.vue';
import wyrService from './services/wyrService';

// question and two answers
const wyrQuestion = ref('');
const wyrAnswer1 = ref('');
const wyrAnswer2 = ref('');

// runs when the app renders (or is mounted)
onMounted(() => {
    wyrService.getRandomWYR().then( wyrData => {
        wyrQuestion.value = wyrData.question;
        wyrAnswer1.value  = wyrData.answer1;
        wyrAnswer2.value  = wyrData.answer2;
    });
});

// for the user's selection
const userSelection = ref('');

function updateUserSelection(userChoice) {
    userSelection.value = `Thanks! You chose ${userChoice}`;
}
</script>

<template>
    <div id="app">

        <h1>Hello! Would You Rather...</h1>

        <would-you-rather
            :question="wyrQuestion"
            :answer1="wyrAnswer1"
            :answer2="wyrAnswer2"
            @answer-selected="updateUserSelection">
        </would-you-rather>

        <p>
            {{ userSelection }}
        </p>

    </div>
</template>

<style scoped>
#app {
    background-color: grey;
    padding: 2rem 6rem;
}
</style>
