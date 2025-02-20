type BundleTextProps = {
  type?: 'blue';
  text: { title1: string; title2?: string; sub1?: string; sub2?: string };
};

function BundleText({ type, text }: BundleTextProps) {
  const textColor = type === 'blue' ? 'text-primary' : 'text-white';
  const baseTitleStyle =
    'text-center md:text-start text-[1.5rem] md:text-[2.5rem] font-bold leading-[140%]';
  const baseSubStyle =
    'text-gray-100 text-[0.875rem] md:text-[1.5rem] text-center md:text-start font-normal leading-[140%]';

  return (
    <div className="mx-auto flex w-full flex-col gap-2 md:max-w-[53.75rem] md:items-start md:gap-8">
      {/* 제목 부분 */}
      <div>
        <div className={`${baseTitleStyle} text-white`}>{text.title1}</div>
        {text.title2 && (
          <div className={`${baseTitleStyle} ${textColor}`}>{text.title2}</div>
        )}
      </div>

      {/* 서브 텍스트 부분 */}
      {(text.sub1 || text.sub2) && (
        <div className="flex flex-col">
          {text.sub1 && <div className={baseSubStyle}>{text.sub1}</div>}
          {text.sub2 && <div className={baseSubStyle}>{text.sub2}</div>}
        </div>
      )}
    </div>
  );
}

export default BundleText;
