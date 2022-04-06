import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from './Details.module.css';

function Details(){
    const [detailsData, setDetails] = useState({});

    const {id} = useParams();
    const getDetails = async () => {
        const json = await (
            await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
        ).json();
        setDetails(json.data.movie)
    }

    useEffect(()=>{
        getDetails();
    }, [])
    
    return (
        <div >{Object.keys(detailsData).length>0?
            <div className={style.contents}>
                <img src={detailsData.medium_cover_image}/>
                <h2>{detailsData.title}</h2>

                <div className={style.infor}>
                    <span><div></div>{detailsData.rating}</span>|
                    <span>{detailsData.year}</span>|
                    <span>{detailsData.runtime}분</span>
                </div>
                <div className={style.user}>

                </div>
                
                <ul className={style.movie_list}>
                    <li>
                        <p><strong>감독</strong></p>
                        <p></p>
                    </li>
                    <li>
                        <p><strong>장르</strong></p>
                        <p>{detailsData.genres}</p>
                    </li>
                    <li>
                        <p><strong>출연</strong></p>
                        <p></p>
                    </li>
                    <li>
                        <p><strong>소개</strong></p>
                        <p>{detailsData.description_intro}</p>
                    </li>
                </ul>

                <div className={style.review}>
                    <h4>감상평</h4>
                    <textarea placeholder="감상평을 등록해주세요."/>
                    <div><div></div><p>작품의 감상평을 나누는 공간입니다.</p></div>
                </div>    
            </div>

            :<h2>Loading..</h2>}</div>
    );
}

export default Details

