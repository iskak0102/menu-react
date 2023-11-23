import React from "react";
import {Link} from "react-router-dom";


const Header = ()=>{
    return(
        <header>
            <nav>
                <Link to={'/'} className={'link_title'}>Главное</Link>
                <Link to={'/search'} className={'link_title'}>Найти блюдо</Link>
            </nav>
        </header>
    )
}
export default Header