export type TimelineEvent = {
  majorEvent?: boolean;
  date: string;
  event: string;
  description?: string;
  importantDetail?: string;
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    majorEvent: true,
    date: "Sep 22nd",
    event: "Applications Open",
    description:
      "The initial application will consist of short response questions that will help us learn about your experience and your goals.",
  },
  {
    date: "Sep 23rd 11 AM - 4 PM",
    event: "AIF @ Aldrich Park",
  },
  {
    date: "Sep 26th 6 PM - 9 PM",
    event: "Meet the Club @ Engineering Plaza",
    description:
      "Learn about CTC and what projects we will be working on in the upcoming year, as well as socialize with and ask questions to board members.",
  },
  {
    date: "Oct 4th 6:30 PM - 8:30 PM",
    event: "Game Night @ DBH 6011 (Invite Only)",
    description:
      "Play fun games and meet other applicants/board members in a casual setting!",
  },
  {
    majorEvent: true,
    date: "Oct 3rd - Oct 11th",
    event: "Skill Showcase",
    description:
      "The Skill Showcase is a one-on-one session where you will show off your technical skills. Further information about what to expect will be shared in your acceptance email.",
    importantDetail:
      "You will receive an email on Oct 2nd if you have been invited to a Skill Showcase.",
  },
  {
    majorEvent: true,
    date: "Oct 14th - Oct 19th",
    event: "Coffee Chat",
    description:
      "Coffee Chats are one-on-ones with a board member. These chats are a casual way for us to get you know you better, and for you to learn more about Commit the Change!",
    importantDetail:
      "You will receive an email on Oct 13th if you have been invited to a Coffee Chat.",
  },
  {
    majorEvent: true,
    date: "Late October",
    event: "Final Decisions",
    description:
      "You will receive an email with final acceptance decisions in late October. Regardless of final decisions, we want to thank you for your time and dedication!",
  },
];
