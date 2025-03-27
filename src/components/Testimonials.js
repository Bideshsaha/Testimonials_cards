import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";


const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index,setIndix] = useState(0);
    function leftShiftHandler(){
        if(index - 1 < 0){
            setIndix(reviews.length - 1);
        }else{

            setIndix(index- 1);
        }
    }
    function rightShiftHandler(){
        if(index + 1 >= reviews.length){
            setIndix(0);
        }else{

            setIndix(index+ 1);
        }
    }
    function surpriseHandler(){
        let randomindex = Math.floor(Math.random() * reviews.length);
        setIndix(randomindex);
    }
    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
            <Card review = {reviews[index]}/>
            <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
                <button 
                onClick={leftShiftHandler}
                className="cursor-pointer hover:text-violet-500">
                    <FiChevronLeft/>
                </button>
                <button 
                onClick={rightShiftHandler}
                className="cursor-pointer hover:text-violet-500">
                    <FiChevronRight/>
                </button>
            </div>

            <div className="mt-6">
                <button 
                onClick={surpriseHandler}
                className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">
                    Surprise Me
                </button>
            </div>
        </div>
    )
}

export default Testimonials;