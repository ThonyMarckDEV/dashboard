interface Doctor {
    id: number;
    code: string;
    name: string;
    start_date: string;
    state: boolean;
}

interface DoctorResponse {
    success: boolean;
    data: Doctor;
    message: string;
}

export type { Doctor, DoctorResponse };
