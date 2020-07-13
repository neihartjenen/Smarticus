import React from "react";
import useSound from 'use-sound';
import wrongSfx from '../../Sound/wrong.mp3';

function Button(obj){
    const [play] = useSound(wrongSfx);
    console.log("before", obj.answer);
    return(
    <p>
        <label>
            <input name="group1" type="radio" onClick={play} />
            <span> {obj.answer} </span>
        </label>
    </p>
    )
}

export default Button;