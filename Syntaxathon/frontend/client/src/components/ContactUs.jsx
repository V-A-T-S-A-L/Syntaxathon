import React from "react";

const ContactUs = () => {
    return (
        <div className="min-h-screen min-w-screen bg-green-100 flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold text-green-800 mb-6 mt-24">Contact Us</h1>
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row gap-6">
                {/* Contact Form */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">
                        Get in Touch
                    </h2>
                    <form className="flex flex-col gap-4 text-black">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        ></textarea>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Google Maps */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Location</h2>
                    <div className="w-full h-64 border-2 border-green-300 rounded-lg overflow-hidden">
                        <iframe
                            title="Google Maps Location"
                            className="w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1858.7613222903583!2d72.82054655844436!3d19.045181172775084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9410830616d%3A0x111b63353dbbce01!2sFr.%20Conceicao%20Rodrigues%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1738504038924!5m2!1sen!2sin"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
