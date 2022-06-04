export enum Complete {
  COMPLETE,
  UNCOMPLETE,
  STARTED,
}

export interface ITodo {
  id: number;
  title: string;
  complete: Complete;
}
