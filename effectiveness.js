
/* ============================================================
   Effectiveness group comparison — shared overview renderer
   One template + per-variant DATA. before.html / after.html call
   renderOverview('before' | 'after'). No structural duplication.
   ============================================================ */

/* ---------- per-variant data ---------- */
const DATA = {
  'team-it-before': {
    groupName: 'Team IT',
    surveyName: 'Engagement Survey 2026 Q2',
    dateFrom: '22 Apr 2026', dateTo: '22 May 2026', prevDateTo: '22 Jan 2026',
    /* AI summary */
    aiIntro: "The IT team’s results indicate several challenges impacting overall effectiveness and employee experience. Engagement (56%) and retention (57%) are below desired levels, suggesting employees may feel disconnected from the organization and uncertain about their long-term future within the team. Workload scores are particularly low at 38%, highlighting concerns around capacity, prioritization, and sustainable ways of working. While the eNPS score of 12 remains positive, it indicates only moderate advocacy and suggests there is significant room for improvement in employee satisfaction and loyalty.",
    aiMore: ["As the team falls within the ineffective quadrant, focused action is required to address workload pressures, strengthen leadership support, and improve employee engagement. Creating greater clarity around priorities, improving resource allocation, and increasing opportunities for employee feedback may help rebuild trust and team effectiveness."],
    aiStrengths: [
      "eNPS remains positive at 12, indicating that a portion of employees are still willing to recommend the organization as a place to work."
    ],
    aiGrowth: [
      "Workload (38%) is significantly below desired levels and appears to be a key driver of employee dissatisfaction.",
      "Engagement (56%) indicates employees may not feel fully connected to team goals or motivated by their current work environment.",
      "Retention (57%) presents a potential risk for future turnover if underlying concerns are not addressed."
    ],
    aiActions: [
      "Review team capacity, workload distribution, and project prioritization to reduce pressure on employees.",
      "Conduct listening sessions to better understand the factors contributing to lower engagement and retention.",
      "Increase transparency around team objectives, decision-making, and career development opportunities.",
      "Equip managers with tools and training to support employee wellbeing, recognition, and performance conversations.",
      "Develop a targeted action plan with measurable milestones to improve team effectiveness over the next survey cycle."
    ],

    /* Effectiveness card markers (x = Engagement, y = Performance environment) */
    fxMarkers: [
      { variant: 'is-org',     chip: 'is-chip-above', icon: 'building', label: 'Novanta B.V.', x: 70, y: 44 },
      { variant: 'is-current', chip: 'is-chip-above', icon: 'group',    label: 'Team IT', x: 26, y: 26 }
    ],

    /* Engagement card */
    engValue: '56%', engTrend: '11%', engTrendIcon: 'Trend-up', engBench: '70%', engBenchW: 70,

    /* Focus View extras */
    fvEngTrend: null, fvPerform: '58%', fvPerformTrend: null, npsTrend: null,

    /* eNPS */
    npsPromoters: 42, npsPassives: 28, npsDetractors: 30,
    npsPromCount: 237, npsPassCount: 158, npsDetrCount: 170,
    npsPrev: 8, npsBench: 20, npsTop3: 30,

    /* Themes radar */
    swCurrent: [56, 61, 56, 87, 62, 78],
    swPrevious: [13, 50, 77, 60, 62, 62],

    /* Response rate */
    rrValue: 66, rrPartDone: 373, rrPartTotal: 565, rrTrend: '13%', rrTrendIcon: 'Trend-up', rrBench: 84,

    /* KPI gauges */
    kpiWorkload: 38, kpiRetention: 73, kpiWellbeing: 48,

    /* Topics */
    topics: [
      { name: 'Collaboration between teams', count: 540, color: 'is-green' },
      { name: 'Our feedback culture very long example', count: 384, color: 'is-turquoise' },
      { name: 'Our feedback culture', count: 146, color: 'is-blue' }
    ],

    /* Highest / Lowest scores */
    highScores: [
      { q: 'I feel comfortable within the team', s: 95 },
      { q: 'Our team trusts one another', s: 88 },
      { q: 'During a team meeting, everyone has a fair chance to speak up', s: 84 },
      { q: 'There is a relaxed atmosphere within our team', s: 75 },
      { q: 'I enjoy my work', s: 75 }
    ],
    lowScores: [
      { q: 'I know what results are expected of me at work', s: 43 },
      { q: 'Doing my work gives me energy', s: 51 },
      { q: 'I am provided with good work resources', s: 52 },
      { q: 'My skills and abilities fit in well with my job', s: 54 },
      { q: 'I enjoy doing my work / tasks', s: 60 }
    ],

    /* Effectiveness side panel */
    efpLeadPre: 'Team IT is ', efpLeadEm: 'ineffective', efpLeadEmClass: '',
    efpLeadDesc: 'Both engagement and the performance environment are under pressure. Without attention, this can affect results and team wellbeing over time.',
    efpComparisons: '2 selected',
    efpHasPrevious: false,
    efpBench: '68%',
    efpFocusIntro: 'In this situation, it is important to slow down and create focus. A structured and supported follow-up helps bring stability and direction. Rather than trying to fix everything, concentrate on the few areas that are most urgent and within your influence.',
    efpFocusBullets: [
      { t: 'Prepare &amp; reflect:', d: 'Take time to understand the results and, if helpful, seek support before moving into team discussions.' },
      { t: 'Review &amp; prioritize:', d: 'Group feedback by urgency (critical, high risk, improvement) and select the few priorities that matter most.' },
      { t: 'Discuss &amp; align:', d: 'Share findings transparently with the team and agree on clear priorities together.' },
      { t: 'Implement &amp; monitor:', d: 'Assign clear ownership, ensure appropriate support is in place, and establish a tight cadence to track progress and adjust where needed.' }
    ],
    efpFocusClosing: 'Clear priorities, visible action and consistent follow-up help rebuild trust and restore momentum step by step.',
    efpScores: [
      { name: 'Engagement', desc: 'Employees that are inspired and energized by their work', cur: '56%', bench: '68%', benchClass: 'is-bench' },
      { name: 'Performance environment', desc: 'Important basic conditions which enable employees to work effectively and efficiently', cur: '58%', bench: '68%', benchClass: 'is-bench' },
      { name: 'Providing Direction', sub: true, cur: '50%', bench: '64%', benchClass: 'is-bench' },
      { name: 'Leading change', sub: true, cur: '78%', bench: '67%', benchClass: 'is-bench-pos' },
      { name: 'Managing People', sub: true, cur: '53%', bench: '67%', benchClass: 'is-bench' },
      { name: 'Managing Systems', sub: true, cur: '47%', bench: '72%', benchClass: 'is-bench-neg' }
    ],
    efpMarkers: [
      { variant: 'is-peer',    icon: 'building', label: 'Help Desk / IT Support',        x: 33, y: 82 },
      { variant: 'is-peer',    icon: 'building', label: 'Infrastructure Team',           x: 43, y: 70 },
      { variant: 'is-peer',    icon: 'building', label: 'Network Team',                  x: 57, y: 80 },
      { variant: 'is-peer',    icon: 'building', label: 'Cybersecurity Team',            x: 15, y: 34 },
      { variant: 'is-peer',    icon: 'building', label: 'Systems Administration Team',   x: 64, y: 30 },
      { variant: 'is-peer',    icon: 'building', label: 'Cloud Operations Team',         x: 40, y: 15 },
      { variant: 'is-org',     icon: 'building', label: 'Novanta B.V.',                  x: 82, y: 62 },
      { variant: 'is-current', icon: 'group',    label: 'Team IT',                       x: 27, y: 24 }
    ],

    /* Engagement side panel */
    engpDist: { dis: 13, pot: 31, eng: 56 },
    engpCards: [
      { lbl: 'Team IT', val: '56%' },
      { lbl: 'Novanta B.V.', val: '72%' },
      { lbl: 'Benchmark', val: '75%' }
    ],
    engpLine: { labels: ['Jun 2025', 'May 2026'], data: [60, 56] },
    engpTheme: [
      { q: 'Doing my work gives me energy', s: '75%' },
      { q: 'I enjoy doing my work / tasks', s: '81%' },
      { q: 'I am proud to work at Novanta', s: '85%' },
      { q: 'I feel that I fit in at Novanta', s: '85%' }
    ],
    engpCorr: [
      { q: 'My skills and abilities fit in well with my job', s: '90%' },
      { q: 'I identify with the culture of Novanta', s: '85%' },
      { q: 'Novanta is a good organisation to work for', s: '90%' },
      { q: 'The vision for the future of Novanta inspires me', s: '70%' },
      { q: 'Novanta uses employees’ ideas and suggestions to do better', s: '63%' }
    ]
  },

  'team-it-after': {
    groupName: 'Team IT',
    surveyName: 'Engagement Survey 2026 Q3',
    dateFrom: '22 Jul 2026', dateTo: '22 Sep 2026', prevDateTo: '22 May 2026',
    /* AI summary */
    aiIntro: "The IT team's latest survey results show a significant improvement across key engagement and employee experience indicators. Engagement has increased to 67%, while retention has risen to 73%, indicating that employees are more committed to both their current role and the organization. The team also achieved an eNPS of 31, reflecting a strong increase in employee advocacy and a greater willingness to recommend the organization as a place to work.",
    aiMore: [
      "Workload perceptions have improved considerably, with 56% of employees reporting that their workload feels “just right.” Combined with a strong response rate of 79%, these results provide a reliable view of employee sentiment and suggest that recent actions have positively impacted the employee experience.",
      "As a result of these improvements, the IT team has moved into the effective quadrant, demonstrating stronger organizational health, improved employee engagement, and a more sustainable work environment. Continued focus on employee development, recognition, and workload management will help maintain this positive momentum."
    ],
    aiStrengths: [
      "Engagement (67%) has increased, indicating stronger commitment, motivation, and connection to team objectives.",
      "Retention (73%) shows that a large majority of employees intend to remain in their current role.",
      "eNPS (31) reflects a healthy level of employee advocacy and confidence in the organization.",
      "Workload perceptions have improved, with 56% of employees reporting that their workload is appropriately balanced.",
      "A response rate of 79% provides strong confidence in the reliability and representativeness of the survey results."
    ],
    aiGrowth: [
      "While workload perceptions have improved, nearly half of employees still do not view their workload as optimal, presenting an opportunity for further refinement of prioritization and resource planning.",
      "Engagement is trending positively but remains below top-performing team benchmarks, suggesting opportunities to further strengthen employee involvement and recognition."
    ],
    aiActions: [
      "Continue monitoring workload distribution and team capacity to sustain improvements in employee wellbeing.",
      "Build on the positive momentum by increasing opportunities for employee development, learning, and career growth.",
      "Recognize and celebrate team achievements to reinforce engagement and advocacy.",
      "Maintain regular employee feedback discussions to identify emerging concerns early and support continuous improvement.",
      "Share progress updates on actions taken in response to employee feedback to strengthen trust and accountability."
    ],

    fxMarkers: [
      { variant: 'is-org',      chip: 'is-chip-below', icon: 'building',         label: 'Novanta B.V.', x: 74, y: 75 },
      { variant: 'is-previous', chip: 'is-chip-above', icon: 'rotate-backward',  label: 'Previous survey', x: 27, y: 24 },
      { variant: 'is-current',  chip: 'is-chip-above', icon: 'group',            label: 'Team IT', x: 67, y: 80 }
    ],

    engValue: '67%', engTrend: '11%', engTrendIcon: 'Trend-up', engBench: '70%', engBenchW: 70,

    /* Focus View extras */
    fvEngTrend: '11%', fvPerform: '71%', fvPerformTrend: '13%', npsTrend: '19',

    npsPromoters: 52, npsPassives: 27, npsDetractors: 21,
    npsPromCount: 329, npsPassCount: 171, npsDetrCount: 132,
    npsPrev: 12, npsBench: 20, npsTop3: 30,

    swCurrent: [67, 72, 75, 88, 82, 85],
    swPrevious: [56, 61, 56, 87, 62, 78],

    rrValue: 79, rrPartDone: 499, rrPartTotal: 632, rrTrend: '13%', rrTrendIcon: 'Trend-up', rrBench: 84,

    kpiWorkload: 56, kpiRetention: 73, kpiWellbeing: 79,

    topics: [
      { name: 'Collaboration between teams', count: 540, color: 'is-green' },
      { name: 'Our feedback culture very long example', count: 384, color: 'is-turquoise' },
      { name: 'Our feedback culture', count: 146, color: 'is-blue' }
    ],

    highScores: [
      { q: 'I feel comfortable within the team', s: 95 },
      { q: 'Our team trusts one another', s: 92 },
      { q: 'During a team meeting, everyone has a fair chance to speak up', s: 90 },
      { q: 'There is a relaxed atmosphere within our team', s: 88 },
      { q: 'I enjoy my work', s: 86 }
    ],
    lowScores: [
      { q: 'Important information is readily accessible for me', s: 68 },
      { q: 'I am able to maintain a good balance between working and relaxing', s: 70 },
      { q: 'My skills and abilities fit in well with my job', s: 71 },
      { q: 'I enjoy doing my work / tasks', s: 72 },
      { q: 'I know what results are expected of me at work', s: 73 }
    ],

    efpLeadPre: 'Team IT is ', efpLeadEm: 'effective', efpLeadEmClass: 'is-pos',
    efpLeadDesc: 'The team has both the energy and the foundations in place to perform well. Engagement and the performance environment reinforce each other, creating the conditions for strong and sustainable results.',
    efpComparisons: '3 selected',
    efpHasPrevious: true,
    efpBench: '68%',
    efpFocusIntro: 'Here, a light-touch follow-up is enough. Take time to reflect on the results together and acknowledge what is going well. The goal is to keep momentum and avoid overcomplicating something that already works.',
    efpFocusBullets: [
      'Reflect on the strengths that stand out in the results.',
      'Discuss what helps the team perform at its best.',
      'Consider where successful practices could inspire others.'
    ],
    efpFocusClosing: 'Keep attention on what works well and continue building on it. Use the survey results as an opportunity to reinforce the practices that help the team perform at its best.',
    efpScores: [
      { name: 'Engagement', desc: 'Employees that are inspired and energized by their work', cur: '81%', bench: '68%', benchClass: 'is-bench-pos' },
      { name: 'Performance environment', desc: 'Important basic conditions which enable employees to work effectively and efficiently', cur: '71%', bench: '68%', benchClass: 'is-bench-neutral' },
      { name: 'Providing Direction', sub: true, cur: '74%', bench: '64%', benchClass: 'is-bench-pos' },
      { name: 'Leading change', sub: true, cur: '81%', bench: '67%', benchClass: 'is-bench-pos' },
      { name: 'Managing People', sub: true, cur: '66%', bench: '67%', benchClass: 'is-bench-neutral' },
      { name: 'Managing Systems', sub: true, cur: '65%', bench: '72%', benchClass: 'is-bench-neutral' }
    ],
    efpMarkers: [
      { variant: 'is-peer',     icon: 'building',        label: 'Help Desk / IT Support',      x: 33, y: 82 },
      { variant: 'is-peer',     icon: 'building',        label: 'Infrastructure Team',         x: 43, y: 70 },
      { variant: 'is-peer',     icon: 'building',        label: 'Network Team',                x: 57, y: 80 },
      { variant: 'is-peer',     icon: 'building',        label: 'Cybersecurity Team',          x: 15, y: 34 },
      { variant: 'is-peer',     icon: 'building',        label: 'Systems Administration Team', x: 64, y: 30 },
      { variant: 'is-peer',     icon: 'building',        label: 'Cloud Operations Team',       x: 40, y: 15 },
      { variant: 'is-org',      icon: 'building',        label: 'Novanta B.V.',                x: 80, y: 62 },
      { variant: 'is-previous', icon: 'rotate-backward', label: 'Previous survey',             x: 27, y: 24 },
      { variant: 'is-current',  icon: 'group',           label: 'Team IT',                     x: 67, y: 80 }
    ],

    engpDist: { dis: 5, pot: 25, eng: 70 },
    engpCards: [
      { lbl: 'Team IT', val: '67%' },
      { lbl: 'Novanta B.V.', val: '72%' },
      { lbl: 'Benchmark', val: '75%' }
    ],
    engpLine: { labels: ['Jun 2025', 'May 2026', 'Nov 2026'], data: [60, 56, 67] },
    engpTheme: [
      { q: 'Doing my work gives me energy', s: '88%' },
      { q: 'I enjoy doing my work / tasks', s: '85%' },
      { q: 'I am proud to work at Novanta', s: '90%' },
      { q: 'I feel that I fit in at Novanta', s: '88%' }
    ],
    engpCorr: [
      { q: 'My skills and abilities fit in well with my job', s: '92%' },
      { q: 'I identify with the culture of Novanta', s: '88%' },
      { q: 'Novanta is a good organisation to work for', s: '93%' },
      { q: 'The vision for the future of Novanta inspires me', s: '82%' },
      { q: 'Novanta uses employees’ ideas and suggestions to do better', s: '78%' }
    ]
  },

  'novanta-after': {
    groupName: 'Novanta B.V.',
    fvVerdictPre: 'Novanta is',
    surveyName: 'Engagement Survey 2026 Q3',
    dateFrom: '22 Jul 2026', dateTo: '22 Sep 2026', prevDateTo: '22 May 2026',
    aiIntro: "Across Novanta, this survey shows a healthy and stable picture. Organization-wide engagement stands at 72% and retention at 76%, indicating that most employees feel committed to their work and intend to stay. An eNPS of 30 reflects solid advocacy, and a strong response rate of 81% gives a reliable view of how the organization is doing.",
    aiMore: [
      "Most departments sit in the effective quadrant, where engagement and the performance environment reinforce each other. A few teams still have room to grow — particularly around workload and development opportunities — but the overall foundation is strong.",
      "Continued investment in leadership, recognition and balanced workloads will help Novanta sustain this momentum and lift the teams that are not yet performing at their best."
    ],
    aiStrengths: [
      "Engagement (72%) is healthy organization-wide and close to the external benchmark.",
      "Retention (76%) shows that the large majority of employees intend to stay with Novanta.",
      "eNPS (30) reflects solid advocacy across the organization.",
      "A response rate of 81% gives strong confidence in the representativeness of the results."
    ],
    aiGrowth: [
      "Workload (62%) varies between departments and remains an opportunity in several teams.",
      "Development opportunities score lower than engagement, suggesting room to strengthen growth and career paths."
    ],
    aiActions: [
      "Share organization-wide results transparently and let departments set their own focus areas.",
      "Support managers of lower-scoring teams with targeted coaching and resources.",
      "Continue investing in development, recognition and balanced workloads.",
      "Monitor workload distribution across departments to protect wellbeing.",
      "Reinforce what works in high-performing teams and spread those practices."
    ],

    fxMarkers: [
      { variant: 'is-previous', chip: 'is-chip-below', icon: 'rotate-backward', label: 'Previous survey', x: 66, y: 66 },
      { variant: 'is-current',  chip: 'is-chip-above', icon: 'group',           label: 'Novanta B.V.', x: 74, y: 75 }
    ],

    engValue: '72%', engTrend: '4%', engTrendIcon: 'Trend-up', engBench: '75%', engBenchW: 75,

    fvEngTrend: '4%', fvPerform: '74%', fvPerformTrend: '3%', npsTrend: '10',

    npsPromoters: 50, npsPassives: 30, npsDetractors: 20,
    npsPromCount: 2380, npsPassCount: 1420, npsDetrCount: 950,
    npsPrev: 20, npsBench: 20, npsTop3: 30,

    swCurrent: [72, 70, 74, 86, 76, 81],
    swPrevious: [69, 67, 70, 84, 73, 78],

    rrValue: 81, rrPartDone: 3842, rrPartTotal: 4743, rrTrend: '4%', rrTrendIcon: 'Trend-up', rrBench: 84,

    kpiWorkload: 62, kpiRetention: 76, kpiWellbeing: 81,

    topics: [
      { name: 'Collaboration between teams', count: 540, color: 'is-green' },
      { name: 'Our feedback culture very long example', count: 384, color: 'is-turquoise' },
      { name: 'Our feedback culture', count: 146, color: 'is-blue' }
    ],

    highScores: [
      { q: 'I feel comfortable within the team', s: 92 },
      { q: 'Our team trusts one another', s: 89 },
      { q: 'During a team meeting, everyone has a fair chance to speak up', s: 88 },
      { q: 'There is a relaxed atmosphere within our team', s: 86 },
      { q: 'I enjoy my work', s: 85 }
    ],
    lowScores: [
      { q: 'My skills and abilities fit in well with my job', s: 66 },
      { q: 'I enjoy doing my work / tasks', s: 68 },
      { q: 'Doing my work gives me energy', s: 69 },
      { q: 'Important information is readily accessible for me', s: 70 },
      { q: 'I am provided with good work resources', s: 71 }
    ],

    efpLeadPre: 'Novanta is ', efpLeadEm: 'effective', efpLeadEmClass: 'is-pos',
    efpLeadDesc: 'Across the organization, engagement and the performance environment reinforce each other. Most teams have the energy and the foundations in place to perform well and deliver sustainable results.',
    efpComparisons: '2 selected',
    efpHasPrevious: true,
    efpHasOrg: false,
    efpBench: '75%',
    efpFocusIntro: 'Here, a light-touch organization-wide follow-up is enough. Acknowledge what is going well and give departments the space to act on their own results. The goal is to keep momentum across the organization.',
    efpFocusBullets: [
      'Reflect on the strengths that stand out across the organization.',
      'Let each department translate the results into their own focus.',
      'Support the few teams that are not yet performing at their best.'
    ],
    efpFocusClosing: 'Keep attention on what works well and continue building on it across teams.',
    efpScores: [
      { name: 'Engagement', desc: 'Employees that are inspired and energized by their work', cur: '72%', bench: '75%', benchClass: 'is-bench-neutral' },
      { name: 'Performance environment', desc: 'Important basic conditions which enable employees to work effectively and efficiently', cur: '74%', bench: '68%', benchClass: 'is-bench-pos' },
      { name: 'Providing Direction', sub: true, cur: '73%', bench: '64%', benchClass: 'is-bench-pos' },
      { name: 'Leading change', sub: true, cur: '78%', bench: '67%', benchClass: 'is-bench-pos' },
      { name: 'Managing People', sub: true, cur: '71%', bench: '67%', benchClass: 'is-bench-pos' },
      { name: 'Managing Systems', sub: true, cur: '70%', bench: '72%', benchClass: 'is-bench-neutral' }
    ],
    efpMarkers: [
      { variant: 'is-peer',     icon: 'building',        label: 'Team IT',           x: 67, y: 80 },
      { variant: 'is-peer',     icon: 'building',        label: 'Marketing',         x: 55, y: 72 },
      { variant: 'is-peer',     icon: 'building',        label: 'Sales',             x: 82, y: 58 },
      { variant: 'is-peer',     icon: 'building',        label: 'Finance',           x: 48, y: 64 },
      { variant: 'is-peer',     icon: 'building',        label: 'Human Resources',   x: 70, y: 86 },
      { variant: 'is-peer',     icon: 'building',        label: 'Operations',        x: 38, y: 46 },
      { variant: 'is-peer',     icon: 'building',        label: 'Product',           x: 88, y: 78 },
      { variant: 'is-peer',     icon: 'building',        label: 'Customer Success',  x: 60, y: 38 },
      { variant: 'is-previous', icon: 'rotate-backward', label: 'Previous survey',   x: 66, y: 66 },
      { variant: 'is-current',  icon: 'group',           label: 'Novanta',           x: 74, y: 75 }
    ],

    engpDist: { dis: 6, pot: 26, eng: 68 },
    engpCards: [
      { lbl: 'Novanta B.V.', val: '72%' },
      { lbl: 'Benchmark', val: '75%' }
    ],
    engpLine: { labels: ['Jun 2025', 'May 2026', 'Nov 2026'], data: [69, 70, 72] },
    engpTheme: [
      { q: 'Doing my work gives me energy', s: '80%' },
      { q: 'I enjoy doing my work / tasks', s: '82%' },
      { q: 'I am proud to work at Novanta', s: '86%' },
      { q: 'I feel that I fit in at Novanta', s: '85%' }
    ],
    engpCorr: [
      { q: 'My skills and abilities fit in well with my job', s: '88%' },
      { q: 'I identify with the culture of Novanta', s: '85%' },
      { q: 'Novanta is a good organisation to work for', s: '90%' },
      { q: 'The vision for the future of Novanta inspires me', s: '80%' },
      { q: 'Novanta uses employees’ ideas and suggestions to do better', s: '75%' }
    ]
  },

  'novanta-before': {
    groupName: 'Novanta B.V.',
    fvVerdictPre: 'Novanta is',
    surveyName: 'Engagement Survey 2026 Q2',
    dateFrom: '22 Apr 2026', dateTo: '22 May 2026', prevDateTo: '22 Jan 2026',
    aiIntro: "Across Novanta, this survey points to a mixed picture. Organization-wide engagement stands at 66% with retention at 70% — most employees are reasonably committed, but energy is not yet translating into a supportive performance environment everywhere. An eNPS of 20 and a response rate of 77% give a workable read on where the organization stands.",
    aiMore: [
      "Several departments sit in the not-fully-utilized quadrant: people are motivated, but workload pressure and unclear ways of working hold them back. A focused effort on the performance environment is likely to unlock the engagement that is already there.",
      "Prioritizing workload, clarity and manager support across the lower-scoring teams will help Novanta convert this potential into stronger, more sustainable results."
    ],
    aiStrengths: [
      "Engagement (66%) is reasonable organization-wide and provides a base to build on.",
      "Retention (70%) shows most employees still intend to stay with Novanta.",
      "A response rate of 77% gives a workable view of the organization."
    ],
    aiGrowth: [
      "Workload (54%) is under pressure in many departments and is a key barrier.",
      "The performance environment lags engagement, suggesting unclear ways of working.",
      "Development opportunities score low and need attention."
    ],
    aiActions: [
      "Tackle workload and prioritization in the most pressured departments first.",
      "Give managers clearer guidance and support to improve the performance environment.",
      "Increase transparency around priorities and decision-making.",
      "Create more room for development and recognition.",
      "Set measurable goals per department and revisit them next cycle."
    ],

    fxMarkers: [
      { variant: 'is-current',  chip: 'is-chip-above', icon: 'group',           label: 'Novanta B.V.', x: 70, y: 44 }
    ],

    engValue: '66%', engTrend: '0%', engTrendIcon: 'Trend-up', engBench: '75%', engBenchW: 75,

    fvEngTrend: null, fvPerform: '58%', fvPerformTrend: null, npsTrend: null,

    npsPromoters: 44, npsPassives: 32, npsDetractors: 24,
    npsPromCount: 2090, npsPassCount: 1520, npsDetrCount: 1140,
    npsPrev: 18, npsBench: 20, npsTop3: 30,

    swCurrent: [66, 64, 68, 82, 70, 75],
    swPrevious: [63, 61, 65, 80, 68, 72],

    rrValue: 77, rrPartDone: 3650, rrPartTotal: 4740, rrTrend: '0%', rrTrendIcon: 'Trend-up', rrBench: 84,

    kpiWorkload: 54, kpiRetention: 70, kpiWellbeing: 73,

    topics: [
      { name: 'Collaboration between teams', count: 540, color: 'is-green' },
      { name: 'Our feedback culture very long example', count: 384, color: 'is-turquoise' },
      { name: 'Our feedback culture', count: 146, color: 'is-blue' }
    ],

    highScores: [
      { q: 'I feel comfortable within the team', s: 90 },
      { q: 'Our team trusts one another', s: 87 },
      { q: 'During a team meeting, everyone has a fair chance to speak up', s: 85 },
      { q: 'There is a relaxed atmosphere within our team', s: 83 },
      { q: 'I enjoy my work', s: 82 }
    ],
    lowScores: [
      { q: 'I am able to maintain a good balance between working and relaxing', s: 58 },
      { q: 'I know what results are expected of me at work', s: 61 },
      { q: 'Important information is readily accessible for me', s: 63 },
      { q: 'I am provided with good work resources', s: 64 },
      { q: 'Doing my work gives me energy', s: 66 }
    ],

    efpLeadPre: 'Novanta is ', efpLeadEm: 'not fully utilized', efpLeadEmClass: '',
    efpLeadDesc: 'Employees across the organization are motivated, but the performance environment is not yet keeping up. Improving workload, clarity and support will help this engagement translate into stronger results.',
    efpComparisons: '2 selected',
    efpHasPrevious: false,
    efpHasOrg: false,
    efpBench: '75%',
    efpFocusIntro: 'Focus organization-wide on the performance environment. Help departments reduce workload pressure and create clarity, so the energy that is already there can be put to use.',
    efpFocusBullets: [
      'Identify the departments under the most workload pressure.',
      'Give managers clearer priorities and support.',
      'Track a few shared improvements across teams.'
    ],
    efpFocusClosing: 'Small, consistent improvements to how work is organized will lift the whole organization over time.',
    efpScores: [
      { name: 'Engagement', desc: 'Employees that are inspired and energized by their work', cur: '66%', bench: '75%', benchClass: 'is-bench' },
      { name: 'Performance environment', desc: 'Important basic conditions which enable employees to work effectively and efficiently', cur: '58%', bench: '68%', benchClass: 'is-bench' },
      { name: 'Providing Direction', sub: true, cur: '60%', bench: '64%', benchClass: 'is-bench' },
      { name: 'Leading change', sub: true, cur: '64%', bench: '67%', benchClass: 'is-bench' },
      { name: 'Managing People', sub: true, cur: '59%', bench: '67%', benchClass: 'is-bench' },
      { name: 'Managing Systems', sub: true, cur: '55%', bench: '72%', benchClass: 'is-bench-neg' }
    ],
    efpMarkers: [
      { variant: 'is-peer',     icon: 'building',        label: 'Team IT',           x: 26, y: 26 },
      { variant: 'is-peer',     icon: 'building',        label: 'Marketing',         x: 52, y: 58 },
      { variant: 'is-peer',     icon: 'building',        label: 'Sales',             x: 78, y: 48 },
      { variant: 'is-peer',     icon: 'building',        label: 'Finance',           x: 44, y: 52 },
      { variant: 'is-peer',     icon: 'building',        label: 'Human Resources',   x: 66, y: 64 },
      { variant: 'is-peer',     icon: 'building',        label: 'Operations',        x: 34, y: 38 },
      { variant: 'is-peer',     icon: 'building',        label: 'Product',           x: 84, y: 60 },
      { variant: 'is-peer',     icon: 'building',        label: 'Customer Success',  x: 58, y: 32 },
      { variant: 'is-current',  icon: 'group',           label: 'Novanta',           x: 70, y: 44 }
    ],

    engpDist: { dis: 10, pot: 31, eng: 59 },
    engpCards: [
      { lbl: 'Novanta B.V.', val: '66%' },
      { lbl: 'Benchmark', val: '75%' }
    ],
    engpLine: { labels: ['Jun 2025', 'May 2026'], data: [67, 66] },
    engpTheme: [
      { q: 'Doing my work gives me energy', s: '74%' },
      { q: 'I enjoy doing my work / tasks', s: '77%' },
      { q: 'I am proud to work at Novanta', s: '82%' },
      { q: 'I feel that I fit in at Novanta', s: '81%' }
    ],
    engpCorr: [
      { q: 'My skills and abilities fit in well with my job', s: '83%' },
      { q: 'I identify with the culture of Novanta', s: '80%' },
      { q: 'Novanta is a good organisation to work for', s: '85%' },
      { q: 'The vision for the future of Novanta inspires me', s: '72%' },
      { q: 'Novanta uses employees’ ideas and suggestions to do better', s: '68%' }
    ]
  }
};

