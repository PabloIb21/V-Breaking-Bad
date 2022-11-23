import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const counter = ref<number>(0);

    return {
      counter
    }
  }
});