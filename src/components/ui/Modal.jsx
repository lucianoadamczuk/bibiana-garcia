import { useContext } from 'react';
import Button from './Button';
import { ContextModal } from '../../contexts';
import { phoneNumber } from '../../config';
import { motion } from 'framer-motion';
export default function Modal() {
	const { modalData, isModalOpen, setIsModalOpen } = useContext(ContextModal);
	const whatsappText = `Hola Bibiana, quería consultarle por el precio del producto ${modalData?.title}. ¡Muchas gracias!`;
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className={`w-full h-screen fixed inset-0 bg-highlight bg-opacity-20 backdrop-blur-sm z-30 ${
				isModalOpen ? 'flex' : 'hidden'
			} `}
		>
			<motion.div
				initial={{ scale: 0.5 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.2 }}
				className='container h-full flex flex-col gap-5 justify-center items-center'
			>
				<section className=' max-w-lg py-10 px-5 relative bg-primary-dark text-gray rounded-xl '>
					<div
						onClick={() => setIsModalOpen(false)}
						className=' w-6 h-6 rounded-full flex items-center justify-center absolute top-5 right-5 bg-dark text-light cursor-pointer hover:scale-110'
					>
						X
					</div>
					<h4 className=' text-4xl font-bold'> {modalData?.title} </h4>
					<p>{modalData?.description}</p>
				</section>
				<a
					href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
						whatsappText
					)}`}
				>
					<Button>Consultar</Button>
				</a>
			</motion.div>
		</motion.div>
	);
}
