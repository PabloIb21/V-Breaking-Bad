<script setup lang="ts">
import { toRef } from 'vue';
import { useRouter } from 'vue-router';
import type { Character } from '@/characters/interfaces/character';

const props = defineProps<{ character: Character }>();
const character = toRef(props, 'character');

const router = useRouter();

const goTo = () => {
  router.push(`by/${character.value.char_id}`);
}
</script>

<template>
  <div class="character-card" @click="goTo()">
    <img :src="character.img" :alt="character.name">
    <h3>{{character.name}}</h3>
  </div>

  <!-- <div v-if="![14, 17, 39].includes(character.char_id)" class="character-card">
    <img :src="character.img" :alt="character.name">
    <h3>{{character.name}}</h3>
  </div> -->

  <!-- <div class="character-card">
    <img v-if="[14, 17, 39].includes(character.char_id)" src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png" alt="No image">
    <img v-else :src="character.img" :alt="character.name">
    <h3>{{character.name}}</h3>
  </div> -->
</template>

<style scoped>
.character-card {
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

img {
  width: 150px;
  border-radius: 5px 5px 0 px 0px;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
  transition: all .5s;
}

img:hover {
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.5);
  transition: all .5s;
}
</style>