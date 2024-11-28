import { useState } from 'react';
import './Player.css';

function Player(props) {

    let[playerName, setPlayerName] = useState(props.name);
    let[isEditing, setIsEditing] = useState(false);

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    function handleClick(){
        if(isEditing === true) {
            props.setPlayer(playerName); //update
            setIsEditing(false);
        }
        else{
            setIsEditing(true);
        }
    }

    function handleKey(event){
        if(event.key === "Enter"){
            props.setPlayer(playerName);
            setIsEditing(false);
        }
    }

    let editablePlayerName = <span className="player-name"> {playerName}</span>

    if(isEditing === true){
        editablePlayerName  = <input type="text"  required  onChange={handleChange} onKeyDown={handleKey}value={playerName} />
    }


    return (
        <div className="Player-container">

            {editablePlayerName}

            <span className='symbol'>{props.symbol}</span>
        
            <button onClick={handleClick}> {isEditing? "Save" : "Edit" } </button>
        </div>
    );
}
export default Player;