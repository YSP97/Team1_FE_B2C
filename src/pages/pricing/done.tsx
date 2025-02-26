import Button from '@/components/Button';
import dynamic from 'next/dynamic';

export default function done() {
  const LottieCheck = dynamic(() => import('../../components/LottieCheck'), {
    ssr: false,
  });
  return (
    <div className="h-vh mb-[323px] flex w-full flex-col items-center justify-center gap-5 pt-[60px]">
      <div className="max-w-[300px]">
        <LottieCheck></LottieCheck>
      </div>
      <h2 className="whitespace-nowrap text-lg font-bold text-white">
        신청이 완료되었습니다.
      </h2>
      <div className="text-center">
        <span className="text-gray-100">
          어플리케이션을 다운로드후 로그인 해주세요.
        </span>
      </div>
      <Button type="primary" isLink={true} href="/">
        이전 페이지로 돌아가기
      </Button>
    </div>
  );
}
