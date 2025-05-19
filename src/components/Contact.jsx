import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Titleheader from "../assets/Titleheader"
// import Contactexp from '../Models/ContactModel/Contactexp'
import Ghost from '../Models/GhostModel/Ghost'
import emailjs from "@emailjs/browser"

const Contact = () => {
    const formRef = useRef(null)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })

        // Clear error when user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ""
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault() // Prevent default form submission
        
        // Validate form FIRST
        let formErrors = {}
        if (!formData.name.trim()) formErrors.name = "Name is required"
        if (!formData.email.trim()) formErrors.email = "Email is required"
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) formErrors.email = "Please enter a valid email"
        if (!formData.message.trim()) formErrors.message = "Message is required"

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
            return
        }

        setIsSubmitting(true)
        
        try {
            // Fixed EmailJS method call
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            
            // Success - clear form and show success message
            setSubmitSuccess(true)
            setFormData({ name: "", email: "", message: "" })
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                setSubmitSuccess(false)
            }, 5000)
            
        } catch (error) {
            console.log("EmailJS Error: ", error)
            // Optionally show error message to user
            alert("Failed to send message. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div id='contact' className='flex item-centre justify-center mt-14 px-5 py-10 md:py-16 md:px-8'>
            <div className='w-full h-full mf:px-10 px-5'>
                <Titleheader title={"Get in touch with me"} sub={"📩 Contact Information"} />
                <div className='mt-16 grid grid-cols-12'>
                    {/* Contact form left Side */}
                    <div className='xl:col-span-6 col-span-12'>
                        <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
                            <motion.div
                                className="space-y-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <label htmlFor="name" className="block text-gray-300 font-medium">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-5 py-3 rounded-xl bg-gray-700 border ${errors.name ? "border-red-500" : "border-gray-600 hover:border-blue-500"
                                        } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 placeholder-gray-500`}
                                    placeholder="John Doe"
                                />
                                {errors.name && <motion.p
                                    className="text-red-400 text-sm mt-1"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {errors.name}
                                </motion.p>}
                            </motion.div>

                            <motion.div
                                className="space-y-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <label htmlFor="email" className="block text-gray-300 font-medium">Your Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-5 py-3 rounded-xl bg-gray-700 border ${errors.email ? "border-red-500" : "border-gray-600 hover:border-blue-500"
                                        } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 placeholder-gray-500`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && <motion.p
                                    className="text-red-400 text-sm mt-1"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {errors.email}
                                </motion.p>}
                            </motion.div>

                            <motion.div
                                className="space-y-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <label htmlFor="message" className="block text-gray-300 font-medium">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-5 py-3 rounded-xl bg-gray-700 border ${errors.message ? "border-red-500" : "border-gray-600 hover:border-blue-500"
                                        } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 placeholder-gray-500`}
                                    placeholder="I'd like to discuss..."
                                ></textarea>
                                {errors.message && <motion.p
                                    className="text-red-400 text-sm mt-1"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {errors.message}
                                </motion.p>}
                            </motion.div>

                            <motion.div
                                className="pt-2 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 ${isSubmitting
                                        ? "opacity-70 cursor-not-allowed"
                                        : "hover:from-blue-500 hover:to-blue-600"
                                        }`}
                                    whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center space-x-2">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>Sending...</span>
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                            </svg>
                                            <span>Send Message</span>
                                        </span>
                                    )}
                                </motion.button>

                                {submitSuccess && (
                                    <motion.div
                                        className="mt-6 p-4 bg-green-600/90 text-white rounded-lg flex items-center justify-center space-x-2"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 500 }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Message sent successfully! I'll get back to you soon.</span>
                                    </motion.div>
                                )}
                            </motion.div>
                        </form>
                    </div>

                    {/* 3d-model Right Side */}
                    <div className="xl:col-span-6 col-span-12">
                        <div className='w-full h-full hover:cursor-grab'>
                            {/* <Contactexp /> */}
                            <Ghost />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact