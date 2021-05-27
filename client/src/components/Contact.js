import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
 
const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [userData, setUserData] = useState({});
    const [Data, setData] = useState({});

    const authenticateUser = async () => {
        
        try {
            const res = await fetch('/contact', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
    
            const data = await res.json();
            setUserData(data)
    
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
}, [])

const postMessage = async (data) => {
    const res = await fetch('/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    console.log('data posted')
    
    const result = await res.json();
    if (result.status !== 200) {
        window.alert('Failed to send your message !')
    }else{
        console.log('message send...')
    }
}


const onSubmit = (data) => {
    setData(data);
    console.log(data)
        postMessage(data)
};


    return (
       
<section className="contact">
    <div className="overlay"></div>
        <div className="content">
             <h2>Contact Us</h2>
             <p>This is content section which is comletely reponsive to any type of device. This can be used for any type of templates.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis mi interdum, faucibus leo sed, bibendum quam. </p>
        </div>
        <div className="container">
            <div className="contactInfo">
                <div className="box">
                    <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                    <div className="text">
                        <h3>Address</h3>
                        <p> 6478 Sugar Campa Road, <br /> Owatonna, Minnesota,<br /> 55060</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                    <div className="text">
                        <h3>Phone</h3>
                        <p>564-464-4689</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></div>
                    <div className="text">
                        <h3>Email</h3>
                        <p>sample@gmail.com</p>
                    </div>
                </div>
            </div>
            
            <div className="contactForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Send Message</h2>
                    <div className="inputBox">
                        <input type="text" required {...register("fullname")} />
                        <span>Full Name</span>
                    </div>
                    <div className="inputBox">
                        <input type="email" required {...register("email")} />
                        <span>Email</span>
                    </div>
                    <div className="inputBox">
                        <textarea required {...register("comment", {
                            minLength: { value: 3, message: "Too short" }
                        })}></textarea>
                        <span>Type your message...</span>
                        {errors.comment && <p>{errors.comment.message}</p>}
                    </div>
                    <div className="inputBox">
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}

export default Contact
