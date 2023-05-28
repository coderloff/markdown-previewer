interface Props{
    content: string;
    handleTextAreaChange: any;
}

const Editor = ({content, handleTextAreaChange}:Props) => {
  return (
    <div className="area editor-area">
      <h2 className="title">Editor</h2>
      <span className="bar"></span>
      <textarea id="editor" value={content} cols={30} rows={10} onChange={handleTextAreaChange}><span className="bar"></span></textarea>
    </div>
  )
}

export default Editor