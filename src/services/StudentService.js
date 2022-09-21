import axios from 'axios';

const STUDENT_BASE_REST_API_URL = "http://localhost:8080/addStudent";

class StudentService{

    addStudent(student) {
        return axios.post(STUDENT_BASE_REST_API_URL, student);
    }
}

export default new StudentService();