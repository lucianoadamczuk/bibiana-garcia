import { createContext, useState } from 'react';

export const ContextModal = createContext();

import propTypes from 'prop-types';

export const ProviderModal = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalData, setModalData] = useState();
	return (
		<ContextModal.Provider
			value={{ isModalOpen, setIsModalOpen, modalData, setModalData }}
		>
			{children}
		</ContextModal.Provider>
	);
};

ProviderModal.propTypes = {
	children: propTypes.node,
};
