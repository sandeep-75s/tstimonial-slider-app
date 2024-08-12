import './Card.css'
import { useState } from "react";
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { data } from "../data";
function Card(){
    const[i,seti] = useState(0)
    function backHandler(){
        if(i-1<0){
            seti(data.length-1);
        }else{
            seti(i-1);
        }
        
    }
    function forwardHandler(){
        if(i+1>data.length-1){
            seti(0);
        }
        else{
            seti(i+1);
        }
        
    }
    function supHandler(){
        let randomIdx = Math.floor(Math.random()*data.length);
        seti(randomIdx);
    }
    return(
        <div className="main-card">
            <div className='cir-div'>

            </div>
            <div className='img-div'>
                <img className='img' src={data[i].image}></img>
            </div>
            <div className='name-div'>
                <h3 className='name'>{data[i].name}</h3>
            </div>
            <div>
                <p className='job'>{data[i].job}</p>
            </div>
            <div>
            <FaQuoteLeft className='icon' />
            </div>
            <div>
                <p>{data[i].dec}</p>
            </div>
            <div>
            <FaQuoteRight className='icon'/>
            </div>
            <div className='btn-div'>
                <button className='btn' onClick={backHandler}><MdKeyboardArrowLeft /></button>
                <button className='btn' onClick={forwardHandler}><MdKeyboardArrowRight /></button>
            </div>
            <div>
                <button onClick={supHandler} className='sup-btn'>Surprise Me</button>
            </div>
        </div>
    );
}

export default Card;