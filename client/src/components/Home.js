import React, { useState, useEffect } from 'react'
import getData from '../requests/getData'

const Home = () => {

    const [userData, setUserData] = useState({})

    const authenticateUser = async () => {
        try {
            const { data, res } = await getData('/contact');

            setUserData(data)
            if (res.status !== 200) {
                console.log('unauthorised user')
            }
        } catch (error) {
            console.log('unauthorised user')
        }
    }
    useEffect(() => {
        authenticateUser();
    })


    return (
        <div className="text-center home p-10">
            {userData.fullname  ? (<>
                <p className="text-uppercase fs-4">welcome back <span className="text-danger display-4 fw-bold">{userData.fullname}</span></p>
                <h1 className="fw-bold fs-1 text-capitalize">Glad to see you again !</h1>
            </>) :
                (<>
                    <p className="text-uppercase fs-4 text-primary">welcome</p>
                    <h1 className="fw-bold fs-1 text-capitalize">Signin for More ...</h1>
                </>)
            }
        </div>

    )
}

export default Home
