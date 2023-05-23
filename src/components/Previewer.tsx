import { marked } from "marked";
import Prism from "prismjs";

interface Props {
  content: string;
}

const Previewer = ({ content }: Props) => {
  marked.setOptions({
    breaks: true,
    highlight: function (code) {
      Prism.highlight(code, Prism.languages.javascript, "");
    },
  });
  const renderer = new marked.Renderer();
  renderer.link = function (href, text) {
    return '<a target="_blank" href="' + href + '">' + text + "</a>";
  };
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(content, {renderer:renderer}),
      }}
    />
  );
};

export default Previewer;
