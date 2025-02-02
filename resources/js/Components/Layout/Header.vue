<template>
    <header class="bg-primary-500 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-xl font-bold">Mi Aplicación</h1>
            <button
                @click="ThemeStore.toggleDarkMode"
                class="p-2 rounded-full hover:bg-primary-600"
            >
                {{ ThemeStore.isDarkMode ? "🌙" : "☀️" }}
            </button>
            <button
                @click="AsideStore.toggleAside"
                class="p-2 rounded-full hover:bg-primary-600"
            >
                {{ AsideStore.isAsideVisible ? "❌" : "☰" }}
            </button>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/Stores/ThemeStore";
import { useAsideStore } from "@/Stores/AsideStore";
const ThemeStore = useThemeStore();
const AsideStore = useAsideStore();
</script>
