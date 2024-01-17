import React from "react"

import PhotoCard from './card.js'
import Dialog from './dialog.js'

let nextId = 0

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

    const deleteFromInputList = (id) => {
        const updatedList = inputList.filter((elem) => elem.id !== id)
        setInputList(updatedList)
    }

    return (
        <div className="app-div">
            <div className="input-dialog">
                <Dialog updateInputList={ updateInputList } />
            </div>
            <div className='photo-grid'>
                { 
                    inputList.map(elem => 
                        <PhotoCard 
                            key={ elem.id } 
                            imgData={ elem }
                            delete={ deleteFromInputList }
                        /> 
                    ) 
                }
            </div>
        </div>
    )
}

export default App
