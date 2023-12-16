import { Highlight } from '../components/common';
import { Button } from '../components/ui';

export default function Header() {
	return (
		<header
			className=' w-full py-10  bg-cover bg-center'
			style={{ backgroundImage: 'url(/images/header-desktop.jpg)' }}
		>
			<div className=' py-10 bg-gradient-to-r bg-primary-dark bg-opacity-40 backdrop-blur-md'>
				<section className='container grid gap-5 md:grid-cols-2 items-center'>
					{/* text */}
					<articlec className=' flex flex-col gap-10 order-2 '>
						<div className=' text-center md:text-start'>
							<Highlight> Renueva tu cuerpo, despeja tu mente </Highlight>
							<h1 className=' text-gray font-bold text-8xl'>Bibiana García</h1>
						</div>

						<a href='#contacto'>
							<Button> Contacto </Button>
						</a>
					</articlec>

					{/* images */}
					<article className=' grid grid-cols-3 gap-5 md:order-2'>
						<img
							src='/images/header-1.jpg'
							alt=''
							className=' h-72 rounded-2xl object-cover shadow-lg shadow-dark opacity-50 duration-300 hover:opacity-70'
						/>
						<img
							src='/images/header-2.jpg'
							alt=''
							className=' h-72 rounded-2xl object-cover shadow-lg shadow-dark opacity-50 duration-300 hover:opacity-70 mt-5'
						/>
						<img
							src='/images/header-3.jpg'
							alt=''
							className=' h-72 rounded-2xl object-cover shadow-lg shadow-dark opacity-50 duration-300 hover:opacity-70'
						/>
					</article>
				</section>
			</div>
		</header>
	);
}
