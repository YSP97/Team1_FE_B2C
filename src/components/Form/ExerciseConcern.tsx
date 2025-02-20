type ExerciseConcernProps = {
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
};

function ExerciseConcern({
  placeholder = '자유롭게 작성해 주세요',
  onChange,
  value,
}: ExerciseConcernProps) {
  return (
    <div className="mx-auto box-content flex max-w-[20.4375rem] flex-col gap-4 px-6 md:max-w-[45rem]">
      <div className="text-md text-gray-100">
        평소 갖고 있었던 운동 관련 고민, 또는 저희 Fitculator 팀에게 하고 싶은
        말이 있다면 작성해주세요.
        <br />이 내용을 최대한 반영하여 더 좋은 서비스를 제공해드릴게요.
      </div>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mx-auto flex min-h-60 w-full items-start gap-2 self-stretch bg-bg-secondary px-4 py-6 text-[1.25rem] text-white outline-none md:text-[1.25rem]"
      ></textarea>
    </div>
  );
}

export default ExerciseConcern;
