import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
import { createPinia } from "pinia"; // Importa Pinia
import PrimeVue from "primevue/config"; // Importa PrimeVue 4
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";
import { definePreset } from "@primevue/themes";
const appName = import.meta.env.VITE_APP_NAME || "Laravel";
const myPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: "#e0f7fa", // Celeste muy claro
            100: "#b2ebf2", // Celeste claro
            200: "#80deea", // Celeste pastel
            300: "#4dd0e1", // Celeste mediano
            400: "#26c6da", // Celeste vibrante
            500: "#00bcd4", // Celeste estándar (primario)
            600: "#00acc1", // Celeste oscuro
            700: "#0097a7", // Celeste más oscuro
            800: "#00838f", // Celeste profundo
            900: "#006064", // Celeste noche
        },
        secondary: {
            50: "#e8f5e9", // Verde muy claro
            100: "#c8e6c9", // Verde claro
            200: "#a5d6a7", // Verde pastel
            300: "#81c784", // Verde mediano
            400: "#66bb6a", // Verde vibrante
            500: "#4caf50", // Verde estándar (secundario)
            600: "#43a047", // Verde oscuro
            700: "#388e3c", // Verde más oscuro
            800: "#2e7d32", // Verde profundo
            900: "#1b5e20", // Verde noche
        },
        colorScheme: {
            light: {
                primary: {
                    color: "#00bcd4", // Celeste estándar
                    inverseColor: "#ffffffd6", // Blanco
                    hoverColor: "#00acc1", // Celeste oscuro
                    activeColor: "#0097a7", // Celeste más oscuro
                },
                highlight: {
                    background: "#00bcd4", // Celeste estándar
                    focusBackground: "#00acc1", // Celeste oscuro
                    color: "#ffffff", // Blanco
                    focusColor: "#ffffff", // Blanco
                },
                formField: {
                    hoverBorderColor: "{primary.color}",
                    borderRadius: "border.radius.md",
                    focusRing: {
                        width: "2px",
                        style: "none",
                        color: "{primary.color}",
                        offset: "1px",
                        shadow: "none",
                    },
                },
            },
            dark: {
                primary: {
                    color: "#4dd0e1", // Celeste mediano
                    inverseColor: "#006064", // Celeste noche
                    hoverColor: "#80deea", // Celeste pastel
                    activeColor: "#00bcd4", // Celeste estándar
                },
                highlight: {
                    background: "rgba(255, 255, 255, .12)", // Fondo translúcido
                    focusBackground: "rgba(255, 255, 255, .24)", // Fondo translúcido más fuerte
                    color: "rgba(255,255,255,.87)", // Blanco
                    focusColor: "rgba(255,255,255,.87)", // Blanco
                },
                formField: {
                    hoverBorderColor: "{primary.color}",
                },
            },
        },
    },
    components: {
        button: {
            // borderRadius: "1rem",
        },
    },
});

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(PrimeVue, {
                theme: {
                    preset: myPreset,
                    options: {
                        darkModeSelector: ".dark",
                    },
                },
            })
            .use(createPinia()) // Agrega Pinia a la instancia de Vue
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
