<script setup lang="ts">
console.log('-------- print process.env --------');
console.log(process.env);
console.log('▲▲▲▲▲▲▲▲ print process.env ▲▲▲▲▲▲▲▲');

console.log('---- testB');
// router test
const router = useRouter();

const nav = [{ label: 'Home', to: '/' }];
console.log(nav);

// runtime config
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig);
console.log(
    `app.vue: runtimeConfig.public.baseUrl >  ${runtimeConfig.public.baseUrl}`,
);
</script>

<template>
    <div>
        <p>testB</p>
        <NuxtWelcome />
        <NuxtPage />
    </div>
</template>
