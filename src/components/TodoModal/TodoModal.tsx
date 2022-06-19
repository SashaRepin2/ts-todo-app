import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { RootModal } from '../RootModal/RootModal';
import { observer } from 'mobx-react-lite';
import { ITodo, TodoStatuses } from '../../interfaces/ITodo';
import TodosStore from '../../stores/TodosStore';
import { margin } from '@mui/system';

interface ITodoForm {
	todoTitle: string;
	//... other fields
}

interface TodoModalProps {
	isOpen: boolean;
	onChangeHanlder: (value: boolean) => void;
}

const baseFormValue: ITodoForm = { todoTitle: '' };

export const TodoModal = observer(({ isOpen, onChangeHanlder }: TodoModalProps) => {
	const [todoForm, setTodoForm] = useState<ITodoForm>(baseFormValue);

	const onCloseHandler = () => {
		onChangeHanlder(false);
	};

	const onOpenHanlder = () => {
		onChangeHanlder(true);
	};

	const onSubmitHandler = () => {
		const todo: ITodo = {
			id: Date.now(),
			title: todoForm.todoTitle,
			status: TodoStatuses.INCOMPLETE,
		};

		TodosStore.addTodo(todo);
		setTodoForm(baseFormValue);
		onChangeHanlder(false);
	};

	return (
		<RootModal title={'Todo Form'} open={isOpen} onClose={onCloseHandler} onOpen={onOpenHanlder}>
			<TextField
				id={'form-todo-name'}
				label={'Todo title'}
				value={todoForm.todoTitle}
				onChange={e => {
					setTodoForm({ ...todoForm, todoTitle: e.target.value });
				}}
				sx={{
					margin: '15px 0',
					'& .MuiInputLabel-root': { color: '#fff' },
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							borderColor: '#fff',
						},
					},
				}}
			/>

			<Button variant='contained' color='success' onClick={onSubmitHandler}>
				Add Todo
			</Button>
		</RootModal>
	);
});