/* Recommended action per approach — 1:1 uses the Figma copy, the rest are placeholders */
/* Recommended actions per survey item — keyed by survey item, then by recommendation type.
   Source: Effectory assessment "Recommendations" sheet (title + recommendation per type). */
const APPROACHES = ['Self directed', '1 on 1 action', 'Team level action', 'Process / structural action'];
const RECO = {
  'I enjoy doing my work / tasks': {
    'Self directed': { title: 'Notice which tasks you protect or postpone', body: 'For one week, track which recurring tasks you protect, delay, delegate last, or complain about. Use the pattern to adjust one draining task in the next planning cycle.' },
    '1 on 1 action': { title: 'Run a task enjoyment map in 1:1s', body: 'In your next 1:1s, ask each person which recurring tasks energise them, feel neutral, or drain them. Agree one small adjustment for the next four weeks.' },
    'Team level action': { title: 'Rotate or pair the least-liked recurring work', body: 'Pick one recurring task the team dislikes and test a better setup for one month: rotate it, pair people, batch it, or add a checklist.' },
    'Process / structural action': { title: 'Remove or simplify one low-value recurring task', body: 'Review recurring meetings, reports, approvals, checks, and handovers. Remove or simplify one that no longer improves decisions, quality, or service.' }
  },
  'I am provided with good work resources': {
    'Self directed': { title: 'Separate fixable friction from escalation issues', body: 'Sort resource issues into three groups: you can fix, the team can work around, and needs escalation. Start with one issue you can fix this week.' },
    '1 on 1 action': { title: "Ask what resource gap slows this person's work most", body: 'In each 1:1, ask which tool, material, permission, instruction, or workspace issue slows the person down most often. Capture a specific example.' },
    'Team level action': { title: 'Build a resource friction log and close one item weekly', body: 'Create a simple resource issue list and review it weekly with the team. Close at least one item you control each week.' },
    'Process / structural action': { title: 'Escalate repeated resource gaps with evidence', body: 'Set a clear rule for when a resource issue must be escalated, such as repeated blockers, safety or quality risk, material time loss, customer impact, workaround cost, or unequal access. Escalate with facts: affected work, frequency, impact, current workaround, and support needed.' }
  },
  'My skills and abilities fit in well with my job': {
    'Self directed': { title: 'Check whether you are using people for availability instead of fit', body: 'Review recent assignments and spot where work went to whoever was available rather than whoever was best fitted or ready to grow. Adjust one upcoming assignment.' },
    '1 on 1 action': { title: 'Run a skills-to-work fit review', body: 'Ask each person which parts of the role use their strengths, underuse them, or stretch them too far. Agree one practical adjustment or support step.' },
    'Team level action': { title: 'Map critical task coverage without exposing weaknesses', body: 'Map recurring work against coverage: covered, workable with support, risky if only one person knows it, needs clearer standard, or needs training. Choose one pairing, cross-training, checklist, or backup action.' },
    'Process / structural action': { title: 'Create a support rule for new or difficult work', body: 'For new, difficult, or risky work, give five basics before assigning it: expected output, good example, check-in moment, support person, and fallback option.' }
  },
  'I know what results are expected of me at work': {
    'Self directed': { title: 'State trade-offs, not only tasks', body: 'At the start of each week or shift cycle, state what matters most and what can wait or be done lighter if pressure rises.' },
    '1 on 1 action': { title: 'Confirm one outcome expectation per person', body: 'In each 1:1, choose one important piece of work and ask what a good result looks like. Correct unclear expectations immediately.' },
    'Team level action': { title: 'Run a weekly priority reset', body: "Run a weekly priority reset. Share the team's top three priorities and one piece of work that should receive less attention right now." },
    'Process / structural action': { title: 'Use definition-of-done for recurring ambiguous work', body: 'Define the minimum standard for recurring ambiguous work before it starts: output, quality level, deadline, handover format, and exception rule.' }
  },
  'Doing my work gives me energy': {
    'Self directed': { title: 'Look for energy drains you may be causing', body: 'Check whether your routines create avoidable interruptions, unclear priorities, rework, last-minute pressure, or tension. Change one behaviour for the next two weeks.' },
    '1 on 1 action': { title: 'Map personal energisers and drainers', body: 'Ask each person what gives them energy and what drains more energy than it should. Agree one local fix for the draining item.' },
    'Team level action': { title: 'Run an energy drain audit with a fixability filter', body: 'Ask the team to list energy drains, rank them by frequency and fixability, and change one high-frequency drain for four weeks.' },
    'Process / structural action': { title: 'Make repeated hidden work visible before reallocating it', body: 'Track hidden work for two weeks, such as error fixing, informal coordination, handover clean-up, last-minute cover, admin recovery, customer follow-up, or emotional support after difficult incidents. Then rebalance one recurring task.' }
  },
  'Important information is readily accessible for me': {
    'Self directed': { title: 'Stop adding new unofficial channels', body: 'For two weeks, stop adding new places for information. Put lasting updates in the official source and mark temporary updates clearly.' },
    '1 on 1 action': { title: 'Ask each person where they lose information', body: 'In 1:1s, ask where the person gets stuck when looking for information. Identify whether the issue is location, access, ownership, wording, timing, or version control, then fix one concrete issue.' },
    'Team level action': { title: "End team updates with 'what changed, where it lives'", body: 'End each meeting, huddle, or shift briefing by saying what changed, who is affected, what action is needed, and where the latest information lives.' },
    'Process / structural action': { title: 'Create a five-item source-of-truth map', body: 'Pick the five information types the team uses most and name the official location, owner, update rhythm, and duplicate source to stop using.' }
  },
  'I am able to maintain a good balance between working and relaxing': {
    'Self directed': { title: 'Remove one manager-created boundary leak', body: 'Review where your own behaviour weakens recovery, such as after-hours messages, last-minute requests, unclear urgency, praise for constant availability, or cancelled breaks. Remove one boundary leak this week.' },
    '1 on 1 action': { title: 'Ask what is pushing work into recovery time', body: 'In 1:1s, ask what work most often spills into breaks, evenings, weekends, or recovery time. Identify whether the cause is volume, staffing, handover, unclear priority, or personal habit, then agree one immediate protection.' },
    'Team level action': { title: 'Use a workload trade-off rule in planning', body: 'When new work is added, ask what will stop, move, or become lighter. Use the answer to protect people from hidden overload.' },
    'Process / structural action': { title: 'Add recovery and workload limits to planning', body: 'Add a workload and recovery check to planning. Define peak periods, work to pause, cover needed, escalation triggers, and recovery time.' }
  }
};

/* Which recommendation types show as radio options per survey item — a different
   mix per question so the cards don't all repeat the same four options. */
const FOCUS_TYPES = {
  'I know what results are expected of me at work': ['Self directed', '1 on 1 action', 'Team level action'],
  'Doing my work gives me energy': ['1 on 1 action', 'Team level action', 'Process / structural action'],
  'I am provided with good work resources': ['Self directed', 'Team level action', 'Process / structural action'],
  'My skills and abilities fit in well with my job': ['Self directed', '1 on 1 action', 'Process / structural action'],
  'I enjoy doing my work / tasks': ['Self directed', '1 on 1 action', 'Team level action', 'Process / structural action'],
  'Important information is readily accessible for me': ['1 on 1 action', 'Team level action', 'Process / structural action'],
  'I am able to maintain a good balance between working and relaxing': ['Self directed', 'Team level action', 'Process / structural action']
};

