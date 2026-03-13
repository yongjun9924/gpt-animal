import { NextRequest, NextResponse } from "next/server";
import { encodeResult, AnimalResult } from "@/lib/encode";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://gpt-animal.vercel.app";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result: AnimalResult = {
      animal: body.animal,
      emoji: body.emoji,
      title: body.title,
      description: body.description,
      traits: body.traits,
      compatibility: {
        good: body.compatibility?.good || body.good_match || "",
        bad: body.compatibility?.bad || body.bad_match || "",
      },
    };

    if (!result.animal || !result.emoji || !result.title || !result.description) {
      return NextResponse.json(
        { error: "Missing required fields: animal, emoji, title, description" },
        { status: 400 }
      );
    }

    const encoded = encodeResult(result);
    const resultUrl = `${BASE_URL}/result?d=${encoded}`;

    return NextResponse.json({
      url: resultUrl,
      message: `결과 페이지가 생성되었습니다! 이 링크를 사용자에게 공유해주세요: ${resultUrl}`,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "https://chatgpt.com",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, openai-conversation-id, openai-ephemeral-user-id",
    },
  });
}
