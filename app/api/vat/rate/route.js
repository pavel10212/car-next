export async function GET(req) {
    return Response.json({ rate: process.env.VAT_RATE });
}