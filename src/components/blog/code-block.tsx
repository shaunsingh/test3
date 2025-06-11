interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "rust" }: CodeBlockProps) {
  // Simple syntax highlighting for demonstration
  const highlightCode = (code: string) => {
    // Keywords
    code = code.replace(
      /\b(let|mut|fn|for|while|if|else|return|new|as|in|struct|impl|pub|use|mod|const|static|trait|type|where|async|await|match|self|Self)\b/g,
      '<span class="text-purple">$1</span>'
    );
    
    // Types
    code = code.replace(
      /\b(i32|f32|f64|bool|String|Vec|Option|Result|usize|u8|u16|u32|u64|i8|i16|i64)\b/g,
      '<span class="text-blue3">$1</span>'
    );
    
    // Functions and methods
    code = code.replace(
      /(\w+)(\s*)\(/g,
      '<span class="text-blue1">$1</span>$2('
    );
    
    // Numbers
    code = code.replace(
      /\b(\d+\.?\d*)\b/g,
      '<span class="text-positive">$1</span>'
    );
    
    // Strings
    code = code.replace(
      /(["'])((?:\\.|(?!\1).)*?)\1/g,
      '<span class="text-accent2">$1$2$1</span>'
    );
    
    // Comments
    code = code.replace(
      /(\/\/.*$)/gm,
      '<span class="text-fg1 opacity-60">$1</span>'
    );
    
    // Operators
    code = code.replace(
      /([=+\-*/%<>!&|^~?:])/g,
      '<span class="text-negative">$1</span>'
    );
    
    return code;
  };

  const lines = code.trim().split('\n');
  
  return (
    <div className="relative bg-bg2 rounded-none overflow-hidden">
      <div className="flex">
        {/* Line numbers */}
        <div className="bg-bg3 px-4 py-4 text-right select-none">
          {lines.map((_, index) => (
            <div key={index} className="text-fg1 opacity-40 text-sm font-mono leading-6">
              {index + 1}
            </div>
          ))}
        </div>
        
        {/* Code content */}
        <div className="flex-1 px-6 py-4 overflow-x-auto">
          <pre className="text-sm font-mono leading-6">
            {lines.map((line, index) => (
              <div 
                key={index} 
                className="text-fg2"
                dangerouslySetInnerHTML={{ __html: highlightCode(line) }}
              />
            ))}
          </pre>
        </div>
      </div>
    </div>
  );
} 