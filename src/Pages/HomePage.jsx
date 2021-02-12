import React, { useState, useEffect } from 'react';
import Banner from '../Components/banner/Banner';
import ImageCard from '../Components/imageCard/ImageCard';
import { API_KEY } from '../Keys';

const Homepage = () => {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
      })
      .catch(error => console.log(error));
  }, [term]);

  return (
    <>
      <Banner searchText={(text) => setTerm(text)} />

      {images.length === 0 && <h1 className="noImages">No Images Found</h1>}

      <div className="imageCard__wrapper">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </>
  )
}

export default Homepage;
