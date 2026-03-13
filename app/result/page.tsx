import type { Metadata } from "next";
import ResultContent from "@/components/ResultContent";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ d?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const data = params.d;

  if (!data) {
    return {
      title: "결과 - GPT 동물 테스트",
    };
  }

  try {
    const json = Buffer.from(data, "base64").toString("utf-8");
    const result = JSON.parse(json);
    const title = `${result.emoji} ${result.title} - GPT 동물 테스트`;
    const description = result.description;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "website",
      },
      twitter: {
        card: "summary",
        title,
        description,
      },
    };
  } catch {
    return {
      title: "결과 - GPT 동물 테스트",
    };
  }
}

export default function ResultPage() {
  return <ResultContent />;
}
