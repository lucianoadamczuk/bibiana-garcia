import propTypes from 'prop-types';
export default function Grid1x1({ children }) {
	return (
		<section className=' container py-20 grid lg:grid-cols-2 gap-10 place-items-center'>
			{children}
		</section>
	);
}

Grid1x1.propTypes = {
	children: propTypes.node,
};
