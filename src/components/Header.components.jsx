import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="flex ms_bg_light ms_between ms_v_center full_width">
            <div className="logo">
                <a href="#" >
                    <img src="https://fakestoreapi.com/icons/logo.png" alt="e-commerce" />
                    <span >E-commerce</span>
                </a>
            </div>
            <ul className="flex ms_no_wrap">
                <li><NavLink className="link" to="/">Home</NavLink></li>
                <li><NavLink className="link" to="/chiSiamo">Chi Siamo</NavLink></li>
                <li>Prodotti</li>
            </ul>
        </nav >
    )
}
export default Header