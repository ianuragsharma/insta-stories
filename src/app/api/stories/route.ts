import { storiesMock } from "@/mockData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    stories: storiesMock,
  });
}
