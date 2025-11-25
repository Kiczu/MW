import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    const base = process.env.WP_URL!;
    const url = new URL(req.url);
    const res = await fetch(`${base.replace(/\/$/, "")}/wp-json/wc/store/v1/products${url.search}`, {
        headers: { Accept: "application/json" },
        // cache: "no-store"
    });
    const text = await res.text();
    try { return NextResponse.json(JSON.parse(text), { status: res.status }); }
    catch { return new NextResponse(text, { status: res.status }); }
}
