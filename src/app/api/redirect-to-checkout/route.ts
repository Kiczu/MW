import { NextResponse } from "next/server";
import crypto from "crypto";

export const POST = async (req: Request) => {
    const body = await req.json().catch(() => null);
    const line_items = (body?.line_items ?? []) as Array<{ product_id: number; quantity: number; variation_id?: number }>;
    if (!Array.isArray(line_items) || line_items.length === 0) {
        return NextResponse.json({ message: "Brak pozycji" }, { status: 400 });
    }

    const base = process.env.WP_URL!;
    const secret = process.env.HEADLESS_SHARED_SECRET!;
    const itemsJson = JSON.stringify(line_items);
    const itemsB64 = Buffer.from(itemsJson, "utf8").toString("base64");
    const sig = crypto.createHmac("sha256", secret).update(itemsB64).digest("hex");

    const url = `${base.replace(/\/$/, "")}/?headless_checkout=1&items=${encodeURIComponent(itemsB64)}&sig=${sig}`;

    return NextResponse.json({ url });
};
