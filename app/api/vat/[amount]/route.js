export async function GET(req, { params }) {
    const amount = parseFloat(params.amount) / 10;
    const rate = process.env.VAT_RATE;
    const vat = Math.round(amount * rate) * 10 / 100;
    return Response.json({
        rate,
        amount,
        vat
    });
}