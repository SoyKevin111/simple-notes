interface Toast {
	type: string;
	data: string;
	path: string;
	primarycolor: string;
}

export const dataToast: Toast[] = [
	{ type: 'exportTxt', data: 'saved to Text', path: 'assets/img/icon/icon-toast-svg/icon-toast-text.svg', primarycolor: '#DEE9FD' },
	{ type: 'exportJson', data: 'saved to Json', path: 'assets/img/icon/icon-toast-svg/icon-toast-json.svg', primarycolor: '#DEE9FD' },
	{ type: 'newTask', data: 'New Task ', path: 'assets/img/icon/icon-toast-svg/icon-toast-export.svg', primarycolor: '#DCFCE7' },
	{ type: 'deleteTask', data: 'Has been deleted ', path: 'assets/img/icon/icon-toast-svg/icon-toast-deleted.svg', primarycolor: '#FEE2E2' },
	{ type: 'completeTask', data: 'Has been completed ', path: 'assets/img/icon/icon-toast-svg/icon-toast-complete.svg', primarycolor: '#DEE9FD' },
	{type: 'newProject', data:'New Project ', path:'assets/img/icon/icon-toast-svg/icon-toast-newProject.svg', primarycolor: '#BE51E5'}
];