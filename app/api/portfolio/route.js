import { NextResponse } from "next/server";
import { readStore, writeStore } from "../../../lib/portfolioStore";

export async function GET() {
  const items = await readStore();
  return NextResponse.json(items, { status: 200 });
}

export async function POST(request) {
  const body = await request.json();
  if (!body.title || !body.type) {
    return NextResponse.json({ error: "title and type are required" }, { status: 400 });
  }
  const items = await readStore();
  const id = body.id || `${body.title.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`;
  const newItem = {
    id,
    title: body.title,
    type: body.type,
    images: body.images?.length ? body.images : [body.image].filter(Boolean),
    links: body.links || { website: body.link || "", github: "", video: "" },
    description: body.description || ""
  };
  const updated = [newItem, ...items];
  await writeStore(updated);
  return NextResponse.json(newItem, { status: 201 });
}

export async function PUT(request) {
  const body = await request.json();
  if (!body.id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }
  const items = await readStore();
  const index = items.findIndex((item) => item.id === body.id);
  if (index === -1) return NextResponse.json({ error: "not found" }, { status: 404 });

  const updatedItem = {
    ...items[index],
    ...body,
    links: body.links || items[index].links,
    images: body.images || items[index].images
  };
  const updated = [...items];
  updated[index] = updatedItem;
  await writeStore(updated);
  return NextResponse.json(updatedItem, { status: 200 });
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id is required" }, { status: 400 });
  const items = await readStore();
  const filtered = items.filter((item) => item.id !== id);
  await writeStore(filtered);
  return NextResponse.json({ ok: true }, { status: 200 });
}
