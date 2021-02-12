import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PublishIcon from '@material-ui/icons/Publish';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const NavItems = () => {
  return (
    <>
      <div className="navItems__left">
        <ul>
          <li>Photos</li>
          <li>Illustration</li>
          <li>Vector</li>
          <li>Videos</li>
          <li>Music</li>
        </ul>
      </div>
      <div className="navItems__right">
        <p>Explore</p>
        <ExpandMoreIcon />
        <Avatar className="ml-20" />
        <Button
          className="btn-primary ml-20"
          variant="outlined"
        >
          <PublishIcon />
          Upload
        </Button>
      </div>
    </>
  )
}

export default NavItems;
