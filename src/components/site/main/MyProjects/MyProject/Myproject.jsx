import './style.css'

import { NavLink } from 'react-router-dom';

const MyProject = (props) => {
	return (
		<NavLink to={`/project/${props.project.id}`} className='project'>
				<img src={props.project.img} alt={props.project.id} />
				<h3>{props.project.title}</h3>
		</NavLink>
	 );
}
 
export default MyProject;