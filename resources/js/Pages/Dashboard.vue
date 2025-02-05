<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { Button, Card, InputText, Splitter, SplitterPanel } from "primevue";
</script>

<template>
    <AppLayout title="Dashboard">
        <Splitter style="height: 300px" class="mb-8">
            <SplitterPanel class="flex items-center justify-center">
                <Card class="m-3">
                    <template #title>Simple Card</template>
                    <template #content>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores
                            earum nam nobis, culpa ratione quam perferendis
                            esse, cupiditate neque quas!
                        </p>
                        <InputText type="text" />
                    </template>
                </Card>
            </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center gap-2 mx-3">
                <Button label="Primary" />
                <Button label="Secondary" severity="secondary" />
                <Button label="Success" severity="success" />
                <Button label="Info" severity="info" />
                <Button label="Warn" severity="warn" />
                <Button label="Help" severity="help" />
                <Button label="Danger" severity="danger" />
                <Button label="Contrast" severity="contrast" />
            </SplitterPanel>
        </Splitter>
    </AppLayout>
</template>
