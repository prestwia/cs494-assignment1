import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

let nextId = 0

// dialog component
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
                        onClick={ () => props.showInput(false)}
                    >
                        Cancel
                    </button>
                </div>
                { invalidInput && <ErrorBanner /> }
            </form>
        </div>
    )
}

// base App component
const App = () => {
    const [inputList, setInputList] = React.useState([])

    const updateInputList = (url, caption) => {
        setInputList(
            [
                {
                    id: nextId++,
                    url: url,
                    caption: caption
                },
                ...inputList
            ]
        )
    }

    return (
        <div className="app-div">
            <div className="input-dialog">
                <Dialog updateInputList={ updateInputList } />
            </div>
            <div className='temp-div'>
                <ul>
                    { inputList.map(elem => <li key={ elem.id }>{elem.url}, {elem.caption}</li>) }
                </ul>
            </div>
        </div>
    )
}

// create and render app root
const appRoot = (
    <div className='app-root'>
        <App />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(appRoot)