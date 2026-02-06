// ============================================
// RECRUITMENT YEAR - Change this single value to update all dates
// ============================================
export const RECRUITMENT_YEAR = 2025;

// ============================================
// Event Configuration
// ============================================
type Month =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

interface EventConfig {
  month: Month;
  startDay: number;
  endDay?: number; // Optional - for date ranges like "October 5-10"
  title: string;
}

// ============================================
// Configure your recruitment events here
// ============================================
const RECRUITMENT_EVENT_CONFIG: EventConfig[] = [
  { month: "September", startDay: 21, title: "Applications Open at 12am" },
  { month: "September", startDay: 22, title: "CTC at AIF" },
  { month: "September", startDay: 25, title: "Meet the Club" },
  { month: "October", startDay: 3, title: "Game Night" },
  { month: "October", startDay: 5, endDay: 10, title: "Skill Showcases" },
  { month: "October", startDay: 13, endDay: 18, title: "Coffee Chats" },
  {
    month: "October",
    startDay: 20,
    endDay: 25,
    title: "Final Decision Results",
  },
];

// ============================================
// Utility function to format dates
// ============================================
function formatEventDate(config: EventConfig): string {
  const { month, startDay, endDay } = config;
  if (endDay) {
    return `${month} ${startDay}–${endDay}, ${RECRUITMENT_YEAR}`;
  }
  return `${month} ${startDay}, ${RECRUITMENT_YEAR}`;
}

// ============================================
// Exported types and data (used by components)
// ============================================
export interface RecruitmentEvent {
  date: string;
  title: string;
}

export const RECRUITMENT_EVENTS: RecruitmentEvent[] =
  RECRUITMENT_EVENT_CONFIG.map((config) => ({
    date: formatEventDate(config),
    title: config.title,
  }));
