import CheckBox from './CheckBox';
type ExerciseGoalProps = {
  selectedGoals: string[];
  onChange: (name: string, isChecked: boolean) => void;
  checkBoxList: string[];
};

function ExerciseGoal({
  checkBoxList,
  selectedGoals,
  onChange,
}: ExerciseGoalProps) {
  return (
    <div className="mx-auto flex w-full flex-col items-start gap-4">
      <div className="flex items-center gap-2">
        <span className="text-md font-normal text-gray-100">운동 목표</span>
        <span className="text-sm font-normal text-gray-200 md:text-md">
          복수 선택 가능
        </span>
      </div>
      <div className="grid w-full grid-cols-1 items-center gap-2 self-stretch md:grid-cols-2 md:gap-x-2 md:gap-y-4">
        {checkBoxList.map((d) => (
          <CheckBox
            key={d}
            name={d}
            isChecked={selectedGoals?.includes(d)}
            onChange={onChange}
          ></CheckBox>
        ))}
      </div>
    </div>
  );
}

export default ExerciseGoal;
