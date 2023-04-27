import React, { useState } from 'react';
import { db } from '../Firebase';
import { collection, addDoc } from 'firebase/firestore';

const ContactMe = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const myCollection = collection(db, 'responses');

    const handleClick = async(e) => {
        e.preventDefault()
        await addDoc(myCollection, {name, email, subject, message})
        .then(res => console.log(res)) 
    }


  return (
    <div className=' bg-[#142d4c] h-max' id='contact'>

        <h1 className=' text-4xl font-bold flex justify-center items-center pt-20 text-white'>Contact Me</h1>

        <div className="flex items-center justify-center p-6">
            <div className="mx-auto w-full max-w-[550px]">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div className="mb-5">
                    <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Full Name
                    </label>
                    <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Email Address
                    </label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="example@domain.com"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                    htmlFor="subject"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Subject
                    </label>
                    <input
                    type="text"
                    name="subject"

                    value ={subject}
                    onChange={e => setSubject(e.target.value)}
                    id="subject"
                    placeholder="Enter your subject"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                    htmlFor="message"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Message
                    </label>
                    <textarea
                    rows="4"
                    name="message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    id="message"
                    placeholder="Type your message"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                </div>
                <div>
                    <button
                    onClick={handleClick}
                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                    >
                    Submit
                    </button>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactMe;