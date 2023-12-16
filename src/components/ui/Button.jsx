import propTypes from 'prop-types';
export default function Button({ children, onClick }) {
	return (
		<button
			className=' w-full md:w-fit py-2 px-5 relative rounded-md bg-light bg-opacity-60  backdrop-blur-md z-10 hover:scale-105'
			onClick={onClick}
		>
			<p className=' text-center text-dark '> {children} </p>
		</button>
	);
}

Button.propTypes = {
	children: propTypes.string,
	onClick: propTypes.func,
};
