import React from "react";
import axios from 'axios';

const CostFilter = (props) =>{

    const handelFilter = (event) =>{
        let costRange = event.target.value
        let url = props.filter
        let costUrl =""
        if(costRange ==""){
            costUrl = url
        }else{
            let [min,max] = costRange.split('-')
            costUrl = `${url}?lcost=${min}&hcost=${max}`
        }

        axios.get(costUrl)
        .then((res)=>{props.itemPerCost(res.data)})
    }


    return(
        <>
        <center><h3>Cost Filter</h3></center>
        <div style={{marginLeft:'15%'}} onChange={handelFilter}>
            <label className="radio" style={{ display: 'block', marginBottom: '10px' }}>
                <input type="radio" name="cost" value=""/>All
            </label>
            <label className="radio" style={{ display: 'block', marginBottom: '10px' }}>
                <input type="radio" name="cost" value="0-100"/>0-100
            </label>
            <label className="radio" style={{ display: 'block', marginBottom: '10px' }}>
                <input type="radio" name="cost" value="100-300"/>100-300
            </label>
            <label className="radio" style={{ display: 'block', marginBottom: '10px' }}>
                <input type="radio" name="cost" value="300-500"/>300-500
            </label>
            <label className="radio" style={{ display: 'block', marginBottom: '10px' }}>
                <input type="radio" name="cost" value="500-1000"/>500-1000
            </label>
            <label className="radio" style={{ display: 'block', marginBottom: '10px' }}>
                <input type="radio" name="cost" value="1000-1500"/>1000-1500
            </label>
        </div>
        </>
    )
}

export default CostFilter