<template>
    <Dialog
        :visible="isVisible"
        modal
        header="Eliminar doctor"
        :style="{ width: '40vw' }"
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
        @update:visible="closeModal"
    >
        <Button
            label="eliminar"
            severity="danger"
            @click="emitIdDoctorDelete(idDoctor)"
        />
    </Dialog>
</template>
<script setup lang="ts">
import { Button, Dialog } from "primevue";

const { isVisible, idDoctor } = defineProps<{
    isVisible: boolean;
    idDoctor: number;
}>();

const emit = defineEmits<{
    (e: "emitCloseModal", state: boolean): void;
    (e: "emitSuccessDelete", idDoctor: number): void;
}>();

const emitIdDoctorDelete = (idDoctor: number) => {
    emit("emitSuccessDelete", idDoctor);
};

const closeModal = () => {
    emit("emitCloseModal", false);
};
</script>
<style scoped lang="css"></style>
