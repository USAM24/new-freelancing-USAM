import PropTypes from 'prop-types';
import classNames from 'classnames';

// Define the Button component
/**
 * The Button component is a reusable UI component that renders a styled button element.
 * It supports various styles, sizes, and configurations via props.
 *
 * @param {string} className - Additional classes to apply to the button for customization.
 * @param {'sm' | 'md' | 'lg'} width - Defines the size of the button.
 *                                     'sm' for small, 'md' for medium, and 'lg' for large.
 *                                     Defaults to 'sm'.
 * @param {'primary' | 'outline' | 'text'} variant - Defines the button style variant.
 *                                                   'primary' for solid,
 *                                                   'outline' for bordered,
 *                                                   'text' for text-only.
 *                                                   Defaults to 'primary'.
 * @param {'button' | 'submit' | 'reset'} type - Defines the button type.
 *                                               'button' for a standard button,
 *                                               'submit' for form submission,
 *                                               'reset' to reset the form.
 *                                               Defaults to 'button'.
 * @param {boolean} hoverable - Indicates if the button has hover effects.
 *                              Currently not used in the implementation.
 * @param {boolean} disabled - Disables the button, making it unclickable and changes its style
 *                             to indicate the disabled state. Defaults to false.
 * @param {React.ReactNode} children - The content inside the button. Required.
 * @param {object} props - Additional properties passed to the button element.
 *
 * @returns {JSX.Element} The rendered button component.
 */
const Button = ({
  className = 'py-[10px] px-10 rounded-[10px] font-semibold', // Default classes for styling
  width = 'sm', // Default width size
  variant = 'primary', // Default button variant
  type = 'button', // Default button type
  // eslint-disable-next-line no-unused-vars
  hoverable = false, // Default hoverable state (not currently used)
  disabled = false, // Default disabled state
  children, // Button content
  ...props // Spread other button properties
}) => {
  // Define classes for different variants
  const variantClasses = {
    primary: `${
      disabled
        ? 'bg-neutral-500 text-neutral-200'
        : 'bg-primary-700 text-neutral-50'
    }`, // Primary button with different styles when disabled
    outline: `bg-transparent border-2 ${
      disabled
        ? 'text-neutral-600 border-neutral-500'
        : 'text-primary-700 border-primary-700'
    }`, // Outline button with different styles when disabled
    text: `bg-transparent underline ${
      disabled ? 'text-neutral-600' : 'text-primary-700 '
    }`, // Text button with different styles when disabled
  };

  // Define classes for different widths
  const widthClasses = {
    sm: 'text-[16px] leading-[28.8px] h-[50px]', // Small size button
    md: 'text-[18px] leading-[32.4px] h-[60px]', // Medium size button
    lg: 'text-[20px] leading-[36px] h-[70px]', // Large size button
  };

  // Determine the variant class based on the 'variant' prop
  const variantClass = variantClasses[variant] || ''; // Fallback to an empty string if no valid variant is provided
  const widthClass = widthClasses[width] || ''; // Fallback to an empty string if no valid width is provided

  // Combine the classes into a single string
  const buttonClass = classNames(
    'custom-button', // Base class for the button
    variantClass, // Variant class
    widthClass, // Width class
    className // Additional class passed via the 'className' prop
  );

  // Render the button element with the calculated classes and passed props
  return (
    <button className={buttonClass} type={type} {...props} disabled={disabled}>
      {children}
    </button>
  );
};

// Define prop types for validation
Button.propTypes = {
  className: PropTypes.string, // Allows custom styling via additional class names
  width: PropTypes.oneOf(['sm', 'md', 'lg']), // Ensures 'width' prop is one of the defined sizes
  variant: PropTypes.oneOf(['primary', 'outline', 'text']), // Ensures 'variant' prop is one of the defined styles
  type: PropTypes.oneOf(['button', 'submit', 'reset']), // Ensures 'type' prop is one of the defined types
  hoverable: PropTypes.bool, // Allows hoverable state (currently not in use)
  disabled: PropTypes.bool, // Indicates whether the button is disabled
  children: PropTypes.node.isRequired, // Requires children to be passed to render content inside the button
};

export default Button;
