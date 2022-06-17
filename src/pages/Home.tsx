import React from 'react';
import { observer } from 'mobx-react-lite';
import { TodosList } from '../components/TodosList/TodosList';
import { TodoModal } from '../components/TodoModal/TodoModal';

import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
export const Home: React.FC = observer(() => {
	const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

	return (
		<React.Fragment>
			<TodoModal isOpen={isOpenModal} onChangeHanlder={setIsOpenModal} />
			<IconButton
				size='medium'
				style={{
					position: 'absolute',
					bottom: '45px',
					right: '45px',
					margin: 0,
					padding: 0,
					backgroundColor: 'red',
				}}
				onClick={() => setIsOpenModal(true)}>
				<AddIcon />
			</IconButton>
			<TodosList />
		</React.Fragment>
	);
});
