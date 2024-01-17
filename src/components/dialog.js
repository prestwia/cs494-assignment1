import React from "react"

import InputForm from "./inputform.js"

const Dialog = (props) => {
    const [showInput, setShowInput] = React.useState(false)

    const onClickShowInput = (show) => {
        setShowInput(show)
    }

    return (
        <div>
            <OpenButton buttonClick={onClickShowInput} />
            { 
                showInput && 
                <InputForm 
                    updateInputList={ props.updateInputList }
                    showInput={ onClickShowInput }
                /> 
            }
        </div>
    )
}

const OpenButton = (props) => {
    return (
        <button type="button" onClick={ ()=>props.buttonClick(true) }>
            Open photo entry dialog
        </button>
    )
}

export default Dialog