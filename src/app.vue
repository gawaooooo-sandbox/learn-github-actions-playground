<script setup lang="ts">
console.log('-------- print process.env --------');
console.log(process.env);
console.log('▲▲▲▲▲▲▲▲ print process.env ▲▲▲▲▲▲▲▲');

// router test
const router = useRouter();

const nav = [{ label: 'Home', to: '/' }];
</script>

<template>
    <div>
        <p>testB</p>
        <NuxtWelcome />
        <NuxtPage />
    </div>
</template>
