import PropTypes from 'prop-types';

export default function Card(props) {
	const { inverted, title, text } = props;
	return (
		<div className={inverted == true && 'xl:text-right '}>
			<h5 className=' text-primary-dark opacity-70 font-bold text-xl'>
				{title}
			</h5>
			<small className=' '>{text}</small>
		</div>
	);
}

Card.propTypes = {
	inverted: PropTypes.bool,
	title: PropTypes.string,
	text: PropTypes.string,
};
