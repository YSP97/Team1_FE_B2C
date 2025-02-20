import CheckBox from './CheckBox';

type WearableDeviceProps = {
  selectedDevices: string[];
  onChange: (name: string, isChecked: boolean) => void;
};

const DeviceArray = [
  '애플워치',
  '갤럭시 워치',
  '가민 워치',
  '샤오미 밴드',
  '핏빗(Fitbit)',
  '기타',
  '없음',
];

function WearableDevice({ selectedDevices, onChange }: WearableDeviceProps) {
  return (
    <div className="mx-auto flex w-full flex-col items-start gap-4">
      <div className="flex items-center gap-2">
        <span className="text-md font-normal text-gray-100">
          사용 중인 웨어러블 디바이스
        </span>
        <span className="text-sm font-normal text-gray-200 md:text-md">
          복수 선택 가능
        </span>
      </div>
      <div className="grid w-full grid-cols-2 items-center gap-2 md:grid-cols-3 md:gap-x-2 md:gap-y-4">
        {DeviceArray.map((d) => (
          <CheckBox
            key={d}
            name={d}
            isChecked={selectedDevices.includes(d)}
            onChange={onChange}
          ></CheckBox>
        ))}
      </div>
    </div>
  );
}

export default WearableDevice;
