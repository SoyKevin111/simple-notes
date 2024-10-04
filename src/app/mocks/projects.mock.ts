export interface ProjectMock{
	id:string;
	title:string;
	description:string;
	tasks:any[];
}

export const dataProjectMock:ProjectMock[] = [
	{id: '1', title:'Project 1', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut ex in sapien luctus ultricies sit amet eget tortor. Integer id mattis mi. Pellentesque gravida dapibus mauris sit amet mollis. Aliquam ac vulputate augue. Praesent interdum volutpat sapien, vel rutrum urna placerat et. In hendrerit arcu est, a molestie dolor pulvinar', tasks: []},
	{id: '2', title:'Project 2', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut ex in sapien luctus ultricies sit amet eget tortor. Integer id mattis mi. Pellentesque gravida dapibus mauris sit amet mollis. Aliquam ac vulputate augue. Praesent interdum volutpat sapien, vel rutrum urna placerat et. In hendrerit arcu est, a molestie dolor pulvinar', tasks: []},
	{id: '3', title:'Project 3', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut ex in sapien luctus ultricies sit amet eget tortor. Integer id mattis mi. Pellentesque gravida dapibus mauris sit amet mollis. Aliquam ac vulputate augue. Praesent interdum volutpat sapien, vel rutrum urna placerat et. In hendrerit arcu est, a molestie dolor pulvinar', tasks: []}
]