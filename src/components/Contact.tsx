import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Use your actual EmailJS service ID, template ID, and user ID
      const serviceId = "service_deking";
      const templateId = "template_uitq3b4";
      const userId = "m-um1IxnAqd15RP35";

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
        to_name: "Joshua Kolawole",
      };

      // Send the email
      await emailjs.send(serviceId, templateId, templateParams, userId);

      // Success
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error("Email failed to send:", err);
      setError(
        "Failed to send message. Please try again or contact me directly at kolawolejoshua459@gmail.com"
      );

      // Clear error after 5 seconds
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Get In{" "}
            <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6 md:gap-8">
              {/* Contact Info */}
              <div className="md:col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone
                        className="text-blue-600 dark:text-blue-400"
                        size={18}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Phone/WhatsApp
                      </h4>
                      <p className="text-gray-800 dark:text-gray-200">
                        +234 902 795 1602
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail
                        className="text-blue-600 dark:text-blue-400"
                        size={18}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Email
                      </h4>
                      <p className="text-gray-800 dark:text-gray-200">
                        kolawolejoshua459@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin
                        className="text-blue-600 dark:text-blue-400"
                        size={18}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Location
                      </h4>
                      <p className="text-gray-800 dark:text-gray-200">
                        Ogun State, Nigeria
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <h3 className="text-lg font-semibold mb-4">
                    Connect With Me
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/joshua-kolawole-40062a287"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://github.com/kingkreation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center hover:bg-gray-800 hover:text-white dark:hover:bg-gray-700 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="https://www.instagram.com/madebydeking/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:text-white transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="https://wa.me/+2349027951602"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
                    >
                      <FaWhatsapp size={18} />
                    </a>
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <div className="md:col-span-3 bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Send Me a Message
                </h3>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg"
                  >
                    <div className="flex items-center">
                      <div className="mr-3 flex-shrink-0 w-8 h-8 bg-green-200 dark:bg-green-800/30 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-600 dark:text-green-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">
                          Thank you for your message!
                        </p>
                        <p className="text-sm mt-1">
                          I'll get back to you as soon as possible.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : error ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 p-4 rounded-lg mb-6"
                  >
                    <div className="flex items-center">
                      <div className="mr-3 flex-shrink-0 w-8 h-8 bg-red-200 dark:bg-red-800/30 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-600 dark:text-red-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Error</p>
                        <p className="text-sm mt-1">{error}</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`
                        w-full px-6 py-3 flex items-center justify-center rounded-md text-white font-medium shadow-md
                        ${
                          isSubmitting
                            ? "bg-blue-400 dark:bg-blue-500 cursor-wait"
                            : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                        }
                      `}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
