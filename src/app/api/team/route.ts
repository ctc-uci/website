import { NextRequest, NextResponse } from "next/server";

import {
  BOARD_DATA,
  CLCHC_DATA,
  GCF_DATA,
  ELDR_DATA,
} from "@/utils/constants/team-data";

const ALL_GROUPS = {
  board: BOARD_DATA,
  clchc: CLCHC_DATA,
  gcf: GCF_DATA,
  eldr: ELDR_DATA,
} as const;

type GroupKey = keyof typeof ALL_GROUPS;

export async function GET(req: NextRequest) {
  const group = req.nextUrl.searchParams.get("group") as GroupKey | null;

  if (group !== null && !(group in ALL_GROUPS)) {
    return NextResponse.json(
      { error: `Unknown group "${group}". Valid: board, clchc, gcf, eldr` },
      { status: 400 }
    );
  }

  const data = group ? { [group]: ALL_GROUPS[group] } : ALL_GROUPS;
  return NextResponse.json(data);
}
