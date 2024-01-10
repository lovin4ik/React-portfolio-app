import './style.css'

const MyContact = () => {
	return ( 
		<main>
			<section className="contact">
				<div className="wrapper">
					<div className="contact__wrapper">
						<h2>Contacts</h2>
						<address>
							<div className="location">
								<h3>Location</h3>
								<p>Ukraine Chernivtsi</p>
							</div>
							<div className="tgwaps">
								<h3>Telegram/WatsApp</h3>
								<a href="phone:+380668777236">+38 066 8777 236</a>
							</div>
							<div className="email">
								<h3>Email</h3>
								<a href="mailto:dianasmidt721@gmail.com">dianasmidt721@gmail.com</a>
								<a href="mailto:rasteniaros@gmail.com">rasteniaros@gmail.com</a>
							</div>
						</address>
					</div>
				</div>
			</section>			
		</main>
	 );
}
 
export default MyContact;