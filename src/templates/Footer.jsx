import {
	AnimateBottomToTop,
	AnimateLeftToRight,
	AnimateRightToLeft,
} from '../animations';
import { phoneNumber } from '../config';
import { IconInstagram, IconWhatsapp } from '../icons';
import Grid1x1 from './Grid1x1';

export default function Footer() {
	const whatsappText = 'Hola Bibiana, ¿cómo está? Quería consultarle por...';
	return (
		<footer
			className=' bg-gradient-to-t from-dark  to-primary-dark pb-10'
			id='contacto'
		>
			<Grid1x1>
				<AnimateLeftToRight>
					<article>
						<h3 className='text-light font-bold text-3xl'>Bibiana García</h3>
						<div className=' grid gap-2 items-center text-gray'>
							<p>
								<span className=' font-bold'>Dirección:</span> Monseñor Marcon
								742, Villa Luzuriaga, La Matanza. Buenos Aires, Argentina.
							</p>

							<p>
								<span className=' font-bold'>Telefono:</span> 11 5337 6931
							</p>
						</div>
					</article>
				</AnimateLeftToRight>
				{/* map */}
				<AnimateRightToLeft>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.6897377874584!2d-58.5833948!3d-34.66253770000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7bbd161ade5%3A0x2a0f5e43e43e3fa2!2sMonse%C3%B1or%20Jos%C3%A9%20Francisco%20Marc%C3%B3n%20742%2C%20B1754%20Villa%20Luzuriaga%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1702672306257!5m2!1ses-419!2sar'
						width='600'
						height='450'
						className='w-full h-60'
						allowfullscreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</AnimateRightToLeft>
			</Grid1x1>

			{/* social medias */}
			<AnimateBottomToTop>
				<div className=' flex justify-center gap-5   text-light '>
					<a
						href='https://www.instagram.com/bibieligar/'
						target='_blank'
						className=' opacity-40 hover:opacity-80'
						rel='noreferrer'
					>
						<IconInstagram />
					</a>
					<a
						href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
							whatsappText
						)}`}
						target='_blank'
						className='opacity-40 hover:opacity-80'
						rel='noreferrer'
					>
						<IconWhatsapp />
					</a>
				</div>
			</AnimateBottomToTop>
		</footer>
	);
}
