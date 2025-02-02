import { defineStore } from "pinia";

export const useAsideStore = defineStore("aside", {
    state: () => ({
        isAsideVisible: true,
    }),
    actions: {
        toggleAside() {
            this.isAsideVisible = !this.isAsideVisible;
        },
    },
});
