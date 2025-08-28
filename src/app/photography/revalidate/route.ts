import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const maxDuration = 60; // This function can run for a maximum of 60 seconds

// Webhook: https://<your-site>/photography/revalidate?secret=<token>
export async function POST(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get("secret");

    // It's necessary to use a secret token to secure this route.
    // This should be an environment variable.
    if (secret !== process.env.REVALIDATION_SECRET) {
        return new NextResponse(JSON.stringify({ message: "Invalid Token" }), {
            status: 401,
            statusText: "Unauthorized",
            headers: { "Content-Type": "application/json" },
        });
    }

    // The path to revalidate.
    // This could be passed in the body of the request from the webhook if you have multiple pages.
    const path = "/photography";

    try {
        revalidatePath(path);
        return NextResponse.json({ revalidated: true, now: Date.now() });
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ message: "Error revalidating path" }),
            { status: 500 }
        );
    }
} 