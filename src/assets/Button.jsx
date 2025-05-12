import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const Button = ({
  text,
  className = '',
  onClick,
  id,
  targetId = "counter"
}) => {
  const [target, setTarget] = useState(null);
  
  useEffect(() => {
    // Find target element once component mounts
    if (targetId) {
      setTarget(document.getElementById(targetId));
    }
  }, [targetId]);

  const handleClick = (e) => {
    // Execute custom onClick if provided
    if (onClick) {
      onClick(e);
    }
    
    // Handle smooth scrolling if target exists
    if (target && id) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <button
      id={id}
      onClick={handleClick}
      className={`${className} px-6 sm:px-8 py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:gap-5 hover:shadow-lg cursor-pointer hover:shadow-purple-500/10 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 group`}
    >
      <span className="font-medium text-white text-sm sm:text-base">{text}</span>
      <div className="arrow-wrapper transition-all duration-300 group-hover:translate-x-1">
        <img src="/images/arrow-down.svg" alt="Arrow Down" />
      </div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  targetId: PropTypes.string
};

export default Button;