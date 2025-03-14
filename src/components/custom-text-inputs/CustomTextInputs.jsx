import React, {useEffect, useState} from "react";

import CustomText from "./CustomText";

export default function CustomTextInputs({addComment, isComment, comments, customTextArray, setCustomTextArray}) {


    
    const [customTextUserInput, setCustomTextUserInput] = useState("")

    

    const handleAddCustomText = () => {
        if(customTextUserInput !== ''){const prev = customTextArray;
        prev.push(customTextUserInput)
        setCustomTextArray(prev)
        setCustomTextUserInput("")}
    }

    const handleDeleteFromArray = (index) => {
        setCustomTextArray(customTextArray.filter((_, i) => i !== index))
    }

    const handleEnterText = (e) => {
        
        if(e.key === 'Enter' | e.key === 'Return'){
            e.preventDefault();
            handleAddCustomText()
        }
    }

    return(
        <div className="cti-tags-customisation-details">
            <div className="cti-tcd-user-input">
                <input type="text" value={customTextUserInput} onKeyPress={handleEnterText} onChange={(e) => setCustomTextUserInput(e.target.value)} className="cti-tcd-input inputs" placeholder="Custom text" />
                
                <button type="button" className="add-tag-button cti-tcd-add" onClick={handleAddCustomText}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                </button>

                <button type="button" className="add-comment-button cti-tcd-add" onClick={() => {comments !== "" ? addComment(true) : addComment(!isComment)}} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM224 160c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z"/></svg>
                </button>

            </div>

            

            <div className="cti-tcd-container">
                {customTextArray.map((el, index) => (
                    <CustomText key={el + index} index={index} customText={el} array={customTextArray} setArray={setCustomTextArray} handleDelete={handleDeleteFromArray} />
                ))}
            </div>
            
        </div>
    )
}


