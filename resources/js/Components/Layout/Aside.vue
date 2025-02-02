<template>
    <aside
        :class="[
            'bg-secondary-500 text-white w-64 p-4 transition-all duration-300',
            {
                'ml-0': AsideStore.isAsideVisible,
                '-ml-64': !AsideStore.isAsideVisible,
            },
        ]"
    >
        <nav>
            <ul>
                <li class="mb-2">
                    <a href="#" class="hover:text-accent-500">Inicio</a>
                </li>
                <li class="mb-2">
                    <a href="#" class="hover:text-accent-500">Perfil</a>
                </li>
                <li class="mb-2">
                    <a href="#" class="hover:text-accent-500">Configuración</a>
                </li>
            </ul>
        </nav>
        <!-- {{ isAsideVisible }} -->
    </aside>
</template>

<script setup lang="ts">
import { useAsideStore } from "@/Stores/AsideStore";
const AsideStore = useAsideStore();
</script>
