<script setup lang="ts">
const route = useRoute();
const slug = route.params["slug"] || "/";
const { data: home } = await useAsyncData<Content>(() => queryCollection("content").path(slug).first());
useSeoMeta(home.value || {});
</script>

<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>
</template>
