import propTypes from 'prop-types';
import { motion } from 'framer-motion';
export default function AnimateBottomToTop({ children }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: '50px' }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			{children}
		</motion.div>
	);
}

AnimateBottomToTop.propTypes = {
	children: propTypes.node,
};
