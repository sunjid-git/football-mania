import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Player = (props) => {

    const {img,name,team,salary,transfer,nation} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="player">
            <img src={img}/>
            <h5>Player name: {name}</h5>
            <h5>Current Team :{team}</h5>
            <h5>Salary/Month : {salary}</h5>
            <h5>Transfer Rate : {transfer}</h5>
            <h5>Origin Nation : {nation}</h5>
            <button className="add-btn" onClick={()=>handleAddPlayer(props.player)}>
             <FontAwesomeIcon icon={faUser} />+ Add in the List</button>
        </div>
    );
};

export default Player;