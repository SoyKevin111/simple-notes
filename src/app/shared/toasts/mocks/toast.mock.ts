interface Toast{
	type: string;
	data: string;
	path: string;
}

const dataToast:Toast[] = [
	{type: 'exportTxt', data: 'Project saved to Text.', path: 'assets/img/icon/icon-toast-svg/icon-toast-export.svg'},
	{type: 'exportJson', data: 'Project saved to Json.', path: 'assets/img/icon/icon-toast-svg/icon-toast-export.svg'},
	{type:'newTask', data: 'New Task name-card.', path: 'assets/img/icon/icon-toast-svg/icon-toast-export.svg'},
	{type:'deleteTask', data: 'name-card has been deleted.', path: 'assets/img/icon/icon-toast-svg/icon-toast-export.svg'},
	{type:'completeTask', data: 'The name-card has been completed.', path: 'assets/img/icon/icon-toast-svg/icon-toast-export.svg'}
];