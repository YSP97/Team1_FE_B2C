type ProgressBarProps = {
  page: number;
  totalPages: number;
};

function ProgressBar({ page, totalPages }: ProgressBarProps) {
  return (
    <div className="relative flex w-full items-center justify-start">
      {/* 전체 진행 바 */}
      <div className="absolute flex h-4 w-full overflow-hidden rounded-full bg-gray-300"></div>

      {/* 진행 상태 바 */}
      <div
        className={
          'absolute mx-[1%] h-2 max-w-[98%] overflow-hidden rounded-full bg-primary transition-all'
        }
        style={{
          width: `${(page / totalPages) * 100}%`,
          minWidth: '0.5rem',
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
