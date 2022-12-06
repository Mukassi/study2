import './header.css'
import logo from '../../resourses/img/logo.png'
const Header= () => {

    return (
        <footer className='footer'>
            <div className="logo">
                <a href="@"> <img src={logo} alt="logo" /> </a>
            </div>
            <div className="nav">
                <a href="@" className="nav-item">Coffee house</a>
                <a href="@" className="nav-item">Our coffee</a>
                <a href="@" className="nav-item">For your pleasure</a>
            </div>
        </footer>
    )

}




export default Header;