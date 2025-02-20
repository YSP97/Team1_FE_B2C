import CheckBox from './CheckBox';
type ExerciseGoalProps = {
  selectedGoals: string[];
  onChange: (name: string, isChecked: boolean) => void;
};

function ExerciseGoal({ selectedGoals, onChange }: ExerciseGoalProps) {
  const GoalArray = [
    '재미 또는 흥미',
    '운동 수행 능력 향상',
    '다이어트',
    '건강 및 질병 예방',
    '근력/근육량 향상',
    '운동 습관 형성',
  ];

  return (
    <div className="mx-auto box-content flex max-w-[20.4375rem] flex-col items-start gap-4 self-stretch px-6 md:max-w-[45rem]">
      <div className="flex items-center gap-2 self-stretch">
        <span className="text-md font-normal text-gray-100">운동 목표</span>
        <span className="text-sm font-normal text-gray-200 md:text-md">
          복수 선택 가능
        </span>
      </div>
      <div className="flex flex-wrap content-center items-center gap-2 self-stretch">
        {GoalArray.map((d) => (
          <CheckBox
            key={d}
            name={d}
            isChecked={selectedGoals.includes(d)}
            onChange={onChange}
            width="w-[20.4375rem] md:w-[22.25rem]"
          ></CheckBox>
        ))}
      </div>
    </div>
  );
}

export default ExerciseGoal;
