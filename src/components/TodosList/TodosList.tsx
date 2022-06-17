import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Typography } from '@mui/material';
import { ITodo } from '../../interfaces/ITodo';
import TodosStore from '../../stores/TodosStore';
import { TodoItem } from './TodoItem/TodoItem';

import { ProgressBar } from '../../components/UI/ProgressBar/ProgressBar';
import { PercentageOfCompleted } from '../../utils/PercentageOfCompleted';

import styles from './TodosList.module.scss';

export const TodosList = observer(() => {
	const todos: ITodo[] = TodosStore.todos;

	return (
		<Box className={styles.container}>
			<Box className={styles.header}>
				<ProgressBar
					progressValue={PercentageOfCompleted(
						TodosStore.completedTodosCount,
						TodosStore.todos.length,
					)}
				/>
			</Box>
			<Box className={styles.list}>
				{todos.length ? (
					todos.map(todo => {
						return <TodoItem todo={todo} key={todo.id} />;
					})
				) : (
					<Typography className={styles.hint} variant={'h2'}>
						Добавьте Todo
					</Typography>
				)}
			</Box>
		</Box>
	);
});
