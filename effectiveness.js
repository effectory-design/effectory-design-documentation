/* ============================================================
   Effectiveness group comparison — shared overview renderer
   One template + per-variant DATA. before.html / after.html call
   renderOverview('before' | 'after'). No structural duplication.
   ============================================================ */

/* ---------- per-variant data ---------- */
const DATA = {
  before: {
    dateFrom: '22 Apr 2026', dateTo: '22 May 2026',
    /* AI summary */
    aiIntro: "The IT team’s results indicate several challenges impacting overall effectiveness and employee experience. Engagement (56%) and retention (57%) are below desired levels, suggesting employees may feel disconnected from the organization and uncertain about their long-term future within the team. Workload scores are particularly low at 38%, highlighting concerns around capacity, prioritization, and sustainable ways of working. While the eNPS score of 12 remains positive, it indicates only moderate advocacy and suggests there is significant room for improvement in employee satisfaction and loyalty.",
    aiMore: ["As the team falls within the ineffective quadrant, focused action is required to address workload pressures, strengthen leadership support, and improve employee engagement. Creating greater clarity around priorities, improving resource allocation, and increasing opportunities for employee feedback may help rebuild trust and team effectiveness."],
    aiStrengths: [
      "eNPS remains positive at 12, indicating that a portion of employees are still willing to recommend the organization as a place to work.",
      "Retention sentiment (57%) suggests that more than half of employees currently see themselves remaining with the organization."
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
      { variant: 'is-org',     chip: 'is-chip-above', icon: 'building', label: 'Novanta', x: 72, y: 76 },
      { variant: 'is-current', chip: 'is-chip-above', icon: 'group',    label: 'Team IT', x: 26, y: 26 }
    ],

    /* Engagement card */
    engValue: '56%', engTrend: '11%', engTrendIcon: 'Trend-up', engBench: '70%', engBenchW: 70,

    /* eNPS */
    npsPromoters: 42, npsPassives: 28, npsDetractors: 30,
    npsPromCount: 237, npsPassCount: 158, npsDetrCount: 170,

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
      { q: 'I know how to carry out my tasks', s: 43 },
      { q: 'I receive enough feedback on my work', s: 51 },
      { q: 'I am satisfied with my work', s: 52 },
      { q: 'We honour agreements in our team', s: 54 },
      { q: 'I see ample opportunities to develop further', s: 60 }
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
      { variant: 'is-peer',    icon: 'building', label: 'Finance Operations',    x: 33, y: 82 },
      { variant: 'is-peer',    icon: 'building', label: 'Security & Compliance', x: 43, y: 70 },
      { variant: 'is-peer',    icon: 'building', label: 'Revenue Operations',    x: 57, y: 80 },
      { variant: 'is-peer',    icon: 'building', label: 'Product Enablement',    x: 70, y: 73 },
      { variant: 'is-org',     icon: 'building', label: 'Novanta B.V.',          x: 82, y: 62 },
      { variant: 'is-peer',    icon: 'building', label: 'Marketing Operations',  x: 64, y: 30 },
      { variant: 'is-peer',    icon: 'building', label: 'Team Accounting',       x: 72, y: 20 },
      { variant: 'is-peer',    icon: 'building', label: 'Team Sales',            x: 15, y: 34 },
      { variant: 'is-peer',    icon: 'building', label: 'Team Finance',          x: 40, y: 15 },
      { variant: 'is-current', icon: 'group',    label: 'Team IT',               x: 27, y: 24 }
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

  after: {
    dateFrom: '22 Nov 2026', dateTo: '22 Oct 2026',
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
      { variant: 'is-org',     chip: 'is-chip-above', icon: 'building', label: 'Novanta', x: 80, y: 70 },
      { variant: 'is-current', chip: 'is-chip-above', icon: 'group',    label: 'Team IT', x: 67, y: 80 }
    ],

    engValue: '67%', engTrend: '11%', engTrendIcon: 'Trend-up', engBench: '70%', engBenchW: 70,

    npsPromoters: 52, npsPassives: 27, npsDetractors: 21,
    npsPromCount: 329, npsPassCount: 171, npsDetrCount: 132,

    swCurrent: [67, 72, 75, 88, 82, 85],
    swPrevious: [56, 61, 56, 87, 62, 78],

    rrValue: 79, rrPartDone: 632, rrPartTotal: 800, rrTrend: '13%', rrTrendIcon: 'Trend-up', rrBench: 84,

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
      { q: 'I know how to carry out my tasks', s: 68 },
      { q: 'I receive enough feedback on my work', s: 70 },
      { q: 'I am satisfied with my work', s: 71 },
      { q: 'We honour agreements in our team', s: 72 },
      { q: 'I see ample opportunities to develop further', s: 73 }
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
      { variant: 'is-peer',    icon: 'building', label: 'Finance Operations',    x: 33, y: 82 },
      { variant: 'is-peer',    icon: 'building', label: 'Security & Compliance', x: 43, y: 70 },
      { variant: 'is-peer',    icon: 'building', label: 'Revenue Operations',    x: 57, y: 80 },
      { variant: 'is-peer',    icon: 'building', label: 'Product Enablement',    x: 48, y: 66 },
      { variant: 'is-org',     icon: 'building', label: 'Novanta B.V.',          x: 80, y: 62 },
      { variant: 'is-peer',    icon: 'building', label: 'Marketing Operations',  x: 64, y: 30 },
      { variant: 'is-peer',    icon: 'building', label: 'Team Accounting',       x: 72, y: 20 },
      { variant: 'is-peer',    icon: 'building', label: 'Team Sales',            x: 15, y: 34 },
      { variant: 'is-peer',    icon: 'building', label: 'Team Finance',          x: 40, y: 15 },
      { variant: 'is-previous', icon: 'rotate-backward', label: 'Previous survey', x: 27, y: 24 },
      { variant: 'is-current', icon: 'group',    label: 'Team IT',               x: 67, y: 80 }
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
  }
};

