import { promises as fs } from "fs";
import path from "path";
import { portfolioItems as seed } from "../data/portfolio";

const STORE_PATH = path.join(process.cwd(), "data", "portfolio-store.json");

async function ensureStore() {
  try {
    await fs.access(STORE_PATH);
  } catch (_) {
    await writeStore(seed);
  }
}

export async function readStore() {
  try {
    await ensureStore();
    const data = await fs.readFile(STORE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Failed to read portfolio store", err);
    return seed;
  }
}

export async function writeStore(items) {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  await fs.writeFile(STORE_PATH, JSON.stringify(items, null, 2), "utf-8");
  return items;
}
