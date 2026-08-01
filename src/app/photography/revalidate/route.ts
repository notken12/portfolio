import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { PHOTOS_CACHE_TAG } from "@/lib/photos";

// Webhook: https://<your-site>/photography/revalidate?secret=<token>
export async function POST(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get("secret");

    if (secret !== process.env.REVALIDATION_SECRET) {
        return new NextResponse(JSON.stringify({ message: "Invalid Token" }), {
            status: 401,
            statusText: "Unauthorized",
            headers: { "Content-Type": "application/json" },
        });
    }

    revalidateTag(PHOTOS_CACHE_TAG);
    return NextResponse.json({ revalidated: true, now: Date.now() });
}
