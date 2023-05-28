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
  renderer.link = function (href, title, text) {
    return (
      '<a target="_blank" title=' +
      title +
      'href="' +
      href +
      '">' +
      text +
      "</a>"
    );
  };
  return (
    <div className="area preview-area">
      <h2 className="title">Preview</h2>
      <span className="bar"></span>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(content, { renderer: renderer }),
        }}
      />
    </div>
  );
};

export default Previewer;
