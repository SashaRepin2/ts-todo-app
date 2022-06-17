import { IconButton } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { ITodo, TodoStatuses } from '../../../interfaces/ITodo';
import TodosStore from '../../../stores/TodosStore';

import DeleteIcon from '@mui/icons-material/Delete';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import styles from './TodoItem.module.scss';

interface TodoItemProps {
	todo: ITodo;
}

export const TodoItem: React.FC<TodoItemProps> = observer(({ todo }) => {
	const rootStyles = [styles.item];

	if (todo.status === TodoStatuses.COMPLETE) {
		rootStyles.push(styles.completed);
	}

	return (
		<div className={rootStyles.join(' ')}>
			<div className={styles.title}>{todo.title}</div>
			<div className={styles.status}>{todo.status}</div>
			<div className={styles.options}>
				<IconButton
					className={styles.complete}
					onClick={() => {
						todo.status === TodoStatuses.COMPLETE
							? (todo.status = TodoStatuses.INCOMPLETE)
							: TodosStore.completeTodo(todo);
					}}>
					<LibraryAddCheckIcon />
				</IconButton>

				<IconButton
					className={styles.remove}
					onClick={() => {
						TodosStore.removeTodo(todo.id);
					}}>
					<DeleteIcon />
				</IconButton>
			</div>
		</div>
	);
});