/* ---------- markup template ---------- */
function shell(d) {
  const npsValue = d.npsPromoters - d.npsDetractors;
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
  const topicTile = (t) => `<button class="tp-tile ${t.color}"><span class="tp-tile-fill" style="width:${Math.round(t.count / tpMax * 90)}%"></span><p class="tp-tile-name">${t.name}</p><span class="tp-tile-meta"><i data-icon="users"></i>${t.count} times selected</span><span class="tp-tile-chevron"><i data-icon="chevron-right"></i></span></button>`;
  const qsRow = (s) => `<div class="qs-row"><p class="qs-row-q">${s.q}</p><span class="qs-row-score">${s.s}%</span></div>`;
  const efpScoreRow = (r) => `<div class="efp-score-row${r.sub ? ' is-sub' : ''}"><div class="efp-score-meta"><div class="efp-score-name">${r.name}</div>${r.desc ? `<div class="efp-score-desc">${r.desc}</div>` : ''}</div><span class="efp-score-badge is-current">${r.cur}</span><span class="efp-score-badge ${r.benchClass}">${r.bench}</span></div>`;
  const focusBullet = (b) => typeof b === 'string' ? `<li>${b}</li>` : `<li><strong>${b.t}</strong> ${b.d}</li>`;
  const engpCard = (c) => `<div class="engp-card-item"><div class="engp-card-lbl">${c.lbl}</div><div class="engp-card-val">${c.val}</div></div>`;
  const themeRow = (r) => `<div class="engp-q-row"><span class="engp-q-text">${r.q}</span><span class="engp-q-score">${r.s}</span></div>`;
  const corrRow = (r, i) => `<div class="engp-q-row"><span class="engp-q-num">${i + 1}</span><span class="engp-q-text">${r.q}</span><span class="engp-q-score">${r.s}</span></div>`;

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
      <div class="mn-user">
        <div class="av av-36 av-blue">JI</div>
        <div class="mn-meta">
          <div class="mn-name">Jente Insing</div>
          <div class="mn-org">Novanta B.V.</div>
        </div>
        <i data-icon="chevron-down"></i>
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
        <h1 class="text-l3 results-title">Engagement Survey 2026</h1>
        <div class="results-filters">
          <button class="sel-btn">
            <i data-icon="filter"></i>
            <span class="sel-btn-name">Filter</span>
            <span class="sel-btn-value">Team IT</span>
          </button>
          <div class="date-range">
            <span>${d.dateFrom}</span>
            <i data-icon="from-to" style="display:flex;width:24px;height:16px;"></i>
            <span>${d.dateTo}</span>
          </div>
        </div>
        <div class="tabs">
          <a class="tab is-active">Overview</a>
          <a class="tab">Themes</a>
          <a class="tab">Questions</a>
          <a class="tab">Open answers</a>
          <a class="tab">Topics &amp; Ideas</a>
          <a class="tab">Reports</a>
          <a class="tab">Actions</a>
        </div>
      </div>

      <div class="overview-wrap">

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
        <path d="M0 135.5V0.5C0 0.5 50.5 70.8587 167.5 70.8587C284.5 70.8587 336 0 336 0V135L0 135.5Z" fill="var(--bg-positive-subtle)"/>
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
        <canvas id="nps-chart" width="128" height="128" role="img" aria-label="eNPS ${npsValue}"></canvas>
        <div class="nps-donut-center">
          <span class="nps-donut-value">${npsValue}</span>
          <span class="nps-donut-label">eNPS</span>
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
      <div class="rr-participants"><b>${d.rrPartDone}</b>/${d.rrPartTotal} Participants</div>
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
              { variant: 'is-org', label: 'Organization Level', icon: 'building' },
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
          <button class="segctl-btn is-active"><i data-icon="table"></i> Matrix</button>
          <button class="segctl-btn"><i data-icon="list-unordered"></i> List</button>
        </div>
      </div>

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
          <div class="engp-chart-hd">Score over time <span class="engp-chart-dot"></span> Team IT</div>
          <div class="engp-chart-wrap"><canvas id="engp-chart" role="img" aria-label="Engagement score over time for Team IT"></canvas></div>
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
`;
}

/* ---------- chart helpers ---------- */
const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
const rgba = (hex, a) => {
  const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
  return `rgba(${r},${g},${b},${a})`;
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
function renderOverview(variant) {
  const d = DATA[variant] || DATA.before;
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
        labels: ['Engagement', 'Diversity', 'Employer-ship', 'Customer focus', 'Alignment', 'Leadership'],
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
    if (engLine) {
      const info = css('--bg-info-base');
      const gridBlue = css('--border-info-subtle');
      const areaFill = (context) => {
        const { ctx, chartArea } = context.chart;
        if (!chartArea) return rgba(info, 0.18);
        const g = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        g.addColorStop(0, rgba(info, 0.35));
        g.addColorStop(1, rgba(info, 0));
        return g;
      };
      new Chart(engLine, {
        type: 'line',
        data: {
          labels: d.engpLine.labels,
          datasets: [{ data: d.engpLine.data, borderColor: info, borderWidth: 3, tension: 0.4, fill: true, backgroundColor: areaFill, pointBackgroundColor: info, pointBorderColor: css('--bg-base'), pointBorderWidth: 3, pointRadius: 7, pointHoverRadius: 7, clip: false }]
        },
        options: {
          responsive: true, maintainAspectRatio: false, layout: { padding: { top: 8, right: 12 } }, events: [],
          animation: { duration: 800, easing: 'easeOutQuart' }, plugins: { legend: { display: false }, tooltip: { enabled: false } },
          scales: {
            y: { min: 0, max: 100, ticks: { stepSize: 50, color: css('--content-subtle'), font: { family: 'Poppins', size: 12, weight: 500 }, callback: (v) => v + '%', padding: 8 }, grid: { color: gridBlue, lineWidth: 1, borderDash: [5, 5], drawTicks: false }, border: { color: gridBlue } },
            x: { ticks: { color: css('--content-base'), font: { family: 'Poppins', size: 12, weight: 500 }, padding: 8 }, grid: { color: gridBlue, lineWidth: 1, borderDash: [5, 5], drawTicks: false }, border: { color: gridBlue } }
          }
        }
      });
    }
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
      cmpCount.textContent = n + ' selected';
    };
    cmpBtn.addEventListener('click', (e) => { e.stopPropagation(); cmpMenu.hidden = !cmpMenu.hidden; });
    cmpMenu.addEventListener('click', (e) => e.stopPropagation());
    cmpMenu.querySelectorAll('input.cb').forEach(b => b.addEventListener('change', applyFilter));
    document.addEventListener('click', () => { cmpMenu.hidden = true; });
    applyFilter();
  }

  /* AI summary show more / less */
  const aiSummary = document.getElementById('ai-summary');
  const aiToggle = document.getElementById('ai-toggle');
  aiToggle.addEventListener('click', () => {
    const open = aiSummary.classList.toggle('is-open');
    aiToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  /* Icons */
  if (window.Icons) Icons.render(document);
}
