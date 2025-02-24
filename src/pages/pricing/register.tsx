'use client';
import { useSearchParams } from 'next/navigation';
import ProgressSection from '@/components/Form/ProgressSection';
import Form from '@/components/Form/Form';
import Head from 'next/head';

export default function Register() {
  const searchParams = useSearchParams();  
  const step = Number(searchParams.get('step')) || 1;
  const plan = searchParams.get('plan') || 'Basic';

  const capitalizeFirstLetter = (s: string) =>
    s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

  const titlePlan = capitalizeFirstLetter(plan)

  return (
    <>
      <Head>
        <title>Fitculator {titlePlan} 신청하기</title>
        <meta name="description" content="핏큘레이터 유료 구독하기" />
      </Head>
      <div className="mx-auto max-w-[20.4375rem] py-10 text-gray-100 md:max-w-[45rem] md:py-28">
        <ProgressSection currentStep={step} plan={titlePlan} />
        <Form currentStep={step} plan={plan} />
      </div>
    </>
  );
}
