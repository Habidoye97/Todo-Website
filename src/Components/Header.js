import React from "react";
import Button from "./Utility/Button";
const Header = () => {
  return (
    <div>
      <header>
        <div>
          Logo

        </div>
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Templates</a></li>
          <li><a href="#">For Teams</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
        <div>
          <div><Button>Login</Button></div>
          <div><Button primary>Start for free</Button></div>
        </div>
      </header>
    </div> 
   );
}
 
export default Header;