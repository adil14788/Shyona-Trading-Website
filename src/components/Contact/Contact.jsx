// ContactForm.jsx
import React, { useState } from "react";
import Navbar from "../Mentor/components/Navbar";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        message: "",
    });

    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value)
        setFormData({
            ...formData,
            [name]: value,
            [message]: value
        });
    };

    const phoneNumber = '+919631911369'; // Replace with your phone number

    const sendEmail = (e) => {
        e.preventDefault();
        
        const url = `whatsapp://send?phone=${phoneNumber}&text=${message.value}`;
        console.log(message)
        window.open(url, '_blank');
        
    
      };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-300 via-indigo-200 to-white-300 ">
            <div className="bg-rose-50 p-8 rounded-lg shadow-lg w-full max-w-lg">
                <Navbar/>
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
                    Contact Us
                </h2>
                <form  className="space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-800"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-2 block w-full px-4 py-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-800"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="mt-2 block w-full px-4 py-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>

                    <div>
                        <button onClick={sendEmail}
                            type="submit" disabled={sending}
                            className="w-full bg-purple-600 text-white py-3 px-6 rounded-md shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                              {sending ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
                <p>{status}</p>
            </div>
        </div>
    );
};

export default Contact;
