import PropTypes from 'prop-types';
import '../styles.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className="ImageGalleryItem" onClick={onClick}>
      <img
        src={image.webformatURL}
        alt={image.type}
        about={image.largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
