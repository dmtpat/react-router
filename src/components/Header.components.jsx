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
            <div className="flex ms_no_wrap">
                <NavLink className="link" to="/">Home</NavLink>
                <NavLink className="link" to="/chiSiamo">Chi Siamo</NavLink>
                <NavLink className="link" to="/prodotti">Prodotti</NavLink>
            </div>
        </nav >
    )
}
export default Header