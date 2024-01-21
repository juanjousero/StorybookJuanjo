import './button.css';

const posibleSizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  full: 'full',
};

export const Button = ({
  backgroundColor,
  size = 'medium',
  label,
  onClick,
  border,
  color,
  ...props
}) => {
  const selectedSize = posibleSizes[size];
  return (
    <button
      type="button"
      style={{ backgroundColor, border, color }}
      onClick={onClick}
      className={`Button Button-${selectedSize}`}
      {...props}
    >
      {label}
    </button>
  );
};
