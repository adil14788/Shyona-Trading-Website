import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className=" max-w-[1200px] mx-auto relative">
        <div className="py-24 grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <TypeAnimation
                    sequence={[
                        "Forex Trader",
                        1000,
                        "Investor Consultent",
                        1000,
                        "Forex Mentor",
                        1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                />

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-400 md:text-7xl text-5xl tracking-tight mb-4"
                >
                    HEY, I AM <br/>
                    <span className="text-purple-500">Nobonil Mondol</span>
                </motion.p>


                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-500 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                >
                    I am a rowdy forex trader with over 5 years of experience.
                </motion.p>


                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                    {/* <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        className="z-10 cursor-pointer font-bold text-gray-400 md:w-auto p-4 border
                                     border-purple-400 rounded-xl"     
                    >
                        Join Us
                    </motion.button> */}

                    <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.youtube.com/@shyonaTraders1993">
                            <AiOutlineYoutube/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="#">
                            <AiOutlineLinkedin/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/shyonatradingacademy">
                            <AiOutlineInstagram/>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>

            <motion.img 
                src='img/mentor/mentor-final.png'
                className="w-[400px] md:w-[500px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />


         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
            >



            </motion.div>    
        </div>
        
    </div>
  )
}

export default Hero