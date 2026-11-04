const TEAMS = {
  warriors: { name: "Warriors", abbr: "GSW", record: "33-36" },
  heat: { name: "Heat", abbr: "MIA", record: "38-30" },
  pistons: { name: "Pistons", abbr: "DET", record: "27-40" },
  wizards: { name: "Wizards", abbr: "WAS", record: "33-35" },
  thunder: { name: "Thunder", abbr: "OKC", record: "56-12" },
  magic: { name: "Magic", abbr: "ORL", record: "34-33" },
  pacers: { name: "Pacers", abbr: "IND", record: "13-56" },
  knicks: { name: "Knicks", abbr: "NYK", record: "42-26" },
  cavaliers: { name: "Cavaliers", abbr: "CLE", record: "27-42" },
  bucks: { name: "Bucks", abbr: "MIL", record: "30-36" },
  suns: { name: "Suns", abbr: "PHX", record: "36-32" },
  timberwolves: { name: "Timberwolves", abbr: "MIN", record: "27-40" },
  "76ers": { name: "76ers", abbr: "PHI", record: "21-45" },
  nuggets: { name: "Nuggets", abbr: "DEN", record: "41-26" },
  spurs: { name: "Spurs", abbr: "SAS", record: "40-29" },
  kings: { name: "Kings", abbr: "SAC", record: "19-48" },
  celtics: { name: "Celtics", abbr: "BOS", record: "41-27" },
  nets: { name: "Nets", abbr: "BKN", record: "34-34" },
  hornets: { name: "Hornets", abbr: "CHA", record: "27-40" },
  bulls: { name: "Bulls", abbr: "CHI", record: "42-25" },
  hawks: { name: "Hawks", abbr: "ATL", record: "42-24" },
  raptors: { name: "Raptors", abbr: "TOR", record: "34-33" },
  lakers: { name: "Lakers", abbr: "LAL", record: "51-18" },
  clippers: { name: "Clippers", abbr: "LAC", record: "12-56" },
  mavericks: { name: "Mavericks", abbr: "DAL", record: "36-30" },
  rockets: { name: "Rockets", abbr: "HOU", record: "47-20" },
  grizzlies: { name: "Grizzlies", abbr: "MEM", record: "27-41" },
  pelicans: { name: "Pelicans", abbr: "NOP", record: "22-47" },
  jazz: { name: "Jazz", abbr: "UTA", record: "36-31" },
  blazers: { name: "Trail Blazers", abbr: "POR", record: "24-42" },
};

const GAMES = {
  today: [
    { away: "warriors", home: "heat", time: "4:00 PM" },
    { away: "pistons", home: "wizards", time: "4:00 PM" },
    { away: "thunder", home: "magic", time: "4:30 PM" },
    { away: "nets", home: "celtics", time: "4:30 PM" },
    { away: "pacers", home: "knicks", time: "5:00 PM" },
    { away: "hornets", home: "hawks", time: "5:00 PM" },
    { away: "cavaliers", home: "bucks", time: "5:30 PM" },
    { away: "raptors", home: "bulls", time: "6:00 PM" },
    { away: "suns", home: "timberwolves", time: "6:30 PM" },
    { away: "76ers", home: "nuggets", time: "7:00 PM" },
    { away: "grizzlies", home: "pelicans", time: "7:00 PM" },
    { away: "rockets", home: "mavericks", time: "7:30 PM" },
    { away: "jazz", home: "blazers", time: "7:30 PM" },
    { away: "clippers", home: "lakers", time: "8:00 PM" },
    { away: "spurs", home: "kings", time: "8:30 PM" },
  ],
  // Grouped by day, most recent first
  previous: [
    {
      date: "Mon, Mar 16",
      games: [
        { away: "warriors", home: "heat", awayScore: 127, homeScore: 112 },
        { away: "pistons", home: "wizards", awayScore: 95, homeScore: 107 },
        { away: "thunder", home: "magic", awayScore: 131, homeScore: 104 },
        { away: "nets", home: "celtics", awayScore: 99, homeScore: 134 },
        { away: "pacers", home: "knicks", awayScore: 129, homeScore: 111 },
      ],
    },
    {
      date: "Thu, Mar 12",
      games: [
        { away: "hornets", home: "hawks", awayScore: 119, homeScore: 134 },
        { away: "cavaliers", home: "bucks", awayScore: 102, homeScore: 99 },
        { away: "raptors", home: "bulls", awayScore: 97, homeScore: 119 },
        { away: "suns", home: "timberwolves", awayScore: 119, homeScore: 114 },
        { away: "76ers", home: "nuggets", awayScore: 99, homeScore: 103 },
      ],
    },
    {
      date: "Sun, Mar 8",
      games: [
        { away: "grizzlies", home: "pelicans", awayScore: 131, homeScore: 125 },
        { away: "rockets", home: "mavericks", awayScore: 96, homeScore: 99, overtime: true },
        { away: "jazz", home: "blazers", awayScore: 103, homeScore: 106 },
        { away: "clippers", home: "lakers", awayScore: 95, homeScore: 99 },
        { away: "spurs", home: "kings", awayScore: 96, homeScore: 127 },
      ],
    },
  ],
  // Grouped by day, soonest first
  upcoming: [
    {
      date: "Wed, Mar 18",
      games: [
        { away: "warriors", home: "heat", time: "4:00 PM" },
        { away: "pistons", home: "wizards", time: "4:00 PM" },
        { away: "thunder", home: "magic", time: "4:30 PM" },
        { away: "nets", home: "celtics", time: "4:30 PM" },
        { away: "pacers", home: "knicks", time: "5:00 PM" },
      ],
    },
    {
      date: "Fri, Mar 20",
      games: [
        { away: "hornets", home: "hawks", time: "5:00 PM" },
        { away: "cavaliers", home: "bucks", time: "5:30 PM" },
        { away: "raptors", home: "bulls", time: "6:00 PM" },
        { away: "suns", home: "timberwolves", time: "6:30 PM" },
        { away: "76ers", home: "nuggets", time: "7:00 PM" },
      ],
    },
    {
      date: "Sun, Mar 22",
      games: [
        { away: "grizzlies", home: "pelicans", time: "7:00 PM" },
        { away: "rockets", home: "mavericks", time: "7:30 PM" },
        { away: "jazz", home: "blazers", time: "7:30 PM" },
        { away: "clippers", home: "lakers", time: "8:00 PM" },
        { away: "spurs", home: "kings", time: "8:30 PM" },
      ],
    },
  ],
};

