<template>
    <AppLayout title="Doctor">
        <div class="mi_card flex flex-col justify-normal gap-3">
            <TableDoctors
                :doctors-data="father.doctorsDate"
                :pagination="father.pagination"
                :loading-table="father.loadingTable"
                @loading-page="loadingPage"
                @search-doctor="searchDoctor"
            />
        </div>
    </AppLayout>
</template>
<script setup lang="ts">
import AppLayout from "@/Layouts/AppLayout.vue";
import TableDoctors from "./Components/TableDoctors.vue";
import { useDoctors } from "@/Composable/useDoctors";

const { father, loadingPage, searchDoctor } = useDoctors();
</script>
<style scoped></style>
