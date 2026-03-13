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

export function encodeResult(data: AnimalResult): string {
  const json = JSON.stringify(data);
  if (typeof window !== "undefined") {
    return btoa(unescape(encodeURIComponent(json)));
  }
  return Buffer.from(json, "utf-8").toString("base64");
}

export function decodeResult(encoded: string): AnimalResult | null {
  try {
    let json: string;
    if (typeof window !== "undefined") {
      json = decodeURIComponent(escape(atob(encoded)));
    } else {
      json = Buffer.from(encoded, "base64").toString("utf-8");
    }
    return JSON.parse(json) as AnimalResult;
  } catch {
    return null;
  }
}