/* ---------- Focus View (second tab) ---------- */
function focusView(d) {
  const npsValue = d.npsPromoters - d.npsDetractors;
  /* Theme labels per question — questions match the overview's Highest/Lowest cards */
  const THEME = {
    /* focus items (lowest scores) */
    'I know what results are expected of me at work': 'Work performance',
    'Doing my work gives me energy': 'Wellbeing and workload',
    'I am provided with good work resources': 'Work enablement',
    'My skills and abilities fit in well with my job': 'Work performance',
    'I enjoy doing my work / tasks': 'Work enjoyment',
    'Important information is readily accessible for me': 'Work enablement',
    'I am able to maintain a good balance between working and relaxing': 'Wellbeing and workload',
    /* wins items (highest scores) */
    'I feel comfortable within the team': 'Engagement',
    'Our team trusts one another': 'Collaboration',
    'During a team meeting, everyone has a fair chance to speak up': 'Collaboration',
    'There is a relaxed atmosphere within our team': 'Wellbeing and workload',
    'I enjoy my work': 'Work enjoyment'
  };
  const fxMarker = (m) => `<div class="fx-marker ${m.variant} ${m.chip}" style="left:${m.x}%;top:${100 - m.y}%"><div class="fx-dot"></div><div class="fx-chip"><i data-icon="${m.icon}"></i>${m.label}</div></div>`;
  const trend = (val) => val ? `<div class="fv-trend-row"><span class="fv-trend">${val} <i data-icon="arrow-up"></i></span><span class="fv-trend-note">vs previous survey</span></div>` : '';
  const verdictClass = 'is-' + d.efpLeadEm.toLowerCase().replace(/\s+/g, '-');
  const approach = (i, q) => (FOCUS_TYPES[q] || APPROACHES)
    .map(a => `<button class="rb-btn-bordered" data-appr="${a}"><span class="rb-wrap"><input type="radio" class="rb" name="appr-${i}"></span>${a}</button>`).join('');

  const focusCard = (s, i) => `
    <div class="fv-card" data-q="${s.q}">
      <div class="fv-card-head">
        <div class="fv-card-top">
          <div class="fv-card-q">
            <p class="fv-card-question">${s.q}</p>
            <span class="fv-card-theme">${THEME[s.q] || ''}</span>
          </div>
          <span class="fv-score is-focus">${s.s}%</span>
        </div>
        <div class="fv-relevance">
          <a class="fv-rel-btn"><i data-icon="up-vote"></i> This is relevant</a>
          <a class="fv-rel-btn"><i data-icon="down-vote"></i> This focus area is not relevant right now</a>
        </div>
      </div>
      <div class="fv-divider"></div>
      <div class="fv-approach">
        <div class="fv-approach-lbl"><i data-icon="lightbulb"></i> Pick an approach to see the recommended action:</div>
        <div class="fv-approach-chips">${approach(i, s.q)}</div>
        <div class="fv-reco" hidden>
          <div class="fv-reco-content">
            <div class="fv-reco-head">
              <div class="fv-reco-title-wrap">
                <span class="fv-reco-eyebrow"></span>
                <p class="fv-reco-title"></p>
              </div>
            </div>
            <p class="fv-reco-body"></p>
          </div>
          <button class="btn btn-primary fv-reco-add"><i data-icon="target"></i> Add to action planner</button>
        </div>
        <button class="btn btn-link fv-create"><i data-icon="plus"></i> Create new action</button>
      </div>
    </div>`;

  const winCard = (s) => `
    <div class="fv-win-card">
      <div class="fv-card-q">
        <p class="fv-card-question">${s.q}</p>
        <span class="fv-card-theme">${THEME[s.q] || ''}</span>
      </div>
      <span class="fv-score is-win">${s.s}%</span>
    </div>`;

  return `
  <div class="fv-stats">
    <div class="fv-stat-pill">
      <span class="fv-stat-pill-lbl">Response rate</span>
      <span class="fv-stat-pill-val">${d.rrValue}%</span>
      <span class="fv-trend">${d.rrTrend} <i data-icon="arrow-up"></i></span>
    </div>
    <div class="fv-stat-pill is-clickable fv-nps-pill" role="button" tabindex="0" aria-label="Open eNPS details">
      <span class="fv-stat-pill-lbl">eNPS</span>
      <span class="fv-stat-pill-val">${npsValue}</span>
      ${d.npsTrend ? `<span class="fv-trend">${d.npsTrend} <i data-icon="arrow-up"></i></span>` : ''}
    </div>
  </div>

  <div class="fv-glance">
    <div class="fv-glance-head">
      <span class="fv-eyebrow is-glance">At first glance</span>
      <h2 class="fv-verdict ${verdictClass}">${d.fvVerdictPre || 'Your team is'} <span class="fv-verdict-word">${d.efpLeadEm}<span class="fv-verdict-underline"></span></span></h2>
    </div>
    <div class="fv-glance-body">
      <div class="fv-glance-left">
      <div class="fv-stat-cards">
        <div class="fv-stat-card">
          <div class="fv-stat-text">
            <p class="fv-stat-main"><span class="fv-stat-val">${d.engValue}</span> is engaged</p>
            ${trend(d.fvEngTrend)}
          </div>
          <a class="fv-explore">Explore <i data-icon="chevron-right"></i></a>
        </div>
        <div class="fv-stat-card">
          <div class="fv-stat-text">
            <p class="fv-stat-main"><span class="fv-stat-val">${d.fvPerform}</span> can perform effectively</p>
            ${trend(d.fvPerformTrend)}
          </div>
          <a class="fv-explore">Explore <i data-icon="chevron-right"></i></a>
        </div>
      </div>
      <div class="fv-meaning">
        <div class="fv-meaning-hd"><i data-icon="info"></i> What does this mean?</div>
        <p>${d.efpLeadDesc}</p>
      </div>
    </div>
    <div class="fv-glance-matrix">
      <div class="fv-matrix-row">
        <span class="fv-y-axis">Performance environment</span>
        <div class="fx-matrix">
          <div class="fx-quad is-detached">Detached</div>
          <div class="fx-quad is-effective">Effective</div>
          <div class="fx-quad is-ineffective">Ineffective</div>
          <div class="fx-quad is-not-utilized">Not fully utilized</div>
          <span class="fx-scale is-top-left">100%</span>
          <span class="fx-scale is-bottom-left">0%</span>
          <span class="fx-scale is-bottom-right">100%</span>
          <div class="efp-bench-badge"><i data-icon="benchmark-up"></i> ${d.engBench}<div class="tooltip is-above">Benchmark ${d.engBench}</div></div>
          <div class="efp-bench-badge is-left">${d.efpBench} <i data-icon="benchmark-up"></i><div class="tooltip is-above">Benchmark ${d.efpBench}</div></div>
          ${d.fxMarkers.map(fxMarker).join('')}
        </div>
      </div>
      <p class="fv-x-axis">Engagement score</p>
      </div>
    </div>
  </div>

  <div class="fv-block fv-focus">
    <div class="fv-block-aside">
      <span class="fv-eyebrow is-focus">What needs focus</span>
      <h2 class="fv-section-title">This is where your attention matters most</h2>
      <p class="fv-section-desc">These are questions where improvement will have the most impact on your team results.</p>
    </div>
    <div class="fv-block-main">
      <a class="fv-why" data-dialog="fa-dialog"><i data-icon="info"></i> Why these focus areas?</a>
      <div class="fv-cards">${d.lowScores.slice(0, 3).map(focusCard).join('')}</div>
    </div>
  </div>

  <div class="fv-block fv-wins">
    <div class="fv-block-aside">
      <span class="fv-eyebrow is-wins">Celebrate your wins</span>
      <h2 class="fv-section-title">Your team is already getting this right</h2>
      <p class="fv-section-desc">These are the areas where your team is performing well. Share these wins with your team to keep the momentum going!</p>
    </div>
    <div class="fv-block-main">
      <a class="fv-why" data-dialog="wins-dialog"><i data-icon="info"></i> Why these successes?</a>
      <div class="fv-win-cards">${d.highScores.slice(0, 3).map(winCard).join('')}</div>
    </div>
  </div>

  <div class="overlay" id="fa-dialog" hidden>
    <div class="dialog dialog-s" role="dialog" aria-modal="true" aria-labelledby="fa-dlg-title">
      <button class="dialog-close" aria-label="Close"><i data-icon="cross"></i></button>
      <div class="dialog-header is-sm"><div class="dialog-header-top"><h3 class="dialog-title" id="fa-dlg-title">Why these focus areas?</h3></div></div>
      <div class="dialog-body fv-why-dialog">
        <p>Focus areas are identified based on four factors from your team's survey results:</p>
        <ul>
          <li>Trend - whether your team's score on this question has declined since the last survey</li>
          <li>Gap - how your team's score compares to the rest of the organisation</li>
          <li>Consistency - how aligned your team members are in their responses</li>
          <li>Performance - how your score compares to internal and external benchmarks</li>
        </ul>
        <p>Questions that score highest across these four factors are surfaced as your top focus areas.</p>
      </div>
      <div class="dialog-footer"><button class="btn btn-primary">Got it</button></div>
    </div>
  </div>

  <div class="overlay" id="wins-dialog" hidden>
    <div class="dialog dialog-s" role="dialog" aria-modal="true" aria-labelledby="wins-dlg-title">
      <button class="dialog-close" aria-label="Close"><i data-icon="cross"></i></button>
      <div class="dialog-header is-sm"><div class="dialog-header-top"><h3 class="dialog-title" id="wins-dlg-title">Why these successes?</h3></div></div>
      <div class="dialog-body fv-why-dialog">
        <p>Successes are identified based on the same four factors from your team's survey results:</p>
        <ul>
          <li>Trend - whether your team's score on this question has improved since the last survey</li>
          <li>Gap - how your team's score compares to the rest of the organisation</li>
          <li>Consistency - how aligned your team members are in their responses</li>
          <li>Performance - how your score compares to internal and external benchmarks</li>
        </ul>
        <p>Questions that score best across these four factors are surfaced as your top successes.</p>
      </div>
      <div class="dialog-footer"><button class="btn btn-primary">Got it</button></div>
    </div>
  </div>
  `;
}

/* ---------- Reports (third tab) ---------- */
function reportsView(d) {
  const row = (icon, name, desc, raw) => `
    <div class="report-row"${raw ? ' data-raw="true"' : ''}>
      <img class="file-icon" src="assets/icons/${icon}.svg" alt="" />
      <div class="report-meta">
        <div class="report-name">${name}</div>
        <div class="report-desc">${desc}</div>
      </div>
      <button class="ib ib-36 ib-tertiary" aria-label="Download ${name}"><i data-icon="download"></i></button>
    </div>`;
  return `
  <div class="rd-intro">
    <h2 class="text-l3">Reports</h2>
    <span class="rd-bar"></span>
    <span class="rd-sub">View and download your reports</span>
  </div>
  <div class="report-group">
    <h3 class="text-l5 report-group-title">Essential reports</h3>
    <div class="report-card">
      ${row('ppt-file', 'Standard Group Results', 'Includes response rate, themes, question performance and group deep-dives. Includes eNPS and Organizational Effectiveness when available.')}
      ${row('pdf-file', 'Management Summary', 'A leadership-ready summary of key outcomes, strengths, improvement areas, and the main takeaways.')}
      ${row('ppt-file', 'Answer Distribution Report', 'Shows how responses are distributed per question, to reveal patterns beyond averages.')}
    </div>
  </div>
  <div class="report-group">
    <h3 class="text-l5 report-group-title">Deep-dive reports</h3>
    <div class="report-card">
      ${row('xls-file', 'Raw Data Report: Anonymized', "Respondent-level raw answers for customers' own analysis and data portability.", true)}
      ${row('xls-file', 'Raw Data Report: Pseudonymous', "Only internal — respondent-level raw answers for customers' own analysis and data portability.", true)}
      ${row('xls-file', 'Raw Data Report: Non-anonymized', "Respondent-level raw answers for customers' own analysis and data portability.", true)}
    </div>
  </div>`;
}

/* Reports dialogs (language picker, generating dialog, ready notification) */
function reportsDialogs() {
  const langRow = (lang, flag, name, region, checked) => `
    <label class="lang-row${checked ? ' is-selected' : ''}" data-lang="${lang}">
      <span class="rb-wrap"><input type="radio" class="rb" name="lang"${checked ? ' checked' : ''}></span>
      <span class="lang-flag">${flag}</span>
      <span class="lang-name">${name} <span class="lang-region">(${region})</span></span>
    </label>`;
  return `
<div class="scrim" id="lang-scrim" hidden>
  <div class="dialog dialog-s" role="dialog" aria-modal="true" aria-labelledby="lang-title">
    <button class="dialog-close" id="lang-close" aria-label="Close"><i data-icon="cross"></i></button>
    <div class="dialog-header is-sm">
      <h3 class="dialog-title" id="lang-title">Choose a language</h3>
      <p class="dialog-subtitle" id="lang-sub">Download “<span id="lang-report">reportName</span>” in the language you select below</p>
    </div>
    <div class="dialog-body">
      <div class="lang-list" role="radiogroup" aria-label="Language">
        ${langRow('Dutch', '🇳🇱', 'Dutch', 'The Netherlands')}
        ${langRow('English (US)', '🇺🇸', 'English', 'United States', true)}
        ${langRow('English (UK)', '🇬🇧', 'English', 'United Kingdom')}
        ${langRow('German', '🇩🇪', 'German', 'Germany')}
        ${langRow('Italian', '🇮🇹', 'Italian', 'Italy')}
        ${langRow('Polish', '🇵🇱', 'Polish', 'Poland')}
        ${langRow('Portuguese', '🇵🇹', 'Portuguese', 'Portugal')}
      </div>
    </div>
    <div class="dialog-footer">
      <button class="btn btn-secondary" id="lang-cancel">Cancel</button>
      <button class="btn btn-primary">Download…</button>
    </div>
  </div>
</div>

<div class="toast-region" id="ready-toast" hidden>
  <div class="sysnotif" role="status">
    <button class="sysnotif-close" id="ready-close" aria-label="Dismiss"><i data-icon="cross"></i></button>
    <span class="sysnotif-title" id="ready-title"></span>
    <button class="sysnotif-action" id="ready-download"><i data-icon="download"></i> Download</button>
  </div>
</div>

<div class="scrim" id="gen-scrim" hidden>
  <div class="dialog dialog-s" role="dialog" aria-modal="true" aria-labelledby="gen-title">
    <button class="dialog-close" id="gen-close" aria-label="Close"><i data-icon="cross"></i></button>
    <div class="dialog-header is-sm">
      <h3 class="dialog-title" id="gen-title">Generating report</h3>
      <p class="dialog-subtitle" id="gen-subtitle">File is being generated.</p>
    </div>
    <div class="dialog-body">
      <div class="gen-panel" id="gen-panel">
        <div class="gen-card gen-loading">
          <div class="gen-icon">
            <img class="gen-file" src="assets/icons/file-loading.svg" alt="" />
            <span class="gen-spinner"></span>
          </div>
          <div class="gen-text">
            <span class="gen-title">Generating excel file…</span>
            <span class="gen-sub" id="gen-sub">In your selected language</span>
          </div>
        </div>
        <div class="gen-done">
          <div class="gen-card">
            <img class="gen-file" src="assets/icons/file-ready.svg" alt="" />
            <div class="gen-text">
              <span class="gen-title">Done!</span>
              <span class="gen-sub">The report will download automatically</span>
            </div>
          </div>
          <a class="gen-fallback" href="#">Download does not start? Click here</a>
        </div>
      </div>
      <div class="gen-longer" id="gen-longer">
        <div class="gen-longer-note">
          <i data-icon="info" class="gen-longer-icon"></i>
          <p>This can take a while. Feel free to close this window and keep working in My Effectory — your report will be ready to download here when it’s done.</p>
        </div>
        <div class="gen-longer-actions"><button class="btn btn-secondary" id="gen-close-btn">Got it</button></div>
      </div>
    </div>
  </div>
</div>`;
}

