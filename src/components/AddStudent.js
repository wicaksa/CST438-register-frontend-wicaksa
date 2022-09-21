import React, { useState } from 'react'
import StudentService from '../services/StudentService';

import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const AddStudent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    const saveStudent = (e) => {
        e.preventDefault(); // Prevents refresh

        const student = {name, email};
        
        // Test 
        // console.log(student);
        StudentService.addStudent(student).then((response) => {
            console.log(response.data);

        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div>
                        <h2>Add Student</h2>
                            <div className="card-body">
                                <form>
                                    <div>
                                        <TextField 
                                               type="text"
                                               label="Name"
                                               id="filled-basic" 
                                               variant="filled"
                                               name="name"
                                               value={name}
                                               onChange = {(e) => setName(e.target.value)}> 
                                        </TextField>
                                    </div>
                                    <div>
                                        <TextField type="text"
                                               id="filled-basic" 
                                               label="Email"
                                               variant='filled'
                                               name="email"
                                               value={email}
                                               onChange = {(e) => setEmail(e.target.value)}> 
                                        </TextField>
                                        
                                    </div>
                                    <div>
                                        <Button onClick = { (e) => saveStudent(e) }
                                                variant="contained" 
                                                color="primary" 
                                                style={{margin: 10}}>
                                                Add Student
                                        </Button>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent;

