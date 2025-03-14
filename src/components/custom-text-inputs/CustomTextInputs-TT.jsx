import React, {useState} from "react";

import CustomText from "./CustomText";

export default function CustomTextInputs() {


    const [customTextArray, setCustomTextArray] = useState([]) 
    const [customTextUserInput, setCustomTextUserInput] = useState("")

    /* const handleEditCustomTextArray = (e) => {
        setEditCustomTextArray(e.target.value)
    } */

    const handleAddCustomText = () => {
        if(customTextUserInput !== ''){const prev = customTextArray;
        prev.push(customTextUserInput)
        setCustomTextArray(prev)
        setCustomTextUserInput("")}
        console.log(customTextArray)
    }



    /* make userinput work so that it pushes int custom text arrray then map custom text array to CustomText components so all of the text goes into them
    each custom text should be able to delete itself and edit itself, delete should be .splice(index, amount) and then edit could potentially be a .map(el, index) */
    return(
        <div className="cti-tags-customisation-details">{/* scrolls seperately */}
            <div className="cti-tcd-user-input">
                <input type="text" value={customTextUserInput} onKeyPress={(e) => {if(e.key === 'Enter' | e.key === 'return'){handleAddCustomText()}}} onChange={(e) => setCustomTextUserInput(e.target.value)} className="cti-tcd-input" placeholder="Custom text" />
                
                <button type="button" className="add-tag-button cti-tcd-add" onClick={handleAddCustomText}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                </button>
            </div>
            {/* <div className="cti-tcd-top-divider"></div> */}

            

            <div className="cti-tcd-container">
                {customTextArray.map((el, index) => (
                    <CustomText key={el + index} index={index} customText={el} array={customTextArray} setArray={setCustomTextArray}/>
                ))}
            </div>
            
        </div>
    )
}
