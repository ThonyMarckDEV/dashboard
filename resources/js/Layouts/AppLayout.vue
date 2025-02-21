<script setup>
import { Head } from "@inertiajs/vue3";
import Header from "@/Components/Layout/Header.vue";
import Aside from "@/Components/Layout/Aside.vue";
// import Footer from "@/Components/Layout/Footer.vue";
import { Toast } from "primevue";

defineProps({
    title: String,
});
</script>

<template>
    <Head :title="title" />
    <!-- crear una clase para asignar los colores para el fondo oscuro y claro -->
    <div class="flex flex-col min-h-screen">
        <Header />
        <div class="flex flex-1">
            <Aside />
            <main class="flex-1 p-2">
                <Toast position="bottom-right" group="br" />
                <slot />
            </main>
        </div>
        <!-- <Footer /> -->
    </div>
</template>
