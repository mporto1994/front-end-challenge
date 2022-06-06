import {NavStyle,DivTitleStyle} from "./style.js"
import Logo from "../../assets/logo-blog.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaSearch } from "react-icons/fa"

const Header = () => {
    return(
        <header>
            <NavStyle>
                {/* <h1>Apiki</h1> */}
                <GiHamburgerMenu color="white" size="22"/>
                <img alt="Logo" src={Logo}/>
                <FaSearch color="white" size="22"/>  
            </NavStyle>
            <DivTitleStyle>
                <span>Path</span>
                <h2>Desenvolvimento</h2>
                <h3>Desenvolva seu negócio com WordPress</h3>

            </DivTitleStyle>
            
        </header>
    )
}
export default Header