/* Per-question side panel (opens from a Scores row) — same look as the engagement panel */
function scorePanel() {
  return `
<div class="overlay is-right" id="scp-overlay" hidden>
  <div class="sidepanel" role="dialog" aria-modal="true" aria-labelledby="scp-title">
    <div class="sp-header">
      <div class="sp-toolbar"><div class="sp-actions"><i data-icon="cross" id="scp-close" role="button" tabindex="0" aria-label="Close"></i></div></div>
      <div class="sp-heading"><h2 class="sp-title" id="scp-title">Question</h2></div>
      <div class="sp-tabs engp-tabs">
        <a class="sp-tab is-active" data-scptab="insights"><i data-icon="category"></i> Insights</a>
        <a class="sp-tab" data-scptab="tips"><i data-icon="lightbulb"></i> Tips &amp; Best practices</a>
        <a class="sp-tab" data-scptab="actions"><i data-icon="target"></i> Actions</a>
      </div>
    </div>
    <div class="sp-body">
      <div class="scp-tabpanel" data-scptab="insights">
        <div class="engp-section">
          <h3 class="engp-section-title">Distribution of answers</h3>
          <p>Knowing the distribution of answers can help you understand the sentiment behind the score. It gives you a quick look at how most respondents feel about this question.</p>
          <div class="engp-dist">
            <div class="dist-ends">
              <span class="dist-end is-dis"><i data-icon="net-promoter-score-detractor"></i> Strongly disagree</span>
              <span class="dist-end is-eng">Strongly agree <i data-icon="net-promoter-score"></i></span>
            </div>
            <div class="dist-bar" id="scp-dist-bar"></div>
            <div class="scp-agree-row">
              <div class="scp-agree-bracket" id="scp-agree-bracket">
                <span class="scp-br-cap is-left"></span>
                <span class="scp-br-lbl" id="scp-agree-lbl"></span>
                <span class="scp-br-cap is-right"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="engp-section">
          <h3 class="engp-section-title">Score comparison</h3>
          <p>See how your group scores compared to the top-level group and benchmark. If your group scores close or higher than the benchmark, that is great! If your group is falling far behind, you should look closer into this topic.</p>
          <div class="engp-cards" id="scp-cards"></div>
          <div class="engp-chart-card" style="margin-top: var(--spacing-base);">
            <div class="engp-chart-hd">Score over time <span class="engp-chart-dot"></span> <span id="scp-chart-grp"></span></div>
            <div class="engp-chart-wrap"><canvas id="scp-chart" role="img" aria-label="Score over time"></canvas></div>
          </div>
        </div>
        <div class="engp-section" id="scp-theme-section" hidden>
          <h3 class="engp-section-title">This question is part of a theme <span class="scp-theme-tag" id="scp-theme-tag"></span></h3>
          <p>Compare how your group scores on the other questions that belong to the same theme</p>
          <div id="scp-theme-rows" style="margin-top:var(--spacing-base);"></div>
        </div>
      </div>
      <div class="scp-tabpanel" data-scptab="tips" hidden>
        <div class="engp-section">
          <h3 class="engp-section-title">Tips</h3>
          <ul class="scp-tips" id="scp-tips"></ul>
        </div>
        <div class="engp-section">
          <h3 class="engp-section-title">Best practice</h3>
          <p class="scp-bp" id="scp-bp"></p>
        </div>
      </div>
      <div class="scp-tabpanel" data-scptab="actions" hidden>
        <div class="engp-section">
          <p>No actions have been created for this question yet.</p>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

/* ---------- Scores (tab) ---------- */
/* All survey questions grouped by theme, with the group score, the Effectory Index
   (external benchmark) and the previous-survey score. Illustrative data. */
/* Single source of truth: per question a score for each group (team-it / novanta) and
   period (before = Q2 / after = Q3), plus a fixed benchmark (Effectory Index). Everything
   else is derived so the same number shows everywhere:
   - group score = v[group][period]
   - Previous survey = the previous period's value (Q3 → Q2; Q2 has none → "–")
   - Organization score = the Novanta-wide value (v.novanta[period])
   - Benchmark = bench
   Current (Q3) values match the Focus View cards/lowest-highest scores for the same question. */
const SCORES_GROUPS = [
  { theme: 'Work enjoyment', rows: [
    { q: 'I enjoy doing my work / tasks', bench: 71, v: { 'team-it': { before: 60, after: 72 }, 'novanta': { before: 66, after: 68 } } }
  ] },
  { theme: 'Loyalty', rows: [
    { q: 'I would recommend my team as a good place to work', bench: 5.6, scale: '10', v: { 'team-it': { before: 6.4, after: 7.1 }, 'novanta': { before: 6.6, after: 7.3 } } },
    { q: 'I see myself working here in two years', bench: 6.6, scale: '10', v: { 'team-it': { before: 5.9, after: 6.4 }, 'novanta': { before: 6.3, after: 6.8 } } }
  ] },
  { theme: 'Work enablement', rows: [
    { q: 'I am provided with good work resources', bench: 73, v: { 'team-it': { before: 52, after: 71 }, 'novanta': { before: 64, after: 71 } } },
    { q: 'Important information is readily accessible for me', bench: 72, v: { 'team-it': { before: 63, after: 68 }, 'novanta': { before: 63, after: 70 } } }
  ] },
  { theme: 'Work performance', rows: [
    { q: 'I know what results are expected of me at work', bench: 74, v: { 'team-it': { before: 43, after: 73 }, 'novanta': { before: 61, after: 72 } } },
    { q: 'My skills and abilities fit in well with my job', bench: 75, v: { 'team-it': { before: 54, after: 71 }, 'novanta': { before: 60, after: 66 } } }
  ] },
  { theme: 'Wellbeing and workload', rows: [
    { q: 'Doing my work gives me energy', bench: 70, v: { 'team-it': { before: 51, after: 68 }, 'novanta': { before: 66, after: 69 } } },
    { q: 'I am able to maintain a good balance between working and relaxing', bench: 69, v: { 'team-it': { before: 60, after: 70 }, 'novanta': { before: 58, after: 64 } } }
  ] },
  { theme: 'Team collaboration and performance', rows: [
    { q: 'I feel comfortable within the team', bench: 80, v: { 'team-it': { before: 95, after: 95 }, 'novanta': { before: 90, after: 92 } } },
    { q: 'Our team trusts one another', bench: 82, v: { 'team-it': { before: 88, after: 92 }, 'novanta': { before: 87, after: 89 } } },
    { q: 'During a team meeting, everyone has a fair chance to speak up', bench: 84, v: { 'team-it': { before: 84, after: 90 }, 'novanta': { before: 85, after: 88 } } }
  ] }
];
const groupKey = (d) => /Novanta/.test(d.groupName) ? 'novanta' : 'team-it';
const periodKey = (d) => /Q3/.test(d.surveyName) ? 'after' : 'before';

/* Segments (demographic crossings) the user can compare by. Age is the interactive one;
   selecting it adds a column per category to the Scores table. */
const AGE_CATS = [
  { key: '35-39', label: '35 - 39 years', n: 40, delta: 7 },
  { key: '30-34', label: '30 - 34 years', n: 55, delta: -7 },
  { key: '25-29', label: '25 - 29 years', n: 34, delta: -1 },
  { key: '40-44', label: '40 - 44 years', n: 15, delta: 6 },
  { key: 'u25', label: 'Younger than 25 years', n: 12, delta: -4 },
  { key: '45+', label: '45+ years', n: 15, delta: 1 }
];
const SEGMENTS = [
  { key: 'age', name: 'Age', cats: AGE_CATS },
  { key: 'los', name: 'Length of Service', count: 6 },
  { key: 'loc', name: 'Location', count: 3 },
  { key: 'gender', name: 'Gender', count: 2 }
];
const ORG_LABEL = 'Novanta B.V.';

function scoresFor(group, period) {
  return SCORES_GROUPS.map(g => ({
    theme: g.theme,
    rows: g.rows.map(r => {
      const s = r.v[group][period];
      const scale = r.scale || '%';
      const mx = scale === '10' ? 10 : 100, u = scale === '10' ? 0.1 : 1;
      const age = {};
      AGE_CATS.forEach(c => { age[c.key] = (c.hidden || s == null) ? null : Math.max(0, Math.min(mx, Math.round((s + c.delta * u) * 10) / 10)); });
      return {
        q: r.q, scale: r.scale,
        s, idx: r.bench,
        prev: period === 'after' ? r.v[group].before : null,
        org: r.v.novanta[period],
        age
      };
    })
  }));
}

/* Which questions belong to a theme — shown in the per-question side panel (per-variant
   scores, consistent with the Scores table). Questions not listed are not part of a theme. */
const PANEL_THEMES = {
  'Engagement': [
    { q: 'Doing my work gives me energy', v: { 'team-it': { before: 51, after: 68 }, 'novanta': { before: 66, after: 69 } } },
    { q: 'I enjoy doing my work / tasks', v: { 'team-it': { before: 60, after: 72 }, 'novanta': { before: 66, after: 68 } } },
    { q: 'I am proud to work at Novanta B.V.', v: { 'team-it': { before: 90, after: 100 }, 'novanta': { before: 88, after: 95 } } },
    { q: 'I feel that I fit in at Effectory', v: { 'team-it': { before: 74, after: 78 }, 'novanta': { before: 80, after: 82 } } }
  ]
};
const QUESTION_THEME = {};
Object.keys(PANEL_THEMES).forEach(th => PANEL_THEMES[th].forEach(x => { QUESTION_THEME[x.q] = th; }));

/* Tips & Best practices per question — shown in the question side panel's second tab. */
const TIPS = {
  'I enjoy doing my work / tasks': {
    tips: [
      'Make sure your team members’ experience is a match for their job duties and preferences. Take the actions needed when one of your team members experiences a mismatch, for example, spend a little more time with the team member, provide the team member with more help, or provide a training. In some situations, you might need to look for a more suitable position (inside or outside of the organization).',
      'Get to know your colleagues and make sure that they are continuing to develop their skills. It might be time to offer them a bigger challenge, a change in position or work tasks, or to set them on a path towards a promotion.',
      'Talk with your colleagues about the biggest obstacles you all encounter in your day to day work, and try to come up with solutions. Frustration diminishes job satisfaction, so take the time to remove obstacles when you can.',
      'Talk with your colleagues about what energizes them the most on the job (this may vary from person to person). Take this into account when allocating tasks amongst your team members.',
      'Work to maintain a pleasant atmosphere in the workplace. Lay down some ground rules and invest in team building exercises (for example, a team outing, lunch, joint training course, etc.).'
    ],
    bp: '“At the end of each shift, our team members wrote down what kind of day they had, that is, what they enjoyed and what they didn’t. After two weeks, everyone had a good picture of what gave them energy and what sapped their energy. We now take this into account when we allocate work duties.”'
  },
  'I am provided with good work resources': {
    tips: [
      'Talk with your team about the equipment and materials that are available to you. You don’t want anyone to feel like they aren’t allowed to perform at their best because of a lack of equipment or poor-quality equipment.',
      'Talk with your team members to determine whether necessary equipment is missing or if it’s time for something to be replaced. Decide as a team which improvements or investments could have a big impact while remaining cost effective. By engaging your team in the decision making process, you can establish a sense of ownership.',
      'If certain investments are cost prohibitive or are not possible for other reasons, discuss this openly as a team to avoid frustration.'
    ],
    bp: '“At a large vegetable and seed supplier, employees use bicycles to get around the fields and greenhouses. An employee survey revealed that the top complaint among employees was the poor condition of the bicycles. They were quite old and punctures in the tires had to be repaired weekly, wasting everyone’s time and energy. By investing in new bicycles, the organization was able to drastically improve employee morale while increasing overall efficiency.”'
  }
};

function scoresView(d) {
  /* Colour a comparison cell by how the current group compares to it
     (group − comparison): higher = green, lower = red. Thresholds match the legend. */
  const T2 = (s) => window.tr ? tr(s) : s;
  /* A question is either a 0–100 percentage or a 0–10 score; the colour thresholds differ. */
  const fmt = (v, scale) => v == null ? '–' : (scale === '10' ? Number(v).toFixed(1) : scale === 'nps' ? String(Math.round(v)) : v + '%');
  const diffClass = (delta, scale) => {
    if (delta == null) return '';
    const [pos, vpos] = scale === '10' ? [0.7, 1.5] : [10, 20];
    return delta >= vpos ? ' is-vpos' : delta >= pos ? ' is-pos' : delta <= -vpos ? ' is-vneg' : delta <= -pos ? ' is-neg' : '';
  };
  const cmpTip = (delta, label, scale) => {
    const L = T2(label), r2 = Math.round(delta * 10) / 10;
    if (r2 === 0) return T2('{group} scores the same as {label}').replace('{group}', d.groupName).replace('{label}', L);
    const usePoints = scale === '10' || scale === 'nps';
    const tpl = usePoints
      ? (delta > 0 ? '{group} scores {n} points higher than {label}' : '{group} scores {n} points lower than {label}')
      : (delta > 0 ? '{group} scores {n}% point higher than {label}' : '{group} scores {n}% point lower than {label}');
    const n = scale === '10' ? Math.abs(r2).toFixed(1) : Math.abs(Math.round(r2));
    return T2(tpl).replace('{group}', d.groupName).replace('{n}', n).replace('{label}', L);
  };
  const cmpCell = (val, groupVal, label, scale, extra = '', attrs = '') => {
    if (val == null) return `<div class="sc-cell${extra}"${attrs}><span class="sc-fill">–</span></div>`;
    const delta = groupVal - val;
    return `<div class="sc-cell${diffClass(delta, scale)}${extra}"${attrs}><span class="sc-fill tt-demo">${fmt(val, scale)}<div class="tooltip is-above">${cmpTip(delta, label, scale)}</div></span></div>`;
  };
  /* age-segment cells (one per age category) — hidden until the Age segment is applied */
  const ageCells = (r) => AGE_CATS.map(c => c.hidden
    ? `<div class="sc-cell sc-grp-age" data-age="${c.key}"><span class="sc-fill sc-fill-na"><i data-icon="eye-off"></i></span></div>`
    : cmpCell(r.age ? r.age[c.key] : null, r.s, T2(c.label), r.scale || '%', ' sc-grp-age', ` data-age="${c.key}"`)).join('');
  const scoreRow = (r) => {
    const scale = r.scale || '%';
    return `
    <div class="sc-row" data-q="${r.q}" data-group="${r.s == null ? '' : r.s}" data-bench="${r.idx}" data-org="${r.org == null ? '' : r.org}"${r.prev == null ? '' : ` data-prev="${r.prev}"`}${scale === '10' ? ' data-scale="10"' : ''}${r.enps ? ' data-enps="1"' : ''}>
      <div class="sc-q"><span class="sc-q-text">${r.q}</span>
        <div class="sc-actions">
          <button class="btn btn-secondary sc-insights">Insights</button>
          <div class="tt-demo"><button class="ib ib-36 ib-secondary" aria-label="Pin question"><i data-icon="pin"></i></button><div class="tooltip is-above">Pin question</div></div>
        </div>
      </div>
      <div class="sc-cell is-current"><span class="sc-fill">${fmt(r.s, scale)}</span></div>
      ${cmpCell(r.idx, r.s, 'Effectory Index', scale, ' sc-grp-default', ' data-col="index"')}
      ${cmpCell(r.prev, r.s, 'Previous survey', scale, ' sc-grp-default', ' data-col="prev"')}
      ${cmpCell(r.org, r.s, ORG_LABEL, scale, '', ' data-col="org"')}
      ${ageCells(r)}
    </div>`;
  };
  const colHead = (icon, label, extra = '', attrs = '') => `<div class="sc-col-head${extra}"${attrs}><i data-icon="${icon}"></i><span class="sc-col-lbl tt-demo">${label}<div class="tooltip is-above">${label}</div></span></div>`;
  const group = (g) => `
    <div class="sc-group" data-open="true">
      <div class="sc-head">
        <button class="sc-head-title"><i data-icon="chevron-down" class="sc-chev"></i> ${g.theme}</button>
        ${colHead('hierarchy', d.groupName, ' is-current')}
        ${colHead('benchmark-up', 'Effectory Index', ' is-index sc-grp-default', ' data-col="index"')}
        ${colHead('rotate-backward', 'Previous survey', ' sc-grp-default', ' data-col="prev"')}
        ${colHead('hierarchy', ORG_LABEL, '', ' data-col="org"')}
        ${AGE_CATS.map(c => colHead('segments', T2(c.label), ' sc-grp-age', ` data-age="${c.key}"`)).join('')}
      </div>
      <div class="sc-rows">${g.rows.map(scoreRow).join('')}</div>
    </div>`;
  return `
  <div class="rd-intro">
    <h2 class="text-l3">Scores</h2>
    <span class="rd-bar"></span>
    <span class="rd-sub">All survey questions &amp; scores</span>
  </div>
  <div class="sc-toolbar">
    <label class="sc-search">
      <i data-icon="search"></i>
      <input type="text" class="sc-search-input" placeholder="Search" aria-label="Search questions" />
    </label>
    <button class="sc-filter-btn" type="button"><i data-icon="sort-descending"></i><span class="sc-filter-lbl">Sort by:</span><span class="sc-filter-val">Default</span></button>
    <span class="sc-tb-divider"></span>
    <div class="sc-cmp-wrap">
      <button class="sc-filter-btn" id="sc-cmp-btn" type="button" aria-haspopup="true"><i data-icon="segments"></i><span class="sc-filter-lbl">Comparisons:</span><span class="sc-filter-val" id="sc-cmp-count">${T2('{n} selected').replace('{n}', '2')}</span></button>
      <div class="sc-pop" id="sc-cmp-pop" hidden>
        <div class="sc-pop-view" data-cmpview="main">
          <div class="sc-pop-sect">
            <div class="sc-pop-lbl">Quick comparisons</div>
            <div class="sc-quick">
              <button class="sc-quick-chip is-active" type="button" data-qcol="prev"><i data-icon="rotate-backward"></i> Previous survey</button>
              <button class="sc-quick-chip is-active" type="button" data-qcol="index"><i data-icon="benchmark-up"></i> Effectory Index</button>
              ${groupKey(d) === 'novanta' ? '' : '<button class="sc-quick-chip" type="button" data-qcol="org"><i data-icon="hierarchy"></i> Organization level</button>'}
            </div>
          </div>
          <div class="sc-pop-divider"></div>
          <div class="sc-pop-sect">
            <div class="sc-pop-lbl">All comparisons</div>
            <div class="sc-pop-rows">
              <button class="sc-pop-row" type="button"><i data-icon="hierarchy"></i><span class="sc-pop-row-name">Groups</span><span class="sc-pop-row-meta">${T2('{n} applied').replace('{n}', '1')}</span><i data-icon="chevron-right" class="sc-pop-row-arrow"></i></button>
              <button class="sc-pop-row" type="button" data-cmpgoto="segments"><i data-icon="segments"></i><span class="sc-pop-row-name">Segments</span><span class="sc-pop-row-meta" id="sc-seg-applied">${T2('{n} applied').replace('{n}', '0')}</span><i data-icon="chevron-right" class="sc-pop-row-arrow"></i></button>
              <button class="sc-pop-row" type="button"><i data-icon="benchmark-up"></i><span class="sc-pop-row-name">Benchmarks</span><span class="sc-pop-row-meta">${T2('{n} applied').replace('{n}', '1')}</span><i data-icon="chevron-right" class="sc-pop-row-arrow"></i></button>
            </div>
          </div>
        </div>
        <div class="sc-pop-view" data-cmpview="segments" hidden>
          <div class="sc-pop-head">
            <button class="sc-pop-back" id="sc-cmp-back" type="button"><i data-icon="arrow-left"></i> <span class="sc-pop-back-lbl">Segments</span></button>
            <p class="sc-pop-sub">Compare results across different employee demographics</p>
          </div>
          <div class="sc-pop-divider"></div>
          <div class="sc-seg-list">
          ${SEGMENTS.map(seg => `
          <div class="sc-seg" data-seg="${seg.key}">
            <div class="sc-seg-head">
              <span class="cb-wrap"><input type="checkbox" class="cb"${seg.key === 'age' ? ' id="sc-seg-age-cb"' : ' disabled'}></span>
              <button class="sc-seg-title" type="button">
                <span class="sc-seg-info">
                  <span class="sc-seg-name">${T2(seg.name)}</span>
                  <span class="sc-seg-count">${(seg.cats ? seg.cats.length : seg.count)} ${T2('categories')}${seg.note ? ` · <span class="sc-seg-note">${T2(seg.note)}</span>` : ''}</span>
                </span>
                <i data-icon="chevron-down" class="sc-seg-chev"></i>
              </button>
            </div>
            ${seg.cats ? `<div class="sc-seg-cats"><div class="sc-seg-cats-inner"><div class="sc-seg-cats-pad">${seg.cats.map(c => `<label class="sc-seg-cat${c.hidden ? ' is-hidden' : ''}"><span class="cb-wrap"><input type="checkbox" class="cb"${seg.key === 'age' ? ` data-cat="${c.key}"` : ''}${c.hidden ? ' disabled' : ''}></span><span class="sc-seg-cat-name">${T2(c.label)}</span>${c.hidden ? '<i data-icon="eye-off" class="sc-seg-cat-hidden"></i>' : ''}<span class="sc-seg-cat-n">${c.n}</span></label>`).join('')}</div></div></div>` : ''}
          </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
    <button class="sc-reset" type="button" disabled><i data-icon="rotate-backward"></i> Reset</button>
  </div>
  <div class="sc-table">${[...scoresFor(groupKey(d), periodKey(d)), {
    theme: 'eNPS', rows: [{
      q: 'How likely is it that you would recommend Novanta B.V. as an employer to others?',
      s: d.npsPromoters - d.npsDetractors, idx: d.npsBench, prev: d.npsPrev, scale: 'nps', enps: true
    }]
  }].map(group).join('')}</div>
  <div class="sc-legend">
    <span class="sc-legend-label">Legend</span>
    <span class="sc-legend-side is-higher">${(window.tr ? tr('{group} scores higher') : '{group} scores higher').replace('{group}', d.groupName)}</span>
    <div class="sc-legend-scale">
      <span class="sc-legend-sw is-vpos">+20%</span>
      <span class="sc-legend-sw is-pos">+10%</span>
      <span class="sc-legend-sw is-neutral"></span>
      <span class="sc-legend-sw is-neg">-10%</span>
      <span class="sc-legend-sw is-vneg">-20%</span>
    </div>
    <span class="sc-legend-side is-lower">Lower</span>
    <span class="sc-legend-div"></span>
    <span class="sc-legend-sig"><span class="sc-legend-star">✱</span> Statistical significance</span>
  </div>`;
}

/* ---------- Themes (in-page view) ---------- */
/* Per theme: benchmark (Effectory Index) + the group's score per survey period (0–100). */
const THEMES = [
  { name: 'Customer Focus', bench: 71, v: { 'team-it': { before: 45, after: 62 }, 'novanta': { before: 55, after: 64 } },
    desc: "In essence, customer focus is about identifying the customer's wishes and requirements, anticipating these wishes and acting on them to build lasting relationships.",
    questions: [
      { q: 'We put the customer at the centre of what we do', s: '64%' },
      { q: 'I understand how my work affects our customers', s: '68%' },
      { q: 'We act on customer feedback to improve', s: '54%' }
    ] },
  { name: 'Vitality', bench: 86, v: { 'team-it': { before: 71, after: 75 }, 'novanta': { before: 78, after: 80 } },
    desc: "Vitality covers both the mental and physical vitality of employees. Mental vitality refers to the mental state of an employee and their ability to recover and stay resilient.",
    questions: [
      { q: 'I have enough energy to do my work well', s: '78%' },
      { q: 'I can recover well after a busy period', s: '73%' },
      { q: 'My workload is manageable', s: '69%' }
    ] },
  { name: 'Efficiency', bench: 46, v: { 'team-it': { before: 26, after: 57 }, 'novanta': { before: 50, after: 58 } },
    desc: "On top of effectiveness, it's important that employees are given the ability to work efficiently. Efficiency is about the capacity to achieve results with minimal wasted effort.",
    questions: [
      { q: 'I can do my work without unnecessary obstacles', s: '55%' },
      { q: 'Our processes help me work efficiently', s: '59%' },
      { q: 'We avoid duplicate or wasted work', s: '52%' }
    ] },
  { name: 'Engagement', bench: 70, v: { 'team-it': { before: 48, after: 62 }, 'novanta': { before: 60, after: 66 } },
    desc: "Engagement is the degree to which your employees feel inspired and energized by their work. It reflects their positive connection to your organization and their willingness to go the extra mile.",
    questions: [
      { q: 'Doing my work gives me energy', s: '64%' },
      { q: 'I am proud of the work I do', s: '67%' },
      { q: 'I feel committed to our goals', s: '58%' }
    ] },
  { name: 'Satisfaction', bench: 85, v: { 'team-it': { before: 70, after: 76 }, 'novanta': { before: 75, after: 80 } },
    desc: "Employee satisfaction is the sense of well-being that employees experience because of their job. A satisfied employee is content with their role, conditions and environment.",
    questions: [
      { q: 'I am satisfied with my job', s: '78%' },
      { q: 'I am happy with my working conditions', s: '74%' },
      { q: 'I would recommend us as a place to work', s: '72%' }
    ] },
  { name: 'Willingness to change', bench: 47, v: { 'team-it': { before: 30, after: 56 }, 'novanta': { before: 48, after: 60 } },
    desc: "Willingness to change reflects how open and ready employees are to adapt to new ways of working, embrace improvements and support the organization through change.",
    questions: [
      { q: 'I am open to new ways of working', s: '58%' },
      { q: 'I embrace improvements in how we work', s: '55%' },
      { q: 'I support the organization through change', s: '54%' }
    ] },
];

function themesView(d) {
  const T2 = (s) => window.tr ? tr(s) : s;
  const g = groupKey(d), p = periodKey(d);
  const rows = THEMES.map(t => ({
    name: t.name, desc: t.desc,
    current: t.v[g][p],
    previous: p === 'after' ? t.v[g].before : null,   /* previous survey only exists from Q3 onward */
    benchmark: t.bench
  }));
  /* each bar carries a hover tooltip with its series label + score */
  const bar = (cls, label, val) => `<div class="cmp-bar ${cls} tt-demo" style="height:${val}%"><div class="tooltip is-above">${T2(label)}: ${val}%</div></div>`;
  const bars = (r) => `
    <div class="cmp-bargroup">
      ${bar('is-current', 'Current', r.current)}
      ${r.previous != null ? bar('is-previous', 'Previous', r.previous) : ''}
      ${bar('is-benchmark', 'Benchmark', r.benchmark)}
    </div>`;
  const card = (r, i) => `
    <div class="card card-elevated t-panel tc">
      <div class="tc-top">
        <div class="tc-head">
          <span class="tc-title text-l5">${r.name}</span>
          <div class="tt-demo"><button class="ib ib-36 ib-tertiary icon-ghost" aria-label="Pin theme"><i data-icon="pin"></i></button><div class="tooltip is-above">Pin theme</div></div>
        </div>
        <p class="tc-desc">${r.desc}</p>
      </div>
      <div class="tc-scores">
        <div class="score">
          <div class="score-label"><span class="score-name">${d.groupName}</span><span class="score-val">${r.current}%</span></div>
          <div class="score-track"><div class="score-fill is-current" style="right:${100 - r.current}%"></div></div>
        </div>
      </div>
      <button class="btn btn-link tc-link" data-theme="${i}">View insights <i data-icon="chevron-right"></i></button>
    </div>`;
  return `
  <div class="rd-intro">
    <h2 class="text-l3">Themes</h2>
    <span class="rd-bar"></span>
    <span class="rd-sub">Scores per theme to know what to focus on</span>
  </div>
  <div class="card card-elevated t-panel cmp-card">
    <div class="cmp-head">
      <span class="cmp-title text-l5">Theme comparison</span>
      <div class="cmp-head-right">
        <div class="cmp-legend">
          <span class="lg-item"><span class="lg-dot is-current"></span> Current</span>
          ${p === 'after' ? '<span class="lg-item"><span class="lg-dot is-previous"></span> Previous</span>' : ''}
          <span class="lg-item"><span class="lg-dot is-benchmark"></span> Benchmark</span>
        </div>
        <div class="tt-demo"><button class="ib ib-36 ib-tertiary icon-ghost" aria-label="Select filter"><i data-icon="gear"></i></button><div class="tooltip is-above">Select filter</div></div>
      </div>
    </div>
    <div class="cmp-chart">
      <div class="cmp-area">
        <div class="cmp-yaxis"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div>
        <div class="cmp-plot">
          <div class="cmp-lines"><i></i><i></i><i></i><i></i><i></i></div>
          <div class="cmp-groups">${rows.map(bars).join('')}</div>
        </div>
      </div>
      <div class="cmp-xaxis">${rows.map(r => `<span class="cmp-xlabel">${r.name}</span>`).join('')}</div>
    </div>
  </div>
  <div class="themes-section">
    <span class="themes-label text-l6">ALL THEMES</span>
    <div class="themes-grid">${rows.map(card).join('')}</div>
  </div>`;
}

/* ---------- markup template ---------- */
function shell(d) {
  const npsValue = d.npsPromoters - d.npsDetractors;
  /* eNPS card: small trend badge comparing the current eNPS with a reference (previous survey / benchmark) */
  const npsTrendBadge = (delta) => {
    const cls = delta > 0 ? 'is-up' : delta < 0 ? 'is-down' : 'is-flat';
    const icon = delta > 0 ? 'Trend-up' : delta < 0 ? 'Trend-down' : 'trend-stable';
    return `<span class="nps-trend ${cls}">${Math.abs(delta)} <i data-icon="${icon}"></i></span>`;
  };
  const tpMax = Math.max(...d.topics.map(t => t.count));
  const li = (arr) => arr.map(x => `<li>${x}</li>`).join('');
  const fxMarker = (m) => `<div class="fx-marker ${m.variant} ${m.chip}" style="left:${m.x}%;top:${100 - m.y}%"><div class="fx-dot"></div><div class="fx-chip"><i data-icon="${m.icon}"></i>${m.label}</div></div>`;
  const quad = (m) => {
    const eng = m.x >= 50, perf = m.y >= 50;
    if (eng && perf) return { q: 'var(--border-positive-base)', s: 'var(--bg-accent-green-subtle)' };   // Effective
    if (!eng && perf) return { q: 'var(--border-action-hover)', s: 'var(--bg-tertiary)' };              // Detached
    if (!eng && !perf) return { q: 'var(--bg-negative-base)', s: 'var(--bg-accent-red-subtle)' };       // Ineffective
    return { q: 'var(--bg-highlight-base)', s: 'var(--bg-accent-yellow-subtle)' };                      // Not fully utilized
  };
  /* Icon + label-type per marker variant (Figma label logic) */
  const markerIcon = (m) => ({ 'is-current': 'group', 'is-org': 'building', 'is-previous': 'rotate-backward' }[m.variant] || 'sort-descending');
  const tipEyebrow = (m) => ({ 'is-current': 'Current group', 'is-org': 'Organization level', 'is-previous': 'Previous survey' }[m.variant] || 'Group level below');
  const efpMarker = (m) => { const c = quad(m); return `<div class="efp-marker ${m.variant}${m.y >= 50 ? ' tip-below' : ''}" style="left:${m.x}%;top:${100 - m.y}%;--q:${c.q};--qs:${c.s}">
    <div class="efp-dot"></div>
    <div class="efp-chip"><i data-icon="${markerIcon(m)}"></i>${m.label}</div>
    <div class="efp-tip">
      <span class="efp-tip-bar"></span>
      <div class="efp-tip-body">
        <div class="efp-tip-head">
          <span class="efp-tip-eyebrow"><i data-icon="${markerIcon(m)}"></i> ${tipEyebrow(m)}</span>
          <span class="efp-tip-name">${m.label}</span>
        </div>
        <div class="efp-tip-rows">
          <div class="efp-tip-row"><span>Engagement</span><b>${m.x}%</b></div>
          <div class="efp-tip-row"><span>Performance environment</span><b>${m.y}%</b></div>
        </div>
      </div>
    </div>
  </div>`; };
  /* Effectiveness panel — List view: comparison groups grouped by quadrant */
  const efpListRow = (m) => `<div class="efp-li-row">
    <span class="efp-li-icon ${m.variant}"><i data-icon="${markerIcon(m)}"></i></span>
    <div class="efp-li-text">
      <div class="efp-li-name">${m.label}</div>
      <div class="efp-li-meta"><span>Engagement</span>: ${m.x}% • <span>Performance environment</span>: ${m.y}%</div>
    </div>
  </div>`;
  const efpListView = () => {
    const quads = [
      { name: 'Effective',         cls: 'is-effective',    test: (m) => m.x >= 50 && m.y >= 50 },
      { name: 'Not fully utilized', cls: 'is-not-utilized', test: (m) => m.x >= 50 && m.y < 50 },
      { name: 'Detached',          cls: 'is-detached',     test: (m) => m.x < 50 && m.y >= 50 },
      { name: 'Ineffective',       cls: 'is-ineffective',  test: (m) => m.x < 50 && m.y < 50 }
    ];
    const current = d.efpMarkers.find((m) => m.variant === 'is-current');
    return quads.map((q) => {
      const items = d.efpMarkers.filter(q.test);
      if (!items.length) return '';
      const hasCurrent = current && q.test(current);
      return `<div class="efp-acc ${q.cls}${hasCurrent ? ' is-open' : ''}">
        <button class="efp-acc-hd" type="button">
          <span class="efp-acc-label"><span class="efp-acc-title">${q.name}</span><span class="efp-acc-count">${items.length} <span>groups</span></span></span>
          <span class="efp-acc-right">${hasCurrent ? `<span class="efp-acc-chip"><i data-icon="group"></i>${current.label}</span>` : ''}<i data-icon="chevron-down" class="efp-acc-chev"></i></span>
        </button>
        <div class="efp-acc-body">${items.map(efpListRow).join('')}</div>
      </div>`;
    }).join('');
  };
  const topicTile = (t) => `<button class="tp-tile ${t.color}"><span class="tp-tile-fill" style="width:${Math.round(t.count / tpMax * 90)}%"></span><p class="tp-tile-name">${t.name}</p><span class="tp-tile-meta"><i data-icon="users"></i>${t.count} <span>times selected</span></span><span class="tp-tile-chevron"><i data-icon="chevron-right"></i></span></button>`;
  const qsRow = (s) => `<div class="qs-row"><p class="qs-row-q">${s.q}</p><span class="qs-row-score">${s.s}%</span></div>`;
  const efpScoreRow = (r) => `<div class="efp-score-row${r.sub ? ' is-sub' : ''}"><div class="efp-score-meta"><div class="efp-score-name">${r.name}</div>${r.desc ? `<div class="efp-score-desc">${r.desc}</div>` : ''}</div><span class="efp-score-badge is-current">${r.cur}</span><span class="efp-score-badge ${r.benchClass}">${r.bench}</span></div>`;
  const focusBullet = (b) => typeof b === 'string' ? `<li>${b}</li>` : `<li><strong>${b.t}</strong> ${b.d}</li>`;
  const engpCard = (c) => `<div class="engp-card-item"><div class="engp-card-lbl">${c.lbl}</div><div class="engp-card-val">${c.val}</div></div>`;
  const themeRow = (r) => `<div class="engp-q-row"><span class="engp-q-text">${r.q}</span><span class="engp-q-score">${r.s}</span></div>`;
  const corrRow = (r, i) => `<div class="engp-q-row"><span class="engp-q-num">${i + 1}</span><span class="engp-q-text">${r.q}</span><span class="engp-q-score">${r.s}</span></div>`;
  /* eNPS panel: diverging comparison bar (value range -100..100, 0 at centre) */
  const npsBar = (r) => {
    const pos = r.val >= 0;
    const w = Math.max(Math.min(Math.abs(r.val), 100) / 2, 1.5);
    const style = pos ? `left:50%;width:${w}%` : `left:${(50 - w).toFixed(2)}%;width:${w}%`;
    /* current group stays blue; everything else is green when positive, red when negative */
    const color = r.group ? 'is-blue' : (pos ? 'is-green' : 'is-red');
    return `<div class="npsp-bar-row ${r.group ? 'is-group' : ''}">
      <span class="npsp-bar-lbl">${r.icon ? `<i data-icon="${r.icon}"></i>` : ''}${r.label}</span>
      <div class="npsp-fill ${pos ? 'is-pos' : 'is-neg'} ${color}" style="${style}"><span class="npsp-val">${r.val}</span></div>
    </div>`;
  };
  /* eNPS panel: 1..10 recommendation-scale cells (detractors 1-6, passives 7-8, promoters 9-10) */
  const npsCells = () => Array.from({ length: 10 }, (_, i) => {
    const n = i + 1, cls = n <= 6 ? 'is-det' : n <= 8 ? 'is-pas' : 'is-pro';
    return `<span class="npsp-cell ${cls}">${n}</span>`;
  }).join('');

  return `
<div class="app">

  <div class="mainnav">
    <div class="mn-portal">
      <span class="mn-logo"></span>
      <button class="mn-portal-btn"><b>Coordinator</b> <i data-icon="chevron-down" class="mn-chev"></i></button>
    </div>
    <nav class="mn-nav" aria-label="Main">
      <a class="mn-item"><i data-icon="home"></i> Home</a>
      <a class="mn-item"><i data-icon="clipboard"></i> Surveys <i data-icon="chevron-up" class="mn-chev"></i></a>
      <div class="mn-sub">
        <a class="mn-subitem">All surveys</a>
        <a class="mn-subitem is-active">Projects</a>
      </div>
      <a class="mn-item"><i data-icon="refresh"></i> 360 feedback</a>
      <a class="mn-item"><i data-icon="globe"></i> Organization <i data-icon="chevron-down" class="mn-chev"></i></a>
    </nav>
    <div class="mn-foot">
      <a class="mn-item"><i data-icon="book-open"></i> Support wiki</a>
      <div class="mn-foot-divider"></div>
      <div class="mn-user" id="mn-user-btn" role="button" tabindex="0">
        <div class="av av-36 av-blue">JI</div>
        <div class="mn-meta">
          <div class="mn-name">Jente Insing</div>
          <div class="mn-org">Novanta B.V.</div>
        </div>
        <i data-icon="chevron-down"></i>
        <div class="lang-pop" id="lang-pop" hidden>
          <button class="lang-opt" data-lang="en">English</button>
          <button class="lang-opt" data-lang="nl">Nederlands</button>
          <button class="lang-opt" data-lang="de">Deutsch</button>
        </div>
      </div>
    </div>
  </div>

  <div class="main">

    <nav class="breadcrumb" aria-label="Breadcrumb">
      <button class="btn btn-secondary"><i data-icon="arrow-left"></i> Back</button>
      <ol class="bc-trail">
        <li><a class="bc-link" href="#">Engagement Survey, 2023–2026</a></li>
        <li><a class="bc-link" href="#">Results</a></li>
      </ol>
    </nav>

    <div class="main-scroll">

      <div class="results-head">
        <h1 class="text-l3 results-title">${d.surveyName}</h1>
        <div class="results-filters">
          <button class="sel-btn" id="hdr-filter" type="button">
            <i data-icon="filter"></i>
            <span class="sel-btn-name">Filter</span>
            <span class="sel-btn-value">${d.groupName}</span>
          </button>
          <div class="date-range">
            <span>${d.dateFrom}</span>
            <i data-icon="from-to" style="display:flex;width:24px;height:16px;"></i>
            <span>${d.dateTo}</span>
          </div>
        </div>
        <div class="tabs">
          <a class="tab is-active" data-view="overview">Overview</a>
          <a class="tab" data-view="focus"><i data-icon="featured" class="tab-spark"></i> Focus View</a>
          <a class="tab" data-view="themes">Themes</a>
          <a class="tab" data-view="scores">Scores</a>
          <a class="tab">Open answers</a>
          <a class="tab">Topics &amp; Ideas</a>
          <a class="tab" data-view="reports">Reports</a>
          <a class="tab">Actions</a>
        </div>
      </div>

      <div class="overview-wrap">

<div class="view" id="view-overview">

<div class="ai-summary" id="ai-summary">
  <div class="ai-head">
    <div class="ai-head-left">
      <i data-icon="featured" class="ai-spark"></i>
      <p class="ai-title">AI Summary</p>
    </div>
    <div class="ai-head-right">
      <div class="tt-demo">
        <button class="ib ib-36 ib-tertiary" aria-label="Hide summary"><i data-icon="eye-off"></i></button>
        <div class="tooltip is-below">Hide summary</div>
      </div>
      <div class="tt-demo">
        <button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button>
        <div class="tooltip is-below">More information</div>
      </div>
    </div>
  </div>
  <p class="ai-intro">${d.aiIntro}</p>
  <div class="ai-more">
    ${d.aiMore.map(p => `<p>${p}</p>`).join('')}
    <div class="ai-sec">
      <h4 class="ai-sec-title">Strengths</h4>
      <ul class="ai-list">${li(d.aiStrengths)}</ul>
    </div>
    <div class="ai-sec">
      <h4 class="ai-sec-title">Growth Areas</h4>
      <ul class="ai-list">${li(d.aiGrowth)}</ul>
    </div>
    <div class="ai-sec">
      <h4 class="ai-sec-title">Suggested actions</h4>
      <ul class="ai-list">${li(d.aiActions)}</ul>
    </div>
    <div class="ai-notice">
      <span class="ai-notice-text"><i data-icon="info"></i> This AI summary may not be fully accurate&mdash;please review before making decisions. <a href="#">Learn more</a></span>
      <div class="ai-notice-actions">
        <button class="btn btn-secondary"><i data-icon="up-vote"></i> This summary was helpful</button>
        <button class="btn btn-secondary"><i data-icon="down-vote"></i> Not really helpful</button>
      </div>
    </div>
  </div>
  <button class="ai-toggle" id="ai-toggle" aria-expanded="false">
    <span class="ai-toggle-more">Show more <i data-icon="chevron-down"></i></span>
    <span class="ai-toggle-less">Show less <i data-icon="chevron-up"></i></span>
  </button>
</div>

<div class="ov-grid">

  <div class="card fx-card">
    <div class="fx-header">
      <p class="fx-title text-l5">Effectiveness</p>
      <div class="tt-demo">
        <button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button>
        <div class="tooltip is-above">More information</div>
      </div>
    </div>
    <div class="fx-body">
      <p class="fx-axis">Performance environment</p>
      <div class="fx-matrix" id="fx-matrix">
        <div class="fx-quad is-detached">Detached</div>
        <div class="fx-quad is-effective">Effective</div>
        <div class="fx-quad is-ineffective">Ineffective</div>
        <div class="fx-quad is-not-utilized">Not fully utilized</div>
        <span class="fx-scale is-top-left">100%</span>
        <span class="fx-scale is-bottom-left">0%</span>
        <span class="fx-scale is-bottom-right">100%</span>
        ${d.fxMarkers.map(fxMarker).join('')}
      </div>
      <p class="fx-axis is-x">Engagement</p>
    </div>
  </div>

  <div class="card eng-card">
    <div class="eng-header">
      <div class="eng-title-row">
        <p class="eng-title text-l5">Engagement</p>
        <div class="eng-icons">
          <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="Pin card"><i data-icon="pin"></i></button><div class="tooltip is-above">Pin card</div></div>
          <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
          <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="Correlating questions"><i data-icon="correlation-positive"></i></button><div class="tooltip is-above">Correlating questions</div></div>
        </div>
      </div>
      <p class="eng-subtitle">Employees that are inspired and energized by their work.</p>
    </div>
    <div class="eng-body">
      <!-- icon-exempt: decorative wave fill -->
      <svg class="eng-wave" viewBox="0 0 336 135.5" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 135.5V0.5C0 0.5 50.5 70.8587 167.5 70.8587C284.5 70.8587 336 0 336 0V135L0 135.5Z" fill="var(--bg-info-subtle)"/>
      </svg>
      <span class="eng-value">${d.engValue}</span>
      <div class="eng-trend">${d.engTrend} <i data-icon="${d.engTrendIcon}"></i></div>
    </div>
    <div class="eng-bench">
      <div class="eng-bench-row"><span>Benchmark</span><span>${d.engBench}</span></div>
      <div class="eng-bench-track"><div class="eng-bench-fill" style="width:${d.engBenchW}%"></div></div>
    </div>
  </div>

  <div class="card nps-card">
    <div class="nps-header">
      <div class="nps-title-row">
        <p class="nps-title text-l5">Employee Net Promoter Score</p>
        <div class="nps-icons">
          <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="Pin card"><i data-icon="pin"></i></button><div class="tooltip is-above">Pin card</div></div>
          <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
        </div>
      </div>
      <p class="nps-desc">Shows to what extent employees would recommend your organization</p>
    </div>
    <div class="nps-graph">
      <div class="nps-donut">
        <canvas id="nps-chart" width="100" height="100" role="img" aria-label="eNPS ${npsValue}"></canvas>
        <div class="nps-donut-center">
          <span class="nps-donut-value">${npsValue}</span>
          <span class="nps-donut-label">eNPS</span>
        </div>
      </div>
      <div class="nps-stats">
        <div class="nps-stat">
          <span class="nps-stat-lbl">Previous survey</span>
          <div class="nps-stat-val-row">
            <span class="nps-stat-val">${d.npsPrev}</span>
            ${npsTrendBadge(npsValue - d.npsPrev)}
          </div>
        </div>
        <div class="nps-stat">
          <span class="nps-stat-lbl">Benchmark<span class="tt-demo nps-stat-info-wrap"><i data-icon="info" class="nps-stat-info" aria-label="External benchmark"></i><span class="tooltip is-above">External benchmark</span></span></span>
          <div class="nps-stat-val-row">
            <span class="nps-stat-val">${d.npsBench}</span>
            ${npsTrendBadge(npsValue - d.npsBench)}
          </div>
        </div>
      </div>
    </div>
    <div class="nps-rows">
      <div class="nps-row is-promoters">
        <div class="nps-row-cat"><i data-icon="net-promoter-score"></i>Promoters</div>
        <div class="nps-row-pct">${d.npsPromoters}%</div>
        <div class="nps-row-count"><span>${d.npsPromCount}</span><i data-icon="users"></i></div>
      </div>
      <div class="nps-row is-passives">
        <div class="nps-row-cat"><i data-icon="net-promoter-score-passive"></i>Passives</div>
        <div class="nps-row-pct">${d.npsPassives}%</div>
        <div class="nps-row-count"><span>${d.npsPassCount}</span><i data-icon="users"></i></div>
      </div>
      <div class="nps-row is-detractors">
        <div class="nps-row-cat"><i data-icon="net-promoter-score-detractor"></i>Detractors</div>
        <div class="nps-row-pct">${d.npsDetractors}%</div>
        <div class="nps-row-count"><span>${d.npsDetrCount}</span><i data-icon="users"></i></div>
      </div>
    </div>
  </div>

  <div class="card sw-card">
    <div class="sw-header">
      <p class="sw-title text-l5">Themes</p>
      <div class="sw-icons">
        <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="Pin card"><i data-icon="pin"></i></button><div class="tooltip is-above">Pin card</div></div>
        <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="Card settings"><i data-icon="gear"></i></button><div class="tooltip is-above">Card settings</div></div>
        <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
      </div>
    </div>
    <div class="sw-graph">
      <canvas id="sw-chart" width="334" height="290" role="img" aria-label="Spiderweb of theme scores, current versus previous survey"></canvas>
    </div>
    <div class="sw-legend">
      <div class="sw-legend-item"><span class="sw-legend-dot is-current"></span>Current</div>
      <div class="sw-legend-item"><span class="sw-legend-dot is-previous"></span>Previous</div>
    </div>
  </div>

  <div class="card rr-card">
    <div class="rr-header">
      <p class="rr-title text-l5">Response rate</p>
      <div class="rr-icons">
        <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="Pin card"><i data-icon="pin"></i></button><div class="tooltip is-above">Pin card</div></div>
        <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
      </div>
    </div>
    <div class="rr-body">
      <div class="rr-gauge">
        <canvas id="rr-chart" width="136" height="136" role="img" aria-label="Response rate ${d.rrValue}%"></canvas>
        <div class="rr-gauge-value">${d.rrValue}%</div>
      </div>
      <div class="rr-participants"><b>${d.rrPartDone}</b>/${d.rrPartTotal} <span>Participants</span></div>
      <div class="rr-trend">${d.rrTrend} <i data-icon="${d.rrTrendIcon}"></i></div>
    </div>
    <div class="rr-bench">
      <div class="rr-bench-row"><span>Benchmark</span><span>${d.rrBench}%</span></div>
      <div class="rr-bench-track"><div class="rr-bench-fill" style="width:${d.rrBench}%"></div></div>
    </div>
  </div>

  <div class="kpi-stack">
    <div class="kpi-card">
      <div class="kpi-text">
        <div class="kpi-title-row">
          <p class="kpi-title text-l5">Workload</p>
          <div class="kpi-icons">
            <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="Pin card"><i data-icon="pin"></i></button><div class="tooltip is-above">Pin card</div></div>
            <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
          </div>
        </div>
        <p class="kpi-desc">Employees who find their workload just right.</p>
      </div>
      <div class="kpi-gauge"><canvas id="kpi-workload" width="72" height="72" role="img" aria-label="Workload ${d.kpiWorkload}%"></canvas><div class="kpi-gauge-value">${d.kpiWorkload}%</div></div>
    </div>
    <div class="kpi-card">
      <div class="kpi-text">
        <div class="kpi-title-row">
          <p class="kpi-title text-l5">Retention</p>
          <div class="kpi-icons">
            <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="Pin card"><i data-icon="pin"></i></button><div class="tooltip is-above">Pin card</div></div>
            <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
          </div>
        </div>
        <p class="kpi-desc">Employees who want to stay at their current role.</p>
      </div>
      <div class="kpi-gauge"><canvas id="kpi-retention" width="72" height="72" role="img" aria-label="Retention ${d.kpiRetention}%"></canvas><div class="kpi-gauge-value">${d.kpiRetention}%</div></div>
    </div>
    <div class="kpi-card">
      <div class="kpi-text">
        <div class="kpi-title-row">
          <p class="kpi-title text-l5">Well-being</p>
          <div class="kpi-icons">
            <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="Pin card"><i data-icon="pin"></i></button><div class="tooltip is-above">Pin card</div></div>
            <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
          </div>
        </div>
        <p class="kpi-desc">How well employees can maintain a good work-life balance.</p>
      </div>
      <div class="kpi-gauge"><canvas id="kpi-wellbeing" width="72" height="72" role="img" aria-label="Well-being ${d.kpiWellbeing}%"></canvas><div class="kpi-gauge-value">${d.kpiWellbeing}%</div></div>
    </div>
  </div>

  <div class="card tp-card">
    <div class="tp-header">
      <div class="tp-title-row">
        <p class="tp-title text-l5">Feel-good topics</p>
        <div class="tp-icons">
          <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="Pin card"><i data-icon="pin"></i></button><div class="tooltip is-above">Pin card</div></div>
          <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="Card settings"><i data-icon="gear"></i></button><div class="tooltip is-above">Card settings</div></div>
          <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
        </div>
      </div>
      <p class="tp-desc">What topic are you most proud of within Novanta?</p>
    </div>
    <div class="tp-list">${d.topics.map(topicTile).join('')}</div>
    <div class="tp-footer">
      <button class="btn btn-link">View Topics &amp; Ideas <i data-icon="chevron-right"></i></button>
    </div>
  </div>

  <div class="card qs-card is-high">
    <div class="qs-header">
      <img class="qs-illu" src="assets/illustrations/win-small.svg" alt="" />
      <p class="qs-title text-l5">Highest scores</p>
      <div class="qs-icons">
        <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="Pin card"><i data-icon="pin"></i></button><div class="tooltip is-above">Pin card</div></div>
        <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
      </div>
    </div>
    <div class="qs-rows">${d.highScores.map(qsRow).join('')}</div>
  </div>

  <div class="card qs-card is-low">
    <div class="qs-header">
      <img class="qs-illu" src="assets/illustrations/improve-small.svg" alt="" />
      <p class="qs-title text-l5">Lowest scores</p>
      <div class="qs-icons">
        <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="Pin card"><i data-icon="pin"></i></button><div class="tooltip is-above">Pin card</div></div>
        <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
      </div>
    </div>
    <div class="qs-rows">${d.lowScores.map(qsRow).join('')}</div>
  </div>

</div><!-- /ov-grid -->

</div><!-- /view-overview -->

<div class="view" id="view-focus" hidden>
${focusView(d)}
</div><!-- /view-focus -->

<div class="view" id="view-reports" hidden>
${reportsView(d)}
</div><!-- /view-reports -->

<div class="view" id="view-themes" hidden>
${themesView(d)}
</div><!-- /view-themes -->

<div class="view" id="view-scores" hidden>
${scoresView(d)}
</div><!-- /view-scores -->

      </div><!-- /overview-wrap -->
    </div><!-- /main-scroll -->
  </div><!-- /main -->
</div><!-- /app -->

<!-- Effectiveness side panel -->
<div class="overlay is-right" id="efp-overlay" hidden>
  <div class="sidepanel" role="dialog" aria-modal="true" aria-labelledby="efp-title">
    <div class="sp-header">
      <div class="sp-toolbar"><div class="sp-actions"><i data-icon="cross" id="efp-close" role="button" tabindex="0" aria-label="Close"></i></div></div>
      <div class="sp-heading">
        <h2 class="sp-title" id="efp-title">Effectiveness</h2>
        <p class="sp-subtitle">How effective is a group in reaching their goals, staying innovative and dealing with change in an ever changing organization.</p>
      </div>
      <div class="sp-tabs efp-tabs">
        <a class="sp-tab is-active"><i data-icon="category"></i> Insights</a>
        <a class="sp-tab"><i data-icon="target"></i> Actions</a>
      </div>
    </div>

    <div class="sp-body">

      <div class="efp-lead">
        <h3 class="efp-lead-title">${d.efpLeadPre}<span class="efp-lead-em ${d.efpLeadEmClass}">${d.efpLeadEm}</span></h3>
        <p class="efp-lead-desc">${d.efpLeadDesc}</p>
      </div>

      <div class="efp-controls">
        <div class="efp-filter-wrap">
          <button class="sel-btn" id="efp-cmp-btn" type="button">
            <span class="sel-btn-name">Comparisons:</span>
            <span class="sel-btn-value" id="efp-cmp-count">${d.efpComparisons}</span>
            <i data-icon="chevron-down"></i>
          </button>
          <div class="efp-filter" id="efp-filter" hidden>
            ${[
              ...(d.efpHasOrg !== false ? [{ variant: 'is-org', label: 'Organization Level', icon: 'building' }] : []),
              ...(d.efpHasPrevious ? [{ variant: 'is-previous', label: 'Previous survey', icon: 'rotate-backward' }] : []),
              { variant: 'is-peer', label: 'Group Level below', icon: 'sort-descending' }
            ].map(r => `<label class="efp-filter-row">
              <span class="cb-wrap"><input type="checkbox" class="cb" data-variant="${r.variant}" checked></span>
              <span class="efp-filter-label">${r.label}</span>
              <i data-icon="${r.icon}"></i>
            </label>`).join('')}
          </div>
        </div>
        <div class="segctl">
          <button class="segctl-btn is-active" data-seg="matrix"><i data-icon="table"></i> Matrix</button>
          <button class="segctl-btn" data-seg="list"><i data-icon="list-unordered"></i> List</button>
        </div>
      </div>

      <div class="efp-view" id="efp-view-matrix">
      <div class="efp-matrix-row">
        <div class="efp-y-axis"><span>Performance environment →</span></div>
        <div class="efp-matrix" id="efp-matrix">
          <div class="efp-quad is-detached"><span class="efp-quad-lbl">Detached</span></div>
          <div class="efp-quad is-effective"><span class="efp-quad-lbl">Effective</span></div>
          <div class="efp-quad is-ineffective"><span class="efp-quad-lbl">Ineffective</span></div>
          <div class="efp-quad is-not-utilized"><span class="efp-quad-lbl">Not fully utilized</span></div>
          <span class="efp-scale is-tl">100%</span>
          <span class="efp-scale is-bl">0%</span>
          <span class="efp-scale is-br">100%</span>
          <div class="efp-bench-badge"><i data-icon="benchmark-up"></i> ${d.efpBench}<div class="tooltip is-above">Benchmark ${d.efpBench}</div></div>
          <div class="efp-bench-badge is-left">${d.efpBench} <i data-icon="benchmark-up"></i><div class="tooltip is-above">Benchmark ${d.efpBench}</div></div>
          ${d.efpMarkers.map(efpMarker).join('')}
        </div>
      </div>
      <p class="efp-x-axis">Engagement score →</p>
      </div>

      <div class="efp-view" id="efp-view-list" hidden>
        <div class="efp-bench-row">
          <span class="efp-bench-stat"><i data-icon="benchmark-up"></i> Benchmark <span>Engagement</span> ${d.engBench}</span>
          <span class="efp-bench-stat"><i data-icon="benchmark-up"></i> Benchmark <span>Performance environment</span> ${d.efpBench}</span>
        </div>
        <div class="efp-list">${efpListView()}</div>
      </div>

      <div class="efp-section">
        <h3 class="efp-section-title">Suggested focus</h3>
        <p>${d.efpFocusIntro}</p>
        <ul class="efp-focus-list">${d.efpFocusBullets.map(focusBullet).join('')}</ul>
        <p>${d.efpFocusClosing}</p>
      </div>

      <div class="efp-section">
        <h3 class="efp-section-title">Areas to focus on</h3>
        <div class="efp-scores-intro">
          <p class="efp-section-lead" style="margin:0;">The position on the graph is defined by the scores below and how they relate to the benchmark. Focus on maintaining high scores and improving low scores.</p>
          <div class="efp-score-cols">
            <span class="efp-col-icon is-group"><i data-icon="group"></i></span>
            <span class="efp-col-icon"><i data-icon="benchmark-up"></i></span>
          </div>
        </div>
        ${d.efpScores.map(efpScoreRow).join('')}
      </div>

      <div class="efp-section">
        <h3 class="efp-section-title">Graph legend</h3>
        <p class="efp-section-lead">The colors of the graph give you a visual indication of how effective the group is and what areas to focus on.</p>
        <div class="efp-legend-item"><span class="efp-legend-dot is-effective"></span><div><div class="efp-legend-name">Effective</div><div class="efp-legend-desc">Engagement can unfold its full potential thanks to the excellent performance environment. Focus on maintaining and consolidating your strengths!</div></div></div>
        <div class="efp-legend-item"><span class="efp-legend-dot is-ineffective"></span><div><div class="efp-legend-name">Ineffective</div><div class="efp-legend-desc">Focus on the continuous improvement of the performance environment, especially with issues of particular importance to engagement and performance.</div></div></div>
        <div class="efp-legend-item"><span class="efp-legend-dot is-not-utilized"></span><div><div class="efp-legend-name">Not fully utilized</div><div class="efp-legend-desc">People are engaged but struggle to perform at their best. Improve their performance environment to make the group thrive.</div></div></div>
        <div class="efp-legend-item"><span class="efp-legend-dot is-detached"></span><div><div class="efp-legend-name">Detached</div><div class="efp-legend-desc">Maintain your good performance environment and review your drivers of employee engagement for opportunities to boost it.</div></div></div>
      </div>

    </div><!-- /sp-body -->
  </div><!-- /sidepanel -->
</div><!-- /overlay -->

<!-- Engagement side panel -->
<div class="overlay is-right" id="engp-overlay" hidden>
  <div class="sidepanel" role="dialog" aria-modal="true" aria-labelledby="engp-title">
    <div class="sp-header">
      <div class="sp-toolbar"><div class="sp-actions"><i data-icon="cross" id="engp-close" role="button" tabindex="0" aria-label="Close"></i></div></div>
      <div class="sp-heading"><h2 class="sp-title" id="engp-title">Engagement</h2></div>
      <div class="sp-tabs engp-tabs">
        <a class="sp-tab is-active"><i data-icon="category"></i> Insights</a>
        <a class="sp-tab"><i data-icon="target"></i> Actions <span class="engp-tab-count">4</span></a>
      </div>
    </div>

    <div class="sp-body">

      <div class="engp-section">
        <h3 class="engp-section-title">What does &ldquo;Engagement&rdquo; mean?</h3>
        <p>Engagement is the degree to which your employees are inspired and energized by their work. It also refers to their positive connection to your organization. Engaged employees experience their work as meaningful and rewarding, are proud of their jobs, and feel that they fit in at the organization. They can go the extra mile because they love what they do and where they work. Your engagement score will tell you how enthusiastic your employees are about their work and how connected they feel to your organization.</p>
      </div>

      <div class="engp-section">
        <h3 class="engp-section-title">Engaged employees</h3>
        <p>The percentage of participants that are Disengaged, Potentials or Engaged. Participants are categorized based on their average scores on Engagement.</p>
        <div class="engp-dist">
          <div class="dist-ends">
            <span class="dist-end is-dis"><i data-icon="net-promoter-score-detractor"></i> Disengaged</span>
            <span class="dist-end is-eng">Engaged <i data-icon="net-promoter-score"></i></span>
          </div>
          <div class="dist-bar">
            <div class="dist-seg is-dis" style="width:${d.engpDist.dis}%">${d.engpDist.dis}%</div>
            <div class="dist-seg is-pot" style="width:${d.engpDist.pot}%">${d.engpDist.pot}%</div>
            <div class="dist-seg is-eng" style="width:${d.engpDist.eng}%">${d.engpDist.eng}%</div>
          </div>
        </div>
      </div>

      <div class="engp-section">
        <h3 class="engp-section-title">What are the results?</h3>
        <p>See how your group scored on &ldquo;Engagement&rdquo; in comparison to other groups.</p>
        <div class="engp-cards">${d.engpCards.map(engpCard).join('')}</div>
        <div class="engp-chart-card" style="margin-top: var(--spacing-base);">
          <div class="engp-chart-hd">Score over time <span class="engp-chart-dot"></span> ${d.groupName}</div>
          <div class="engp-chart-wrap"><canvas id="engp-chart" role="img" aria-label="Engagement score over time for ${d.groupName}"></canvas></div>
        </div>
      </div>

      <div class="engp-section">
        <div class="engp-section-head">
          <h3 class="engp-section-title" style="margin:0;">Theme questions</h3>
          <span class="engp-grouplbl">Group score</span>
        </div>
        <div>${d.engpTheme.map(themeRow).join('')}</div>
      </div>

      <div class="engp-section">
        <h3 class="engp-section-title"><i data-icon="correlation-positive"></i> Strongly correlating questions</h3>
        <p>Respondents who score high on Engagement also score high on the following questions:</p>
        <div style="margin-top:var(--spacing-base);">${d.engpCorr.map(corrRow).join('')}</div>
      </div>

    </div><!-- /sp-body -->
  </div><!-- /sidepanel -->
</div><!-- /overlay -->

<!-- Theme side panel (opens from a theme card's "View insights") -->
<div class="overlay is-right" id="thp-overlay" hidden>
  <div class="sidepanel" role="dialog" aria-modal="true" aria-labelledby="thp-title">
    <div class="sp-header">
      <div class="sp-toolbar"><div class="sp-actions"><i data-icon="cross" id="thp-close" role="button" tabindex="0" aria-label="Close"></i></div></div>
      <div class="sp-heading"><h2 class="sp-title" id="thp-title"></h2></div>
      <div class="sp-tabs engp-tabs">
        <a class="sp-tab is-active"><i data-icon="category"></i> Insights</a>
        <a class="sp-tab"><i data-icon="target"></i> Actions</a>
      </div>
    </div>
    <div class="sp-body">
      <div class="engp-section">
        <h3 class="engp-section-title" id="thp-mean-title"></h3>
        <p id="thp-desc"></p>
      </div>
      <div class="engp-section">
        <h3 class="engp-section-title">What are the results?</h3>
        <p id="thp-results-lead"></p>
        <div class="engp-cards" id="thp-cards"></div>
        <div class="engp-chart-card" style="margin-top: var(--spacing-base);">
          <div class="engp-chart-hd">Score over time <span class="engp-chart-dot"></span> <span id="thp-chart-grp"></span></div>
          <div class="engp-chart-wrap"><canvas id="thp-chart" role="img" aria-label="Theme score over time"></canvas></div>
        </div>
      </div>
      <div class="engp-section">
        <div class="engp-section-head">
          <h3 class="engp-section-title" style="margin:0;">Theme questions</h3>
          <span class="engp-grouplbl">Group score</span>
        </div>
        <div id="thp-questions"></div>
      </div>
    </div><!-- /sp-body -->
  </div><!-- /sidepanel -->
</div><!-- /overlay -->

<!-- eNPS side panel -->
<div class="overlay is-right" id="npsp-overlay" hidden>
  <div class="sidepanel" role="dialog" aria-modal="true" aria-labelledby="npsp-title">
    <div class="sp-header">
      <div class="sp-toolbar"><div class="sp-actions"><i data-icon="cross" id="npsp-close" role="button" tabindex="0" aria-label="Close"></i></div></div>
      <div class="sp-heading">
        <h2 class="sp-title" id="npsp-title">Employee net promoter score (eNPS)</h2>
        <p class="sp-subtitle">The eNPS shows you to what extent your employees would recommend your organization as a good employer.</p>
      </div>
      <div class="sp-tabs engp-tabs">
        <a class="sp-tab is-active"><i data-icon="category"></i> Insights</a>
        <a class="sp-tab"><i data-icon="pin"></i> Actions</a>
      </div>
    </div>

    <div class="sp-body">

      <div class="npsp-section">
        <h3 class="npsp-h">Your scores</h3>
        <p class="npsp-sub">This is how the calculation works.</p>
        <div class="npsp-calc">
          <div class="npsp-card is-passive">
            <span class="npsp-card-icon"><i data-icon="net-promoter-score-passive"></i></span>
            <span class="npsp-card-lbl">Passive</span>
            <span class="npsp-card-pct">${d.npsPassives}%</span>
            <span class="npsp-card-count"><i data-icon="user"></i> ${d.npsPassCount}</span>
          </div>
          <div class="npsp-divider"></div>
          <div class="npsp-card is-promoter">
            <span class="npsp-card-icon"><i data-icon="net-promoter-score"></i></span>
            <span class="npsp-card-lbl">Promoter</span>
            <span class="npsp-card-pct">${d.npsPromoters}%</span>
            <span class="npsp-card-count"><i data-icon="user"></i> ${d.npsPromCount}</span>
          </div>
          <div class="npsp-op"><span class="npsp-op-sign">–</span></div>
          <div class="npsp-card is-detractor">
            <span class="npsp-card-icon"><i data-icon="net-promoter-score-detractor"></i></span>
            <span class="npsp-card-lbl">Detractor</span>
            <span class="npsp-card-pct">${d.npsDetractors}%</span>
            <span class="npsp-card-count"><i data-icon="user"></i> ${d.npsDetrCount}</span>
          </div>
          <div class="npsp-op"><span class="npsp-op-sign">=</span></div>
          <div class="npsp-card is-result">
            <span class="npsp-card-lbl">eNPS</span>
            <span class="npsp-card-pct">${npsValue}</span>
          </div>
        </div>
      </div>

      <div class="npsp-section">
        <h3 class="npsp-h">Compare scores</h3>
        <p class="npsp-sub">Your score compared with the benchmarks.</p>
        <div class="npsp-bars">
          ${[
            { label: d.groupName,        val: npsValue,    group: true },
            { label: 'Previous survey',  val: d.npsPrev,   icon: 'rotate-backward' },
            { label: 'Benchmark',        val: d.npsBench,  icon: 'benchmark-up' },
            { label: 'Top 3 benchmark',  val: d.npsTop3,   icon: 'star' }
          ].map(npsBar).join('')}
        </div>
        <div class="npsp-axis">
          <span class="npsp-axis-line"></span><span class="npsp-axis-tick"></span>
          <span class="npsp-axis-lbl l">-100</span><span class="npsp-axis-lbl m">0</span><span class="npsp-axis-lbl r">100</span>
        </div>
      </div>

      <div class="npsp-section">
        <div class="npsp-qcard">
          <p class="npsp-q">&ldquo;How likely is it that you would recommend Novanta B.V. as an employer to others?&rdquo;</p>
          <div class="npsp-cells">${npsCells()}</div>
          <div class="npsp-legend">
            <span class="npsp-leg is-det"><span class="npsp-dot"></span>Detractors (1–6)</span>
            <span class="npsp-leg is-pas"><span class="npsp-dot"></span>Passives (7–8)</span>
            <span class="npsp-leg is-pro"><span class="npsp-dot"></span>Promoters (9–10)</span>
          </div>
        </div>
        <p class="npsp-note">Scores are based on global standards</p>
      </div>

      <div class="npsp-section">
        <h3 class="npsp-h">Score breakdown</h3>
        <div class="npsp-break">
          <div class="npsp-break-card">
            <span class="npsp-break-icon is-pro"><i data-icon="net-promoter-score"></i></span>
            <div class="npsp-break-body">
              <div class="npsp-break-title">Promoters: 9 to 10</div>
              <p class="npsp-break-desc">These most positive, motivated and satisfied employees are most likely to recommend your company to others.</p>
            </div>
          </div>
          <div class="npsp-break-card">
            <span class="npsp-break-icon is-pas"><i data-icon="net-promoter-score-passive"></i></span>
            <div class="npsp-break-body">
              <div class="npsp-break-title">Passives: 7 to 8</div>
              <p class="npsp-break-desc">These neutral employees are generally content, but not fully committed to your company. Their results are excluded from the eNPS calculation.</p>
            </div>
          </div>
          <div class="npsp-break-card">
            <span class="npsp-break-icon is-det"><i data-icon="net-promoter-score-detractor"></i></span>
            <div class="npsp-break-body">
              <div class="npsp-break-title">Detractors: 1 to 6</div>
              <p class="npsp-break-desc">These employees will not recommend your company to others and may be dissatisfied.</p>
            </div>
          </div>
        </div>
        <button class="btn btn-link npsp-learn">Learn why the eNPS is important <i data-icon="external-link"></i></button>
      </div>

    </div><!-- /sp-body -->
  </div><!-- /sidepanel -->
</div><!-- /overlay -->

${reportsDialogs()}
${scorePanel()}
`;
}

/* ---------- chart helpers ---------- */
const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
const rgba = (hex, a) => {
  const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
  return `rgba(${r},${g},${b},${a})`;
};
/* Shared "score over time" line chart — used by the engagement panel and the per-question
   panel so both look identical: angular line, content-base semibold axis labels with extra
   spacing, dashed blue grid, area gradient. */
const makeLineChart = (cv, labels, data, { max = 100, unit = '%' } = {}) => {
  const info = css('--bg-info-base');
  const gridBlue = css('--border-info-subtle');
  const tickFont = { family: 'Poppins', size: 12, weight: 600 };
  const areaFill = (context) => {
    const { ctx, chartArea } = context.chart;
    if (!chartArea) return rgba(info, 0.18);
    const g = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    g.addColorStop(0, rgba(info, 0.35));
    g.addColorStop(1, rgba(info, 0));
    return g;
  };
  return new Chart(cv, {
    type: 'line',
    data: { labels, datasets: [{ data, borderColor: info, borderWidth: 3, tension: 0, fill: true, backgroundColor: areaFill, pointBackgroundColor: info, pointBorderColor: css('--bg-base'), pointBorderWidth: 3, pointRadius: 7, pointHoverRadius: 7, clip: false }] },
    options: {
      responsive: true, maintainAspectRatio: false, layout: { padding: { top: 8, right: 12 } }, events: [],
      animation: { duration: 800, easing: 'easeOutQuart' }, plugins: { legend: { display: false }, tooltip: { enabled: false } },
      scales: {
        y: { min: 0, max, ticks: { stepSize: max / 2, color: css('--content-base'), font: tickFont, callback: (v) => v + unit, padding: 12 }, grid: { color: gridBlue, lineWidth: 1, borderDash: [5, 5], drawTicks: false }, border: { color: gridBlue } },
        x: { offset: false, ticks: { align: 'inner', color: css('--content-base'), font: tickFont, padding: 12 }, grid: { color: gridBlue, lineWidth: 1, borderDash: [5, 5], drawTicks: false }, border: { color: gridBlue } }
      }
    }
  });
};
const endDot = (colorVar, radius, lineWidth) => ({
  id: 'endDot',
  afterDatasetsDraw(chart) {
    const arc = chart.getDatasetMeta(0).data[0];
    if (!arc) return;
    const { ctx } = chart;
    const r = (arc.outerRadius + arc.innerRadius) / 2;
    const x = arc.x + Math.cos(arc.endAngle) * r;
    const y = arc.y + Math.sin(arc.endAngle) * r;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = css(colorVar);
    ctx.strokeStyle = css('--bg-base');
    ctx.lineWidth = lineWidth;
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
});
function gauge(id, pct, colorVar, opts) {
  new Chart(document.getElementById(id), {
    type: 'doughnut',
    data: { datasets: [{ data: [pct, 100 - pct], backgroundColor: [css(colorVar), css('--bg-tertiary')], borderWidth: 0, borderRadius: 999 }] },
    options: {
      rotation: 197.5, circumference: 325, cutout: opts.cutout, responsive: false, events: [],
      animation: { duration: 800, easing: 'easeOutQuart' },
      plugins: { legend: { display: false }, tooltip: { enabled: false } }
    },
    plugins: [endDot(colorVar, opts.dotRadius, opts.dotStroke)]
  });
}

/* ---------- render ---------- */
function renderOverview(variant, initialView) {
  const d = (window.translateData ? translateData(DATA[variant] || DATA['team-it-after']) : (DATA[variant] || DATA['team-it-after']));
  document.getElementById('root').innerHTML = shell(d);

  /* Charts — wait for Poppins so radar labels are not clipped */
  document.fonts.ready.then(() => {
    gauge('rr-chart', d.rrValue, '--bg-info-base', { cutout: '82%', dotRadius: 7, dotStroke: 2.5 });
    gauge('kpi-workload', d.kpiWorkload, '--bg-positive-base', { cutout: '80%', dotRadius: 4.5, dotStroke: 2 });
    gauge('kpi-retention', d.kpiRetention, '--bg-positive-base', { cutout: '80%', dotRadius: 4.5, dotStroke: 2 });
    gauge('kpi-wellbeing', d.kpiWellbeing, '--bg-info-base', { cutout: '80%', dotRadius: 4.5, dotStroke: 2 });

    /* eNPS donut */
    new Chart(document.getElementById('nps-chart'), {
      type: 'doughnut',
      data: {
        labels: ['Promoters', 'Passives', 'Detractors'],
        datasets: [{
          data: [d.npsPromoters, d.npsPassives, d.npsDetractors],
          backgroundColor: [css('--bg-distribution-agree'), css('--bg-distribution-neither-agree-disagree'), css('--bg-distribution-disagree')],
          borderWidth: 0
        }]
      },
      options: { rotation: 0, cutout: '82%', responsive: false, events: [], animation: { duration: 800, easing: 'easeOutQuart' }, plugins: { legend: { display: false }, tooltip: { enabled: false } } }
    });

    /* Themes radar */
    const swCur = css('--bg-results-current');
    const swPrev = css('--bg-results-previous');
    new Chart(document.getElementById('sw-chart'), {
      type: 'radar',
      data: {
        labels: ['Engagement', 'Diversity', 'Employer-ship', 'Customer focus', 'Alignment', 'Leadership'].map(s => window.tr ? tr(s) : s),
        datasets: [
          { label: 'Previous', data: d.swPrevious, backgroundColor: rgba(swPrev, 0.54), borderColor: swPrev, borderWidth: 1, pointBackgroundColor: css('--bg-base'), pointBorderColor: css('--border-highlight-base'), pointBorderWidth: 2, pointRadius: 5 },
          { label: 'Current', data: d.swCurrent, backgroundColor: rgba(swCur, 0.47), borderColor: swCur, borderWidth: 1, pointBackgroundColor: css('--bg-base'), pointBorderColor: css('--border-info-base'), pointBorderWidth: 2, pointRadius: 5 }
        ]
      },
      options: {
        responsive: false, events: ['mousemove', 'mouseout'], animation: { duration: 800, easing: 'easeOutQuart' },
        interaction: { mode: 'nearest', intersect: true },
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true, backgroundColor: css('--bg-inverse-base'), padding: 8, cornerRadius: 8, displayColors: false,
            titleFont: { family: 'Poppins', size: 12, weight: 600 }, bodyFont: { family: 'Poppins', size: 12, weight: 500 },
            callbacks: { title: (items) => items[0].label, label: (item) => `${item.dataset.label}: ${item.formattedValue}%` }
          }
        },
        scales: { r: { min: 0, max: 100, ticks: { display: false, stepSize: 25 }, grid: { color: css('--border-base') }, angleLines: { color: css('--border-base') }, pointLabels: { color: css('--content-base'), font: { family: 'Poppins', size: 12, weight: 500 } } } }
      }
    });

    /* Engagement panel: score over time (line) */
    const engLine = document.getElementById('engp-chart');
    if (engLine) makeLineChart(engLine, [d.prevDateTo, d.dateTo], d.engpLine.data.slice(-2), { max: 100, unit: '%' });
  });

  /* Panel open/close wiring */
  const wirePanel = (overlayId, closeId, cardSel) => {
    const overlay = document.getElementById(overlayId);
    const card = document.querySelector(cardSel);
    const open = () => { overlay.hidden = false; };
    const close = () => { overlay.hidden = true; };
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    document.getElementById(closeId).addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !overlay.hidden) close(); });
  };
  wirePanel('efp-overlay', 'efp-close', '.fx-card');
  wirePanel('engp-overlay', 'engp-close', '.eng-card');
  wirePanel('npsp-overlay', 'npsp-close', '.nps-card');

  /* Themes view: a theme card's "View insights" opens the theme side panel (same look as the engagement panel) */
  (function wireThemePanel() {
    const overlay = document.getElementById('thp-overlay');
    if (!overlay) return;
    const T2 = (s) => window.tr ? tr(s) : s;
    const g = groupKey(d), p = periodKey(d);
    let thChart = null;
    document.querySelectorAll('#view-themes .tc-link[data-theme]').forEach(btn => {
      btn.addEventListener('click', () => {
        const t = THEMES[+btn.dataset.theme];
        const current = t.v[g][p];
        const previous = p === 'after' ? t.v[g].before : null;
        document.getElementById('thp-title').textContent = T2(t.name);
        document.getElementById('thp-mean-title').textContent = T2('What does {theme} mean?').replace('{theme}', T2(t.name));
        document.getElementById('thp-desc').textContent = T2(t.desc);
        document.getElementById('thp-results-lead').textContent = T2('See how your group scored on this theme compared to other groups.');
        document.getElementById('thp-chart-grp').textContent = d.groupName;
        const cards = [
          { lbl: d.groupName, val: current + '%' },
          ...(previous != null ? [{ lbl: T2('Previous survey'), val: previous + '%' }] : []),
          { lbl: T2('Effectory Index'), val: t.bench + '%' }
        ];
        document.getElementById('thp-cards').innerHTML = cards.map(c => `<div class="engp-card-item"><div class="engp-card-lbl">${c.lbl}</div><div class="engp-card-val">${c.val}</div></div>`).join('');
        document.getElementById('thp-questions').innerHTML = (t.questions || []).map(r => `<div class="engp-q-row"><span class="engp-q-text">${T2(r.q)}</span><span class="engp-q-score">${r.s}</span></div>`).join('');
        overlay.hidden = false;
        if (window.Icons) window.Icons.render(overlay);
        /* build the chart only once the panel is visible so the canvas has a measured size */
        if (thChart) { thChart.destroy(); thChart = null; }
        const labels = previous != null ? [d.prevDateTo, d.dateTo] : [d.dateTo];
        const series = previous != null ? [previous, current] : [current];
        requestAnimationFrame(() => { thChart = makeLineChart(document.getElementById('thp-chart'), labels, series, { max: 100, unit: '%' }); });
      });
    });
    const close = () => { overlay.hidden = true; };
    document.getElementById('thp-close').addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !overlay.hidden) close(); });
  })();

  /* Effectiveness panel: Matrix / List segmented control + list accordions */
  const segBtns = document.querySelectorAll('#efp-overlay .segctl-btn');
  const mView = document.getElementById('efp-view-matrix');
  const lView = document.getElementById('efp-view-list');
  segBtns.forEach((b) => b.addEventListener('click', () => {
    segBtns.forEach((x) => x.classList.remove('is-active'));
    b.classList.add('is-active');
    const isList = b.dataset.seg === 'list';
    if (mView) mView.hidden = isList;
    if (lView) lView.hidden = !isList;
  }));
  document.querySelectorAll('#efp-view-list .efp-acc-hd').forEach((hd) => {
    hd.addEventListener('click', () => hd.closest('.efp-acc').classList.toggle('is-open'));
  });

  /* Comparisons filter dropdown (effectiveness panel) */
  const cmpBtn = document.getElementById('efp-cmp-btn');
  const cmpMenu = document.getElementById('efp-filter');
  const cmpCount = document.getElementById('efp-cmp-count');
  if (cmpBtn && cmpMenu) {
    const applyFilter = () => {
      let n = 0;
      cmpMenu.querySelectorAll('input.cb').forEach(b => {
        if (b.checked) n++;
        document.querySelectorAll('.efp-marker.' + b.dataset.variant)
          .forEach(el => { el.style.display = b.checked ? '' : 'none'; });
      });
      cmpCount.textContent = n + ' ' + (window.tr ? tr('selected') : 'selected');
    };
    cmpBtn.addEventListener('click', (e) => { e.stopPropagation(); cmpMenu.hidden = !cmpMenu.hidden; });
    cmpMenu.addEventListener('click', (e) => e.stopPropagation());
    cmpMenu.querySelectorAll('input.cb').forEach(b => b.addEventListener('change', applyFilter));
    document.addEventListener('click', () => { cmpMenu.hidden = true; });
    applyFilter();
  }

  /* Overview ↔ Focus View tab switching */
  const viewTabs = document.querySelectorAll('.tab[data-view]');
  const views = {
    overview: document.getElementById('view-overview'),
    focus: document.getElementById('view-focus'),
    themes: document.getElementById('view-themes'),
    reports: document.getElementById('view-reports'),
    scores: document.getElementById('view-scores')
  };
  viewTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const v = tab.dataset.view;
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      Object.entries(views).forEach(([k, el]) => { if (el) el.hidden = (k !== v); });
      document.querySelector('.overview-wrap')?.classList.toggle('is-full', v === 'scores');
      document.querySelector('.main-scroll').scrollTop = 0;
      /* keep the URL in sync with the active view (no reload) */
      const path = location.pathname.replace(/(overview|focus|themes|reports|scores)(\.html)?$/, (m, _g1, ext) => v + (ext || ''));
      if (path !== location.pathname) history.replaceState(null, '', path + location.search + location.hash);
    });
  });

  /* Open directly on a given view (e.g. shared Focus View / Reports link) */
  if (initialView === 'focus' || (typeof location !== 'undefined' && location.hash === '#focus')) {
    const ft = document.querySelector('.tab[data-view="focus"]');
    if (ft) ft.click();
  } else if (initialView === 'themes') {
    const tt = document.querySelector('.tab[data-view="themes"]');
    if (tt) tt.click();
  } else if (initialView === 'reports') {
    const rt = document.querySelector('.tab[data-view="reports"]');
    if (rt) rt.click();
  } else if (initialView === 'scores') {
    const st = document.querySelector('.tab[data-view="scores"]');
    if (st) st.click();
  }

  /* Header filter: toggle between team level (Team IT) and organization level (Novanta),
     keeping the survey period (before/after) and the active view (overview/focus). */
  const hdrFilter = document.getElementById('hdr-filter');
  if (hdrFilter) {
    hdrFilter.addEventListener('click', () => {
      const period = variant.endsWith('-before') ? 'before' : 'after';
      const group = variant.startsWith('novanta') ? 'team-it' : 'novanta';
      const activeTab = document.querySelector('.tab.is-active[data-view]');
      const view = activeTab ? activeTab.dataset.view : 'overview';
      location.href = `${group}-${period}-${view}.html`;
    });
  }

  /* Survey name / date range: switch survey period (Q2 <-> Q3), keeping group + view */
  const switchPeriod = () => {
    const group = variant.startsWith('novanta') ? 'novanta' : 'team-it';
    const targetPeriod = variant.endsWith('-before') ? 'after' : 'before';
    const activeTab = document.querySelector('.tab.is-active[data-view]');
    const view = activeTab ? activeTab.dataset.view : 'overview';
    location.href = `${group}-${targetPeriod}-${view}.html`;
  };
  document.querySelector('.results-title')?.addEventListener('click', switchPeriod);
  document.querySelector('.date-range')?.addEventListener('click', switchPeriod);

  /* Focus View: 'Explore' and the glance matrix open the effectiveness side panel */
  document.querySelectorAll('#view-focus .fv-explore, #view-focus .fv-glance-matrix').forEach(el => {
    el.addEventListener('click', () => { document.getElementById('efp-overlay').hidden = false; });
  });

  /* Focus View: the eNPS stat pill opens the eNPS side panel */
  document.querySelectorAll('#view-focus .fv-nps-pill').forEach(el => {
    const open = () => { document.getElementById('npsp-overlay').hidden = false; };
    el.addEventListener('click', open);
    el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });

  /* Focus View: 'Why these …?' opens an explainer dialog */
  document.querySelectorAll('#view-focus .fv-why').forEach(el => {
    el.addEventListener('click', () => { const ov = document.getElementById(el.dataset.dialog); if (ov) ov.hidden = false; });
  });
  ['fa-dialog', 'wins-dialog'].forEach(id => {
    const ov = document.getElementById(id);
    if (!ov) return;
    const close = () => { ov.hidden = true; };
    ov.querySelector('.dialog-close').addEventListener('click', close);
    ov.querySelector('.dialog-footer .btn-primary').addEventListener('click', close);
    ov.addEventListener('click', (e) => { if (e.target === ov) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !ov.hidden) close(); });
  });

  /* Focus View: picking an approach reveals a recommended-action card */
  document.querySelectorAll('#view-focus .fv-card').forEach(card => {
    const reco = card.querySelector('.fv-reco');
    if (!reco) return;
    card.querySelectorAll('.rb-btn-bordered').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.preventDefault();
        const input = chip.querySelector('input.rb');
        if (input) input.checked = true;
        card.querySelectorAll('.rb-btn-bordered').forEach(c => c.classList.toggle('is-checked', c === chip));
        card.classList.add('is-active');
        const T2 = (s) => window.tr ? tr(s) : s;
        const byItem = RECO[card.dataset.q];
        const r = byItem && byItem[chip.dataset.appr];
        if (!r) { reco.hidden = true; return; }
        reco.querySelector('.fv-reco-eyebrow').textContent = T2(chip.dataset.appr);
        reco.querySelector('.fv-reco-title').textContent = T2(r.title);
        reco.querySelector('.fv-reco-body').textContent = T2(r.body);
        reco.hidden = false;
      });
    });
  });

  /* Reports view: language picker → generate → download / notify */
  (function wireReports() {
    const t = (s) => window.tr ? tr(s) : s;
    const langScrim = document.getElementById('lang-scrim');
    if (!langScrim) return;
    const RAW_GEN_MS = 30000, QUICK_GEN_MS = 800, LONGER_HINT_MS = 10000;
    const langRows = langScrim.querySelectorAll('.lang-row');
    const langBtn = langScrim.querySelector('.btn-primary');
    const genScrim = document.getElementById('gen-scrim');
    const genTitle = document.getElementById('gen-title');
    const genSubtitle = document.getElementById('gen-subtitle');
    const genSub = document.getElementById('gen-sub');
    const genPanel = document.getElementById('gen-panel');
    const genLonger = document.getElementById('gen-longer');
    const toast = document.getElementById('ready-toast');
    const readyTitle = document.getElementById('ready-title');
    let longerTimer = null, current = null;
    const COPY = {
      genTitle: t('Generating report'),
      genBody: t('We are working hard to generate your file, please wait, your file will be downloaded once finished.'),
      doneTitle: t('Your report is ready'),
      doneBody: t('Your download will start automatically.')
    };
    const rowState = (row) => { if (!row._gen) row._gen = { generating: [], ready: [] }; return row._gen; };
    const updateRowLabel = (row) => {
      const label = row.querySelector('.report-gen-label'); if (!label) return;
      const g = rowState(row).generating;
      label.textContent = g.length > 1
        ? t('Generating in {count} languages').replace('{count}', g.length)
        : t('Generating in {lang}').replace('{lang}', g[0] || '');
    };
    const selectedLanguage = () => { const s = langScrim.querySelector('.lang-row.is-selected'); return (s && s.dataset.lang) || 'English (US)'; };
    const updateLangButton = () => { if (current) langBtn.textContent = rowState(current.row).ready.indexOf(selectedLanguage()) !== -1 ? t('Download') : t('Generate'); };
    const refreshLangDialog = () => {
      const s = rowState(current.row);
      langRows.forEach((lr) => {
        const lang = lr.dataset.lang, old = lr.querySelector('.lang-status');
        if (old) old.remove();
        lr.classList.remove('is-busy');
        const radio = lr.querySelector('input'); radio.disabled = false;
        if (s.generating.indexOf(lang) !== -1) {
          lr.classList.add('is-busy'); radio.disabled = true;
          const st = document.createElement('span'); st.className = 'lang-status';
          st.innerHTML = '<span class="gen-spinner gen-spinner-sm"></span> ' + t('Generating…');
          lr.appendChild(st);
        } else if (s.ready.indexOf(lang) !== -1) {
          const st2 = document.createElement('span'); st2.className = 'lang-status is-ready';
          st2.textContent = t('Generated'); lr.appendChild(st2);
        }
      });
      const sel = langScrim.querySelector('.lang-row.is-selected');
      if (!sel || sel.classList.contains('is-busy')) {
        langRows.forEach((r) => { r.classList.remove('is-selected'); r.querySelector('input').checked = false; });
        const firstFree = [].slice.call(langRows).filter((r) => !r.classList.contains('is-busy'))[0];
        if (firstFree) { firstFree.classList.add('is-selected'); firstFree.querySelector('input').checked = true; }
      }
      updateLangButton();
    };
    const openLang = (row) => {
      current = { row, name: row.querySelector('.report-name').textContent.trim(), isRaw: row.dataset.raw === 'true' };
      document.getElementById('lang-sub').textContent = t('Download “{report}” in the language you select below').replace('{report}', current.name);
      refreshLangDialog();
      langScrim.hidden = false;
    };
    const closeLang = () => { langScrim.hidden = true; };
    const closeGen = () => { genScrim.hidden = true; if (longerTimer) { clearTimeout(longerTimer); longerTimer = null; } genLonger.classList.remove('is-shown'); };
    const showLonger = () => { longerTimer = null; if (genScrim.hidden || genPanel.classList.contains('is-done')) return; genLonger.classList.add('is-shown'); };
    const openGenDialog = (ready, lang) => {
      genSub.textContent = lang || t('In your selected language');
      genLonger.classList.remove('is-shown');
      genTitle.textContent = ready ? COPY.doneTitle : COPY.genTitle;
      genSubtitle.textContent = ready ? COPY.doneBody : COPY.genBody;
      genPanel.classList.toggle('is-done', !!ready);
      genScrim.hidden = false;
    };
    const showToast = (name, lang) => {
      readyTitle.textContent = t('{report} is ready to download in {lang}').replace('{report}', name).replace('{lang}', lang);
      toast.hidden = false;
    };
    const scheduleGeneration = (row, name, lang, isRaw) => {
      setTimeout(() => {
        const s = rowState(row), i = s.generating.indexOf(lang);
        if (i !== -1) s.generating.splice(i, 1);
        if (s.ready.indexOf(lang) === -1) s.ready.push(lang);
        if (s.generating.length === 0) row.classList.remove('is-generating'); else updateRowLabel(row);
        if (!genScrim.hidden && current && current.row === row) {
          genPanel.classList.add('is-done');
          genTitle.textContent = COPY.doneTitle; genSubtitle.textContent = COPY.doneBody;
          if (longerTimer) { clearTimeout(longerTimer); longerTimer = null; }
          genLonger.classList.remove('is-shown');
        } else { showToast(name, lang); }
      }, isRaw ? RAW_GEN_MS : QUICK_GEN_MS);
    };
    document.querySelectorAll('#view-reports .report-row').forEach((row) => {
      if (!row.querySelector('.report-gen')) {
        const gen = document.createElement('span'); gen.className = 'report-gen';
        gen.innerHTML = '<span class="report-gen-label">' + t('Generating…') + '</span><span class="report-gen-icon"><span class="gen-spinner gen-spinner-sm"></span></span>';
        row.appendChild(gen);
      }
      row.addEventListener('click', () => openLang(row));
    });
    langBtn.addEventListener('click', () => {
      if (!current) return;
      const row = current.row, name = current.name, isRaw = current.isRaw, lang = selectedLanguage(), s = rowState(row);
      closeLang();
      if (s.ready.indexOf(lang) !== -1) { openGenDialog(true, lang); return; }
      if (s.generating.indexOf(lang) === -1) { s.generating.push(lang); row.classList.add('is-generating'); updateRowLabel(row); scheduleGeneration(row, name, lang, isRaw); }
      openGenDialog(false, lang);
      if (longerTimer) { clearTimeout(longerTimer); longerTimer = null; }
      if (isRaw) longerTimer = setTimeout(showLonger, LONGER_HINT_MS);
    });
    document.getElementById('lang-close').addEventListener('click', closeLang);
    document.getElementById('lang-cancel').addEventListener('click', closeLang);
    langScrim.addEventListener('click', (e) => { if (e.target === langScrim) closeLang(); });
    document.getElementById('gen-close').addEventListener('click', closeGen);
    document.getElementById('gen-close-btn').addEventListener('click', closeGen);
    genScrim.addEventListener('click', (e) => { if (e.target === genScrim) closeGen(); });
    document.addEventListener('keydown', (e) => { if (e.key !== 'Escape') return; if (!genScrim.hidden) closeGen(); else if (!langScrim.hidden) closeLang(); });
    langRows.forEach((row) => { row.addEventListener('change', () => { langRows.forEach((r) => r.classList.remove('is-selected')); row.classList.add('is-selected'); updateLangButton(); }); });
    document.getElementById('ready-close').addEventListener('click', () => { toast.hidden = true; });
    document.getElementById('ready-download').addEventListener('click', () => { toast.hidden = true; });
  })();

  /* Scores view: collapsible groups + live search filter */
  (function wireScores() {
    const table = document.getElementById('view-scores');
    if (!table) return;
    /* one continuous frozen-column divider — CSS sticky pins it natively (no scroll lag);
       its height tracks the full table content via a negative margin so it adds no flow space */
    const scTable = table.querySelector('.sc-table');
    if (scTable) {
      const line = document.createElement('div');
      line.className = 'sc-frozen-line';
      scTable.insertBefore(line, scTable.firstChild);
      const fit = () => { const h = scTable.scrollHeight; line.style.height = h + 'px'; line.style.marginBottom = (-h) + 'px'; };
      fit();
      if (window.ResizeObserver) new ResizeObserver(fit).observe(scTable);
      scTable.addEventListener('scroll', () => { scTable.classList.toggle('is-scrolled', scTable.scrollLeft > 0); });
    }
    table.querySelectorAll('.sc-head-title').forEach(btn => {
      btn.addEventListener('click', () => {
        const g = btn.closest('.sc-group');
        g.dataset.open = g.dataset.open === 'true' ? 'false' : 'true';
      });
    });
    /* Legend numbers reflect the scale of the row you hover: 0–100 (%) by default,
       0–10 score thresholds (±1.5 / ±0.7) while hovering a 0–10 question. */
    const legend = table.querySelector('.sc-legend');
    if (legend) {
      const PCT = { 'is-vpos': '+20%', 'is-pos': '+10%', 'is-neg': '-10%', 'is-vneg': '-20%' };
      const TEN = { 'is-vpos': '+1.5', 'is-pos': '+0.7', 'is-neg': '-0.7', 'is-vneg': '-1.5' };
      const setLegend = (map) => Object.keys(map).forEach(k => { const e = legend.querySelector('.sc-legend-sw.' + k); if (e) e.textContent = map[k]; });
      /* Animate the swap: drop the bar below the fold, swap the numbers, slide it back up. */
      let swapTimer = null;
      legend.dataset.lscale = 'pct';
      const swapLegend = (key, map) => {
        if (legend.dataset.lscale === key) return;   // already showing this scale — no animation
        legend.dataset.lscale = key;
        legend.classList.add('is-swapping');
        clearTimeout(swapTimer);
        swapTimer = setTimeout(() => { setLegend(map); legend.classList.remove('is-swapping'); }, 160);
      };
      /* The legend reflects the scale of the question you hover, and only changes when you
         hover a question of a different scale — it stays put when you leave a row. A short
         hover-intent delay avoids swapping while you just scroll/skim past rows. */
      let hoverTimer = null;
      table.querySelectorAll('.sc-row').forEach(row => {
        const ten = row.dataset.scale === '10';
        row.addEventListener('mouseenter', () => {
          clearTimeout(hoverTimer);
          hoverTimer = setTimeout(() => swapLegend(ten ? 'ten' : 'pct', ten ? TEN : PCT), 250);
        });
        row.addEventListener('mouseleave', () => clearTimeout(hoverTimer));
      });
    }

    const search = table.querySelector('.sc-search-input');
    if (search) {
      search.addEventListener('input', () => {
        const term = search.value.trim().toLowerCase();
        table.querySelectorAll('.sc-group').forEach(g => {
          let any = false;
          g.querySelectorAll('.sc-row').forEach(row => {
            const match = row.querySelector('.sc-q').textContent.toLowerCase().includes(term);
            row.hidden = !match;
            if (match) any = true;
          });
          g.hidden = !any;
        });
      });
    }

    /* Comparisons popover: open it, drill into Segments, apply the Age segment */
    const cmpBtn = document.getElementById('sc-cmp-btn');
    const pop = document.getElementById('sc-cmp-pop');
    if (cmpBtn && pop) {
      const showView = (v) => pop.querySelectorAll('.sc-pop-view').forEach(pv => { pv.hidden = pv.dataset.cmpview !== v; });
      cmpBtn.addEventListener('click', (e) => { e.stopPropagation(); pop.hidden = !pop.hidden; if (!pop.hidden) showView('main'); });
      pop.addEventListener('click', (e) => e.stopPropagation());
      document.addEventListener('click', () => { pop.hidden = true; });
      pop.querySelector('[data-cmpgoto="segments"]')?.addEventListener('click', () => showView('segments'));
      pop.querySelector('#sc-cmp-back')?.addEventListener('click', () => showView('main'));
      /* applying the Age segment adds the age columns to the table */
      const ageCb = document.getElementById('sc-seg-age-cb');
      const ageSeg = pop.querySelector('.sc-seg[data-seg="age"]');
      const ageCats = ageSeg ? ageSeg.querySelectorAll('.sc-seg-cat .cb') : [];
      const cmpCount = document.getElementById('sc-cmp-count');
      const segApplied = document.getElementById('sc-seg-applied');
      const T3 = (s) => window.tr ? tr(s) : s;
      const quickChips = pop.querySelectorAll('.sc-quick-chip');
      /* "X selected" = active quick comparisons + the Age segment when applied */
      const recomputeCount = () => {
        const active = pop.querySelectorAll('.sc-quick-chip.is-active').length + (ageCb && ageCb.checked ? 1 : 0);
        cmpCount.textContent = T3('{n} selected').replace('{n}', String(active));
      };
      const hideAgeCol = (key, hidden) => {
        table.querySelectorAll(`[data-age="${key}"]`).forEach(el => { el.style.display = hidden ? 'none' : ''; });
      };
      const applyAge = () => {
        const on = ageCb.checked;
        table.classList.toggle('seg-age', on);
        ageSeg.classList.toggle('is-selected', on);
        if (on) ageSeg.classList.add('is-open');
        ageCats.forEach(c => { c.checked = on; if (c.dataset.cat) hideAgeCol(c.dataset.cat, !on); });   /* sub-categories follow the crossing */
        segApplied.textContent = T3('{n} applied').replace('{n}', on ? '1' : '0');
        recomputeCount();
      };
      ageCb?.addEventListener('change', applyAge);
      /* quick comparisons toggle their column in the table on/off */
      const setColVisible = (col, vis) => { table.querySelectorAll(`[data-col="${col}"]`).forEach(el => { el.style.display = vis ? 'flex' : 'none'; }); };
      quickChips.forEach(chip => {
        if (chip.dataset.qcol) setColVisible(chip.dataset.qcol, chip.classList.contains('is-active'));   /* initial state */
        chip.addEventListener('click', () => {
          chip.classList.toggle('is-active');
          if (chip.dataset.qcol) setColVisible(chip.dataset.qcol, chip.classList.contains('is-active'));
          recomputeCount();
        });
      });
      /* a single sub-category toggles just its own column in the scores table */
      ageCats.forEach(c => c.addEventListener('change', () => {
        if (c.dataset.cat) hideAgeCol(c.dataset.cat, !c.checked);
      }));
      /* expand/collapse a segment by clicking its title; opening Age auto-selects it + all categories */
      pop.querySelectorAll('.sc-seg-title').forEach(t => t.addEventListener('click', () => {
        const seg = t.closest('.sc-seg');
        const opening = !seg.classList.contains('is-open');
        seg.classList.toggle('is-open');
        if (opening && seg.dataset.seg === 'age' && ageCb && !ageCb.checked) { ageCb.checked = true; applyAge(); }
      }));
    }
  })();

  /* Per-question side panel: open from a Scores row, populate, draw the chart */
  (function wireScorePanel() {
    const scp = document.getElementById('scp-overlay');
    if (!scp) return;
    const T2 = (s) => window.tr ? tr(s) : s;
    let scpChart = null;
    const clamp = (v, max) => Math.max(0, Math.min(max, v));
    const open = (row) => {
      /* The eNPS question has its own dedicated side panel */
      if (row.dataset.enps) { const np = document.getElementById('npsp-overlay'); if (np) np.hidden = false; return; }
      const q = row.dataset.q;
      const scale = row.dataset.scale === '10' ? '10' : '%';
      const max = scale === '10' ? 10 : 100;
      const group = parseFloat(row.dataset.group);
      const bench = parseFloat(row.dataset.bench);
      const org = row.dataset.org !== '' ? parseFloat(row.dataset.org) : group;
      const fmtv = (v) => scale === '10' ? Number(v).toFixed(1) : Math.round(v) + '%';
      document.getElementById('scp-title').textContent = T2(q);
      /* distribution — always a 5-point scale; the two "agree" buckets sum to the score */
      const agreeTotal = Math.round(scale === '10' ? group * 10 : group);
      const sAgree = Math.round(agreeTotal * 0.65);
      const agree = agreeTotal - sAgree;
      const rest = 100 - agreeTotal;
      const sDis = Math.round(rest * 0.25);
      const disagree = Math.round(rest * 0.40);
      const neutral = rest - sDis - disagree;
      const segs = [
        { cls: 'is-sdis', v: sDis }, { cls: 'is-disagree', v: disagree }, { cls: 'is-neutral', v: neutral },
        { cls: 'is-agree', v: agree }, { cls: 'is-sagree', v: sAgree }
      ];
      document.getElementById('scp-dist-bar').innerHTML = segs.map(s => `<div class="dist-seg ${s.cls}" style="width:${s.v}%">${s.v >= 12 ? s.v + '%' : ''}</div>`).join('');
      const br = document.getElementById('scp-agree-bracket');
      br.style.width = agreeTotal + '%';
      document.getElementById('scp-agree-lbl').textContent = T2('{n}% agree with this statement').replace('{n}', agreeTotal);
      /* comparison cards — skip "Organization score" when the group already IS the organization (Novanta) */
      const cards = [{ lbl: d.groupName, val: fmtv(group) }];
      if (groupKey(d) !== 'novanta') cards.push({ lbl: T2('Organization score'), val: fmtv(org) });
      cards.push({ lbl: T2('Benchmark'), val: fmtv(bench) });
      document.getElementById('scp-cards').innerHTML = cards.map(c => `<div class="engp-card-item"><div class="engp-card-lbl">${c.lbl}</div><div class="engp-card-val">${c.val}</div></div>`).join('');
      document.getElementById('scp-chart-grp').textContent = d.groupName;
      /* theme section (only if the question belongs to a theme) */
      const theme = QUESTION_THEME[q];
      const sec = document.getElementById('scp-theme-section');
      if (theme) {
        sec.hidden = false;
        const g = groupKey(d), p = periodKey(d);
        document.getElementById('scp-theme-tag').textContent = T2(theme);
        document.getElementById('scp-theme-rows').innerHTML = PANEL_THEMES[theme].map(x =>
          `<div class="engp-q-row"><span class="engp-q-text">${T2(x.q)}</span><span class="engp-q-score">${x.v[g][p]}%</span></div>`).join('');
      } else { sec.hidden = true; }
      /* Tips & Best practices tab content */
      const tip = TIPS[q];
      const tipsUl = document.getElementById('scp-tips'), bpEl = document.getElementById('scp-bp');
      if (tip) {
        tipsUl.innerHTML = tip.tips.map(t => `<li>${T2(t)}</li>`).join('');
        bpEl.textContent = T2(tip.bp);
      } else {
        tipsUl.innerHTML = `<li>${T2('No tips available for this question yet.')}</li>`;
        bpEl.textContent = '';
      }
      /* always open on the Insights tab */
      scp.querySelectorAll('.sp-tab').forEach(t => t.classList.toggle('is-active', t.dataset.scptab === 'insights'));
      scp.querySelectorAll('.scp-tabpanel').forEach(pn => { pn.hidden = pn.dataset.scptab !== 'insights'; });
      scp.hidden = false;
      /* align the agree bracket to the real left edge of the "agree" segment (gaps make the %-width imprecise) */
      (() => {
        const bar = document.getElementById('scp-dist-bar');
        const ag = bar.querySelector('.is-agree') || bar.querySelector('.is-sagree');
        if (ag) { const bR = bar.getBoundingClientRect(), aR = ag.getBoundingClientRect(); br.style.width = Math.max(0, Math.round(bR.right - aR.left)) + 'px'; }
      })();
      /* score-over-time chart */
      if (scpChart) { scpChart.destroy(); scpChart = null; }
      /* Only the current survey and (if present) the previous survey, labelled by end date */
      const hasPrev = row.dataset.prev != null;
      const labels = hasPrev ? [d.prevDateTo, d.dateTo] : [d.dateTo];
      const series = (hasPrev ? [parseFloat(row.dataset.prev), group] : [group]).map(v => clamp(v, max));
      scpChart = makeLineChart(document.getElementById('scp-chart'), labels, series, { max, unit: scale === '10' ? '' : '%' });
    };
    document.querySelectorAll('#view-scores .sc-row').forEach(row => {
      row.querySelector('.sc-q')?.addEventListener('click', () => open(row));
      row.querySelector('.sc-insights')?.addEventListener('click', (e) => { e.stopPropagation(); open(row); });
    });
    /* Tab switching inside the panel (Insights / Tips & Best practices / Actions) */
    scp.querySelectorAll('.sp-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const t = tab.dataset.scptab;
        scp.querySelectorAll('.sp-tab').forEach(x => x.classList.toggle('is-active', x === tab));
        scp.querySelectorAll('.scp-tabpanel').forEach(pn => { pn.hidden = pn.dataset.scptab !== t; });
      });
    });
    const closeScp = () => { scp.hidden = true; };
    document.getElementById('scp-close').addEventListener('click', closeScp);
    scp.addEventListener('click', (e) => { if (e.target === scp) closeScp(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !scp.hidden) closeScp(); });
  })();

  /* AI summary show more / less */
  const aiSummary = document.getElementById('ai-summary');
  const aiToggle = document.getElementById('ai-toggle');
  aiToggle.addEventListener('click', () => {
    const open = aiSummary.classList.toggle('is-open');
    aiToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  /* Translate the fixed UI text (nav, tabs, headings, buttons …) */
  if (window.translateDOM) translateDOM(document.getElementById('root'));

  /* Language popover (click the user's name in the sidebar) */
  const userBtn = document.getElementById('mn-user-btn');
  const langPop = document.getElementById('lang-pop');
  if (userBtn && langPop) {
    langPop.querySelectorAll('.lang-opt').forEach(b => {
      b.classList.toggle('is-active', b.dataset.lang === (window.LANG || 'en'));
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        if (window.setLang) setLang(b.dataset.lang);
        const av = document.querySelector('.tab.is-active[data-view]');
        renderOverview(variant, av ? av.dataset.view : 'overview');
      });
    });
    userBtn.addEventListener('click', (e) => { e.stopPropagation(); langPop.hidden = !langPop.hidden; });
    document.addEventListener('click', () => { langPop.hidden = true; });
  }

  /* Icons */
  if (window.Icons) Icons.render(document);
}

