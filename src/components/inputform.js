import React from "react"

import "./inputform.css"

const ErrorBanner = () => {
    return (
        <div className="error-banner">
            Enter a Photo URL and Caption
        </div>
    )
}

const InputForm = (props) => {
    // form state adapted from https://www.w3schools.com/react/react_forms.asp
    const [inputs, setInputs] = React.useState({})
    const [invalidInput, setInvalidInput] = React.useState(false)

    const handleOnChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setInvalidInput(false)

        if (inputs.url === undefined || inputs.caption === undefined) {
            setInvalidInput(true)
        }
        else {
            props.updateInputList(inputs.url, inputs.caption)
            props.showInput(false)
        }
    }

    return (
        <div className="form-div">
            <form 
                className="input-form"
                onSubmit={ handleSubmit }
            >
                <input 
                    name="url" 
                    type="text"
                    placeholder="Enter Photo URL"
                    onChange={ handleOnChange }
                />
                <input 
                    name="caption" 
                    type="text"
                    placeholder="Enter Photo Caption"
                    onChange={ handleOnChange }
                />
                <div className="button-div">
                    <button 
                        className="form-button"
                        type="submit"
                    >
                        Submit
                    </button>
                    <button 
                        className="form-button" 
                        onClick={ () => props.showInput(false) }
                    >
                        Cancel
                    </button>
                </div>
                { invalidInput && <ErrorBanner /> }
            </form>
        </div>
    )
}

export default InputForm