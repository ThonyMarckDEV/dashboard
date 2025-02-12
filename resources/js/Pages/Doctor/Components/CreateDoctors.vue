<template>
    <Dialog
        :visible="isVisible"
        modal
        :header="isDoctorEmpty(doctor) ? 'Nuevo Doctor' : 'Editar Doctor'"
        :style="{ width: '40vw' }"
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
        @update:visible="closeModal"
    >
        {{ doctor }}
    </Dialog>
</template>
<script setup lang="ts">
import { Dialog } from "primevue";
import { Doctor } from "../Interfaces/InterfaceDoctor";

const { isVisible, doctor } = defineProps<{
    isVisible: boolean;
    doctor: Doctor;
}>();

const emit = defineEmits<{
    (e: "emitCloseModal", state: boolean): void;
    (e: "emitSuccessCreate", message: string): void;
}>();

const closeModal = () => {
    emit("emitCloseModal", false);
};

const isDoctorEmpty = (doctor: Doctor): boolean => {
    return !doctor || Object.keys(doctor).length === 0;
};
</script>
<style lang="css" scoped></style>
