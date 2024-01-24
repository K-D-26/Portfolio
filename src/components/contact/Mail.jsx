import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import email from '../../assets/email.gif'

const Mail = () => {
    // reset inputs
    const initialFormState = {
        user_name: '',
        user_email: '',
        message: '',
    };

    const [formData, setFormData] = useState(initialFormState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // toastify
    const handleToast = () => toast.success('Your message has been sent!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    // emailjs
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_lycjmoa',
                'template_wxfx43m',
                form.current,
                '0MXiHLPMj4joRe4tD'
            )
            .then(
                result => {
                    e.preventDefault();
                    handleToast();
                    setFormData(initialFormState);
                },
                error => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div>
            <div
                name='contact'
                className='w-full h-screen bg-gradient-to-t from-black to-gray-800 p-4 text-white'
            >
                <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline'>
                            Mail me:
                        </p>
                    </div>

                    <div className='flex justify-center items-center'>
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className='flex flex-col w-full md:w-1/2'
                        >
                            <input
                                type='text'
                                name='user_name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Enter your name'
                                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                                required
                            />
                            <input
                                type='email'
                                name='user_email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Enter your email'
                                className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                                required
                            />
                            <textarea
                                name='message'
                                rows='10'
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Type your message here'
                                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                                required
                            />
                            <button
                                className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 relative w-28'
                            >
                                Send
                                <img src={email} alt="" className='absolute h-9 ml-10' />
                            </button>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mail;