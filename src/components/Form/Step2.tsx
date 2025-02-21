import ExerciseGoal from './ExerciseGoal ';
import ExerciseLevel from './ExerciseLevel';
import ReferralSource from './ReferralSource';
import WearableDevice from './WearableDevice';

function Step2() {
  return (
    <div className="mx-auto mt-12 flex max-w-[20.4375rem] flex-col gap-12 md:mt-[60px] md:max-w-[45rem]">
      <WearableDevice />
      <ExerciseGoal />
      <ExerciseLevel />
      <ReferralSource />
    </div>
  );
}

export default Step2;
