import { AnimateLeftToRight, AnimateRightToLeft } from '../animations';
import data from '../content/about.json';
import { BoxTitle, Grid1x1 } from '../templates';
export default function AboutMe() {
	return (
		<Grid1x1>
			<AnimateLeftToRight>
				<BoxTitle
					title='Acerca de mí'
					subtitle='Mi historia'
					text={data?.text}
					highlight={data.highlight}
				/>
			</AnimateLeftToRight>

			<AnimateRightToLeft>
				<div className='  flex  justify-center'>
					<img src='/images/bibiana.svg' className=' h-96' />
				</div>
			</AnimateRightToLeft>
		</Grid1x1>
	);
}
