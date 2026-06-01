// --- TYPES & INTERFACES ---
export interface Thesis {
	id: string;
	name: string;
	year: number;
	degree: string;
	title: string;
	problem: string;
	algorithm: string[];
	dataset: string;
	performance: string;
}

export interface ThesisFormData {
	name: string;
	degree: string;
	title: string;
	problem: string;
	algorithm: string;
	dataset: string;
	performance: string;
	year: number;
}

export enum SortOption {
	YearDesc = 'Year (Newest First)',
	YearAsc = 'Year (Oldest First)',
	TitleAsc = 'Title (A-Z)',
	TitleDesc = 'Title (Z-A)',
	DatasetAsc = 'Dataset (A-Z)',
	DatasetDesc = 'Dataset (Z-A)'
}

export type Algorithm = string;
