import React from "react";
import '../style/main.css'
import cctv from "../asset/cctv2.png";
const Main = () => {
    return(
        <div className="Main">
                <div className="f_layout">
                <img className="Img" alt="cctv" src={cctv}/>
            </div>
            <div className="s_layout">
            </div>
        </div>
    )
}
export default Main;
