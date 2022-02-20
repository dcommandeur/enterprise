export interface Call {
	id: string;
	titel: string;
	caller: User;
	enterprise: Enterprise;
	project: Project;
	created: string;
	related: Call[];
	status: Status;
	priority: Priority;
	description: string;
}

export enum Status { 'Fresh', 'On hold', 'Awaiting action', 'Closed',
'Reopened' } export enum Priority { 'Top', 'High', 'Medium', 'Normal', 'Low', 'None' } export
interface User { id: string; } export interface Project { id: string; } export interface Agreement {
id: string; SLA shit }
