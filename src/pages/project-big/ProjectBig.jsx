import './style.css'

import { useParams } from "react-router-dom";
import { ProjectList } from '../../components/helper/ProjectList.js'

const ProjectBig = () => {
	const { id } = useParams();
	const Listproject = ProjectList[id];

	console.log(Listproject)

	return ( 
		<main>
			<section>
				<div className="wrapper">
					<div className="project__wrapper">
						<h2>{Listproject.title}</h2>
						<img src={Listproject.imgBig} alt={Listproject.id} />
						<p>{Listproject.skils}</p>
					</div>
				</div>
			</section>
		</main>
	 );
}
 
export default ProjectBig;