import './style.css'

import MyProject from './MyProject/Myproject'

import { ProjectList } from '../../../helper/ProjectList';

const MyProjects = () => {

	const project = ProjectList;

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