# Shadcn Sidebar Project (v0.0.2)

A Next.js project featuring a customizable sidebar component built with Shadcn UI.

> **Special Note**: This project was created by a non-coder using [Windsurf](https://codeium.com/windsurf), the world's first agentic IDE by Codeium. It demonstrates how modern AI-powered development tools can help anyone create professional applications without prior coding experience.

## Features

- Modern UI with Shadcn components
- Light/Dark mode support
- Responsive design
- Accessibility-first approach
- TypeScript support
- Built with AI assistance in Windsurf IDE
- Comprehensive development guidelines for consistency

## Tech Stack

- Next.js 15.0.3
- React 19 (RC)
- TypeScript
- Tailwind CSS
- Shadcn UI
- Windsurf IDE by Codeium

## Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
cd rm-sidebar-08
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                   # Next.js app directory
├── components/           # React components
│   ├── ui/              # Shadcn UI components
│   └── ...              # Custom components
├── hooks/               # Custom React hooks
└── lib/                 # Utility functions
```

## Development Guidelines & Standards

### Core Principles

1. Use Next.js with TypeScript and Tailwind CSS for optimal developer experience and type safety
2. Implement the App Router architecture
3. Utilize Server Components by default, using Client Components only when necessary
4. Leverage Server Actions for data mutations
5. Ensure accessibility (WCAG guidelines)
6. Follow proper documentation practices for both technical and non-technical audiences

### Documentation Standards

Every component, function, and significant code block should include both plain English and technical documentation:

```typescript
/**
 * 👥 Plain English:
 * This is a reusable button that can be customized to look different ways
 * (like primary, secondary, or outline styles). It can handle being clicked,
 * being disabled, and showing a loading state.
 * 
 * 🔧 Technical Details:
 * @component Button
 * @extends shadcn/ui button component
 * @description Polymorphic button component with variant support
 * @props {ButtonProps} - Extends HTML button attributes
 * 
 * @example
 * // Primary button with loading state
 * <Button variant="primary" isLoading>Save Changes</Button>
 */
```

### Shadcn Component Integration

```typescript
import { Button } from "@/components/ui/button"

/**
 * 👥 What This Does:
 * Creates a customized button that matches our app's style but can be
 * modified for different uses.
 */
export function CustomButton({ className, ...props }) {
  return <Button className={cn("custom-styles", className)} {...props} />
}
```

### Advanced Features

#### 1. Caching Strategy
```typescript
/**
 * 👥 Plain English:
 * This helps the app remember and reuse information instead of fetching it every time.
 * Think of it like a smart notebook that remembers important information.
 */

const getCachedData = unstable_cache(
  async () => fetchData(),
  ['cache-key'],
  { revalidate: 3600 }
)
```

#### 2. Error Handling
```typescript
/**
 * 👥 Plain English:
 * Creates a safety net that catches errors and shows a friendly message.
 */

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="error-container">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```

### Best Practices Checklist

* Documentation
  * a. Plain English explanation included
  * b. Technical documentation complete
  * c. Usage examples provided
  * d. Edge cases documented

* Implementation
  * a. Proper Server/Client component usage
  * b. Accessibility considerations
  * c. Performance optimizations
  * d. Error handling
  * e. Type safety

### Development Instructions

1. Always include both plain English and technical documentation
2. Follow provided patterns for components and functions
3. Use consistent documentation structure
4. Include practical examples with code
5. Consider accessibility in all implementations
6. Maintain type safety throughout
7. Optimize for performance where possible

## License

MIT

---
Created with:
- [Next.js](https://nextjs.org)
- [Shadcn UI](https://ui.shadcn.com/)
- [Windsurf IDE](https://codeium.com/windsurf) by Codeium

> Want to build something like this? Check out [Windsurf](https://codeium.com/windsurf) - making professional development accessible to everyone!