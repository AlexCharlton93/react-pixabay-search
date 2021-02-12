import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import GetAppIcon from '@material-ui/icons/GetApp';
import PropTypes from 'prop-types';
import './ImageCard.scss';

const ImageCard = ({ image }) => {

  const tags = image.tags.split(',');

  return (
    <div className="imageCard">
      <img className="imageCard__image" src={image.webformatURL} alt={image.user} />

      <div className="imageCard__overlay">
        <p>
          <ThumbUpIcon />
          {' '}
          {image.likes}
        </p>
        <p>
          <StarBorderIcon />
          {' '}
          {image.favorites}
        </p>
        <p>
          <ChatBubbleOutlineIcon />
          {' '}
          {image.comments}
        </p>
        <p>
          <GetAppIcon />
          {' '}
          {image.downloads}
        </p>
      </div>

      <div className="tags">
        {tags.map((tag, index) => (
          <p key={index} className="tag">
            #
            {tag}
          </p>
        ))}
      </div>
    </div>
  )
}

ImageCard.propTypes = {
  image: PropTypes.instanceOf(Object).isRequired,
};

export default ImageCard;
