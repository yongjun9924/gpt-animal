export interface AnimalResult {
  animal: string;
  emoji: string;
  title: string;
  description: string;
  traits: string[];
  compatibility: {
    good: string;
    bad: string;
  };
}

function toUrlSafe(base64: string): string {
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromUrlSafe(urlSafe: string): string {
  let base64 = urlSafe.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) base64 += "=";
  return base64;
}

export function encodeResult(data: AnimalResult): string {
  const json = JSON.stringify(data);
  const base64 = Buffer.from(json, "utf-8").toString("base64");
  return toUrlSafe(base64);
}

export function decodeResult(encoded: string): AnimalResult | null {
  try {
    const base64 = fromUrlSafe(encoded);
    let json: string;
    if (typeof window !== "undefined") {
      json = decodeURIComponent(escape(atob(base64)));
    } else {
      json = Buffer.from(base64, "base64").toString("utf-8");
    }
    return JSON.parse(json) as AnimalResult;
  } catch {
    return null;
  }
}
