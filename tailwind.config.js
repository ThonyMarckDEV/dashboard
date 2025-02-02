import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    50: "#e0f7ff", // Celeste muy claro
                    100: "#b3e5fc",
                    200: "#81d4fa",
                    300: "#4fc3f7",
                    400: "#29b6f6",
                    500: "#03a9f4", // Celeste principal
                    600: "#039be5",
                    700: "#0288d1",
                    800: "#0277bd",
                    900: "#01579b", // Azul oscuro para contrastes
                },
                secondary: {
                    50: "#ffffff", // Blanco puro
                    100: "#f8f9fa", // Blanco ligeramente grisáceo
                    200: "#f1f3f5",
                    300: "#e9ecef",
                    400: "#dee2e6",
                    500: "#ced4da", // Gris claro para balancear
                    600: "#adb5bd",
                    700: "#868e96",
                    800: "#495057",
                    900: "#343a40", // Gris oscuro para contrastar
                },
                accent: {
                    50: "#ffebee", // Rojo muy claro
                    100: "#ffcdd2",
                    200: "#ef9a9a",
                    300: "#e57373",
                    400: "#ef5350",
                    500: "#f44336", // Rojo para destacar
                    600: "#e53935",
                    700: "#d32f2f",
                    800: "#c62828",
                    900: "#b71c1c",
                },
                neutral: {
                    50: "#fafafa",
                    100: "#f5f5f5",
                    200: "#eeeeee",
                    300: "#e0e0e0",
                    400: "#bdbdbd",
                    500: "#9e9e9e",
                    600: "#757575",
                    700: "#616161",
                    800: "#424242",
                    900: "#212121",
                },
            },
        },
    },

    plugins: [forms, typography],
};
