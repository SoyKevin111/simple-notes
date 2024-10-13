import { Task } from "./task.model";

export interface Project {
	id: string;
	title: string;
	description: string;
	tasks: Task[];
	selected:boolean;
}