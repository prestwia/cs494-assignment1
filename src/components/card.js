import './card.css'

// photo card
const PhotoCard = (props) => {
    return (
        <div className="photo-card-container">
            <img src={ props.imgData.url } height="300" width="250" alt={ props.imgData.caption }/>
            <div className="photo-card-info">
                <button onClick={ () => props.delete(props.imgData.id) }>x</button>
                <span className="photo-card-caption">{ props.imgData.caption }</span>
            </div>
        </div>
    )
}

export default PhotoCard