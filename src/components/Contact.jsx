import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_rwzj0c9",
        "template_md73214",
        {
          from_name: form.name,
          to_name: "Arafat",
          from_email: form.email,
          to_email: "arafat24official@gmail.com",
          message: form.message,
        },
        "AVeg99Wfyt3fVKJ9X"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          alert("Something went wrong!");
          setLoading(false);
          console.error(error);
        }
      );
  };

  return (
    <div className="flex xl:flex-row xl:mt-12 flex-col-reverse gap-10 overflow-hidden max-w-3xl mx-auto">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-bold mb-4">Your Name</span>
            <input
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border border-gray-500"
              type="text"
              name="name"
              placeholder="What's your good name?"
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-bold mb-4">Your Email</span>
            <input
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border border-gray-500"
              type="email"
              name="email"
              placeholder="What's your email address?"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-bold mb-4">Your Message</span>
            <textarea
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium border border-gray-500"
              name="message"
              rows={7}
              placeholder="What you want to say?"
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button className="bg-pink-500 hover:bg-pink-600 py-2 text-white rounded-lg outline-none border-none font-medium shadow-lg shadow-primary text-center uppercase text-xl">
            {loading ? "Sending..." : "send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
