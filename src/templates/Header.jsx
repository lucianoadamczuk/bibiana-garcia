import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { AnimateBottomToTop } from '../animations';
import { Highlight } from '../components/common';
import { Button } from '../components/ui';

export default function Header() {
	const images = [
		'/images/header-1.jpg',
		'/images/header-2.jpg',
		'/images/header-3.jpg',
	];
	return (
		<header
			className=' w-full py-10   bg-cover bg-center overflow-hidden bg-fixed'
			style={{ backgroundImage: 'url(/images/header-desktop.jpg)' }}
		>
			<div className=' py-10 2xl:py-40 bg-gradient-to-r bg-primary-dark bg-opacity-40 backdrop-blur-md'>
				<section className='container grid gap-5 md:grid-cols-2 items-center'>
					{/* text */}
					<AnimateBottomToTop>
						<articlec className=' flex flex-col gap-10 order-2 '>
							<div className=' text-center md:text-start'>
								<Highlight> Renueva tu cuerpo, despeja tu mente </Highlight>
								<h1 className=' text-gray font-bold text-8xl'>
									Bibiana García
								</h1>
							</div>

							<a href='#contacto'>
								<Button> Contacto </Button>
							</a>
						</articlec>
					</AnimateBottomToTop>
					{/* images */}
					<article className=' grid grid-cols-3 gap-5 md:order-2'>
						{images.map((item, index) => (
							<motion.img
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 0.5 }}
								transition={{ delay: 0.2 * index, duration: 1 }}
								key={uuidv4()}
								src={item}
								alt='A representative image'
								className={`h-72 rounded-2xl object-cover shadow-lg shadow-dark  ${
									index === 1 && 'mt-5'
								} `}
							/>
						))}
					</article>
				</section>
			</div>
		</header>
	);
}
