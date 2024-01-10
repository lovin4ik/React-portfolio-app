import './style.css'

const MyProject = (props) => {
	return ( 
		<button className='project'>
			<img src={props.project.img} alt={props.project.id} />
			<h3>{props.project.title}</h3>
		</button>
	 );
}
 
export default MyProject;