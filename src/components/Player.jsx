import { useState } from 'react';
export default function Player({initialName, symbol, isActive, onChangeName}) {
const [playerName, setPlayerName] = useState(initialName);
const [isEditing, setisEditing] = useState(false);

function clicked(){
setisEditing((editing) => !editing);

if(isEditing){
  onChangeName(symbol,playerName);
}
}

function handleChange(event){
  setPlayerName(event.target.value);
}

let editableplayerName = <span className="player-name">{playerName}</span>;

if (isEditing){
    editableplayerName = <input type="text" required value={playerName} onChange={handleChange}/>
}
return <li className= {isActive ? 'active' : undefined}>
<span className="player">
    {editableplayerName}
    <span className="player-symbol">{symbol}</span>
</span>
<button onClick={clicked}>{isEditing?"Save":"Edit"}</button>
  </li> 
};