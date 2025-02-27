import { useEffect, useState } from 'react';

const useSectionTime = (sectionId: string) => {
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartTime(Date.now());
          } else if (startTime) {
            const elapsedTime = Date.now() - startTime;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: 'section_time',
              section_name: sectionId,
              elapsed_time: elapsedTime / 1000, // 초 단위 변환
            });
            setStartTime(null);
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [sectionId, startTime]);

  return null;
};

export default useSectionTime;
