<template>
    <h1>Vue component</h1>
    <div>
        <button @click="isOpen = !isOpen">Open/Close</button>
        <ul v-if="isOpen">
            <li>Option 1</li>
            <li>Option 1</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const isOpen = ref(false)
</script>