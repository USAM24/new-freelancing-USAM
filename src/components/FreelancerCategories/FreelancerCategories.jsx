import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * FreelancerCategories Component
 *
 * This component displays a list of categories, each represented by a title and an icon.
 * The categories are displayed using a grid layout, and each category item is linked
 * to its respective page. The component includes animations using Framer Motion for
 * a smoother user experience, where items fade in with a staggered delay as they enter the viewport.
 *
 * @param {Object[]} categories - An array of category objects containing a title and an icon.
 */
const FreelancerCategories = ({ categories }) => {
  // Ref to track the section element
  const ref = useRef(null);

  // Hook to check if the section is in view; triggers animations once when the section enters the viewport
  const isInView = useInView(ref, { once: true });

  // Variants for the motion container, controlling the animation of the entire grid
  const containerVariants = {
    hidden: { opacity: 0 }, // Initial hidden state with zero opacity
    visible: {
      opacity: 1, // Final visible state with full opacity
      transition: {
        staggerChildren: 0.2, // Delay between the animations of each child element
      },
    },
  };

  // Variants for each individual item in the grid, controlling the slide-in animation
  const itemVariants = {
    hidden: { opacity: 0, x: -50 }, // Initial hidden state with zero opacity and offset to the left
    visible: {
      opacity: 1,
      x: 0, // Final visible state with full opacity and no horizontal offset
      transition: { duration: 0.5 }, // Animation duration for the transition
    },
  };

  return (
    <section ref={ref}>
      <motion.div
        className="grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-6" // Grid layout with responsive columns
        initial="hidden" // Initial animation state
        animate={isInView ? 'visible' : 'hidden'} // Trigger animation based on the visibility of the section
        variants={containerVariants} // Apply the container animation variants
      >
        {categories.map(({ title, icon, id }) => (
          <motion.div key={id} variants={itemVariants}>
            {' '}
            {/* Apply individual item animation variants */}
            <Link
              to={`/categories/${id}`} // Dynamic link to the category page
              className="py-6 my-3 px-4 flex flex-col gap-4 bg-neutral-50 rounded-[10px]" // Styling for the category card
            >
              <img src={icon} alt={title} className="w-6 h-6" />{' '}
              {/* Category icon */}
              <div className="text-lg text-pure-black">{title}</div>{' '}
              {/* Category title */}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

// PropTypes validation for the FreelancerCategories component props
FreelancerCategories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired, // Title of the category (required)
      icon: PropTypes.string.isRequired, // URL or path to the category icon (required)
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Ensuring id is either a string or number
    })
  ).isRequired,
};

export default FreelancerCategories;
