import React, {useState} from "react";
import '../style/menubar.css'
import { FaVideo } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";

const Nav = () => {

    const [color, setColor] = useState(false);
    const clickChangeColor = (event) =>{
        
    }
    return(
        <div className="Nav">
        <h1>GeubSig</h1>
        <nav>
            <ul>
                <li>
                    <FaVideo/>
                    <p>실시간 화면</p>
                </li>
                <li onClick={clickChangeColor}>
                    <RiDashboardFill/>
                    <p>대시보드</p>
                </li>
            </ul>
        </nav>
        </div>
    )
}

export default Nav;
