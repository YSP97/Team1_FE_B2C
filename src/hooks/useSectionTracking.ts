import { useEffect } from 'react';

const useSectionTracking = (sectionId: string) => {
  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 섹션이 보이면 GTM 이벤트 전송
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: 'section_view',
              section_name: sectionId,
            });
          }
        });
      },
      { threshold: 0.5 }, // 50% 이상 보일 때 감지
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [sectionId]);
};

export default useSectionTracking;
