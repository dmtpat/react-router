

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
                <li>Home</li>
                <li>Chi Siamo</li>
                <li>Prodotti</li>
            </ul>
        </nav >
    )
}
export default Header