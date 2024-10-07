import PropTypes from 'prop-types';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * HowItWorks Component
 *
 * This component displays a section describing how a specific process or service works.
 * It includes a title, a list of steps or features, and an image. The content is animated
 * using Framer Motion, with animations triggered when the section enters the viewport.
 *
 * Props:
 * @param {string} title - The title of the section. Default is a fallback string if not provided.
 * @param {Array} data - An array of objects representing steps or features, each containing a title and description.
 * @param {string} image - The URL of the image to be displayed alongside the text.
 */

const HowItWorks = ({ title, data, image }) => {
  // Create a reference to the section element to track its visibility in the viewport
  const ref = useRef(null);

  // Determine if the section is in view, triggering animations if true
  const isInView = useInView(ref, { once: true });

  // Define animation variants for the container that holds the list items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7, // Delay between the start of each item's animation
      },
    },
  };

  // Define animation variants for each item in the list
  const itemVariants = {
    hidden: { opacity: 0, y: -20 }, // Start hidden and slightly translated upward
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Animate to visible and reset position
  };

  // Define animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, y: -600 }, // Start hidden and translated far upward
    visible: { opacity: 1, y: 0, transition: { duration: 2 } }, // Animate to visible and reset position
  };

  return (
    <section className="overflow-hidden pb-7" ref={ref}>
      <div className="container mx-auto flex justify-between">
        {/* Left column containing the title and list of steps/features */}
        <motion.div
          className="basis-[48%]"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <h1 className="mb-[22px] lg:text-[32px] font-semibold dark:text-pure-white">
            {/* Display the title, or a default fallback text */}
            {title ? title : 'How a USAM helps you get your work'}
          </h1>
          <div className="space-y-4">
            {/* Map through the data array to display each step/feature */}
            {data.map(({ title, description }) => (
              <motion.div
                key={title} // Ensure each item has a unique key
                className="space-y-2"
                variants={itemVariants}
              >
                <div className="flex items-center">
                  <div className="w-1 h-1 rounded-full bg-pure-black dark:bg-pure-white mx-3" />
                  <h3 className="font-medium lg:text-xl dark:text-pure-white">{title}</h3>
                </div>
                <p className="lg:text-lg text-[#000000B2] dark:text-pure-white">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right column containing the image */}
        <motion.div
          className="basis-[48%] flex items-center justify-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={imageVariants}
        >
          <div>
            <img src={image} alt={image} />{' '}
            {/* Display the image with a fallback alt text */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Prop types to enforce expected data types for the component's props
HowItWorks.propTypes = {
  image: PropTypes.string, // URL of the image
  title: PropTypes.string, // Section title
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired, // Title of each step/feature
      description: PropTypes.string.isRequired, // Description of each step/feature
    })
  ).isRequired, // Array of steps/features is required
};

export default HowItWorks;
