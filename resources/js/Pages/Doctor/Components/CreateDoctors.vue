<template>
    <Dialog
        :visible="isVisible"
        modal
        :header="doctor && doctor.id ? 'Actualizar Doctor' : 'Crear Doctor'"
        :style="{ width: '40vw' }"
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
        @update:visible="closeModal"
    >
        <form
            @submit.prevent="sutmit"
            class="flex flex-col gap-4 w-full sm:W-40 pt-3"
        >
            <FloatLabel variant="on">
                <InputText
                    v-model="doctor.name"
                    id="name"
                    type="text"
                    class="w-full"
                    name="name"
                />
                <label for="name">Nombre</label>
            </FloatLabel>
            <FloatLabel variant="on">
                <InputText
                    id="code"
                    type="text"
                    class="w-full"
                    v-model="doctor.code"
                />
                <label for="code">Codigo</label>
            </FloatLabel>
            <FloatLabel variant="on">
                <DatePicker
                    id="fecha"
                    class="w-full"
                    v-model="doctor.start_date"
                    input-id="fecha"
                    icon-display="input"
                />
                <label for="fecha">Fecha</label>
            </FloatLabel>
            <ToggleButton
                id="state"
                v-model="doctor.state"
                onLabel="Activo"
                offLabel="Inactivo"
                onIcon="pi pi-check"
                offIcon="pi pi-times"
            />
            <!-- botones para cancelar y guardar o actualizar -->
            <div class="flex justify-end gap-4">
                <Button
                    label="Guardar"
                    :icon="doctor && doctor.id ? 'pi pi-pencil' : 'pi pi-check'"
                    @click="sutmit"
                />
                <Button
                    label="Cancelar"
                    class="p-button-secondary"
                    @click="closeModal"
                />
            </div>
        </form>
        {{ formulario }}
    </Dialog>
</template>
<script setup lang="ts">
import {
    Button,
    DatePicker,
    Dialog,
    FloatLabel,
    InputText,
    ToggleButton,
} from "primevue";
import { Doctor } from "../Interfaces/Doctor";
import { ref } from "vue";
const { isVisible, doctor } = defineProps<{
    isVisible: boolean;
    doctor?: Doctor;
}>();

const formulario = ref<Doctor>({
    id: 0,
    name: "",
    code: "",
    start_date: null,
    state: null,
});

const emit = defineEmits<{
    (e: "emitCloseModal", state: boolean): void;
    (e: "emitSuccessCreate", dataForm: Doctor): void;
}>();

const closeModal = () => {
    emit("emitCloseModal", false);
};

const sutmit = () => {
    formulario.value.id = doctor?.id || 0;
    formulario.value.name = doctor?.name || "";
    formulario.value.code = doctor?.code || "";
    formulario.value.start_date = doctor?.start_date || null;
    formulario.value.state = doctor?.state || true;
    emit("emitSuccessCreate", formulario.value);
    // console.log(formulario.value);
};
</script>
<style lang="css" scoped></style>
