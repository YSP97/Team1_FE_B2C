import AppBanner from '@/components/AppBanner';
import Apply from '@/components/Apply';
import Community from '@/components/Community';
import Faq from '@/components/Faq/Faq';
import Review from '@/components/Review/Review';
import dynamic from 'next/dynamic';
import useSectionTracking from '@/hooks/useSectionTracking';
import useSectionTime from '@/hooks/useSectionTime';

const AppIntroduce = dynamic(() => import('../components/AppIntroduce'), {
  ssr: false,
});
const Detailed = dynamic(() => import('../components/Detailed'), {
  ssr: false,
});

export default function Home() {
  useSectionTracking('app-banner');
  useSectionTracking('apply');
  useSectionTracking('community');
  useSectionTracking('faq');
  useSectionTracking('review');

  useSectionTime('app-banner');
  useSectionTime('apply');
  useSectionTime('community');
  useSectionTime('faq');
  useSectionTime('review');
  console.log('index');
  return (
    <>
      <section id="app-banner">
        <AppBanner />
      </section>
      <section id="app-introduce">
        <AppIntroduce />
      </section>
      <section id="detailed">
        <Detailed />
      </section>
      <section id="community">
        <Community />
      </section>
      <section id="review">
        <Review />
      </section>
      <section id="apply">
        <Apply />
      </section>
      <section id="faq">
        <Faq />
      </section>
    </>
  );
}
