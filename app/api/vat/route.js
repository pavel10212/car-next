export async function GET(req) {
    const amount = parseFloat(req.nextUrl.searchParams.get("amount"));
    const rate = process.env.VAT_RATE
    const vat = Math.round(amount * rate) * 10 / 100;
    return Response.json({
        rate,
        amount,
        vat
    });
}

export async function POST(req) {
    const data = await req.json();

    const amount = parseFloat(data.amount);
    const rate = process.env.VAT_RATE;
    const vat = Math.round(amount * rate) * 100 / 100;

    return Response.json({
        rate,
        amount,
        vat
    });

}