<template>
    <div class="counter">
        <h1>Counter: {{ count }}</h1>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>

</template>

<script>
import { ref } from 'vue';
export default {
    name: 'Counter',
    setup() {
        const count = ref(0);

        const increment = () => {
            count.value++;
        }

        const decrement = () => {
            if (count.value > 0) count.value--;
        }

        return { count, increment, decrement }
    }
}
</script>

