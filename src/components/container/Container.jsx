import React from 'react';
import Board from '../board/Board';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import {IconButton, Badge, Input, Button} from '@material-ui/core';
import StopScreenShareIcon from '@material-ui/icons/StopScreenShare';

import './style.css';

class Container extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
            size: "5",
            screenAvailable: true,
            screen: false
        }
    }
    brush(params){
        this.setState({
            color: params.target.value = "#000000",
            size: params.target.value = "5"
        })
    }
    changeColor(params) {
        this.setState({
            color: params.target.value
        })
    }
    erease(params){
        this.setState({
            color: params.target.value = "#ffffff",
            size: params.target.value = "70"
        })
        
    }
    
    changeSize(params) {
        this.setState({
            size: params.target.value
        })
    }

    render() {

        return (
            <div className="container">
                <div class="tools-section">
                    <div className="color-picker-container">
                        Select Brush Color : &nbsp; 
                        <input type="color" value={this.state.color} onChange={this.changeColor.bind(this)}/>
                    </div>
                   
                    <div className="brushsize-container">
                        Select Brush Size : &nbsp; 
                        <select value={this.state.size} onChange={this.changeSize.bind(this)}>
                            <option> 2.5</option>
                            <option> 5 </option>
                            <option> 10 </option>
                            <option> 15 </option>
                            <option> 20 </option>
                            <option> 25 </option>
                            <option> 30 </option>
                        </select>
                    </div>
                    
                    <div className="erease" onClick={this.erease.bind(this)} title="Erease">
                        
                    <img src={require('../../assets/clean.png')} width="30" height="30"/>
                    </div>

                    {/* <div className="erease">
                        
                        <input type="button" value="Erease" onClick={this.erease.bind(this)}/>
                    </div> */}
                    <div className="brush" onClick={this.brush.bind(this)} title="Brush">                       
                        <img src={require('../../assets/paint-brush.png')} width="40" height="40"/>
                     </div>
                     {this.state.screenAvailable === true ?
								<IconButton style={{ color: "#424242" }} onClick={this.handleScreen}>
									{this.state.screen === true ? <ScreenShareIcon /> : <StopScreenShareIcon />}
								</IconButton>
								: null}
                    {/* <div className="brush">
                        
                       <input type="button" value="brush" onClick={this.brush.bind(this)}/>
                    </div> */}
                   
                </div>

                <div class="board-container">
                    <Board color={this.state.color} size={this.state.size} ></Board>
                </div>
            </div>
        )
    }
}

export default Container