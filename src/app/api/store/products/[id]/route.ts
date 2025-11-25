import { NextResponse } from "next/server";

export const GET = async (
    _req: Request,
    context: { params: Promise<{ id: string }> },
) => {
    const base = process.env.WP_URL!;
    const { id } = await context.params;
    const target = `${base.replace(/\/$/, "")}/wp-json/wc/store/v1/products/${id}`;

    const res = await fetch(target, { headers: { Accept: "application/json" } });
    const text = await res.text();

    try { return NextResponse.json(JSON.parse(text), { status: res.status }); }
    catch { return new NextResponse(text, { status: res.status }); }
}
