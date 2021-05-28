import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

const Home = () => {
    
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
            console.log(error)
        }
    }

useEffect(() => {
    authenticateUser();
},[])


    return (
        <div className="text-center home p-10">
            {userData ? (<>
             <p className="text-uppercase fs-4">welcome back <span className="text-danger display-4 fw-bold">{userData.fullname}</span></p>
            <h1 className="fw-bold fs-1 text-capitalize">Glad to see you again !</h1>
            </>) :
            (<>
            <p className="text-uppercase fs-4 text-primary">welcome</p>
            <h1 className="fw-bold fs-1 text-capitalize">We are the mern developer </h1>
            </> )   
    }     
        </div>

    )
}

export default Home
