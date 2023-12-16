import propTypes from 'prop-types';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Slide from './Slide';

import { ContextModal } from '../../contexts';
import { useContext } from 'react';

export default function Carousel({ display }) {
	const { setModalData, setIsModalOpen } = useContext(ContextModal);
	return (
		<>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={3}
				coverflowEffect={{
					rotate: 10,
					stretch: 10,
					depth: 300,
					modifier: 1,
					slideShadows: false,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className=' w-full h-fit pb-10'
			>
				{display?.map((item, index) => (
					<SwiperSlide
						key={index}
						onClick={() => {
							setModalData(item), setIsModalOpen(true);
						}}
					>
						<Slide title={item.title} src={item.src} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

Carousel.propTypes = {
	display: propTypes.array,
};
