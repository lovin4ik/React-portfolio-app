import './style.css'

import { useState } from "react";

import MyProject from './MyProject/Myproject'

import Img01 from '../../../../images/01.jpg'
import Img02 from '../../../../images/02.jpg'
import Img03 from '../../../../images/03.jpg'
import Img04 from '../../../../images/04.jpg'
import Img05 from '../../../../images/05.jpg'
import Img06 from '../../../../images/06.jpg'

const MyProjects = () => {

	const [project, setproject] = useState([
		{ id: 1, img: Img01 ,title: 'Gaming streaming portal' },
		{ id: 2, img: Img02 ,title: 'Video service' },
		{ id: 3, img: Img03 ,title: 'Video portal' },
		{ id: 4, img: Img04 ,title: 'Dating app' },
		{ id: 5, img: Img05 ,title: 'Landing' },
		{ id: 6, img: Img06 ,title: 'Gaming community' },
	])



	return ( 
		<section className='project-sec'>
			<div className="wrapper">
				<div className="projects__wrapper">
					<h2 className="projects__title">Projects</h2>
					<div className="projects__view">
						{project.map((project) => 
							<MyProject project={project} key={project.id} />
						)}
					</div>
				</div>
			</div>
		</section>
	 );
}
 
export default MyProjects;