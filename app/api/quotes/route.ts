import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.QUOTES_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API key not set" }, { status: 500 });
  }
  console.log(apiKey);
  

  try {
    const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: { "X-Api-Key": apiKey },
      cache: "no-store",
    });

    if (res.status !== 200) {
      return NextResponse.json({ error: "Failed to fetch quotes" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
