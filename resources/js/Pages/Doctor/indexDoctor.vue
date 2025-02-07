<template>
    <AppLayout title="Doctor">
        <div class="mi_card flex flex-col justify-normal gap-3">
            <h2>DOCTORES</h2>
            <li v-for="doctor in props.doctors" :key="doctor.id">
                {{ doctor.name }} - {{ doctor.state }}
            </li>
        </div>
    </AppLayout>
</template>
<script setup lang="ts">
import AppLayout from "@/Layouts/AppLayout.vue";
import { usePage } from "@inertiajs/vue3";
import { Button, InputText } from "primevue";

interface Doctor {
    id: number;
    code: string;
    name: string;
    start: string;
    state: number;
}

interface Props {
    doctors: Doctor[];
}

const props = defineProps<Props>();
</script>
<style scoped></style>
