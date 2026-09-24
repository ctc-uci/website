import { NextRequest, NextResponse } from "next/server";

import {
  BOARD_DATA,
  PD_TEAM_DATA,
  HUB_DATA,
  UP_DATA,
  WELLS_DATA
} from "@/utils/constants/team-data";

const ALL_GROUPS = {
  board: BOARD_DATA,
  pd: PD_TEAM_DATA,
  hub: HUB_DATA,
  UP: UP_DATA,
  wells: WELLS_DATA
} as const;

type GroupKey = keyof typeof ALL_GROUPS;

export async function GET(req: NextRequest) {
  const group = req.nextUrl.searchParams.get("group") as GroupKey | null;

  if (group !== null && !(group in ALL_GROUPS)) {
    return NextResponse.json(
      { error: `Unknown group "${group}". Valid: board, pd, leads` },
      { status: 400 }
    );
  }

  const data = group ? { [group]: ALL_GROUPS[group] } : ALL_GROUPS;
  return NextResponse.json(data);
}

