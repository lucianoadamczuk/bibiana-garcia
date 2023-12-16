import propTypes from 'prop-types';
import { motion } from 'framer-motion';
export default function AnimateLeftToRight({ children }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: '-100px' }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 1 }}
		>
			{children}
		</motion.div>
	);
}

AnimateLeftToRight.propTypes = {
	children: propTypes.node,
};
