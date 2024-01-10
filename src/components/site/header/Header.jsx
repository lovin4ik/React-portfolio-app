import './style.css'
import NavBar from './navbar/Navbar'

const Header = () => {
	return ( 
		<header>
			<div className="wrapper">
				<div className="header__wrapper">
					<NavBar />
				</div>
			</div>
		</header>
	 );
}
 
export default Header;