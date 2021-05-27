import React,{useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

const About = () => {

    const [userData, setUserData] = useState({})

    const history = useHistory()
    const authenticateUser = async () => {
        try {
            const res = await fetch('/about', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
    
            const data = await res.json();
            setUserData(data);
    
            if(res.status !== 200){
                const error = new Error(res.error);
                throw error
            }
            
        } catch (error) {
            history.push('/signin')
            console.log(error)
        }
    }

useEffect(() => {
    authenticateUser();
},[])

    return (
        <div className="text-center about">
            <div className="container col-7 mx-auto bg-white p-5 shadow-lg">
                <div className="row px-5 d-flex align-items-center">
                    <img className="img-fluid rounded-circle col-2" src="https://images.unsplash.com/photo-1621963420375-e8d44b41058c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div className="col-5">
                        <h2>{userData.fullname}</h2>
                        <h5 className="text-primary">Web Developer</h5>
                    </div>
                </div>
                <hr className="text-secondary" />
                <div className="row my-3">
                    <div className="py-2 px-5 d-flex justify-content-between">
                        <h3>User Id</h3>
                        <p className="lead text-primary">{userData._id}</p>
                    </div>
                    <div className="py-2 px-5 d-flex justify-content-between">
                        <h3>Name</h3>
                        <p className="lead text-primary">{userData.fullname}</p>
                    </div>
                    <div className="py-2 px-5 d-flex justify-content-between">
                        <h3>Email Id</h3>
                        <p className="lead text-primary">{userData.email}</p>
                    </div>
                    <div className="py-2 px-5 d-flex justify-content-between">
                        <h3>Phone</h3>
                        <p className="lead text-primary">9898989898</p>
                    </div>
                    <div className="py-2 px-5 d-flex justify-content-between">
                        <h3>Profession</h3>
                        <p className="lead text-primary">web Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
