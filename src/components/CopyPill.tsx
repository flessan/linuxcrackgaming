import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

interface CopyPillProps {
  command: string;
  compact?: boolean;
  label?: string;
}

export const CopyPill: React.FC<CopyPillProps> = ({ command, compact = false, label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback for restricted clipboard contexts
      const textarea = document.createElement('textarea');
      textarea.value = command;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <div
      className={`group relative rounded-2xl border border-[#E7DAC7] bg-[#F5EDE0] transition-colors hover:border-[#D9C6AC] ${
        compact ? 'px-3.5 py-2.5' : 'p-4'
      }`}
    >
      {label && (
        <div className="mb-2 flex items-center justify-between text-xs font-medium text-[#8B7667]">
          <span className="inline-flex items-center gap-1.5">
            <Terminal className="h-3.5 w-3.5 text-[#C07A5B]" />
            {label}
          </span>
        </div>
      )}
      <div className="flex items-start justify-between gap-3">
        <pre
          className={`font-mono overflow-x-auto whitespace-pre-wrap break-all text-[#4A3B32] ${
            compact ? 'text-[12px] leading-relaxed' : 'text-[12.5px] leading-6'
          }`}
        >
          {command}
        </pre>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy command"
          className={`shrink-0 inline-flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-xs font-semibold transition-all active:scale-95 cursor-pointer ${
            copied
              ? 'border-[#B9D4BC] bg-[#E5F2E6] text-[#3F6E48]'
              : 'border-[#E3D5C1] bg-[#FFFDF9] text-[#5C4A3F] hover:border-[#D5BFA3] hover:bg-[#FAF4EA]'
          }`}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
