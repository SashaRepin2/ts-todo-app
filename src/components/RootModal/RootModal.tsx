import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import styles from './Modal.module.scss';

interface ModalProps {
	title: string | null;
	children?: React.ReactNode;
	open: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const RootModal: React.FC<ModalProps> = ({ title, children, open, onClose, onOpen }) => {
	return (
		<div>
			<Modal
				open={open}
				onClose={onClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box className={styles.modal}>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						{title || 'Заголовок'}
					</Typography>
					<Typography id='modal-modal-description' sx={{ mt: 2 }}>
						{children}
					</Typography>
				</Box>
			</Modal>
		</div>
	);
};
