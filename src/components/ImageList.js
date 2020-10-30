import React from "react";

const ImageList = (props)=>{
    const images = props.images.map((image) => {return <img key={image.id} src={image.urls.thumb} alt= {image.alt_description} />})
    return(
        <div className = "centre top bottom">
            {images}
        </div>
    )
}

export default ImageList;