// Extra data for the game sheet, keyed by "away@home". Matchups listed here
// open the sheet when tapped.
const GAME_DETAILS = {
  "warriors@heat": {
    league: "NBA",
    odds: {
      provider: "DraftKings",
      rows: [
        { team: "warriors", spread: ["+5.5", "-115"], total: ["O 236.5", "-112"], moneyline: "+130" },
        { team: "heat", spread: ["-5.5", "-105"], total: ["U 236.5", "-108"], moneyline: "-155" },
      ],
    },
    // Newest first; games without scores haven't been played yet
    series: [
      { away: "warriors", home: "heat", date: "Thu, May 21", time: "12:00 PM", line: "MIA -8.5" },
      { current: true }, // the game the sheet was opened for (see seriesList)
      { away: "heat", home: "warriors", date: "Fri, Apr 2", awayScore: 126, homeScore: 117 },
      { away: "heat", home: "warriors", date: "Wed, Mar 21", awayScore: 98, homeScore: 117 },
    ],
  },
};

// Team pages (opened from a team's logo in the game sheet). Opponent records
// and spreads come from TEAMS; "home: true" is a home game ("vs"), else away ("@").
// Networks use short labels, as Apple Sports does (e.g. "Prime Video").
// Each theme colors the page's three-layer gradient (see .sheet-page--team):
//   glow   – radial glow at the top (RGB, used at 40% → 0%)
//   shade  – right-to-left darkening toward the left (RGB, used at 0% → 60%)
//   top / bottom – the top-to-bottom base gradient
const TEAM_PAGES = {
  warriors: {
    fullName: "Golden State Warriors",
    theme: { glow: "47, 95, 196", shade: "10, 21, 48", top: "#1d428a", bottom: "#0a1530" },
    next: { label: "Today", day: 18, opponent: "heat", home: false, time: "4:00 PM", network: "ESPN" },
    // Soonest first
    upcoming: [
      {
        month: "March",
        games: [
          { weekday: "Sat", day: 21, opponent: "hornets", home: true, time: "4:00 PM", network: "FDSN SE" },
          { weekday: "Mon", day: 23, opponent: "spurs", home: false, time: "6:30 PM", network: "NBA TV" },
          { weekday: "Wed", day: 25, opponent: "cavaliers", home: true, time: "5:00 PM", network: "Prime Video" },
          { weekday: "Fri", day: 27, opponent: "timberwolves", home: true, time: "3:30 PM", network: "NBC/Peacock" },
        ],
      },
      {
        month: "April",
        games: [
          { weekday: "Wed", day: 1, opponent: "kings", home: false, time: "4:00 PM", network: "NBCS Bay Area" },
          { weekday: "Thu", day: 2, opponent: "wizards", home: false, time: "4:30 PM", network: "Monumental" },
          { weekday: "Sat", day: 4, opponent: "lakers", home: true, time: "5:30 PM", network: "ABC" },
          { weekday: "Mon", day: 6, opponent: "nuggets", home: true, time: "7:00 PM", network: "NBCS Bay Area" },
          { weekday: "Wed", day: 8, opponent: "blazers", home: false, time: "7:00 PM", network: "NBA TV" },
          { weekday: "Fri", day: 10, opponent: "suns", home: true, time: "7:30 PM", network: "ESPN" },
          { weekday: "Sun", day: 12, opponent: "clippers", home: false, time: "12:30 PM", network: "ABC" },
          { weekday: "Tue", day: 14, opponent: "rockets", home: true, time: "7:00 PM", network: "NBCS Bay Area" },
        ],
      },
    ],
    // Newest first
    previous: [
      {
        month: "March",
        games: [
          { weekday: "Mon", day: 16, opponent: "heat", home: false, teamScore: 127, opponentScore: 112 },
          { weekday: "Sat", day: 14, opponent: "lakers", home: true, teamScore: 95, opponentScore: 104 },
          { weekday: "Thu", day: 12, opponent: "celtics", home: true, teamScore: 119, opponentScore: 110 },
          { weekday: "Tue", day: 10, opponent: "mavericks", home: false, teamScore: 87, opponentScore: 98 },
          { weekday: "Sun", day: 8, opponent: "rockets", home: true, teamScore: 114, opponentScore: 109 },
        ],
      },
      {
        month: "February",
        games: [
          { weekday: "Fri", day: 27, opponent: "kings", home: true, teamScore: 121, opponentScore: 104 },
          { weekday: "Wed", day: 25, opponent: "knicks", home: false, teamScore: 109, opponentScore: 118 },
          { weekday: "Mon", day: 23, opponent: "nets", home: false, teamScore: 99, opponentScore: 91 },
          { weekday: "Sat", day: 21, opponent: "thunder", home: true, teamScore: 88, opponentScore: 112 },
          { weekday: "Thu", day: 19, opponent: "pelicans", home: true, teamScore: 126, opponentScore: 111 },
          { weekday: "Sun", day: 15, opponent: "jazz", home: false, teamScore: 115, opponentScore: 117 },
        ],
      },
    ],
  },
  heat: {
    fullName: "Miami Heat",
    theme: { glow: "152, 0, 46", shade: "45, 10, 10", top: "#98002e", bottom: "#300a0a" },
    next: { label: "Today", day: 18, opponent: "warriors", home: true, time: "4:00 PM", network: "ESPN" },
    // Soonest first
    upcoming: [
      {
        month: "March",
        games: [
          { weekday: "Sat", day: 21, opponent: "hawks", home: false, time: "7:30 PM", network: "FDSN Sun" },
          { weekday: "Mon", day: 23, opponent: "bucks", home: true, time: "7:30 PM", network: "FDSN Sun" },
          { weekday: "Wed", day: 25, opponent: "knicks", home: true, time: "7:30 PM", network: "ESPN" },
          { weekday: "Fri", day: 27, opponent: "celtics", home: false, time: "7:30 PM", network: "NBC/Peacock" },
        ],
      },
      {
        month: "April",
        games: [
          { weekday: "Wed", day: 1, opponent: "pistons", home: true, time: "7:30 PM", network: "FDSN Sun" },
          { weekday: "Thu", day: 2, opponent: "hornets", home: false, time: "7:00 PM", network: "NBA TV" },
          { weekday: "Sat", day: 4, opponent: "76ers", home: true, time: "8:00 PM", network: "ABC" },
          { weekday: "Mon", day: 6, opponent: "raptors", home: false, time: "7:30 PM", network: "NBA TV" },
          { weekday: "Wed", day: 8, opponent: "magic", home: true, time: "7:30 PM", network: "FDSN Sun" },
          { weekday: "Fri", day: 10, opponent: "cavaliers", home: false, time: "7:00 PM", network: "ESPN" },
          { weekday: "Sun", day: 12, opponent: "nets", home: true, time: "6:00 PM", network: "FDSN Sun" },
          { weekday: "Tue", day: 14, opponent: "wizards", home: false, time: "7:00 PM", network: "Monumental" },
        ],
      },
    ],
    // Newest first
    previous: [
      {
        month: "March",
        games: [
          { weekday: "Mon", day: 16, opponent: "warriors", home: true, teamScore: 112, opponentScore: 127 },
          { weekday: "Sat", day: 14, opponent: "magic", home: false, teamScore: 108, opponentScore: 99 },
          { weekday: "Thu", day: 12, opponent: "knicks", home: true, teamScore: 96, opponentScore: 103 },
          { weekday: "Tue", day: 10, opponent: "hawks", home: true, teamScore: 118, opponentScore: 110 },
          { weekday: "Sun", day: 8, opponent: "pacers", home: false, teamScore: 121, opponentScore: 94 },
        ],
      },
      {
        month: "February",
        games: [
          { weekday: "Fri", day: 27, opponent: "76ers", home: false, teamScore: 104, opponentScore: 98 },
          { weekday: "Wed", day: 25, opponent: "celtics", home: true, teamScore: 87, opponentScore: 101 },
          { weekday: "Mon", day: 23, opponent: "raptors", home: true, teamScore: 115, opponentScore: 109 },
          { weekday: "Sat", day: 21, opponent: "bulls", home: false, teamScore: 92, opponentScore: 97 },
          { weekday: "Thu", day: 19, opponent: "hornets", home: false, teamScore: 110, opponentScore: 86 },
          { weekday: "Sun", day: 15, opponent: "pistons", home: true, teamScore: 99, opponentScore: 94 },
        ],
      },
    ],
  },
};

