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

export type Algorithm = string;
