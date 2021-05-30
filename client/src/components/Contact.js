import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import postData from '../requests/postData';
import getData from '../requests/getData'

const Contact = () => {

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({reValidateMode: 'onChange'});
    const [Data, setData] = useState({});

    const [userData, setUserData] = useState({})

    const authenticateUser = async () => {
        try {
            const { data, res } = await getData('/contact');

            setUserData(data)
            // setValue('fullname', data.firstname)
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


    var userId = 'non-registered'
    const onSubmit = (data) => {
        setData(data);
        reset()
        userData.userId ? userId = userData.userId : userId = userId
        const commentData = { userId, ...data }
        const status = postData(commentData, '/comments')
        status.then((status) => {
            if (status === 201) {
                console.log('message sent ...')
            }
            else {
                console.log('unable to send message ...')
            }
        })

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
                            <input type="text" required {...register("fullname")} 
                             />
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="email" required {...register("email",{
                                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                            })} />
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <textarea required {...register("comment", {
                                minLength: { value: 3, message: "Too short" }
                            })}></textarea>
                            <span>Type your message...</span>
                            {errors.comment && <p className="text-danger">{errors.comment.message}</p>}
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
