import { v4 as uuidv4 } from 'uuid';
import propTypes from 'prop-types';
import { Highlight } from '../components/common';

export default function BoxTitle({ center, title, subtitle, text, highlight }) {
	return (
		<article className={center && 'grid place-items-center '}>
			<div className=' w-fit flex items-center gap-2'>
				<div className=' w-10 h-[2px] bg-primary'></div>
				<Highlight> {subtitle} </Highlight>
				<div className=' w-10 h-[2px] bg-primary'></div>
			</div>
			<h3
				className={`text-primary-dark font-bold text-3xl ${
					center && 'text-center'
				} `}
			>
				{title}
			</h3>
			<div className=' space-y-5'>
				{text?.map((item) => (
					<p key={uuidv4()}> {item} </p>
				))}

				<p className=' font-bold text-end text-highlight'>{highlight}</p>
			</div>
		</article>
	);
}

BoxTitle.propTypes = {
	center: propTypes.bool,
	title: propTypes.string,
	subtitle: propTypes.string,
	text: propTypes.array,
	highlight: propTypes.string,
};
