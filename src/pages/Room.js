import React from 'react';
import './sstyle.css';
import Container from '../components/container/Container';
import Video from '../components/video/Video';
import Flippy from "../components/flippy/flippy"

export default function Room() {
  return(
    <div className='room'>
      <div className='left'>
      <Flippy/>
      </div>
      <div className='right'>
      <Video/>
      </div>

    </div>
    

  );
}
