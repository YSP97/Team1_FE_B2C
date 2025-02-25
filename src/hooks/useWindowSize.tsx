import { useState, useEffect } from 'react';

function useWindowSize() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 모바일 크기 기준
    };

    handleResize(); // 초기 화면 크기 확인

    window.addEventListener('resize', handleResize); // 화면 크기 변경 시마다 상태 갱신

    return () => window.removeEventListener('resize', handleResize); // 컴포넌트 언마운트 시 이벤트 제거
  }, []);

  return isMobile;
}

export default useWindowSize;
