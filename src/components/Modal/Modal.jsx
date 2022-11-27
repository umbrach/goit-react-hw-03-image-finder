import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscDown);
  }

  handleEscDown = e => {
    if (e.code === 'Escape') {
      this.props.toogleModal();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.toogleModal();
    }
  };
  render() {
    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={this.props.link} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  link: PropTypes.string.isRequired,
  toogleModal: PropTypes.func.isRequired,
};

export default Modal;
