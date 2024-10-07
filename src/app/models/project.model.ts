import { TaskMock } from "./task.model";

export interface ProjectMock {
	id: string;
	title: string;
	description: string;
	tasks?: TaskMock[];
}