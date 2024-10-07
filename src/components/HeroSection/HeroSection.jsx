import { motion } from 'framer-motion';
import Button from '../ui/Button';
import halfcircle from '../../assets/halfcircle.png';
import herocircle from '../../assets/herocircle.png';
import businessman from '../../assets/businessman.png';

const HeroSection = () => {
  // Animation variants for elements on the left side of the HeroSection
  // `hidden`: Initial state where elements are slightly off-screen to the left and fully transparent
  // `visible`: Final state where elements are in their final position with full opacity, with a staggered delay based on the `i` index
  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2, // Delay each element by 0.2 seconds to create a staggered effect
        duration: 0.5, // Duration of the animation for each element
      },
    }),
  };

  // Animation variants for elements on the right side of the HeroSection
  // `hidden`: Initial state where elements are slightly off-screen to the right and fully transparent
  // `visible`: Final state where elements are in their final position with full opacity
  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5, // Delay the start of the right-side animation by 0.5 seconds
        duration: 0.7, // Duration of the animation for the right-side elements
      },
    },
  };

  return (
    <section className="relative lg:pb-8 lg:pt-4 overflow-hidden">
      {/* Animated half-circle image on the top-left corner of the section */}
      <motion.img
        src={halfcircle}
        alt="halfcircle"
        className="absolute left-0 top-0 lg:h-[500px] xl:h-max"
        initial={{ x: '-100%' }} // Off-screen to the left
        animate={{ x: '0%' }} // Final position
        transition={{ duration: 0.7 }} // the duration set to 0.7
      />

      {/* Main content container with two sections (left and right) */}
      <div className="container mx-auto flex items-center justify-between lg:gap-16 ">
        {/* Left section containing the heading, paragraph, and buttons */}
        <motion.div className="basis-1/2" initial="hidden" animate="visible">
          {/* Heading with staggered animation */}
          <motion.h1
            className="font-semibold lg:text-[54px] xl:text-[64px] text-pure-black dark:text-pure-white lg:max-w-[360px] xl:max-w-[503px]"
            custom={0} // Custom index for staggered delay
            variants={leftVariants} // Using left-side animation for this element
          >
            Use your <span className="text-primary-700">skill</span> to gain
            more <span className="text-primary-700">money</span>
          </motion.h1>

          {/* Supporting paragraph with staggered animation */}
          <motion.p
            className="lg:mt-6 lg:mb-8 lg:text-lg xl:text-xl lg:max-w-[374px] xl:max-w-[410px] dark:text-pure-white"
            custom={1} // Custom index for staggered delay
            variants={leftVariants} // Using left-side animation for this element
          >
            Find talented freelancers for your project or offer your skills to
            clients worldwide
          </motion.p>

          {/* Button group with staggered animation */}
          <motion.div
            className="space-x-6 flex items-center"
            custom={2} // Custom index for staggered delay
            variants={leftVariants} // Using left-side animation for this element
          >
            {/* Primary button for hiring freelancers */}
            <Button
              variant={'primary'}
              className={'px-6 py-3 rounded-[10px] font-semibold'}
            >
              Hire Freelancers
            </Button>
            {/* Secondary button for freelancers */}
            <Button
              variant={'outline'}
              className={'px-6 py-3 rounded-[10px] font-semibold'}
            >
              I&apos;m a Freelancer
            </Button>
          </motion.div>
        </motion.div>

        {/* Right section containing the images */}
        <motion.div
          className="basis-1/2"
          initial="hidden"
          animate="visible"
          variants={rightVariants} // Using right-side animation for this section
        >
          <div className="relative lg:w-[490px] lg:h-[460px] xl:w-[650px] xl:h-[599px]">
            {/* First image (Hero Circle) with its own animation */}
            <motion.img
              src={herocircle}
              alt="herocircle"
              className="absolute bottom-0 left-0 z-10"
              initial={{ opacity: 0, x: 100 }} // Start slightly off-screen to the right
              animate={{ opacity: 1, x: 0 }} // Animate to the final position
              transition={{ delay: 0.6, duration: 0.7 }} // Delay for 0.6 seconds before starting the animation
            />

            {/* Second image (Businessman) with a different animation */}
            <motion.img
              src={businessman}
              alt="businessman"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 drop-shadow-businessman"
              initial={{ opacity: 0, x: '100%', y: '-50%' }} // Start off-screen to the right and slightly down
              animate={{ opacity: 1, x: '-50%', y: '-50%' }} // Animate to the final centered position
              transition={{ delay: 1.0, duration: 0.7 }} // Delay slightly longer before starting the animation
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
