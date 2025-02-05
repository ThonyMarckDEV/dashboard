<template>
    <AppLayout title="Doctor">
        <div class="mi_card flex flex-col justify-normal gap-3">
            <div class="flex flex-row gap-2 m-2">
                <InputText type="text" placeholder="Nombre doctor" />
                <Button label="GUARDAR" />
            </div>
            <Button label="holaa" class="mx-10 my-2" />
        </div>
    </AppLayout>
</template>
<script setup lang="ts">
import AppLayout from "@/Layouts/AppLayout.vue";
import { Button, InputText } from "primevue";
</script>
<style scoped></style>
