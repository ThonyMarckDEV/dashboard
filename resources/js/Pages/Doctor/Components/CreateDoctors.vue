<template>
    <Dialog
        :visible="isVisible"
        modal
        :header="isDoctorEmpty(doctor) ? 'Nuevo Doctor' : 'Editar Doctor'"
        :style="{ width: '40vw' }"
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
        @update:visible="closeModal"
    >
        <div class="flex flex-col gap-4 w-full sm:W-40 pt-3">
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
                <InputText
                    id="fecha"
                    type="date"
                    class="w-full"
                    v-model="doctor.start_date"
                />
                <label for="fecha">Fecha</label>
            </FloatLabel>
            <FloatLabel variant="on">
                <Select
                    id="state"
                    label-id="state"
                    class="w-full"
                    v-model="stateDoctor"
                    :options="doctorStates"
                    optionLabel="label"
                    optionValue="value"
                    @update:modelValue="updateState"
                />
            </FloatLabel>
        </div>
        {{ doctor }}
    </Dialog>
</template>
<script setup lang="ts">
import { DatePicker, Dialog, FloatLabel, InputText, Select } from "primevue";
import { Doctor } from "../Interfaces/InterfaceDoctor";
import { computed, ref } from "vue";

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
const doctorStates = ref([
    { label: "Activo", value: 1 },
    { label: "Inactivo", value: 0 },
]);
const stateDoctor = computed({
    get: () => {
        return doctor.state;
    },
    set: (value: boolean) => {
        doctor.state = value;
    },
});

const updateState = (value: boolean) => {
    doctor.state = value;
};
</script>
<style lang="css" scoped></style>
