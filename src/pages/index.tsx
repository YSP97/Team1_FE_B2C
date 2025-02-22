import AppBanner from '@/components/AppBanner';
import Apply from '@/components/Apply';
import Detailed from '@/components/Detailed';
import Faq from '@/components/Faq/Faq';
import Review from '@/components/Review/Review';
import dynamic from 'next/dynamic';

const AppIntroduce = dynamic(() => import('../components/AppIntroduce'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <AppBanner />
      <AppIntroduce />
      <Detailed />
      <Review />
      <Apply />
      <Faq />
    </>
  );
}
