import React from 'react';

/**
 * Button - A versatile, customizable button component
 *
 * @param {Object} props
 * @param {string} props.text - Button text
 * @param {string} props.href - URL for the button (if it's a link)
 * @param {string} props.type - Button type (if it's a form button)
 * @param {string} props.size - Size variant ('sm', 'md', 'lg')
 * @param {string} props.variant - Color variant ('primary', 'secondary', 'accent', 'custom')
 * @param {string} props.bgColor - Custom background color (only used with variant='custom')
 * @param {string} props.textColor - Custom text color (only used with variant='custom')
 * @param {string} props.hoverBgColor - Custom hover background color (only used with variant='custom')
 * @param {string} props.hoverTextColor - Custom hover text color (only used with variant='custom')
 * @param {boolean} props.fullWidth - Whether the button should take full width
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Click handler
 * @returns {JSX.Element}
 */
const Button = ({
                    text,
                    href,
                    type = 'button',
                    size = 'md',
                    variant = 'primary',
                    bgColor,
                    textColor,
                    hoverBgColor,
                    hoverTextColor,
                    fullWidth = false,
                    className = '',
                    onClick,
                    ...rest
                }) => {
    // Base classes that apply to all buttons
    const baseClasses = 'inline-block font-medium rounded-md transition duration-300 text-center';

    // Size classes
    const sizeClasses = {
        sm: 'py-2 px-4 text-sm',
        md: 'py-3 px-6 text-base',
        lg: 'py-4 px-8 text-lg',
    };

    // Predefined color variants
    const variantClasses = {
        primary: 'bg-(--burgundy) text-white hover:bg-burgundy-dark',
        secondary: 'bg-(--sage-50) text-gray-800 hover:bg-[#B2C49B]',
        accent: 'bg-green-100 text-green-800 hover:bg-green-200',
        outline: 'bg-transparent border border-current text-blue-600 hover:bg-blue-50',
        danger: 'bg-red-600 text-white hover:bg-red-700',
    };

    // Construct the classes
    let buttonClasses = `${baseClasses} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''}`;

    // Apply variant classes or custom colors
    if (variant === 'custom' && bgColor) {
        // For custom styling, we use inline styles instead of classes
        const style = {
            backgroundColor: bgColor,
            color: textColor || 'white',
        };

        // For hover effects, we'll use a data attribute and CSS
        const dataProps = {
            'data-hover-bg': hoverBgColor || '',
            'data-hover-text': hoverTextColor || '',
        };

        // Render with inline styles for custom variant
        const Element = href ? 'a' : 'button';

        return (
            <Element
                href={href}
                type={!href ? type : undefined}
                className={`${buttonClasses} custom-button ${className}`}
                style={style}
                onClick={onClick}
                {...dataProps}
                {...rest}
            >
                {text}
            </Element>
        );
    }

    // For predefined variants, use classes
    buttonClasses += ` ${variantClasses[variant] || variantClasses.primary} ${className}`;

    // Render either a link or a button based on whether href is provided
    return href ? (
        <a href={href} className={buttonClasses} onClick={onClick} {...rest}>
            {text}
        </a>
    ) : (
        <button type={type} className={buttonClasses} onClick={onClick} {...rest}>
            {text}
        </button>
    );
};

export default Button;

// CSS for custom buttons (add this to your global CSS file)
/*
.custom-button:hover {
  background-color: var(--hover-bg) !important;
  color: var(--hover-text) !important;
}

[data-hover-bg]:hover {
  --hover-bg: attr(data-hover-bg);
}

[data-hover-text]:hover {
  --hover-text: attr(data-hover-text);
}
*/