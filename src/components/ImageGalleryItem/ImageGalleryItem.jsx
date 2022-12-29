import {useState} from 'react';
import { Image, ImgItem } from './imageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';


export default function ImageGalleryItem({ webformatURL, largeImageURL }) {
  const [isModalOpen, setiIsModalOpen] = useState(false)

  const toggleModal = () => {
    setiIsModalOpen(prevState => !prevState);
  };

    return (
      <ImgItem onClick={toggleModal}>
        <Image src={webformatURL} alt="img" />
        {isModalOpen && <Modal url={largeImageURL} onClose={toggleModal} />}
      </ImgItem>
    );
  }


ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
