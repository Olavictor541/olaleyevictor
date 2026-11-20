import { Marked } from "marked";
import hljs from "highlight.js/lib/core";
import python from "highlight.js/lib/languages/python";
import cpp from "highlight.js/lib/languages/cpp";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import sql from "highlight.js/lib/languages/sql";
import bash from "highlight.js/lib/languages/bash";

hljs.registerLanguage("python", python);
hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("java", java);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("sql", sql);
hljs.registerLanguage("bash", bash);
hljs.registerAliases(["py"], { languageName: "python" });
hljs.registerAliases(["c++", "c"], { languageName: "cpp" });
hljs.registerAliases(["js", "jsx"], { languageName: "javascript" });
hljs.registerAliases(["ts", "tsx"], { languageName: "typescript" });
hljs.registerAliases(["sh", "shell"], { languageName: "bash" });

const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const md = new Marked({
  gfm: true,
  renderer: {
    code({ text, lang }) {
      const language = (lang || "").trim().toLowerCase();
      const html = language && hljs.getLanguage(language)
        ? hljs.highlight(text, { language }).value
        : escape(text);
      return `<pre><code class="hljs">${html}</code></pre>`;
    },
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      const external = /^https?:\/\//.test(href);
      const t = title ? ` title="${escape(title)}"` : "";
      return `<a href="${href}"${t}${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${text}</a>`;
    },
  },
});

/** Convert Markdown (written by Victor in src/posts) to HTML. */
export function renderMarkdown(source: string): string {
  return md.parse(source, { async: false }) as string;
}
