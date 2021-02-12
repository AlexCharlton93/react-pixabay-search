import React, { useState, useRef } from 'react';
import './Banner.scss';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import MicIcon from '@material-ui/icons/Mic';
import PropTypes from 'prop-types';

const Banner = ({ searchText }) => {
  const [inputText, setInputText] = useState('');
  const inputEl = useRef('');

  const search = (e) => {
    e.preventDefault();
    searchText(inputText);
  }

  const handleClearInput = () => {
    setInputText('');
    inputEl.current.focus();
  };

  return (
    <div className="banner">
      <div className="banner__mask" />
      <div className="banner__overlay">
        <h1>Stunning free images &amp; royalty free stock</h1>
        <h2>Over 1.8 million+ high quality stock images and videos shared by our talented community.</h2>

        <form onSubmit={search}>
          <div className="banner__input">
            <SearchIcon
              className="banner__inputIcon"
              onClick={search}
            />
            <input
              id="searchInput"
              placeholder="Search Images, Vectors and Videos"
              ref={inputEl}
              value={inputText}
              onChange={e => setInputText(e.target.value)}
            />

            {inputText.length > 0 ?
              <CloseIcon className="icon-grey" onClick={handleClearInput} /> :
              <MicIcon className="icon-grey" />}
          </div>
        </form>
      </div>
    </div>
  )
}

Banner.propTypes = {
  searchText: PropTypes.string.isRequired,
};

export default Banner;
