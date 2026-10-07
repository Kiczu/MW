import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    const base = process.env.WP_URL!;
    const url = new URL(req.url);
    const target = `${base.replace(/\/$/, "")}/wp-json/wc/store/v1/products/categories${url.search || "?per_page=100"}`;

    const res = await fetch(target, { headers: { Accept: "application/json" } });
    const text = await res.text();

    try { return NextResponse.json(JSON.parse(text), { status: res.status }); }
    catch { return new NextResponse(text, { status: res.status }); }
}
