interface Toast {
	type: string;
	data: string;
	path: string;
	primarycolor: string;
}

export const dataToast: Toast[] = [
	{ type: 'exportTxt', data: 'Project saved to Text.', path: 'assets/img/icon/icon-toast-svg/icon-toast-export.svg', primarycolor: '#dcfce7' },
	{ type: 'exportJson', data: 'Project saved to Json.', path: 'assets/img/icon/icon-toast-svg/icon-toast-export.svg', primarycolor: '#dcfce7' },
	{ type: 'newTask', data: 'New Task name-card.', path: 'assets/img/icon/icon-toast-svg/icon-toast-export.svg', primarycolor: '' },
	{ type: 'deleteTask', data: 'name-card has been deleted.', path: 'assets/img/icon/icon-toast-svg/icon-toast-export.svg', primarycolor: '#FEE2E2' },
	{ type: 'completeTask', data: 'The name-card has been completed.', path: 'assets/img/icon/icon-toast-svg/icon-toast-export.svg', primarycolor: '#FEF3E2' }
];