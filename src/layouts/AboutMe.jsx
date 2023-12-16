import data from '../content/about.json';
import { BoxTitle, Grid1x1 } from '../templates';
export default function AboutMe() {
	return (
		<Grid1x1>
			<BoxTitle
				title='Acerca de mí'
				subtitle='Mi historia'
				text={data?.text}
				highlight={data.highlight}
			/>
		</Grid1x1>
	);
}
