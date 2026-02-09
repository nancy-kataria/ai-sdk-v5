import { streamText, UIMessage, convertToModelMessages } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
      model: openai("gpt-5-nano"),
      // prompt engineering
      messages: [
        {
          role: "system",
          content:
            "Convert user questions to code examples only.",
        },
        {
            role: "user",
            content: "How to toggle a button?"
        },
        {
            role: "assistant",
            content: "const [isOpen, setIsOpen] = useState(false);\n const toggle = () => setIsOpen(!isOpen);"
        },
        // a format that ai model expects
        ...(await convertToModelMessages(messages)),
      ],
    });

    result.usage.then((usage) => {
      console.log({
        messageCount: messages.length,
        inputTokens: usage.inputTokens,
        outputTokens: usage.outputTokens,
        totalTokens: usage.totalTokens,
      });
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Error streaming chat completion:", error);
    return new Response("Failed to stream chat completion", { status: 500 });
  }
}
