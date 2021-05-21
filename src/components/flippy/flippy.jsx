
import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from '../lib';

import Editortest from "../editor/editor";
import Container from "../container/Container";


const FlippyStyle = {
    width: '100%',
    height: '80vh',
   
   
  backgroundColor:'white ',
  color: '#000',
  fontFamily: 'sans-serif',
  fontSize: '15px',
  display:'flex',
  justifyContent: 'flex',
  flexDirection:'row'
}


const DefaultCardContents = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        width: '100%',
        height: '100vh',
       
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Container/>
      <span 
        style={{
          fontSize:'12px',
          position: 'center',
          bottom: '10px',
          width: '80%'
        }}>
        {children}<br />
        Text area
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: 'linear-gradient(45deg, rgb(37, 56, 65), rgb(193, 207, 192))',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        //justifyContent: 'center',
        flexDirection: 'column'
      }}>
      
      <Editortest/>
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        {children}<br />
        Board
      </span>
    </BackSide>
  </React.Fragment>);

const FlippyOnHover = ({ flipDirection = 'vertical' }) => (
  <Flippy
    flipOnHover={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents>
    I flip {flipDirection}ly on hover
    </DefaultCardContents>
  </Flippy>
);

const FlippyOnClick = ({ flipDirection = 'vertical' }) => (
  <Flippy
    flipOnClick={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents>
      I flip {flipDirection}ly on click
    </DefaultCardContents>
  </Flippy>
);

const ControlledFlippy = ({ isFlipped })  => (
  <Flippy
    flipDirection="vertical"
    isFlipped={isFlipped}
    style={FlippyStyle}
  >
    <DefaultCardContents>
      I flip vertically for every 3sec. I am controlling by a upper scope.
    </DefaultCardContents>
  </Flippy>
);

class Flippycard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };

    setInterval(() => {
      this.setState({
        isFlipped: !this.state.isFlipped
      });
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>
            <Flippy
              ref={(r) => this.flippyHorizontal = r}
              flipOnClick={false}
              style={FlippyStyle}
            >
            <DefaultCardContents>
              
              <button style={{position:"relative",color:"black"}} type="button" onClick={() => this.flippyHorizontal.toggle()}>switch to</button>
            </DefaultCardContents>
          </Flippy>
          
        </div>
      </div>
    );
  }
}

export default Flippycard;