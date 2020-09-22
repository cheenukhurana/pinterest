import React, { useEffect, useState } from 'react';
import "./Home.css"

function Image(props)
{

    return (
        <div style={{"display":"inline-block","padding":"10px"}}>
            <img style={{"width":"250px", "float":"left","border-radius":"10px"}} src={props.imageData.download_url}></img>
        </div>
    );
}

function Home()
{
    const [imagesData,setImagesData] = useState([]);

    fetch("https://picsum.photos/v2/list")
    .then(res=>res.json())
    .then(data=>{
        setImagesData(data);
    });

    return (
        <div style={{"padding":"20px"}}>
            {imagesData.map(imageData=><Image imageData={imageData} />)}
        </div>
    )
}

export default Home;