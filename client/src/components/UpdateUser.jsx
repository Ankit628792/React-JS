import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function EditDataForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [data, setData] = useState({});


    // onSubmit handle event 
    const onSubmit = (data) => {
        setData(data);
        console.log(data)
    };


    
    const [name, setname] = useState({
        fullname: "",
        email: '',
        comment: ''
    })
    const handleInput = (e) => {
        console.log(e)
        const { name, value } = e.target;

        console.log(e.target.value)
        console.log(e.target.name)

        setname((preValue) => {
            console.log(preValue);
            return {
                preValue,
                [name]: value
            }
        })
    }
    
    return (

        <>
            <div class="modal fade" id="newstudentdata" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create New student</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form class="row g-3 col-md-10 col-11 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                                <div class="col-6 mb-0 mt-2">
                                    <label for="sname" class="form-label">Student Name</label>
                                    <input type="text" class="form-control" id="sname" {...register("studentname", { required: 'Please enter your first name' })} />
                                    {errors.studentname && <p className="text-danger">{errors.studentname.message}</p>}
                                </div>
                                <div class="col-6 mb-0 mt-2">
                                    <label for="fathername" class="form-label">Father's Name</label>
                                    <input type="text" class="form-control" id="fathername" {...register("fathername", { required: "Please enter your father's name" })} />
                                    {errors.fathername && <p className="text-danger">{errors.fathername.message}</p>}
                                </div>
                                <div class="col-6 mb-0 mt-2">
                                    <label for="semail" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="semail" required {...register('email')} />

                                </div>
                                <div class="col-6 mb-0 mt-2">
                                    <label for="sphone" class="form-label">Phone Number</label>
                                    <input type="number" class="form-control" id="sphone"{...register("phone", {
                                        required: "Please enter phone number",
                                        minLength: { value: 9, message: "Too short" }
                                    })} />
                                    {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                                </div>
                                <div class="col-3 mb-0 mt-2">
                                    <label for="sclass" class="form-label">Class</label>
                                    <select id="sclass" class="form-select" required {...register("class")}>
                                        <option selected>6th</option>
                                        <option>7th</option>
                                        <option>8th</option>
                                        <option>9th</option>
                                        <option>10th</option>

                                    </select>
                                </div>
                                <div class="col-3 mb-0 mt-2">
                                    <label for="smarks" class="form-label">Marks</label>
                                    <input type="number" class="form-control" id="smarks" required {...register("marks", {
                                        minLength: { value: 2, message: "Too short" },
                                        maxLength: { value: 2, message: "Too Long" },
                                    })} />
                                    {errors.marks && <p className="text-danger">{errors.marks.message}</p>}
                                </div>
                                <div class="col-6 mb-0 mt-2">
                                    <label for="datetime-local" className="form-label">DOB</label>
                                    <input type="datetime-local" id="datetime-local" className="form-control" required {...register('dob')} />
                                </div>

                                <div class="col-12 mb-0 mt-2">
                                    <label for="inputAddress" class="form-label">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required {...register('adress1')} />
                                </div>
                                <div class="col-12 mb-0 mt-2">
                                    <label for="inputAddress2" class="form-label">Address 2</label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" {...register('adress2')} />
                                </div>
                                <div class="col-md-6 mb-0 mt-2">
                                    <label for="inputCity" class="form-label">City</label>
                                    <input type="text" class="form-control" id="inputCity" required {...register('city')} />
                                </div>
                                <div class="col-md-4 mb-0 mt-2">
                                    <label for="inputState" class="form-label">State</label>
                                    <input type="text" class="form-control" id="inputState" required {...register('state')} />
                                </div>
                                <div class="col-md-2 mb-0 mt-2">
                                    <label for="inputZip" class="form-label">Zip Code</label>
                                    <input type="text" class="form-control" id="inputZip" required {...register('zipcode')} />
                                </div>


                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary" onClick={() => {
                                        window.alert('student registered successfully')
                                    }}>Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default EditDataForm
