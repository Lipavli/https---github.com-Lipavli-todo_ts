 import React, {FC} from "react";

 const Header: FC = () => {
    return(
        <header>
            <div className="logo-container">
                <img src="/images/logo.png" alt="logo" />
            </div>
            <nav>
                <ul>
                    <li>Active</li>
                    <li>Pending</li>
                    <li>Completed</li>
                </ul>
                <img src="/images/equal.png"/>
            </nav>
        </header>
    )
 }
 export default Header;