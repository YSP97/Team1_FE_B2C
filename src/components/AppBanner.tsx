import useWindowSize from '@/hooks/useWindowSize';
import Button from '@/components/Button';
import { useCallback, useState } from 'react';
import Modal from '@/components/Modal/Modal';
import QRCode from '@/components/QRCode';
import dynamic from 'next/dynamic';

function AppBanner() {
  const isMobile = useWindowSize();
  const [isModalOpened, setIsModalOpened] = useState(false);

  const LottieAnimation = dynamic(
    () => import('../components/LottieAnimation'),
    {
      ssr: false,
    },
  );

  const handleToggleModal = useCallback(() => {
    setIsModalOpened((prev) => !prev);
  }, []);

  const handleDownload = () => {
    if (isMobile) {
      // 모바일에서의 경우, 사용자 OS에 맞는 링크로 이동
      const userAgent = navigator.userAgent.toLowerCase();
      if (userAgent.includes('android')) {
        window.location.href =
          'https://play.google.com/store/games?hl=ko&pli=1';
      } else if (userAgent.includes('iphone') || userAgent.includes('ipod')) {
        window.location.href = 'https://www.apple.com/kr/app-store/';
      } else {
        alert('지원되지 않는 기기입니다.');
      }
    } else {
      // 데스크탑에서는 모달 띄우기
      handleToggleModal();
    }
  };

  return (
    <section className="flex h-[calc(100vh-3rem)] items-center md:relative md:h-[calc(100vh-3.75rem)] md:bg-[url('/assets/banner01.webp')] md:bg-cover md:bg-center">
      {isMobile ? (
        <div className="flex flex-1 flex-col items-center gap-8">
          <h1 className="flex flex-col items-center text-lg">
            <span>무조건 운동하게 만드는</span>
            <strong className="text-primary">핏큘레이터</strong>
          </h1>
          <div className="flex flex-col items-center gap-1">
            <div className="max-w-[320px]">
              <LottieAnimation />
            </div>
            <p>자기관리의 시작</p>
            <p>나에게 필요한 운동량을 매주 채워보세요</p>
          </div>
          <Button type="primary" rounded="rounded-xl" onClick={handleDownload}>
            앱 다운로드
          </Button>
        </div>
      ) : (
        <div className="absolute left-[20%] top-1/2 flex -translate-y-1/2 flex-col items-start gap-8">
          <h1 className="flex flex-row gap-2 text-2xl font-semibold text-[rgba(0,0,0,1)]">
            <span>무조건 운동하게 만드는</span>
            <strong className="font-bold text-primary">핏큘레이터</strong>
          </h1>
          <div className="flex flex-col gap-1 text-lg text-[rgba(0,0,0,1)]">
            <p>자기관리의 시작</p>
            <p>나에게 필요한 운동량을 매주 채워보세요</p>
          </div>
          <Button type="primary" rounded="rounded-xl" onClick={handleDownload}>
            앱 다운로드
          </Button>
        </div>
      )}
      <Modal
        title="핏큘레이터 앱 다운로드"
        isOpened={isModalOpened}
        onClose={() => {
          handleToggleModal();
        }}
      >
        <div className="flex flex-1 flex-col justify-between gap-12 overflow-auto px-6 md:flex-row md:gap-[3rem] md:px-10">
          <QRCode />
        </div>
      </Modal>
    </section>
  );
}

export default AppBanner;