const HOME_COURT = 2;
const POINTS_PER_WIN_PCT = 40;

function winPct(id) {
  const [w, l] = TEAMS[id].record.split("-").map(Number);
  return w / (w + l);
}

// Point spread from the win-percentage gap plus home-court edge,
// always on a half point, e.g. "MIA -5.5".
function spread(g) {
  const margin = (winPct(g.home) - winPct(g.away)) * POINTS_PER_WIN_PCT + HOME_COURT;
  const favorite = margin >= 0 ? g.home : g.away;
  return `${TEAMS[favorite].abbr} -${Math.floor(Math.abs(margin)) + 0.5}`;
}

// Each matchup is a two-line grid:
//   logo | record | time   | record | logo
//   name |        | spread |        | name
function teamName(id, side) {
  return `<span class="team-name is-${side}"><span>${TEAMS[id].name}</span></span>`;
}

function gameRow(g, { awayStat, homeStat, time, detail }) {
  const key = `${g.away}@${g.home}`;
  const opensSheet = key in GAME_DETAILS;
  return `
    <li class="game${opensSheet ? " is-tappable" : ""}"${opensSheet ? ` data-matchup="${key}" role="button" tabindex="0"` : ""}>
      <img class="team-logo is-away" src="logos/${g.away}.svg" alt="" />
      ${awayStat}
      <span class="time">${time}</span>
      ${homeStat}
      <img class="team-logo is-home" src="logos/${g.home}.svg" alt="" />
      ${teamName(g.away, "away")}
      ${detail ? `<span class="detail">${detail}</span>` : ""}
      ${teamName(g.home, "home")}
    </li>`;
}

