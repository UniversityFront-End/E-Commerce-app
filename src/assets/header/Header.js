import React, {useState, useContext} from 'react'
import logo from '../../components/img/LOGO-E-COMMERCE-ORIGINA-A1L.png';
import Menu from '../../components/svg/bars-solid.svg'
import Close from '../../components/svg/xmark-solid.svg'
import Cart from '../../components/svg/cart-shopping-solid.svg'
import {Link} from 'react-router-dom'
import {DataContext} from '../../assets/products/DataProvider'

const Header = () => {
    const [menu, setMenu] = useState(false)
    const value = useContext(DataContext)
    const [cart] = value.cart

    const toggleMenu = () =>{
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <>
            <header>
                <div className="menu" onClick={toggleMenu}>
                    <img src={Menu} alt="" width="30" />
                </div>

                <div className="logo">
                    <h1><Link to="/index"><img src={logo} alt="" className='imgLogo' /></Link></h1>
                </div>
                <ul style={styleMenu}>
                    <li><Link to="/index">Inicio.</Link></li>
                    <li><Link to="/products">Productos.</Link></li>
                    <li><Link to="/about">Acerca De.</Link></li>
                    <li><Link to="/contact">Contacto.</Link></li>
                    <li onClick={toggleMenu}>
                        <img src={Close} alt="" width="30" className="menu" />
                    </li>
                </ul>

                <div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>
                
            </header>
        </>
    )
}

export default Header