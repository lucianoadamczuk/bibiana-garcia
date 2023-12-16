import propTypes from 'prop-types';
import Button from './Button';
export default function Slide({ src, title }) {
	return (
		<div className=' w-fit'>
			<div className=' w-40 h-48 p-2 relative rounded-xl shadow-xl shadow-gray flex justify-center items-end overflow-hidden'>
				<img
					src={src}
					alt='Imagen representativa del producto'
					className=' absolute h-full object-cover inset-0 opacity-100'
				/>
				<Button>Ver más</Button>
			</div>
			<p className=' mt-4 text-sm text-center'> {title} </p>
		</div>
	);
}

Slide.propTypes = {
	src: propTypes.string,
	title: propTypes.string,
};
