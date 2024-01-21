import './bigTitle.css';

export const BigTitle = ({ color, text }) => (
  <h3 className="BigTitle" style={{ color }}>
    {text}
  </h3>
);
