"use client";
import {useState} from "react";

export const ContactForm =  ({slice}: any) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setError("Please fill in all fields.");
            return;
        }
        const res = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, email, message}),
        });
        const data = await res.json();
        if (data.id) {
            setSuccess("Message sent successfully.");
            setName("");
            setEmail("");
            setMessage("");
            setError("");
        } else {
            setError("Something went wrong.");
        }
    }
    return (
        <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
                        <div className="relative z-10 mb-12 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:mb-0 lg:h-[616px] lg:p-8 xl:p-11">
                            <h2 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-black">
                                {slice.primary.information_title}
                            </h2>
                            <p className="mb-[60px] text-base leading-relaxed text-body-color">
                                {slice.primary.information_subtitle}
                            </p>
                            <div className="space-y-[18px]">
                                <p className="text-base text-body-color dark:text-body-color-dark">Email: {slice.primary.information_email}</p>
                                <p className="text-base text-body-color dark:text-body-color-dark">Phone: {slice.primary.information_phone}</p>
                                <p className="text-base text-body-color dark:text-body-color-dark">Address: {slice.primary.information_address}</p></div>
                            <div className="pb-[120px] lg:pb-0">
                             </div>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                        <div
                            className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                            <h2 className="mb-3 text-2xl font-bold text-black  dark:text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                                {slice.primary.contact_title}
                            </h2>
                            <p className="mb-12 text-base text-body-color dark:text-body-color-dark">
                                {slice.primary.contact_subtitle}
                            </p>
                            <form>
                                <div className="-mx-4 flex flex-wrap">
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label htmlFor="name" className="mb-3 block text-sm text-dark dark:text-white">Your Name</label>
                                            <input placeholder="Enter your name"
                                                   className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                                                   onChange={(e) => setName(e.target.value)}
                                                   type="text" name="name"/></div>
                                    </div>
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label htmlFor="email" className="mb-3 block text-sm text-dark dark:text-white">Your
                                                Email
                                            </label>
                                            <input placeholder="Enter your email"
                                                                className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                type="email" name="email"/>
                                        </div>
                                    </div>
                                    <div className="w-full px-4">
                                        <div className="mb-8">
                                            <label htmlFor="message" className="mb-3 block text-sm text-dark dark:text-white">Your Message</label>
                                            <textarea name="message" placeholder="Enter your Message"
                                                      rows={5}
                                                      onChange={(e) => setMessage(e.target.value)}
                                                      className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"></textarea>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 pb-4">
                                    {
                                        error && <div className="text-red-500">{error}</div>
                                    }
                                    {
                                        success && <div className="text-green-500">{success}</div>
                                    }
                                    </div>
                                    <div className="w-full px-4">
                                        <button
                                            onClick={handleSubmit}
                                            className="rounded-sm bg-blue-950 px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                                            {slice.primary.contact_button_text}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
