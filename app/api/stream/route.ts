import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request){
    try {
    const { prompt } = await req.json();

    const result = await streamText({
      model: openai("gpt-4.1-nano"),
      prompt,
    });

    // tracing token usage
    result.usage.then((usage) => {
        console.log({
            inputTokens: usage.inputTokens,
            outputTokens: usage.outputTokens,
            totalTokens: usage.totalTokens
        })
    })

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to stream text" }, { status: 500 });
  }
}