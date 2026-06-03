export const ACTUALDATA = [
	{
		id: '1',
		name: 'Almira Faye D. Tierra',
		year: 2021,
		degree: 'BS Computer Science',
		title:
			'Whale Optimization Algorithm for the p-center Problem in Early Warning System Allocation in Digos City',
		problem: 'The p-center Problem for allocation of Early Warning Systems (EWS).',
		algorithm: ['Whale Optimization Algorithm (WOA)'],
		dataset: 'UP Phil-LiDAR-1 project (2019)',
		performance:
			"The CPU time of WOA when the best solution was obtained was around less than a minute to 7 minutes for every run with 1000 iteration parameters, 4 to 7 minutes for a run to reach maximum iteration. Meanwhile, it took approximately 4 to 14 minutes for the runs with 2000 iteratios to obtain the best solution and 10 to 14 minutes for each run to reach the maximum iteration. The WOA's ability to switch between exploration and exploitation phase contributes to the fast CPU time the algorithm exhibited in this study. Parameters with a low vector a value as a faster CPU time, while parameters with a higher value have a longer computation time. (Tierra, 2021)"
	},
	{
		id: '2',
		name: 'Maria Joselle V. Luzon',
		year: 2021,
		degree: 'BS Computer Science',
		title:
			'Moth-Flame Optimization (MFO) Algorithm for the Continuous p-center Problem on the Allocation of Early Warning Systems in Digos City',
		problem: 'The p-center Problem for allocation of Early Warning Systems (EWS).',
		algorithm: ['Moth-Flame Optimization Algorithm (MFOA)'],
		dataset: 'UP Phil-LiDAR-1 project (2019)',
		performance:
			'The MFO algorithm performed remarkably well and found competitive solutions for the p-center problem of the allocation of the early warning devices in Digos City. In terms of CPU time, 1-3 minutes for 500 iterations and 3-13 minutes for 2000 for the algorithm to find the best solution first obtained. The faster duration for computation can be attributed to the algorithm adaptively decreasing the count of flames, so the moths tend to converge and fly around fewer flames as the iteration counter increases. (Luzon, 2021)'
	},
	{
		id: '3',
		name: 'Hannah Joy D. Alcomendras',
		year: 2022,
		degree: 'BS Computer Science',
		title:
			'Multi-verse Optimizer (MVO) Algorithm for the Continuous p-center Facility Location Problem: Allocation of Emergency Centers in Tagum City',
		problem: 'The p-center Problem for the allocation of emergency centers.',
		algorithm: ['Multi-verse Optimizer (MVO)'],
		dataset: 'Tagum City CPDO Household Geotag Data',
		performance:
			'The MVO obtained good solution qualities and displayed stability in its convergence rate in all parameter settings. The CPU time of MVO for all centers when the best solution was obtained was less than a minute to 3 minutes for every run. It took less than 2 minutes to 3 minutes for a run to reach the maximum iteration. Each setting was subject to 30 independent runs with each run having 1500 iterations. (Alcomendras, 2022)'
	},
	{
		id: '4',
		name: 'Hanna Mae L. Limpag',
		year: 2022,
		degree: 'BS Computer Science',
		title:
			'Corona Virus Herd Immunity Optimizer (CHIO) with Circle and Tent Chaotic Maps for the p-center Facility Location Problem: The Case of Davao, Digos, and Tagum City Household Data',
		problem:
			'The p-center Problem for facility distribution, also known as the Facility Location Problem (FLP).',
		algorithm: ['Corona Virus Herd Immunity Optimizer (CHIO)'],
		dataset:
			'Phil-LIDAR2 Davao City, Phil-LIDAR1 Digos City, Tagum City CPDO Household Geotag Data',
		performance:
			'By all accounts, and proven results, CHIO was found to be very capable in solving the p-center problem. For the Davao City datasets, Basic CHIO consistently has the best fitness value, however, there was not enough evidence to conclude significant difference between the distribution of the results from using Basic CHIO and CHIO with Tent Chaotic map. Secondly, results from using Digos city household data revealed that Basic CHIO compared to the other algorithms compared to the other algorithms in the study. Lastly, Basic CHIO and CHIO with Circle chaotic map proved to be the best algorithms to solve the p-center problem using Tagum City dataset. Convergence graphs showed drastic convergence on the first 10000 iterations on all of the graphs generated. It also showed convergence even on the last 5000 iterations. (Limpag, 2022)'
	},
	{
		id: '5',
		name: 'Camyl Magdalyn E. Tanjay',
		year: 2024,
		degree: 'BS Computer Science',
		title:
			'Dandelion Optimizer: A Novel Metaheuristic Algorithm for Solving the Continuous p-center Problem using Actual Household Data from Davao, Digos, and Tagum City',
		problem:
			'The p-center Problem for facility distribution, also known as the Facility Location Problem (FLP).',
		algorithm: ['Dandelion Optimizer (DO)'],
		dataset:
			'Phil-LIDAR2 Davao City, Phil-LIDAR1 Digos City, Tagum City CPDO Household Geotag Data',
		performance:
			'The results show that DP was able to solve the continuous Euclidean p-center problem. Parameter configurations were labelled as follows in groups of three (DV for Davao, DG for Digos, and TG for Tagum): NC1DV, NC2DG, and NC3TG (Beta: 0.75, N: 30), NC4DV, NC5DG, NC6TG (Beta: 0.75, N: 60), NC7DV, NC8DG, NC9TG (Beta: 1.50, N: 30), NC10DV, NC11DG, NC12TG (Beta: 1.50, N: 60), N13DV, N14DG, N15TG (Beta: 1.95, N: 30), and lastly, N16DV, N17DG, N18TG (Beta: 1.95, N: 60). NC16DV achieved best overall performance by acquiring the best fitness value and the lowest mean fitness dataset while NC7DV had the best mean CPU time for the Davao City dataset. In the Digos dataset, NC5DG performed the best, and NC17DG had the lowest mean, NC2DG lowest mean CPU time. Lastly, for the Tagum City dataset, NC18TG had the best fitness value, NC12TG had the lowest mean fitness value. In terms of CPU time, NC3TG performed the best in both terms of the best mean CPU time and standard deviation. (Tanjay, 2024)'
	},
	{
		id: '6',
		name: 'Harold Clyde J. Valiente',
		year: 2024,
		degree: 'BS Computer Science',
		title:
			'Snake Optimizer (SO) with Mating Ball (MB) Formation for the p-center Facility Location Problem using Real City Household Datasets of Davao Region',
		problem:
			'The p-center Problem for facility distribution, also known as the Facility Location Problem (FLP).',
		algorithm: ['Snake Optimizer (SO)', 'Snake Optimizer with Mating Ball Formation (SO-MB)'],
		dataset:
			'Phil-LIDAR2 Davao City, Phil-LIDAR1 Digos City, Tagum City CPDO Household Geotag Data',
		performance:
			'Both SO and SO-MB had better solution quality and computation time performance than WOA and SKHA while having comparable performance on computational time with MFOA. Gradual improvements are seen in the SO and SO-MB exploration phase for the full Davao City dataset, zero to few improvements for the full Tagum City dataset, and no improvements for both sampled and full Digos City dataset. On average, exponential improvements of solution quality are shown during the exploitation phase for all city datasets but then plateaus after it. (Valiente, 2024)'
	},
	{
		id: '7',
		name: 'Arianne Claire O. Teodoro',
		year: 2023,
		degree: 'BS Computer Science',
		title:
			'Remora Optimization Algorithm with k-means Clustering for Identifying Davao Gulf Fish Species',
		problem: 'Clustering Big Data; used on fish species identification.',
		algorithm: [
			'Remora Optimization Algorithm (ROA)',
			'Remora Optimization Algorithm with k-means Clustering Method (ROAK)'
		],
		dataset:
			'Fish Species Dataset from Applied Biodiversity Research for Holistic Advancements in Mindanao (ABRAHAM) Project',
		performance:
			'There were 5 different parameter configurations with varying remora factors, which represent the volume of remora in relation to its host. All configurations were subject to 30 independent runs, with 500 iterations per run with 30 search agents. ROAK2 generated the best fitness and best worst fitness. ROAK3 performs second in generating the best fitness value and third in generating the best and worst fitness value. ROAK1 generated the lowest mean and third best fitness values and the second best worst fitness value. From the visualization of the resulting clusters, it is apparent that the algorithm was successful in creating distinct separations between clusters. However, it was also evident that the algorithm struggled to accurately classify data objects within the same species. ROAK0 generated the best worst time, ROAK1 generated the least mean CPU time, and ROAK4 generated the best time among the configurations. ROAK1 is consistently among the best performing configurations.'
	},
	{
		id: '8',
		name: 'Ron Bryan M. Vertudes',
		year: 2023,
		degree: 'BS Computer Science',
		title:
			'Pelican Optimization Algorithm (POA) for the Continuous p-center Problem on the Allocation of Facilities in Davao, Digos, and Tagum City Household Data',
		problem:
			'The p-center Problem for facility distribution, also known as the Facility Location Problem (FLP).',
		algorithm: ['Pelican Optimization Algorithm (POA)'],
		dataset:
			'Phil-LIDAR2 Davao City, Phil-LIDAR1 Digos City, Tagum City CPDO Household Geotag Data',
		performance:
			'Applied to this problem, POA performs better than SKH (Sitoy, 2019) and WOA (Gamot et al., 2022), producing fitness with a lower best, worst, mean, and standard deviation values. However, it is comparably worse than MFOA (Gamot et al., 2022) and CHIO (Giralao, 2022) (Vertudes, 2023).'
	},
	{
		id: '9',
		name: 'Daniel Gabriel S. Manabat',
		year: 2023,
		degree: 'BS Computer Science',
		title:
			'Reptile Search Algorithm (RSA) for the Continuous p-center Facility Location Problem Applied on Davao, Digos, and Tagum City Household Data',
		problem:
			'The p-center Problem for facility distribution, also known as the Facility Location Problem (FLP).',
		algorithm: ['Pelican Optimization Algorithm (POA)'],
		dataset:
			'Phil-LIDAR2 Davao City, Phil-LIDAR1 Digos City, Tagum City CPDO Household Geotag Data',
		performance:
			"The algorithm's performance stagnates during its exploration strategies as well as the first of its exploitation strategies. Specifically, the algorithm struggled to escape local minima. Moreover, it was found that these strategies usually propose poisitions located extremely outside of the bounds of the datasets, some values even exceeding billions. Compared to the other algorithms applied to this problem (namely SKH, WOA, MFOA, and CHIO); RSA performed the worst. (Manabat, 2023)"
	},
	{
		id: '10',
		name: 'Joan Andrea E. Giralao',
		year: 2022,
		degree: 'BS Computer Science',
		title:
			'Corona Virus Herd Immunity Optimizer (CHIO) with Logistic and Gauss Chaotic Maps for the Continuous p-center Problem: The Case of Davao, Digos, and Tagum City Household Data',
		problem:
			'The p-center Problem for facility distribution, also known as the Facility Location Problem (FLP).',
		algorithm: ['Corona Virus Herd Immunity Optimizer (CHIO)'],
		dataset:
			'Phil-LIDAR2 Davao City, Phil-LIDAR1 Digos City, Tagum City CPDO Household Geotag Data',
		performance:
			'CHIO and CHIO with Gauss (CG) were found to be superior to SKH (Sitoy, 2019) in solving the 6-center problem on the Digos City dataset. On the Davao City dataset, the average CPU time for the final fitness values for the CHIO algorithms was 27.05 hours and 35.92 hours for the elapsed time. On the other hand, the Digos City dataset is at 3.49 hours, with an elapsed time for 4.50 hours. Lastly, for the Tagum City dataset, it took 11.38 hours and the final fitness values were obtained at an average time of 8.27 hours. (Giralao, 2022)'
	},
	{
		id: '11',
		name: 'Junalyn P. Dizon',
		year: 2024,
		degree: 'BS Computer Science',
		title:
			'Philippine Eagle Optimization Algorithm (PEOA) for Solving the p-center Facility Location Using Household Data from Davao, Digos, and Taguma Cities',
		problem:
			'The p-center Problem for facility distribution, also known as the Facility Location Problem (FLP).',
		algorithm: ['Philippine Eagle Optimization Algorithm (PEOA)'],
		dataset:
			'Phil-LIDAR2 Davao City, Phil-LIDAR1 Digos City, Tagum City CPDO Household Geotag Data',
		performance:
			'MFOA outperforms PEOA on this problem, while PEOA outperforms WOA (Gamot et. al, 2022). Davao City with a p-value of 0.05 generated the lowest best fitness value. For Digos, it is safest to choose p-value of 0.05 as well, generating the lowest best fitness value and lowest average fitness value. Lastly, for Tagum City, the safest choice is a p-value of 0.04. Moreover, the study tried to observe the effects of modifying Nmax to 25000, resulting in a lower mean fitness value, lower standard deviation, and lower worst fitness value but not a lower best fitness value. (Dizon, 2024)'
	},
	{
		id: '12',
		name: 'Abegail D. Romas',
		year: 2023,
		degree: 'BS Applied Mathematics',
		title:
			'A Comparative Study for Different Distance Metrics in Identifying Davao Gulf Fish Species Using k-means Clustering with Moth-Flame Optimization Algorithm (MFOA)',
		problem: 'Clustering Big Data; used on fish species identification.',
		algorithm: [
			'Moth-Flame Optimization Algorithm (MFOA)',
			'Moth-Flame Optimization Algorithm with k-means Clustering (MFOAK)'
		],
		dataset:
			'Fish Species Dataset from Applied Biodiversity Research for Holistic Advancements in Mindanao (ABRAHAM) Project',
		performance:
			'Comparison was done using existing distance metrics, namely, Euclidean, Manhattan, Minkowski, Canberra, and Chebyshev. In terms of runtime, Chebyshev distance metric was the fastest among the other metrics, but all configurations wer unable to quickly capture the optimal solutions in the search space. The weak performance is likely due to the nature of the dataset having overlapping clusters. However, Minkowski distance metric achieved the most accurate clustering with a Rand index of 0.796049, while the Chebyshev distance achieved least accurate clustering with a Rand index of 0.717977.'
	},
	{
		id: '13',
		name: 'John Noel A. Villamor',
		year: 2025,
		degree: 'BS Computer Science',
		title: 'Improved Tasmanian Devil Optimization For Economic Load Dispatch',
		problem: 'Economic Load Dispatch (ELD) Problem.',
		algorithm: ['Improved Tasmanian Devil Optimization (ITDO)'],
		dataset: '3-Unit and 6-Unit System (Aribowo et al., 2022)',
		performance:
			'The ITDO demonstrated its capability to efficiently distribute power loads across available power-generating units in both 3-unit and 6-unit power systems while minimizing fuel costs. The algorithm delivered stable outcomes, with the standard deviation across different runs for each parameter configuration remaining below 1. Additionally, the algorithm demonstrated rapid convergence, identifying the optimal solution as early as the 8th iteration, with the latest occurring by the 32nd iteration. All configurations ran under 1 second. Convergence maps were generated, showing significant convergence during the initial 10 iterations, and some improvement by the 400th iteration. This behavior suggests that there may be potential for further improvement in the solution with an increase in the number of iterations. (Villamor, 2025)'
	},
	{
		id: '14',
		name: 'Jesiell A. Añides',
		year: 2025,
		degree: 'BS Computer Science',
		title: 'Flying Fox Optimization for Economic Load Dispatch',
		problem: 'Economic Load Dispatch (ELD) Problem.',
		algorithm: ['Flying Fox Optimization (FFO)'],
		dataset: '3-Unit and 6-Unit System (Aribowo et al., 2022)',
		performance:
			'Statistical analyses showed significant differences among parameter configurations, with the top-performing setups outperforming or matching the performance of other algorithms such as the Tasmanian Devil Optimization (TDO) or Slime Tree-Seed Algorithm (STSA) in terms of fuel cost and transmission loss. FFO algorithm demonstrated exceptional performance on the 3-unit system, with the optimal configuration resulting in a best mean fitness of $1597.4836 per hour, the lowest standard deviation of 0.0027 and a mean rank of 80.77. The 6-Unit system on the other hand presented greater complexity, generally exceeding all standard deviations past 1.0, indicating increased variability. Three separate configurations appear to optimize specific variables, one has a high consistency with a standard deviation of 0.8914, while another has a best individal fitness value of $15439.14 per hour, and another produced the lowest transmission losses at 12.09MW. Convergence graphs showed that near-optimal solutions were achieved before 4000 function evaluations, with the 3-unit system displaying more uniform convergence patterns.'
	}
];
export default ACTUALDATA;
