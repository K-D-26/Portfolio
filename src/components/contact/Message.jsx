import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Message = () => {
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

    // reset inputs
    const initialFormState = {
        name: '',
        email: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        handleToast();
        setFormData(initialFormState);
    }

    return (
        <div>
            <div
                name='contact'
                className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'
            >
                <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline '>
                            Message me:
                        </p>
                        {/* <p className='py-6'>Message me.</p> */}
                    </div>

                    <div className='flex justify-center items-center'>
                        <form
                            action='https://getform.io/f/baa0d59b-7090-4ad6-9506-2c1a7e1a332f'
                            method='POST'
                            onSubmit={handleSubmit}
                            className='flex flex-col w-full md:w-1/2'
                        >
                            <input
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Enter your name'
                                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                                required
                            />
                            <input
                                type='email'
                                name='email'
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
                            ></textarea>

                            <button
                                className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
                            >
                                Let's talk
                            </button>
                            <ToastContainer />
                        </form>
                    </div>
                    <br />
                    <br />
                    <p className='text-4xl font-bold text-center'>- OR -</p>
                </div>
            </div>
        </div>
    );
};

export default Message;