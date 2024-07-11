import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";

const BlogTitle = () => {
  return (
    <>
      <h2 className={`${styles.sectionHeadText}`}>Blogs.</h2>
      <p className="text-sm sm:text-md text-slate-300 mb-0">
        Here are some the blogs related to my works and activities.
      </p>
    </>
  );
};

export default SectionWrapper(BlogTitle, "blog");
