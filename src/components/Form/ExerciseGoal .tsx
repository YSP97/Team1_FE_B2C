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
    <div className="mx-auto flex w-full flex-col items-start gap-4">
      <div className="flex items-center gap-2">
        <span className="text-md font-normal text-gray-100">운동 목표</span>
        <span className="text-sm font-normal text-gray-200 md:text-md">
          복수 선택 가능
        </span>
      </div>
      <div className="grid w-full grid-cols-1 items-center gap-2 self-stretch md:grid-cols-2 md:gap-x-2 md:gap-y-4">
        {GoalArray.map((d) => (
          <CheckBox
            key={d}
            name={d}
            isChecked={selectedGoals.includes(d)}
            onChange={onChange}
          ></CheckBox>
        ))}
      </div>
    </div>
  );
}

export default ExerciseGoal;
