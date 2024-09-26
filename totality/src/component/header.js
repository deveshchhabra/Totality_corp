import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Title = () => (
    <Link href='/'>
      <img
        className='logo'
        alt='img'
        src='https://www.totalitycorp.com/_next/static/media/logo.f83b3df6.webp'
      ></img>
    </Link>
  )
  const Header = () => {
    const cartItems=useSelector((store)=>store.cart.items)
    // console.log(cartItems)
    return (
      <header>
      <div className='header'>
        <Title />
        <div className='nav-item'>
          <ul>
            <Link to='/Cart'><li>Cart-{cartItems.length}</li></Link>
            <button className='ram'>Contact-Us</button>
          </ul>
        </div>

      </div>
      </header>
    )
  }
  export default Header;