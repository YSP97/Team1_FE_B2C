import { useState, useEffect } from 'react';
import AppImageWithScreen from './AppImageWithScreen';
import Button from '@/components/Button';

function AppBanner() {
  // 모바일 상태
  const [isMobile, setIsMobile] = useState(false);

  // 화면 크기 변화 감지
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 모바일 크기 기준
    };

    handleResize(); // 초기 화면 크기 확인

    window.addEventListener('resize', handleResize); // 화면 크기 변경시마다 상태 갱신

    return () => window.removeEventListener('resize', handleResize); // 컴포넌트 언마운트 시 이벤트 제거
  }, []);

  return (
    <section className="flex h-[calc(100vh-3rem)] flex-col items-center gap-6 py-8 md:flex-row md:px-20">
      {/* 왼쪽 텍스트 & 버튼 */}
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
        <Button
          type="primary"
          rounded="rounded-xl"
          onClick={() => {
            console.log('다운로드 버튼 클릭');
          }}
        >
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
    </section>
  );
}

// function AppBanner() {
//   // 모바일 상태
//   const [isMobile, setIsMobile] = useState(false);

//   // 화면 크기 변화 감지
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // 모바일 크기 기준
//     };

//     handleResize(); // 초기 화면 크기 확인

//     window.addEventListener('resize', handleResize); // 화면 크기 변경시마다 상태 갱신

//     return () => window.removeEventListener('resize', handleResize); // 컴포넌트 언마운트 시 이벤트 제거
//   }, []);

//   return (
//     <section className="flex h-[calc(100vh-3rem)] flex-col flex-nowrap items-center gap-8 py-10 md:max-w-7xl md:flex-row">
//       {/* 모바일에서만 나오는 마크업 */}
//       {isMobile ? (
//         <>
//           <div className="flex flex-col items-center gap-4">
//             <h1 className="text-center text-lg font-bold text-white">
//               무조건 운동하게 만드는
//               <br />
//               <strong className="font-bold text-primary">핏큘레이터</strong>
//             </h1>

//             {/* 버튼 */}
//             <Button
//               type="primary"
//               rounded="rounded-xl"
//               onClick={() => {
//                 console.log('다운로드 버튼 클릭');
//               }}
//             >
//               앱 다운로드
//             </Button>
//           </div>

//           {/* 이미지 영역 */}
//           <div className="flex-1 overflow-hidden">
//             <AppImageWithScreen src="/assets/appImage1.jpg" alt="화면1" />
//           </div>

//           {/* 설명 텍스트 */}
//           <div className="text-center text-md text-gray-100">
//             <p>자기관리의 시작</p>
//             <p>나에게 필요한 운동량을 매주 채워보세요</p>
//           </div>
//         </>
//       ) : (
//         // 데스크탑에서만 나오는 마크업
//         <>
//           <div className="flex flex-col items-center gap-4 md:items-start">
//             <h1 className="text-center text-lg font-bold text-white md:text-left">
//               무조건 운동하게 만드는
//               <br />
//               <strong className="font-bold text-primary">핏큘레이터</strong>
//             </h1>

//             {/* 설명 텍스트 */}
//             <div className="text-center text-md text-gray-100 md:text-left">
//               <p>자기관리의 시작</p>
//               <p>나에게 필요한 운동량을 매주 채워보세요</p>
//             </div>

//             {/* 버튼 */}
//             <Button
//               type="primary"
//               rounded="rounded-xl"
//               onClick={() => {
//                 console.log('다운로드 버튼 클릭');
//               }}
//             >
//               앱 다운로드
//             </Button>
//           </div>

//           {/* 이미지 영역 */}
//           <div className="flex-1 overflow-hidden md:flex md:justify-end">
//             <AppImageWithScreen src="/assets/appImage1.jpg" alt="화면1" />
//           </div>
//         </>
//       )}
//     </section>
//   );
// }

export default AppBanner;
