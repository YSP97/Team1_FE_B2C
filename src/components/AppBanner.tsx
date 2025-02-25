import { useState, useCallback } from 'react';
import AppImageWithScreen from './AppImageWithScreen';
import Button from '@/components/Button';
import Modal from '@/components/Modal/Modal';
import QRCode from '@/components/QRCode';
import useWindowSize from '@/hooks/useWindowSize';

function AppBanner() {
  const isMobile = useWindowSize();
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleToggleModal = useCallback(() => {
    setIsModalOpened((prev) => !prev);
  }, []);

  console.log('AppBanner');

  // 모바일에서 앱 다운로드 버튼 클릭 시, 해당 앱스토어로 이동
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
    <section className="flex h-[calc(100vh-3rem)] flex-col items-center gap-6 py-8 md:flex-row md:px-20">
      <div className="flex flex-col items-center gap-4 md:flex-[0.6] md:items-start md:pl-[12%]">
        <h1 className="text-center text-lg font-bold text-white md:text-left md:text-xl">
          무조건 운동하게 만드는
          <br />
          <strong className="font-bold text-primary">핏큘레이터</strong>
        </h1>

        {isMobile ? null : (
          <div className="text-center text-md text-gray-100 md:mb-6 md:text-left">
            <p>자기관리의 시작</p>
            <p>나에게 필요한 운동량을 매주 채워보세요</p>
          </div>
        )}

        {/* 버튼 */}
        <Button type="primary" rounded="rounded-xl" onClick={handleDownload}>
          앱 다운로드
        </Button>
      </div>

      {/* 이미지 영역 */}
      <div className="flex flex-1 items-start justify-center overflow-hidden">
        <AppImageWithScreen src="/assets/appImage1.jpg" alt="화면1" />
      </div>
      {isMobile ? (
        <div className="text-center text-md text-gray-100 md:text-left">
          <p>자기관리의 시작</p>
          <p>나에게 필요한 운동량을 매주 채워보세요</p>
        </div>
      ) : null}
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
