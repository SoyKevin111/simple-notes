interface Toast {
	type: string;
	data: string;
	path: string;
	primarycolor: string;
}

export const dataToast: Toast[] = [
	{ type: 'exportTxt', data: 'Project saved to Text.', path: 'assets/img/icon/icon-toast-svg/icon-toast-text.svg', primarycolor: '#DEE9FD' },
	{ type: 'exportJson', data: 'Project saved to Json.', path: 'assets/img/icon/icon-toast-svg/icon-toast-json.svg', primarycolor: '#DEE9FD' },
	{ type: 'newTask', data: 'New Task name-card.', path: 'assets/img/icon/icon-toast-svg/icon-toast-export.svg', primarycolor: '#DCFCE7' },
	{ type: 'deleteTask', data: 'name-card has been deleted.', path: 'assets/img/icon/icon-toast-svg/icon-toast-deleted.svg', primarycolor: '#FEE2E2' },
	{ type: 'completeTask', data: 'The name-card has been completed.', path: 'assets/img/icon/icon-toast-svg/icon-toast-complete.svg', primarycolor: '#DEE9FD' }
];