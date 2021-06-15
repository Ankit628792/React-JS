import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../App';


function Signout() {

    const { state, dispatch } = useContext(UserContext);

    const history = useHistory();

    useEffect(() => {
        fetch('/logout', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then((res) => {
            dispatch({ type: 'USER', payload: false })
            history.push('/signin', { replace: true })
            if (res.status !== 200) {
                const error = new Error(res.error)
                throw error;
            }
        }).catch((err) => {
            console.log(err)
        })
    })

    return (
        <div className="text-center py-5 mx-auto display-4 text-warning">
           Logging Out ...
        </div>
    )
}

export default Signout
