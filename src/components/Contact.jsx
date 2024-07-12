import { motion } from "framer-motion";

import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  return (
    <div className="flex xl:flex-row xl:mt-12 flex-col-reverse gap-10 overflow-hidden max-w-3xl mx-auto">
      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#0e100f] p-8 rounded-2xl border border-[#fffce1]"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <div className="p-5 rounded divide-y">
          <div className="space-y-2 mb-3 text-[#fffce1] pr-2">
            <p className="flex items-center justify-between">
              <span className="font-semibold text-lg">Country</span>
              <span className="text-gray-400">Bangladesh</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="font-semibold text-lg">City</span>
              <span className="text-gray-400">Dhaka</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="font-semibold text-lg">Company</span>
              <span className="text-gray-400">Working as Freelancer</span>
            </p>
          </div>
          <div className="space-y-2 pt-3 pr-2">
            <p className="flex items-center justify-between">
              <span className="font-semibold text-lg">E-mail</span>
              <span className="text-gray-400">arafat8720@gmail.com</span>
            </p>
            <a
              href="https://www.linkedin.com/in/webdev-arafat/"
              className="flex items-center justify-between"
            >
              <span className="font-semibold text-lg">Linkedin</span>
              <span className="text-gray-400">Arafat Hossain</span>
            </a>
            <p className="flex items-center justify-between">
              <span className="font-semibold text-lg">Phone</span>
              <span className="text-gray-400">+880 1870577034</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
