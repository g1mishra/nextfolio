'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getProfile } from '@lib/config';

const codeSnippets = [
  {
    title: 'React Component',
    language: 'typescript',
    filename: 'Portfolio.tsx',
    code: `export default function Portfolio() {
  const [active, setActive] = useState(false);
  
  return (
    <div className="portfolio">
      <h1>Welcome to my work</h1>
      <button onClick={() => setActive(!active)}>
        Explore Projects
      </button>
    </div>
  );
}`,
  },
  {
    title: 'API Route',
    language: 'typescript',
    filename: 'route.ts',
    code: `export async function POST(req: Request) {
  const body = await req.json();
  
  // Process contact form
  await sendEmail({
    to: 'hello@example.com',
    subject: body.subject,
    message: body.message
  });
  
  return Response.json({ success: true });
}`,
  },
  {
    title: 'Database Query',
    language: 'typescript',
    filename: 'projects.ts',
    code: `const projects = await db
  .collection('projects')
  .find({ featured: true })
  .sort({ createdAt: -1 })
  .limit(10)
  .toArray();

return projects;`,
  },
];

export default function CodeShowcase() {
  const [activeSnippet, setActiveSnippet] = useState(0);
  const profile = getProfile();

  const currentSnippet = codeSnippets[activeSnippet];

  // Custom style for VS Code dark theme
  const customStyle = {
    margin: 0,
    padding: '1rem',
    background: '#011221',
    fontSize: '0.75rem',
    lineHeight: '1.5',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  };

  return (
    <div className="w-full lg:max-w-md bg-[#011221] border border-light rounded-lg flex flex-col">
      {/* Header */}
      <div className="bg-[#011627] border-b border-light px-2 lg:px-4 py-2 flex items-center justify-between rounded-t-lg overflow-hidden">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <span className="text-[#607B96] text-xs lg:text-sm ml-2 truncate">
            {currentSnippet.filename}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-light bg-[#011627] overflow-x-auto">
        {codeSnippets.map((snippet, index) => (
          <button
            key={index}
            onClick={() => setActiveSnippet(index)}
            className={`px-2 lg:px-4 py-2 text-xs lg:text-sm border-r border-light transition-colors whitespace-nowrap flex-shrink-0 ${
              activeSnippet === index
                ? 'bg-[#1E2D3D] text-white'
                : 'text-[#607B96] hover:bg-[#011221]'
            }`}
          >
            {snippet.title}
          </button>
        ))}
      </div>

      {/* Code Display - Responsive height */}
      <div>
        <SyntaxHighlighter
          language="typescript"
          style={vscDarkPlus}
          customStyle={customStyle}
          showLineNumbers={false}
          wrapLines={true}
          wrapLongLines={true}
        >
          {currentSnippet.code}
        </SyntaxHighlighter>
      </div>

      {/* Footer with stats */}
      <div className="bg-[#011627] border-t border-light px-3 lg:px-4 py-2 flex items-center justify-between text-xs flex-wrap gap-2 rounded-b-lg overflow-hidden">
        <div className="flex items-center gap-2 lg:gap-4">
          <span className="text-[#607B96]">
            <span className="text-[#43D9AD]">TypeScript</span>
          </span>
          <span className="text-[#607B96]">UTF-8</span>
        </div>
        <span className="text-[#607B96] whitespace-nowrap">
          {profile.yearsOfExperience}+ years coding
        </span>
      </div>
    </div>
  );
}
