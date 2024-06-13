import { NextResponse, NextRequest } from "next/server";
import { skillset } from "@/utils/db";

export async function GET(){
    const data = skillset;
    return NextResponse.json(data, {status: 200});
}