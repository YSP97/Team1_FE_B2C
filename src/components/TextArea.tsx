type TextAreaProps = {
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
};

function TextArea({
  placeholder = "자유롭게 작성해 주세요",
  onChange,
  value,
}: TextAreaProps) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="outline-none text-white w-full flex min-h-60 px-4 py-4 items-start gap-2 self-stretch bg-bg-secondary"></textarea>
  );
}

export default TextArea;
