'use client';
import { useSearchParams } from 'next/navigation';
import ProgressSection from '@/components/Form/ProgressSection';
import Form from '@/components/Form/Form';
import Head from 'next/head';

export default function Register() {
  const searchParams = useSearchParams();
  const step = Number(searchParams.get('step')) || 1;
  const plan = 'Plus';

  return (
    <>
      <Head>
        <title>Fitculator {plan} 신청하기</title>
        <meta name="description" content="핏큘레이터 유료 구독하기"/>
      </Head>
      <div className="mx-auto max-w-[20.4375rem] py-28 text-gray-100 md:max-w-[45rem]">
        <ProgressSection currentStep={step} plan={plan} />
        <Form currentStep={step} />
      </div>
    </>
  );
}
