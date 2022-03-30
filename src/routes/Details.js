import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Details(){
    const [detailsData, setDetails] = useState({});

    const {id} = useParams();
    const getDetails = async () => {
        const json = await (
            await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
        ).json();
        setDetails(json.data.movie)
    }
    console.log('detailsData', detailsData)

    useEffect(()=>{
        getDetails();
    }, [])
    
    return (
        <div>{Object.keys(detailsData).length>0?
            <div>
                <img src={detailsData.medium_cover_image}/>
                <h2>{detailsData.title}</h2>
                <p>{detailsData.description_intro}</p>
            </div>
            :<h2>Loading..</h2>}</div>
    );
}

export default Details



/**
 * {
    "id": 41064,
    "url": "https://yts.mx/movies/how-to-survive-a-pandemic-2022",
    "imdb_code": "tt14153420",
    "title": "How to Survive a Pandemic",
    "title_english": "How to Survive a Pandemic",
    "title_long": "How to Survive a Pandemic (2022)",
    "slug": "how-to-survive-a-pandemic-2022",
    "year": 2022,
    "rating": 4.1,
    "runtime": 106,
    "genres": ["Documentary"],
    "download_count": 3030,
    "like_count": 1,
    "description_intro": "Chronicles the global race to research, develop, manufacture and distribute COVID-19 vaccines in the most enormous coordinated public health effort ever undertaken.",
    "description_full": "Chronicles the global race to research, develop, manufacture and distribute COVID-19 vaccines in the most enormous coordinated public health effort ever undertaken.",
    "yt_trailer_code": "LWvlSySgbkI",
    "language": "en",
    "mpa_rating": "",
    "background_image": "https://yts.mx/assets/images/movies/how_to_survive_a_pandemic_2022/background.jpg",
    "background_image_original": "https://yts.mx/assets/images/movies/how_to_survive_a_pandemic_2022/background.jpg",
    "small_cover_image": "https://yts.mx/assets/images/movies/how_to_survive_a_pandemic_2022/small-cover.jpg",
    "medium_cover_image": "https://yts.mx/assets/images/movies/how_to_survive_a_pandemic_2022/medium-cover.jpg",
    "large_cover_image": "https://yts.mx/assets/images/movies/how_to_survive_a_pandemic_2022/large-cover.jpg",
    "torrents": [
        {
            "url": "https://yts.mx/torrent/download/55DC2D61A65314B0FEE9EF3BDAE8C8B52C3C66D2",
            "hash": "55DC2D61A65314B0FEE9EF3BDAE8C8B52C3C66D2",
            "quality": "720p",
            "type": "web",
            "seeds": 0,
            "peers": 0,
            "size": "1004.42 MB",
            "size_bytes": 1053210706,
            "date_uploaded": "2022-03-30 04:41:33",
            "date_uploaded_unix": 1648608093
        }, {
            "url": "https://yts.mx/torrent/download/4846F1C1C887B94B0AF64B57F0C5A020EB7D46AD",
            "hash": "4846F1C1C887B94B0AF64B57F0C5A020EB7D46AD",
            "quality": "1080p",
            "type": "web",
            "seeds": 103,
            "peers": 59,
            "size": "2.02 GB",
            "size_bytes": 2168958484,
            "date_uploaded": "2022-03-30 05:56:35",
            "date_uploaded_unix": 1648612595
        }
    ],
    "date_uploaded": "2022-03-30 04:41:33",
    "date_uploaded_unix": 1648608093
}
 */