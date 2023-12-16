import { useContext } from 'react';
import Button from './Button';
import { ContextModal } from '../../contexts';
import { phoneNumber } from '../../config';

export default function Modal() {
	const { modalData, isModalOpen, setIsModalOpen } = useContext(ContextModal);
	const whatsappText = `Hola Bibiana, quería consultarle por el precio del producto ${modalData?.title}. ¡Muchas gracias!`;
	return (
		<div
			className={`w-full h-screen fixed inset-0  bg-primary-dark bg-opacity-40 backdrop-blur-lg z-30 ${
				isModalOpen ? 'flex' : 'hidden'
			} `}
		>
			<div className='container h-full flex flex-col gap-5 justify-center items-center'>
				<section className=' max-w-lg py-10 px-5 relative bg-primary-dark text-gray rounded-xl '>
					<div
						onClick={() => setIsModalOpen(false)}
						className=' w-5 h-5 rounded-full flex items-center justify-center absolute top-5 right-5 bg-gray text-primary-dark cursor-pointer hover:scale-110'
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
			</div>
		</div>
	);
}
