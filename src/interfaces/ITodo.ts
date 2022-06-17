// statuses todo
export enum TodoStatuses {
	COMPLETE = 'Complete',
	INCOMPLETE = 'Uncomplete',
}

export interface ITodo {
	id: number;
	title: string;
	status: TodoStatuses;
}
