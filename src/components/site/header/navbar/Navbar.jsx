import './style.css'

import { NavLink } from 'react-router-dom';

const NavBar = () => {
	
	const activesLink = 'menu-item actives' 
	const normalLink = 'menu-item'

	return ( 
		<nav className="navbar">
			<NavLink className='logo'>
				<span>Freelancer</span> portfolio
			</NavLink>
			{/* <a href="logo" className='logo'><span>Freelancer</span> portfolio</a> */}
			<ul className="menu">
				<li>
					<NavLink to="/" className={({isActive}) => {
						return isActive ? activesLink : normalLink
					}}>
						Projects
					</NavLink>
				</li>
				<li>
					<NavLink to="/Skils" className={({isActive}) => {
						return isActive ? activesLink : normalLink
					}}>
						Skills
						</NavLink>
				</li>
				<li>
					<NavLink to="/MyContact" className={({isActive}) => {
						return isActive ? activesLink : normalLink
					}}>
						Contacts
						</NavLink>
				</li>
			</ul>
		</nav>
	 );
}
 
export default NavBar;