// --- MOCK DATA ---
export const MOCKDATA = [
	{
		id: '1',
		name: 'Jane Doe',
		year: 2025,
		degree: 'MS Computer Science',
		title: 'Optimizing Urban Traffic Flow using Reinforcement Learning',
		problem:
			'Urban traffic congestion leads to high carbon emissions, increased economic costs, and significant time loss for commuters. Traditional timed traffic lights are unresponsive to dynamic, real-time traffic fluctuations.',
		algorithm: ['Deep Q-Network (DQN)'],
		dataset: 'Metropolis Open Traffic Cam Data (2024-2025)',
		performance:
			'The implemented DQN model reduced average commuter wait times at major intersections by 23.4% compared to standard actuated signals. The algorithm successfully converged after 500 epochs, demonstrating a 92% accuracy rate on hold-out validation sets during peak rush hours.'
	},
	{
		id: '2',
		name: 'Marcus Chen',
		year: 2024,
		degree: 'PhD Data Science',
		title: 'Predictive Maintenance in Manufacturing via Acoustic Anomalies',
		problem:
			'Unexpected machinery breakdowns on assembly lines cause massive halts in production and expensive emergency repairs. Visual inspections often fail to detect internal wear and tear early enough.',
		algorithm: ['Random Forest', 'Convolutional Neural Networks (CNN)'],
		dataset: 'Industrial Machine Audio Recordings Dataset (IMARD) v2',
		performance:
			'By combining acoustic feature extraction (MFCCs) with a CNN, the model achieved a 96.8% F1-score in predicting failures 48 hours prior to breakdown. The Random Forest baseline only achieved 82%, showing the necessity of deep learning for nuanced audio spectrograms.'
	},
	{
		id: '3',
		name: 'Sarah Jenkins',
		year: 2026,
		degree: 'BS Information Technology',
		title: 'Automated Phishing Detection using Natural Language Processing',
		problem:
			'Phishing emails are becoming increasingly sophisticated, bypassing standard rule-based spam filters and leading to severe organizational data breaches and financial losses.',
		algorithm: ['DistilBERT (Fine-tuned)'],
		dataset: 'Enron Email Corpus & PhishTank 2025 Extract',
		performance:
			'The fine-tuned DistilBERT model processed incoming emails at 45 emails/second with a false positive rate of only 0.4%. Overall accuracy reached 99.1%, significantly outperforming traditional Naive Bayes classifiers which struggled with novel, context-heavy phishing attempts.'
	}
];

export const DEGREE_PROGRAMS = [
	'BS Information Technology',
	'BS Computer Science',
	'MS Computer Science',
	'MS Data Science',
	'PhD Data Science',
	'PhD Artificial Intelligence'
];
