import Prop from 'prop-types';

export const Button = ({ children, onButtonClick }) => {
  return <button onClick={onButtonClick}>{children}</button>;
};

Button.propTypes = {
  children: Prop.node.isRequired,
  onButtonClick: Prop.func.isRequired,
};
