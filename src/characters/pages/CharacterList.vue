<script setup lang="ts">
import CardList from '@/characters/components/CardList.vue';
import useCharacters from '@/characters/composables/useCharacters';

const props = defineProps<{ title: string, visible: boolean }>();

const { isLoading, hasError, errorMessage, characters, count } = useCharacters();
</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>

  <div v-else-if="hasError">
    <h1>Error al cargar</h1>
    <p>{{errorMessage}}</p>
  </div>

  <template v-else>
    <h1>{{ props.title }} - ({{count}})</h1>

    <CardList :characters="characters" />
  </template>
</template>
