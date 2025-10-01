import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function POST(request: Request) {
  try {
    const { cap } = await request.json(); // recibimos JSON { cap: 3870000000000 }
    const [result] = await pool.query(
      "INSERT INTO MarketCap (cap) VALUES (?)",
      [cap]
    );
    return NextResponse.json({ success: true, result });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err });
  }
}
