import { Card } from '../components/ui';
import data from '../content/services.json';
import { v4 as uuidv4 } from 'uuid';
import { BoxTitle } from '../templates';

export default function Services() {
	return (
		<section className='py-14 bg-gray'>
			<div className='container space-y-10'>
				<BoxTitle
					center={true}
					title='¿Qué podes encontrar?'
					subtitle='Masajes'
				/>

				<article className=' grid gap-5 xl:grid-cols-3 xl:place-items-center'>
					<div className=' space-y-5'>
						{data.slice(0, 3)?.map((item) => (
							<Card
								key={uuidv4()}
								inverted={true}
								title={item.title}
								text={item.text}
							/>
						))}
					</div>

					<img
						src='/images/services.jpg'
						alt=''
						className=' w-80 h-80 object-cover shadow-xl shadow-primary-dark hidden xl:block rounded-full opacity-60'
					/>

					<div className=' space-y-5'>
						{data.slice(3, 6)?.map((item) => (
							<Card key={uuidv4()} title={item.title} text={item.text} />
						))}
					</div>
				</article>
			</div>
		</section>
	);
}
