import PropTypes from 'prop-types';

export default function Highlight({ children }) {
	return (
		<h5 className=' text-primary-dark font-bold tracking-widest animate-pulse'>
			{children}
		</h5>
	);
}

Highlight.propTypes = {
	children: PropTypes.string,
};
