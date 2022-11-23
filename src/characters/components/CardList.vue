<script setup lang="ts">
import CharacterCard from '@/characters/components/CharacterCard.vue';
import type { Character } from '@/characters/interfaces/character';

interface Props {
  characters: Character[];
}

const props = defineProps<Props>();

// 1- Normal suspense
// const { data: characters } = await breakingBadApi.get<Character[]>('/characters');
// const characters = ref<Character[]>(data);

// 2- Composable functions
// const { characters, isLoading, hasError, errorMessage } = useCharacters();

// 3- TanStack Query
// const getCharactersSlow = async(): Promise<Character[]> => {
//   return new Promise((resolve) => {
//     setTimeout(async() => {
//       const { data } = await breakingBadApi.get<Character[]>('/characters');
//       resolve(data.filter(character => ![14, 17, 39].includes(character.char_id)));
//     }, 1);
//   })
// }

// const { isLoading, isError, data: characters, error } = useQuery(
//   ['characters'],
//   getCharactersSlow,
// );

</script>

<template>
  <div class="card-list">
    <CharacterCard 
      v-for="character of props.characters"
      :key="character.char_id"
      :character="character"
    />
  </div>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>