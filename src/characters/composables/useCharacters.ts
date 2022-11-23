import { computed, ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';

import type { Character } from '@/characters/interfaces/character';
import breakingBadApi from '@/api/breakingBadApi';

const characters = ref<Character[]>([]);
const errorMessage = ref<string | null>(null);
const hasError = ref<boolean>(false);
const isLoading = ref<boolean>(false);

const getCharacters= async (): Promise<Character[]> => {
  if (characters.value.length > 0) {
    return characters.value;
  }

  const { data } = await breakingBadApi.get<Character[]>('/characters');
  return data;
}

const loadedCharacters = (data: Character[]) => {
  characters.value = data.filter(character => ![14, 17, 39].includes(character.char_id));
  errorMessage.value = null;
  hasError.value = false;
}

const useCharacters = () => {
  const { isLoading, } = useQuery(
    ['characters'],
    getCharacters,
    {
      onSuccess: loadedCharacters,
    }
  );

  return {
    // Properties
    characters,
    errorMessage,
    hasError,
    isLoading,

    // Getters
    count: computed(() => characters.value.length),

    // Methods
  }
}

export default useCharacters;
