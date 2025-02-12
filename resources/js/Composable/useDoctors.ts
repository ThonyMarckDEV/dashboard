import { Pagination } from "@/Interfaces/Pagination";
import {
    Doctor,
    DoctorResponse,
} from "@/Pages/Doctor/Interfaces/InterfaceDoctor";
import { DoctorServices } from "@/Services/DoctorServices";
import { useToastUtil } from "@/Utils/Message";
import { onMounted, reactive } from "vue";

export const useDoctors = () => {
    const { showInfo } = useToastUtil();
    const father = reactive({
        doctorsDate: [] as Doctor[],
        pagination: {} as Pagination,
        loadingTable: false as boolean,
        filter: "" as string,
        idDoctor: 0 as number,
        statusModal: {
            register: false as boolean,
            delete: false as boolean,
        },
        doctorData: {} as Doctor,
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
    const getDoctor = async (id: number) => {
        if (id === 0) {
            father.doctorData = {} as Doctor;
            return;
        }
        father.loadingTable = true;
        try {
            const response: DoctorResponse = await DoctorServices.getDoctorId(
                id
            );
            if (response.success) {
                showInfo(response.message);
                father.doctorData = response.data;
            }
        } catch (error) {
            console.error("Error fetching doctor:", error);
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
    const emitIdDoctorRegister = async (id: number) => {
        father.idDoctor = id || 0;
        await getDoctor(father.idDoctor);
        father.statusModal.register = true;
    };
    const emitIdDoctorDelete = (id: number) => {
        father.statusModal.delete = true;
        father.idDoctor = id;
        console.log(father.idDoctor);
    };
    const closeModalAll = (type: "register" | "delete") => {
        if (type === "register") {
            father.statusModal.register = false;
        } else {
            father.statusModal.delete = false;
        }
        father.idDoctor = 0;
        father.doctorData = {} as Doctor;
    };
    const refreshDoctors = () => {
        loadingDoctors(father.pagination.current_page, father.filter);
    };
    onMounted(() => {
        loadingDoctors();
    });

    return {
        father,
        loadingPage,
        searchDoctor,
        emitIdDoctorRegister,
        emitIdDoctorDelete,
        closeModalAll,
        refreshDoctors,
    };
};
