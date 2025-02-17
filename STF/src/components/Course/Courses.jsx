import React from 'react';
import Navbar from '../Mentor/components/Navbar';

const Course = () => {
    const phoneNumber = '+919631911369'; // Replace with your phone number

    const handleClick = () => {
      const url = `https://wa.me/${phoneNumber}`;
      window.open(url, '_blank');
    };
    const course = {
        id: 1,
        title: "Forex Trading Bootcamp",
        description: "Learn Forex Trading, Indian Markets , Comodities , and more in this comprehensive trading course.",
        price: "Rs. 25000",
        image: "img/course/img2.jpg",
        lessons: [
            "Advanced Liquidation Entry Strategies",
            "Double/Triple Liquidity Strategy",
            "5 Secrets of Advanced Market Techniques",
            "Order Block (OB) Refinement",
            "5 Criteria for Selecting Order Blocks (OBs)",
            "Advanced Market Psychology Secrets"
        ],
        chapters:['Basic to Advanced Smart Money Concepts (SMC)',
            'CTOF / PTOF Trade Setup',
            'OFRA / OFS (Order Flow Reversal & Order Flow Shift)',
            'Smart Money Trap Trading',
            'Market Maker Manipulation (MMM)',
            'CHOCH (Change of Character) & IDM (Institutional Distribution Manipulation) Setup',
            'BOS (Break of Structure) / CHOCH Trap Entry',

        ]
    };

    return (
        <div className="min-h-screen bg-cyan-100  p-8 shadow-xl ">
            <Navbar/>

            <header className="text-center mb-12 mt-20">
                <h1 className="text-5xl font-extrabold text-blue-800 tracking-tight">Course Details</h1>
                <p className="text-lg text-blue-600 mt-4">Get all the details about this amazing course.</p>
            </header>

            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
                <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-2">{course.title}</h2>
                    <p className="text-blue-600 mb-4">{course.description}</p>

                    {/* What You Will Learn Section */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-4">What You Will Learn</h3>
                        <ul className="list-disc pl-6 space-y-2 text-blue-600">
                            {course.lessons.map((lesson, index) => (
                                <li key={index} className="text-lg">{lesson}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Chapters </h3>
                        <ul className="list-disc pl-6 space-y-2 text-blue-600">
                            {course.chapters.map((chapter, index) => (
                                <li key={index} className="text-lg">{chapter}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Features </h3>
                        <ul className="list-disc pl-6 space-y-2 text-blue-600">
                                <li className="text-lg">Lifetime dedicated Support </li>
                                <li className="text-lg">Monthly Doubt Session </li>
                                <li className="text-lg">Free of Cost upgradation in Algorithms </li>
                                <li className="text-lg">Weekly Live Analysis of Markets </li>
                        </ul>
                    </div>



                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-blue-900">{course.price}</span>
                        <button onClick={handleClick}className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
