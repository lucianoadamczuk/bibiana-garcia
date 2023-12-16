import { Carousel } from '../components/ui';
import data from '../content/just.json';
import { BoxTitle, Grid1x1 } from '../templates';
export default function Just() {
	return (
		<Grid1x1>
			<BoxTitle
				title='Expande tu bienestar'
				subtitle='Just'
				text={data.text}
				highlight={data.highlight}
			/>

			<Carousel display={data.products} />
		</Grid1x1>
	);
}
