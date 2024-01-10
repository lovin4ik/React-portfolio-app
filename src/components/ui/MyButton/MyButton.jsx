import classes from './style.module.css'


const MyButton = ({children , ...props}) => {
	return ( 
		<button className={classes.MyBtn}>
			{children}
		</button>
	 );
}
 
export default MyButton;