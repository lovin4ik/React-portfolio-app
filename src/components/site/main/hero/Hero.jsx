import './style.css'
import MyBtn from '../../../ui/MyButton/MyButton'

const Hero = () => {
	return ( 
		<section className="hero">
			<div className="wrapper">
				<div className="hero__wrapper">
					<h2 className="title">Hi, my name is <span className="purple">Valera</span> <span>a frontend developer</span></h2>
					<p className="text">with passion for learning and creating.</p>
					<MyBtn>Download CV</MyBtn>
				</div>
			</div>
		</section>
	 );
}
 
export default Hero;