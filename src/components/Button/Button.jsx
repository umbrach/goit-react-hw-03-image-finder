import PropTypes from 'prop-types';
import '../styles.css';

const Button = ({ onClick }) => {
  return (
    <button type="button" className="Button" onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
