import React,{useState,useEffect} from 'react';
import './Recommendation.css'
import Rd from'./RecommendationDisplay'

const url = 'http://localhost:9110/recommendation'

const Recommendation = () => {
    
    const [recommend,setRecommend] = useState()

    useEffect(()=>{
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setRecommend(data)
        })
    },[])

    return (
        <>
            <h3>Recommendation</h3>
            
            <div className="recommendation">
                <Rd recommendData = {recommend}/>
            </div>
        </>
    )
}

export default Recommendation