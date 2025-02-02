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
                    50: "#e0f7fa",
                    100: "#b2ebf2",
                    200: "#80deea",
                    300: "#4dd0e1",
                    400: "#26c6da",
                    500: "#00bcd4",
                    600: "#00acc1",
                    700: "#0097a7",
                    800: "#00838f",
                    900: "#006064",
                },
                secondary: {
                    50: "#e8f5e9",
                    100: "#c8e6c9",
                    200: "#a5d6a7",
                    300: "#81c784",
                    400: "#66bb6a",
                    500: "#4caf50",
                    600: "#43a047",
                    700: "#388e3c",
                    800: "#2e7d32",
                    900: "#1b5e20",
                },
                accent: {
                    50: "#fff3e0",
                    100: "#ffe0b2",
                    200: "#ffcc80",
                    300: "#ffb74d",
                    400: "#ffa726",
                    500: "#ff9800",
                    600: "#fb8c00",
                    700: "#f57c00",
                    800: "#ef6c00",
                    900: "#e65100",
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
