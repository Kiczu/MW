import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

type LineItem = { product_id: number; quantity: number; variation_id?: number };

export const POST = async (req: Request) => {
    const body = await req.json().catch(() => null);

    const raw =
        body?.line_items ??
        body?.lineItems ??
        body?.items ??
        [];

    const line_items: LineItem[] = Array.isArray(raw) ? raw : [];

    if (line_items.length === 0) {
        return NextResponse.json({ message: "Brak pozycji" }, { status: 400 });
    }

    const base = process.env.WP_URL;
    const secret = process.env.HEADLESS_SHARED_SECRET;
    if (!base || !secret) {
        return NextResponse.json({ message: "Brak konfiguracji serwera" }, { status: 500 });
    }

    const itemsJson = JSON.stringify(line_items);
    const itemsB64 = Buffer.from(itemsJson, "utf8").toString("base64");
    const sig = crypto.createHmac("sha256", secret).update(itemsB64).digest("hex");

    const url = `${base.replace(/\/$/, "")}/?headless_checkout=1&items=${encodeURIComponent(
        itemsB64
    )}&sig=${sig}`;

    return NextResponse.json({ url });
};
