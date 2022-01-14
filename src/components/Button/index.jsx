import Prop from 'prop-types';

export const Button = ({ children, onButtonClick, disabled = false }) => {
  return (
    <button disabled={disabled} onClick={onButtonClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: Prop.node.isRequired,
  onButtonClick: Prop.func.isRequired,
  disabled: Prop.bool,
};
