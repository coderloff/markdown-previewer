interface Props{
    content: string;
    handleTextAreaChange: any;
}

const Edtior = ({content, handleTextAreaChange}:Props) => {
  return (
    <textarea id="editor" value={content} cols={30} rows={10} onChange={handleTextAreaChange}></textarea>
  )
}

export default Edtior