import { AnimateLeftToRight } from '../animations';
import { Carousel } from '../components/ui';
import data from '../content/just.json';
import { BoxTitle, Grid1x1 } from '../templates';
export default function Just() {
	return (
		<Grid1x1>
			<AnimateLeftToRight>
				<BoxTitle
					title='Expande tu bienestar'
					subtitle='Just'
					text={data.text}
					highlight={data.highlight}
				/>
			</AnimateLeftToRight>

			<Carousel display={data.products} />
		</Grid1x1>
	);
}