function scheduledRow(g) {
  return gameRow(g, {
    awayStat: `<span class="record is-away">${TEAMS[g.away].record}</span>`,
    homeStat: `<span class="record is-home">${TEAMS[g.home].record}</span>`,
    time: g.time,
    detail: spread(g),
  });
}

function finalRow(g) {
  const awayWon = g.awayScore > g.homeScore;
  return gameRow(g, {
    awayStat: `<span class="score is-away${awayWon ? "" : " is-loser"}">${g.awayScore}</span>`,
    homeStat: `<span class="score is-home${awayWon ? " is-loser" : ""}">${g.homeScore}</span>`,
    time: g.overtime ? "Final/OT" : "Final",
  });
}

const CHEVRON_UP = `
  <svg class="chevron" width="9" height="6" viewBox="0 0 9 6" aria-hidden="true">
    <path d="M1 5l3.5-3.5L8 5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>`;

// A tappable date label that collapses that day's games.
function dayGroup({ date, games }, row) {
  return `
    <li class="day" data-date="${date}">
      <button class="day-header" type="button" aria-expanded="true">${date}${CHEVRON_UP}</button>
      <ul class="day-games">${games.map(row).join("")}</ul>
    </li>`;
}

const ROW_FOR_DAY_TAB = { previous: finalRow, upcoming: scheduledRow };

// ---------- Game sheet ----------

// A series game on the same two-line grid as the main list: the date sits on
// the logos' line and the spread on the names' line (start time just above the
// date). Finished games put their scores beside the logos.
function seriesRow(g, { isKept = false } = {}) {
  const final = g.awayScore != null;
  const awayWon = final && g.awayScore > g.homeScore;
  return `
    <li class="game series-game${isKept ? " is-kept" : ""}">
      <img class="team-logo is-away" src="logos/${g.away}.svg" alt="" />
      ${final ? `<span class="score is-away${awayWon ? "" : " is-loser"}">${g.awayScore}</span>` : ""}
      ${g.time ? `<span class="series-time">${g.time}</span>` : ""}
      <span class="${final ? "series-date" : "series-day"}">${g.date}</span>
      ${final ? `<span class="score is-home${awayWon ? " is-loser" : ""}">${g.homeScore}</span>` : ""}
      <img class="team-logo is-home" src="logos/${g.home}.svg" alt="" />
      ${teamName(g.away, "away")}
      ${g.line ? `<span class="detail">${g.line}</span>` : ""}
      ${teamName(g.home, "home")}
    </li>`;
}

// The series list (newest first); the most recent finished game is the one
// that stays visible when the Series card is collapsed.
// The series row for the game the sheet was opened for: "Today", or (from
// Upcoming) its start time, date and spread, or (from Previous) its final score
function openedSeriesGame({ game, date }) {
  const { away, home } = game;
  if (game.awayScore != null) return { away, home, date, awayScore: game.awayScore, homeScore: game.homeScore };
  if (!date) return { away, home, date: "Today" };
  return { away, home, date, time: game.time, line: spread(game) };
}

function seriesList(series, opened) {
  const games = series.map((g) => (g.current ? openedSeriesGame(opened) : g));
  const latestFinal = games.find((g) => g.awayScore != null);
  return games.map((g) => seriesRow(g, { isKept: g === latestFinal })).join("");
}

// A team with a page in TEAM_PAGES becomes a button that opens it. For a
// finished game, the team's score sits above its logo (dimmed if it lost).
function sheetTeam(id, final = null) {
  const score = final
    ? `<span class="sheet-score${final.lost ? " is-loser" : ""}">${final.score}</span>`
    : "";
  const inner = `${score}
      <img class="sheet-logo" src="logos/${id}.svg" alt="" />
      <span class="sheet-team-name">${TEAMS[id].name}</span>
      <span class="sheet-team-record">${TEAMS[id].record}</span>`;
  return id in TEAM_PAGES
    ? `<button class="sheet-team is-link" type="button" data-team="${id}" aria-label="${TEAM_PAGES[id].fullName} team page">${inner}</button>`
    : `<div class="sheet-team">${inner}</div>`;
}

function oddsCell([line, price]) {
  return `<span class="odds-line">${line}</span><span class="odds-price">${price}</span>`;
}

// Between the logos: the final score for a finished game, else the start time
// Between the logos: "Final" for a finished game (its scores sit above the
// logos), else the start time
function sheetCenter(game) {
  if (game.awayScore == null) return `<span class="sheet-time">${game.time}</span>`;
  return `<span class="sheet-final">${game.overtime ? "Final/OT" : "Final"}</span>`;
}

