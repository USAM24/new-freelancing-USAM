import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * FreelancerCategories Component
 *
 * This component displays a list of freelancer categories using a grid layout.
 * Each category is represented by a card containing an icon and a title.
 * The component utilizes Framer Motion for animations, applying fade-in and slide effects to the category items.
 *
 * @param {Array} categories - Array of category objects. Each object must have a `title`, `icon`, and `id` property.
 */
const FreelancerCategories = ({ categories }) => {
  // Variants for the container's animation:
  // `hidden` sets initial opacity to 0,
  // `visible` gradually increases the opacity and staggers the appearance of child elements.
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between children animations
      },
    },
  };

  // Variants for each item's animation:
  // `hidden` starts with opacity 0 and positioned slightly left (x: -50),
  // `visible` fades in the item and slides it to its original position with a duration of 0.7 seconds.
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <section>
      {/* Motion div acts as the container for the category items with animations */}
      <motion.div
        className="grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {categories.map(({ title, icon, id }) => (
          // Each category is animated using motion.div with the specified item variants
          <motion.div key={id} variants={itemVariants}>
            <Link
              to={`/categories/${id}`}
              className="py-6 px-4 flex flex-col gap-4 bg-neutral-50 rounded-[10px]"
            >
              <img src={icon} alt={title} className="w-6 h-6" />
              <div className="text-lg text-pure-black">{title}</div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

// PropTypes validation to ensure the categories prop is an array of objects
// containing a required `title` (string), `icon` (string), and `id` (unique identifier)
FreelancerCategories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Ensuring id is either a string or number
    })
  ).isRequired,
};

export default FreelancerCategories;
