# AI SDK v5 Demo

A [Next.js](https://nextjs.org) application showcasing the capabilities of the [Vercel AI SDK](https://sdk.vercel.ai/) v5 with OpenAI integration.

## Overview

This project demonstrates core features of the AI SDK v5, including:

- **Chat** - Multi-turn conversations with streaming responses and message history
- **Text Completion** - Basic text generation with prompts
- **Stream** - Real-time streaming responses with token usage tracking
- **Structured Data** - Generate validated structured data (objects) using Zod schemas

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.1.6
- **AI**: [Vercel AI SDK](https://sdk.vercel.ai/) with [@ai-sdk/openai](https://github.com/vercel/ai/tree/main/packages/openai)
- **UI**: [React](https://react.dev/) 19.2.3
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **Validation**: [Zod](https://zod.dev/) 4.3.6
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5


## Getting Started

### Prerequisites

- Node.js 18+ 
- OpenAI API key

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env.local` file with your OpenAI API key:

```bash
OPENAI_API_KEY=your_api_key_here
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
app/
├── api/              # API routes
│   ├── chat/         # Chat streaming endpoint
│   ├── completion/   # Text completion endpoint
│   ├── stream/       # Stream endpoint with token tracking
│   └── structured-data/  # Structured data generation
├── ui/               # UI pages
│   ├── chat/
│   ├── completion/
│   ├── stream/
│   └── structured-data/
├── layout.tsx        # Root layout
├── page.tsx          # Home page
└── globals.css       # Global styles
```

## Learn More

- [Vercel AI SDK Documentation](https://sdk.vercel.ai/)
- [Next.js Documentation](https://nextjs.org/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs)