/* ---------- Tooltip auto-position ----------
   Render the bubble in a fixed layer so no overflow:hidden ancestor (cards,
   scroll containers) can clip it. Delegated on document so it survives the
   in-place re-renders of #root. On hover/focus: measure the trigger, pick the
   first direction that fits (preferred side first, then above > below > right
   > left), and place the bubble with position:fixed, clamped to the viewport.
   See design-system-reference.md → Tooltip. */
(function () {
  const GAP = 10, PAD = 8;
  const place = (demo) => {
    const tip = demo.querySelector('.tooltip');
    if (!tip) return;
    tip.style.position = 'fixed';
    tip.style.margin = '0';
    tip.style.transform = 'none';
    tip.style.left = '0';
    tip.style.top = '0';
    tip.style.right = 'auto';
    tip.style.bottom = 'auto';
    tip.style.height = 'auto';
    const t = demo.getBoundingClientRect();
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    const vw = window.innerWidth, vh = window.innerHeight;
    const pref = tip.classList.contains('is-below') ? 'below'
      : tip.classList.contains('is-left') ? 'left'
      : tip.classList.contains('is-right') ? 'right' : 'above';
    const fits = {
      above: t.top - th - GAP >= PAD,
      below: t.bottom + th + GAP <= vh - PAD,
      left:  t.left - tw - GAP >= PAD,
      right: t.right + tw + GAP <= vw - PAD
    };
    const dir = [pref, 'above', 'below', 'right', 'left'].find(d => fits[d]) || pref;
    let x, y;
    if (dir === 'above')      { x = t.left + t.width / 2 - tw / 2; y = t.top - th - GAP; }
    else if (dir === 'below') { x = t.left + t.width / 2 - tw / 2; y = t.bottom + GAP; }
    else if (dir === 'left')  { x = t.left - tw - GAP; y = t.top + t.height / 2 - th / 2; }
    else                      { x = t.right + GAP; y = t.top + t.height / 2 - th / 2; }
    tip.style.left = Math.max(PAD, Math.min(x, vw - tw - PAD)) + 'px';
    tip.style.top = Math.max(PAD, Math.min(y, vh - th - PAD)) + 'px';
    tip.classList.remove('is-above', 'is-below', 'is-left', 'is-right');
    tip.classList.add('is-' + dir);
  };
  const onEnter = (e) => {
    const demo = e.target.closest && e.target.closest('.tt-demo');
    if (demo) place(demo);
  };
  document.addEventListener('mouseover', onEnter);
  document.addEventListener('focusin', onEnter);
})();

  