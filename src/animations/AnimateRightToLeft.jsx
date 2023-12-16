import propTypes from 'prop-types';
import { motion } from 'framer-motion';
export default function AnimateRightToLeft({ children }) {
	return (
		<motion.div
			className='w-full'
			initial={{ opacity: 0, x: '100px' }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 1 }}
		>
			{children}
		</motion.div>
	);
}

AnimateRightToLeft.propTypes = {
	children: propTypes.node,
};
