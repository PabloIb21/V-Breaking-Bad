import { onMounted, ref } from "vue";
import axios from "axios";
import breakingBadApi from "@/api/breakingBadApi";
import type { Character } from "@/characters/interfaces/character";

const characters = ref<Character[]>([]);
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>();

export const useCharacters = () => {
  onMounted(async() => {
    await loadCharacters();
  });

  const loadCharacters = async () => {
    if (characters.value.length > 0) return;

    isLoading.value = true;
    try {
      const { data } = await breakingBadApi.get<Character[]>('/characters');
      characters.value = data;
      isLoading.value = false;
    } catch (error) {
      isLoading.value = false;
      hasError.value = true;
      
      if (axios.isAxiosError(error)) {
        return errorMessage.value = error.message;
      }

      errorMessage.value = JSON.stringify(error);
    }
  }

  return {
    characters,
    isLoading,
    hasError,
    errorMessage,
  }
}