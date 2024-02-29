import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import {FaRetweet} from 'react-icons/fa'
const FeedCard:React.FC=()=>{
    return <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-4 hover:bg-slate-900 transistion-all cursor-pointer">
        <div className="grid grid-cols-12">
            <div className="col-span-1"></div>
            <div className="col-span-11">
                <div className="justify-between mt-5 text-center-xl items-center">
                    <div>
                        <BiMessageRounded/>
                    </div>
                    <div>
                        <FaRetweet/>
                    </div>
                    <div>
                        <AiOutlineHeart/>
                    </div>
                    <div>
                        <BiUpload/>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default FeedCard;