import { Pagination } from "@/Interfaces/Pagination";
import { Doctor } from "@/Pages/Doctor/Interfaces/InterfaceDoctor";
import { DoctorServices } from "@/Services/DoctorServices";
import { onMounted, reactive } from "vue";

export const useDoctors = () => {
    const father = reactive({
        doctorsDate: [] as Doctor[],
        pagination: {} as Pagination,
        loadingTable: false,
        filter: "" as string,
    });
    const loadingDoctors = async (page: number = 1, name: string = "") => {
        father.loadingTable = true;
        try {
            const data = await DoctorServices.getDoctors(page, name);
            father.doctorsDate = data.data;
            father.pagination = data.pagination;
        } catch (error) {
            console.error("Error fetching doctors:", error);
        } finally {
            father.loadingTable = false;
        }
    };
    const loadingPage = (page: number) => {
        loadingDoctors(page, father.filter);
    };
    const searchDoctor = (name: string) => {
        father.filter = name;
        loadingDoctors(1, name);
    };

    onMounted(() => {
        loadingDoctors();
    });

    return {
        father,
        loadingPage,
        searchDoctor,
    };
};