function sheetFinal(game, side) {
  if (game.awayScore == null) return null;
  const [mine, theirs] =
    side === "away" ? [game.awayScore, game.homeScore] : [game.homeScore, game.awayScore];
  return { score: mine, lost: mine < theirs };
}

function sheetContent(game, date) {
  const d = GAME_DETAILS[`${game.away}@${game.home}`];
  return `
    <p class="sheet-league">${d.league}</p>
    <div class="sheet-matchup">
      ${sheetTeam(game.away, sheetFinal(game, "away"))}
      ${sheetCenter(game)}
      ${sheetTeam(game.home, sheetFinal(game, "home"))}
    </div>
    <section class="sheet-card">
      <h3 class="sheet-card-title">Betting Odds</h3>
      <table class="odds">
        <thead>
          <tr><th>Team</th><th>Spread</th><th>Total</th><th>Moneyline</th></tr>
        </thead>
        <tbody>
          ${d.odds.rows
            .map(
              (r) => `
            <tr>
              <td class="odds-team">${TEAMS[r.team].abbr}</td>
              <td>${oddsCell(r.spread)}</td>
              <td>${oddsCell(r.total)}</td>
              <td><span class="odds-price">${r.moneyline}</span></td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>
      <p class="odds-source">Odds Provided by <strong>${d.odds.provider}</strong></p>
    </section>
    <section class="sheet-card">
      <button class="day-header sheet-card-title" type="button" aria-expanded="true">Series${CHEVRON_UP}</button>
      <ul class="day-games series-games keeps-one">${seriesList(d.series, { game, date })}</ul>
    </section>`;
}

// ---------- Team page ----------

// An upcoming game in a team's schedule: date | opponent logo | two lines
//   vs/@ opponent ........ time
//   record ... network · spread
// Each line spans the full width, so a long name on one line can't collide
// with the other; if the bottom line is still too long, the network name is
// shortened with "…".
function teamGameRow(teamId, g, { isKept = false } = {}) {
  const matchup = g.home ? { away: g.opponent, home: teamId } : { away: teamId, home: g.opponent };
  const topRight = `<span class="tg-main tg-time">${g.time}</span>`;
  const bottomRight = `<span class="tg-sub tg-watch"><span class="tg-network">${g.network}</span>&nbsp;· ${spread(matchup)}</span>`;
  return `
    <li class="team-game${isKept ? " is-kept" : ""}">
      <div class="tg-date">
        <span class="tg-weekday">${g.weekday ?? g.label}</span>
        <span class="tg-day">${g.day}</span>
      </div>
      <img class="tg-logo" src="logos/${g.opponent}.svg" alt="" />
      <div class="tg-info">
        <div class="tg-line">
          <span class="tg-main"><span class="tg-prefix">${g.home ? "vs" : "@"}</span> ${TEAMS[g.opponent].name}</span>
          ${topRight}
        </div>
        <div class="tg-line">
          <span class="tg-sub tg-record">${TEAMS[g.opponent].record}</span>
          ${bottomRight}
        </div>
      </div>
    </li>`;
}

// A played game, laid out like the main list's Previous tab (via the Series
// row): away logo + name, score, date ("Mon, Mar 16"), score, home logo + name
function teamPreviousRow(teamId, month, g, options) {
  return seriesRow(
    {
      away: g.home ? g.opponent : teamId,
      home: g.home ? teamId : g.opponent,
      awayScore: g.home ? g.opponentScore : g.teamScore,
      homeScore: g.home ? g.teamScore : g.opponentScore,
      date: `${g.weekday}, ${month.slice(0, 3)} ${g.day}`,
    },
    options
  );
}

// Collapsible month groups, reusing the date-header markup (and its animation).
// Each month's first game stays showing when it's closed.
function teamMonths(teamId, months) {
  return months
    .map(({ month, games }) => {
      const rows = games.map((g, i) =>
        g.teamScore != null
          ? teamPreviousRow(teamId, month, g, { isKept: i === 0 })
          : teamGameRow(teamId, g, { isKept: i === 0 })
      );
      return `
    <li class="day">
      <button class="day-header" type="button" aria-expanded="true">${month}${CHEVRON_UP}</button>
      <ul class="day-games keeps-one">${rows.join("")}</ul>
    </li>`;
    })
    .join("");
}

// The logo and record scroll away; the cards below stick once they reach the
// top, and from then on the schedule's games scroll inside their card.
function teamPageContent(teamId, cardRow = teamGameRow(teamId, TEAM_PAGES[teamId].next)) {
  const page = TEAM_PAGES[teamId];
  return `
    <div class="team-hero">
      <img class="team-page-logo" src="logos/${teamId}.svg" alt="" />
      <p class="team-page-record">${TEAMS[teamId].record}</p>
    </div>
    <div class="team-sticky">
      <section class="sheet-card team-card">
        <ul class="team-games">${cardRow}</ul>
      </section>
      <section class="sheet-card team-card team-schedule">
        <div class="segmented" data-active="upcoming" role="tablist">
          <span class="segmented-thumb" aria-hidden="true"></span>
          <button class="segment" type="button" role="tab" data-view="previous" aria-selected="false">Previous Games</button>
          <button class="segment" type="button" role="tab" data-view="upcoming" aria-selected="true">Upcoming</button>
        </div>
        <ul class="team-games" id="team-schedule">${teamMonths(teamId, page.upcoming)}</ul>
      </section>
    </div>`;
}

const list = document.getElementById("games");
const tabs = document.querySelectorAll(".tab");
let activeTab = "today";

function render(tab) {
  activeTab = tab;
  const rows =
    tab === "today"
      ? GAMES.today.map(scheduledRow)
      : GAMES[tab].map((day) => dayGroup(day, ROW_FOR_DAY_TAB[tab]));
  list.innerHTML = rows.join("");
  list.scrollTop = 0;
  tabs.forEach((t) => {
    const active = t.dataset.tab === tab;
    t.classList.toggle("is-active", active);
    t.setAttribute("aria-selected", String(active));
  });
}

tabs.forEach((t) => t.addEventListener("click", () => render(t.dataset.tab)));
// iOS's standard ease-in-out curve (UIView / Core Animation default)
const IOS_EASE_IN_OUT = "cubic-bezier(0.42, 0, 0.58, 1)";
const SECTION_DURATION = 300; // ms
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// Opens or closes the list under a date header (or the sheet's Series header),
// smoothly animating the height of whatever appears or disappears. A collapsed
// Series card keeps its latest final, so only the other games animate there.
// Toggling mid-animation picks up from the current height.
function setSectionOpen(header, open) {
  const list = header.nextElementSibling;
  const targets = list.classList.contains("keeps-one")
    ? [...list.children].filter((row) => !row.classList.contains("is-kept"))
    : [list];

  const shownDisplay = targets.map((el) => getComputedStyle(el).display);
  const fromHeight = targets.map((el) => el.getBoundingClientRect().height);
  targets.forEach((el) => {
    el.getAnimations().forEach((a) => a.cancel());
    el.style.display = "";
    el.style.overflow = "";
  });

  header.setAttribute("aria-expanded", String(open));
  if (reduceMotion.matches) return;

  targets.forEach((el, i) => {
    // CSS hides collapsed content at once; keep it showing while it shrinks
    if (!open && shownDisplay[i] !== "none") el.style.display = shownDisplay[i];
    const toHeight = open ? el.getBoundingClientRect().height : 0;
    el.style.overflow = "hidden";
    const animation = el.animate(
      [
        { height: `${fromHeight[i]}px`, opacity: open ? 0 : 1 },
        { height: `${toHeight}px`, opacity: open ? 1 : 0 },
      ],
      { duration: SECTION_DURATION, easing: IOS_EASE_IN_OUT }
    );
    animation.finished
      .then(() => {
        if (el.getAnimations().length) return; // a newer toggle owns the element now
        el.style.display = "";
        el.style.overflow = "";
      })
      .catch(() => {}); // cancelled by a newer toggle, which resets the styles itself
  });
}

document.addEventListener("click", (e) => {
  const header = e.target.closest(".day-header");
  if (!header) return;
  setSectionOpen(header, header.getAttribute("aria-expanded") !== "true");
});
const WEEKDAYS = { Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday", Fri: "Friday", Sat: "Saturday", Sun: "Sunday" };

// "Wed, Mar 18" → "Wednesday, Mar 18"
function longDate(date) {
  return date.replace(/^(\w{3}),/, (_, day) => `${WEEKDAYS[day]},`);
}

// The tapped game's data and the date label for the sheet's title
function sheetGameFor(row) {
  const key = row.dataset.matchup;
  const date = row.closest(".day")?.dataset.date;
  const games = date ? GAMES[activeTab].find((day) => day.date === date).games : GAMES.today;
  return {
    game: games.find((g) => `${g.away}@${g.home}` === key),
    date: date ?? null, // e.g. "Wed, Mar 18"; null for Today
    dateLabel: date ? longDate(date) : "Today",
  };
}

list.addEventListener("click", (e) => {
  const row = e.target.closest(".game[data-matchup]");
  if (row) openSheet(sheetGameFor(row));
});
list.addEventListener("keydown", (e) => {
  const row = e.target.closest(".game[data-matchup]");
  if (row && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    openSheet(sheetGameFor(row));
  }
});
render("today");

// Game sheet: slides up over a black backdrop. Dragging the grabber down far
// (or flicking it), tapping the backdrop, or Escape closes it.
const sheet = document.getElementById("game-sheet");
const sheetBody = document.getElementById("sheet-body");
const sheetHandle = document.getElementById("sheet-handle");
const sheetScrim = document.getElementById("sheet-scrim");
const sheetDate = document.getElementById("sheet-date");
const teamPage = document.getElementById("team-page");
const teamBody = document.getElementById("team-body");
const teamTitle = document.getElementById("team-title");
const gamePage = document.getElementById("game-page");

const DISMISS_DISTANCE = 120; // px dragged
const DISMISS_VELOCITY = 0.5; // px per ms

function setSheetOpen(open, { showDate = true } = {}) {
  sheet.classList.toggle("is-open", open);
  sheetScrim.classList.toggle("is-open", open);
  sheetDate.classList.toggle("is-open", open && showDate);
  sheet.setAttribute("aria-hidden", String(!open));
  sheet.inert = !open;
}

// The game the sheet was opened for, and its date (null for Today)
let sheetGame = null;

function openSheet({ game, date, dateLabel }) {
  sheetGame = { game, date };
  sheet.setAttribute("aria-label", `${TEAMS[game.away].name} at ${TEAMS[game.home].name}, ${dateLabel}`);
  sheetDate.textContent = dateLabel;
  logoFlight?.finish(); // in case the sheet was closed mid-flight
  sheet.classList.remove("is-team-root");
  sheetBody.innerHTML = sheetContent(game, date);
  sheetBody.scrollTop = 0;
  showGamePage({ animate: false });
  setSheetOpen(true);
}

// Opens the sheet straight to a team page (from the NBA menu). With no game
// underneath, the team page is the sheet's only page: no back button, no
// game date above the sheet.
function openTeamSheet(teamId) {
  logoFlight?.finish();
  sheet.setAttribute("aria-label", TEAM_PAGES[teamId].fullName);
  sheet.classList.add("is-team-root", "no-page-anim");
  showTeamPage(teamId);
  void sheet.offsetWidth; // show the team page at once, without the page fade
  sheet.classList.remove("no-page-anim");
  setSheetOpen(true, { showDate: false });
}

// Team page: fades in over the game page while the tapped logo flies to it
// (back reverses it). The game's date above the sheet only shows with the
// game page.
// The team page's top card for the game the sheet was opened for:
//   from Today      "Today 18 · @ Heat · 4:00 PM"
//   from Upcoming   "Wed 18 · @ Heat · 4:00 PM"
//   from Previous   the final score, like the Previous Games rows, as "Today"
//   from the menu   the team's usual next game
function teamCardRow(teamId, opened) {
  const game = opened?.game;
  if (game?.awayScore != null) {
    const { away, home, awayScore, homeScore } = game;
    return seriesRow({ away, home, awayScore, homeScore, date: "Today" });
  }
  return teamGameRow(teamId, teamCardGame(teamId, opened));
}

function teamCardGame(teamId, opened) {
  const fallback = TEAM_PAGES[teamId].next;
  const game = opened?.game;
  if (!game) return fallback;
  const [weekday, , day] = opened.date ? opened.date.split(/[ ,]+/) : [];
  return {
    ...(opened.date ? { weekday, day: Number(day) } : { label: "Today", day: fallback.day }),
    opponent: game.away === teamId ? game.home : game.away,
    home: game.home === teamId,
    time: game.time,
    network: fallback.network,
  };
}

function showTeamPage(teamId, opened = null) {
  teamTitle.textContent = TEAM_PAGES[teamId].fullName;
  teamPage.dataset.team = teamId; // per-team styling hooks
  Object.entries(TEAM_PAGES[teamId].theme).forEach(([name, value]) =>
    teamPage.style.setProperty(`--team-${name}`, value)
  );
  teamBody.innerHTML = teamPageContent(teamId, teamCardRow(teamId, opened));
  teamBody.dataset.team = teamId;
  teamBody.scrollTop = 0;
  updateTeamStick();
  sheet.classList.add("is-team");
  teamPage.inert = false;
  gamePage.inert = true;
  sheetDate.classList.remove("is-open");
}

// Scrolling first moves the page until the logo and record are gone and the
// cards stick; only then can the games scroll inside their card. (While the
// list can't scroll, wheel and touch scrolling over it move the page; once
// the list is back at its top, scrolling up moves the page again.)
function updateTeamStick() {
  const sticky = teamBody.querySelector(".team-sticky");
  if (!sticky) return;
  const stuck = teamBody.scrollTop >= teamBody.scrollHeight - teamBody.clientHeight - 1;
  sticky.classList.toggle("is-stuck", stuck);
  if (!stuck) document.getElementById("team-schedule").scrollTop = 0;
}

teamBody.addEventListener("scroll", updateTeamStick, { passive: true });

function showGamePage({ animate = true } = {}) {
  if (!animate) sheet.classList.add("no-page-anim");
  sheet.classList.remove("is-team");
  teamPage.inert = true;
  gamePage.inert = false;
  if (sheet.classList.contains("is-open")) sheetDate.classList.add("is-open");
  if (!animate) {
    void sheet.offsetWidth; // apply the jump before re-enabling transitions
    sheet.classList.remove("no-page-anim");
  }
}

// Logo morph: a copy of the logo flies (moving and resizing) from one logo to
// the other while the pages crossfade underneath; both real logos stay hidden
// until it lands, so it reads as one logo moving between the pages.
const LOGO_FLIGHT_MS = 500;
let logoFlight = null;

function flyLogo(fromLogo, toLogo) {
  logoFlight?.finish();
  if (reduceMotion.matches) return;
  const box = sheet.getBoundingClientRect();
  const from = fromLogo.getBoundingClientRect();
  const to = toLogo.getBoundingClientRect();

  // Sits on the landing spot; the animation starts it over the take-off spot
  const copy = document.createElement("img");
  copy.className = "logo-flight";
  copy.src = toLogo.src;
  copy.alt = "";
  Object.assign(copy.style, {
    left: `${to.left - box.left - sheet.clientLeft}px`,
    top: `${to.top - box.top - sheet.clientTop}px`,
    width: `${to.width}px`,
    height: `${to.height}px`,
  });
  sheet.append(copy);
  fromLogo.style.visibility = "hidden";
  toLogo.style.visibility = "hidden";

  const flight = copy.animate(
    [
      {
        transform: `translate(${from.left - to.left}px, ${from.top - to.top}px)
                    scale(${from.width / to.width}, ${from.height / to.height})`,
      },
      { transform: "none" },
    ],
    { duration: LOGO_FLIGHT_MS, easing: "cubic-bezier(0.32, 0.72, 0, 1)" }
  );
  logoFlight = flight;
  const land = () => {
    copy.remove();
    fromLogo.style.visibility = "";
    toLogo.style.visibility = "";
    if (logoFlight === flight) logoFlight = null;
  };
  flight.finished.then(land, land);
}

// The tapped team's logo in the game sheet header
function headerLogo(teamId) {
  return sheetBody.querySelector(`.sheet-team[data-team="${teamId}"] .sheet-logo`);
}

sheetBody.addEventListener("click", (e) => {
  const team = e.target.closest(".sheet-team[data-team]");
  if (!team) return;
  showTeamPage(team.dataset.team, sheetGame);
  flyLogo(headerLogo(team.dataset.team), teamBody.querySelector(".team-page-logo"));
});

document.getElementById("sheet-back").addEventListener("click", () => {
  // Fly the logo home unless it has scrolled out of view (then just fade)
  const teamLogo = teamBody.querySelector(".team-page-logo");
  if (teamLogo.getBoundingClientRect().bottom > teamBody.getBoundingClientRect().top) {
    flyLogo(teamLogo, headerLogo(teamBody.dataset.team));
  }
  showGamePage();
});

// Previous Games | Upcoming
teamBody.addEventListener("click", (e) => {
  const segment = e.target.closest(".segment");
  if (!segment) return;
  const view = segment.dataset.view;
  const control = segment.closest(".segmented");
  if (control.dataset.active === view) return;
  control.dataset.active = view;
  control.querySelectorAll(".segment").forEach((s) => s.setAttribute("aria-selected", String(s === segment)));
  const teamId = teamBody.dataset.team;
  const schedule = document.getElementById("team-schedule");
  schedule.innerHTML = teamMonths(teamId, TEAM_PAGES[teamId][view]);
  schedule.scrollTop = 0;
});

let drag = null;

sheetHandle.addEventListener("pointerdown", (e) => {
  drag = { startY: e.clientY, startTime: e.timeStamp, dy: 0 };
  sheetHandle.setPointerCapture(e.pointerId);
  sheet.classList.add("is-dragging");
  sheetDate.style.transition = "none"; // fade with the finger, not after it
});

sheetHandle.addEventListener("pointermove", (e) => {
  if (!drag) return;
  drag.dy = Math.max(0, e.clientY - drag.startY);
  sheet.style.transform = `translateY(${drag.dy}px)`;
  const fade = String(1 - drag.dy / sheet.offsetHeight);
  sheetScrim.style.opacity = fade;
  if (sheetDate.classList.contains("is-open")) sheetDate.style.opacity = fade;
});

function endDrag(e) {
  if (!drag) return;
  const velocity = drag.dy / Math.max(1, e.timeStamp - drag.startTime);
  const dismiss = drag.dy > DISMISS_DISTANCE || (drag.dy > 20 && velocity > DISMISS_VELOCITY);
  drag = null;
  // Clearing the inline styles lets the transition carry on from where the finger let go
  sheet.classList.remove("is-dragging");
  sheet.style.transform = "";
  sheetScrim.style.opacity = "";
  sheetDate.style.opacity = "";
  sheetDate.style.transition = "";
  if (dismiss) setSheetOpen(false);
}

sheetHandle.addEventListener("pointerup", endDrag);
sheetHandle.addEventListener("pointercancel", endDrag);
sheetScrim.addEventListener("click", () => setSheetOpen(false));

// League / team menu: opens from the NBA button; a tap anywhere outside it,
// a tap on an item, or Escape closes it.
const pill = document.getElementById("league-pill");
const menu = document.getElementById("league-menu");
const scrim = document.getElementById("menu-scrim");

// Pin the menu's top-right corner to the button's and start it at the button's size.
function anchorMenuToPill() {
  const phone = menu.offsetParent;
  menu.style.top = `${pill.offsetTop}px`;
  menu.style.right = `${phone.clientWidth - pill.offsetLeft - pill.offsetWidth}px`;
  menu.style.setProperty("--from-sx", pill.offsetWidth / menu.offsetWidth);
  menu.style.setProperty("--from-sy", pill.offsetHeight / menu.offsetHeight);
}

function setMenuOpen(open) {
  if (open) anchorMenuToPill();
  menu.classList.toggle("is-open", open);
  scrim.classList.toggle("is-open", open);
  pill.setAttribute("aria-expanded", String(open));
}

anchorMenuToPill();
pill.addEventListener("click", () => setMenuOpen(true));
scrim.addEventListener("click", () => setMenuOpen(false));
menu.addEventListener("click", (e) => {
  const item = e.target.closest(".menu-item");
  if (!item) return;
  setMenuOpen(false);
  if (item.dataset.team) openTeamSheet(item.dataset.team);
});
// Escape closes whichever is on top: the game sheet first, then the menu
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (sheet.classList.contains("is-open")) setSheetOpen(false);
  else setMenuOpen(false);
});
