"use client"

import AceEditor from "react-ace";
import { Copy, ExternalLink } from "lucide-react";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-ocaml";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/keybinding-vim";

// Register custom oxocarbon theme
import ace from "ace-builds/src-noconflict/ace";

const oxocarbonTheme = {
  "cssText": `
    .ace-oxocarbon {
      color: #f2f4f8;
      background-color: #161616;
    }
    .ace-oxocarbon .ace_gutter {
      color: #525252;
      background: #131313;
    }
    .ace-oxocarbon .ace_print-margin {
      width: 1px;
      background: #262626;
    }
    .ace-oxocarbon .ace_cursor {
      color: #ffffff;
    }
    .ace-oxocarbon .ace_marker-layer .ace_selection {
      background: #393939;
    }
    .ace-oxocarbon .ace_marker-layer .ace_step {
      background: #ee5396;
    }
    .ace-oxocarbon .ace_marker-layer .ace_active-line {
      background: #262626;
    }
    .ace-oxocarbon .ace_gutter-active-line {
      color: #ffffff;
    }
    .ace-oxocarbon .ace_marker-layer .ace_selected-word {
      background: #393939;
    }
    .ace-oxocarbon .ace_fold {
      color: #dde1e6;
    }
    .ace-oxocarbon .ace_comment {
      color: #525252;
    }
    .ace-oxocarbon .ace_keyword {
      color: #ff7eb6;
    }
    .ace-oxocarbon .ace_constant.ace_numeric {
      color: #82cfff;
    }
    .ace-oxocarbon .ace_constant.ace_character {
      color: #08bdba;
    }
    .ace-oxocarbon .ace_constant.ace_character.ace_escape {
      color: #3ddbd9;
    }
    .ace-oxocarbon .ace_constant.ace_character.ace_language {
      color: #78a9ff;
    }
    .ace-oxocarbon .ace_constant.ace_character.ace_other {
      color: #78a9ff;
    }
    .ace-oxocarbon .ace_support.ace_function {
      font-weight: bold;
      color: #ff7eb6;
    }
    .ace-oxocarbon .ace_support.ace_constant {
      color: #08bdba;
    }
    .ace-oxocarbon .ace_support.ace_class {
      color: #3ddbd9;
    }
    .ace-oxocarbon .ace_support.ace_type {
      color: #3ddbd9;
    }
    .ace-oxocarbon .ace_storage {
      color: #78a9ff;
    }
    .ace-oxocarbon .ace_storage.ace_type {
      color: #3ddbd9;
    }
    .ace-oxocarbon .ace_invalid {
      color: #ee5396;
    }
    .ace-oxocarbon .ace_invalid.ace_deprecated {
      color: #525252;
    }
    .ace-oxocarbon .ace_string {
      color: #be95ff;
    }
    .ace-oxocarbon .ace_variable {
      color: #82cfff;
    }
    .ace-oxocarbon .ace_variable.ace_parameter {
      color: #dde1e6;
    }
    .ace-oxocarbon .ace_entity.ace_other.ace_attribute-name {
      color: #33b1ff;
    }
    .ace-oxocarbon .ace_entity.ace_name.ace_tag {
      color: #82cfff;
    }
    .ace-oxocarbon .ace_invisible {
      color: #525252;
    }
  `,
  "isDark": true,
  "cssClass": "ace-oxocarbon"
};

if (typeof ace !== "undefined" && ace.define && !ace.require("ace/theme/oxocarbon")) {
  ace.define(
    "ace/theme/oxocarbon",
    ["require", "exports"],
    function (
      require: (moduleName: string) => { importCssString: (cssText: string, className: string) => void },
      exports: { isDark: boolean; cssClass: string; cssText: string },
    ) {
      exports.isDark = oxocarbonTheme.isDark;
      exports.cssClass = oxocarbonTheme.cssClass;
      exports.cssText = oxocarbonTheme.cssText;
      const dom = require("ace/lib/dom");
      dom.importCssString(exports.cssText, exports.cssClass);
    }
  );
}

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "rust" }: CodeBlockProps) {
  const lineCount = code.split("\n").length;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const handleOpenInNewTab = () => {
    const win = window.open();
    if (win) {
      win.document.write(`<!DOCTYPE html><html><head><title>Code Editor</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.14/ace.min.css" />
        <style>
          html, body { height: 100%; margin: 0; background: #161616; }
          #editor { height: 100vh; width: 100vw; }
        </style>
      </head><body>
        <div id='editor'></div>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.14/ace.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.14/keybinding-vim.js'></script>
        <script>
          var oxocarbonTheme = {
            cssText: ${JSON.stringify(oxocarbonTheme.cssText)},
            isDark: true,
            cssClass: 'ace-oxocarbon'
          };
          ace.define('ace/theme/oxocarbon', ['require', 'exports'], function(require, exports) {
            exports.isDark = oxocarbonTheme.isDark;
            exports.cssClass = oxocarbonTheme.cssClass;
            exports.cssText = oxocarbonTheme.cssText;
            var dom = require('ace/lib/dom');
            dom.importCssString(exports.cssText, exports.cssClass);
          });
          var editor = ace.edit('editor');
          editor.setTheme('ace/theme/oxocarbon');
          editor.session.setMode('ace/mode/${language}');
          editor.setValue(${JSON.stringify(code)}, -1);
          editor.setReadOnly(false);
          editor.setFontSize(15);
          editor.setShowPrintMargin(true);
          editor.setOption('wrap', true);
          editor.setOption('displayIndentGuides', false);
          editor.setOption('hScrollBarAlwaysVisible', false);
          editor.setOption('vScrollBarAlwaysVisible', false);
          editor.setOption('animatedScroll', true);
          editor.setOption('useSoftTabs', true);
          editor.setOption('highlightActiveLine', true);
          editor.setOption('showLineNumbers', false);
          editor.setOption('showGutter', false);
          editor.setKeyboardHandler('ace/keyboard/vim');
        </script>
      </body></html>`);
      win.document.close();
    }
  };

  return (
    <div className="relative rounded-md overflow-hidden border border-bg3 bg-bg2 mb-6">
      <div className="absolute top-2 right-2 flex gap-2 z-10">
        <button
          onClick={handleCopy}
          className="p-2 hover:bg-bg3 text-fg1 hover:text-fg3 transition-colors"
          aria-label="Copy code"
        >
          <Copy className="h-4 w-4" />
        </button>
        <button
          onClick={handleOpenInNewTab}
          className="p-2 hover:bg-bg3 text-fg1 hover:text-fg3 transition-colors"
          aria-label="Open in new tab"
        >
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
      <AceEditor
        mode={language}
        theme="oxocarbon"
        value={code}
        name="codeblock"
        readOnly={false}
        fontSize={15}
        width="100%"
        minLines={lineCount + 1}
        maxLines={lineCount + 1}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        wrapEnabled={true}
        keyboardHandler="vim"
        setOptions={{
          cursorStyle: "wide",
          showLineNumbers: false,
          showPrintMargin: true,
          wrap: true,
          displayIndentGuides: false,
          hScrollBarAlwaysVisible: false,
          vScrollBarAlwaysVisible: false,
          animatedScroll: true,
          useSoftTabs: true,
          highlightActiveLine: true,
        }}
        editorProps={{ $blockScrolling: true }}
        className="oxocarbon"
        style={{ borderRadius: 0, width: '100%', background: '#161616' }}
      />
    </div>
  );
} 
