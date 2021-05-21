import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import SlideShow from "./Cards/SlideShow"

function Cards() {
  return (
    <div className='cards'>
    
      <SlideShow/>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/undraw_online_connection_6778.png'
              text='collaborate with your friend out team work'
              label='Online collaboration'
              path='/services'
            />
            <CardItem
              src='images/sa.png'
              text='online text editing with your team work'
              label='Text Editing'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/undraw_remote_meeting_cbfk.png'
              text='online meeting and more to explore'
              label='Video meeting'
              path='/services'
            />
            <CardItem
              src='images/ds.png'
              text='drawing on the board and be more creative with your ideas'
              label='White Board'
              path='/products'
            />
            <CardItem
              src='images/undraw_Group_chat_re_frmo.png'
              text='online chat with your friends and team work to explain more'
              label='chating'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
