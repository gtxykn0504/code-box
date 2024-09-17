<template>
  <Header />
  <main>
    <Main />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import { useHead, useSeoMeta } from "@unhead/vue";

useHead({
  title: "Zheary",
  meta: [
    {
      name: "description",
      content: "Homepage of zheaey",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
  link: [
    /* Canonical - The value is your site url ONLY
    {
      rel: "canonical",
      href: "https://kegongteng.cn",
    },
    */
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital@0;1&display=swap",
    },
    {
      rel: "icon",
      href: "https://zh.yuazhi.cn/669a705313053.png",
    },
  ],
});

useSeoMeta({
  title: "Zheary",
  ogTitle: "Zheary",
  description: "Homepage of Zheary",
  ogDescription: "Homepage of Zheary",
  ogImage: `https://zh.yuazhi.cn/669a705313053.png`,
});
</script>
