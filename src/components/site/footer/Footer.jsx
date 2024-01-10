import "./style.css"

import { BiLogoGithub } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
	return ( 
		<footer>
			<div className="wrapper">
				<div className="footer__wrapper">
					<div className="contacts">
						<a href="https://github.com/lovin4ik/GoIteens-home-work" target="_blank" rel="noopener noreferrer">
							<BiLogoGithub size={40} color="#fff"/>
						</a>
						<a href="https://www.facebook.com/profile.php?id=100071879373503&sk=photos" target="_blank" rel="noopener noreferrer">
							<BiLogoFacebook size={40} color="#fff"/>
						</a>
						<a href="https://www.instagram.com/borov_1.09.1939/" target="_blank" rel="noopener noreferrer">
							<BiLogoInstagram size={40} color="#fff"/>
						</a>
					</div>
					<p>© 2022 frontend-dev.com</p>
				</div>
			</div>
		</footer>
	 );
}
 
export default Footer;