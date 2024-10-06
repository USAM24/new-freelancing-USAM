import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// The TrustedBySection component displays a list of companies that trust the brand.
// It animates the appearance of these companies' logos and names using Framer Motion.
const TrustedBySection = ({ data }) => {
  // Ensure data is an array to avoid map errors.
  // If data is not an array, default to an empty array.
  const validData = Array.isArray(data) ? data : [];

  // Variants for the animation of the container element.
  // Defines the starting (hidden) and ending (visible) states of the container.
  const containerVariants = {
    hidden: { opacity: 0, x: -50 }, // Initial state: transparent and slightly shifted left.
    visible: {
      opacity: 1,
      x: 0, // Final state: fully opaque and in the original position.
      transition: {
        staggerChildren: 0.2, // Animates child elements one after another with a 0.2s delay.
      },
    },
  };

  // Variants for the animation of individual items (company logos and names).
  // Similar to containerVariants but applies to each child element.
  const itemVariants = {
    hidden: { opacity: 0, x: -50 }, // Initial state: transparent and shifted left.
    visible: { opacity: 1, x: 0 }, // Final state: fully opaque and in the original position.
  };

  return (
    // Main section with a light gray background.
    <section className="bg-[#E9E9E9]">
      <div className="container mx-auto py-3  ">
        {' '}
        {/* Container for centering and padding */}
        <motion.div
          className="flex items-center space-x-6" // Flexbox container for horizontal layout with space between items.
          initial="hidden" // Initial animation state is "hidden".
          animate="visible" // On render, animate to "visible" state.
          variants={containerVariants} // Apply containerVariants for animation.
        >
          <motion.p
            className="text-[#999999] lg:text-lg font-semibold" // Styling for the "Trusted by:" text.
            variants={itemVariants} // Apply itemVariants for animation.
            transition={{ duration: 0.5 }} // Duration of the text fade-in animation.
          >
            Trusted by:
          </motion.p>

          {/* Map over validData to render each company logo and name */}
          {validData.map(({ icon, company }, index) => (
            <motion.div
              key={company} // Unique key based on the company name.
              className="space-x-1 flex items-center text-[#999999]" // Flexbox for icon and company name with spacing.
              variants={itemVariants} // Apply itemVariants for animation.
              transition={{ duration: 0.5, delay: 0.7 * (index + 1) }} // Add delay based on the index for staggered animation.
            >
              <img src={icon} alt={company} className="w-6 h-6" />{' '}
              {/* Company logo */}
              <p className="text-xl font-medium">{company}</p>{' '}
              {/* Company name */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Define the expected prop types for the TrustedBySection component.
TrustedBySection.propTypes = {
  // The data prop should be an array of objects, each containing an icon (URL string) and a company name (string).
  data: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired, // URL to the company logo (required).
      company: PropTypes.string.isRequired, // Company name (required).
    })
  ).isRequired, // The data prop itself is required.
};

export default TrustedBySection;
