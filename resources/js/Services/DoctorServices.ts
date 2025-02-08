import axios from "axios";

export const DoctorServices = {
    async getDoctors(page: number, name: string = "") {
        try {
            const response = await axios.get("/modulo/doctors/list", {
                params: { page, name },
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching doctors:", error);
            throw error;
        }
    },
    async getDoctorId(id: number) {
        try {
            const response = await axios.get(`/modulo/doctor/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching doctor:", error);
            throw error;
        }
    },
};
