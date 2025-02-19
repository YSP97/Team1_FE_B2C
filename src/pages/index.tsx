import dynamic from 'next/dynamic';

const AppIntroduce = dynamic(() => import('../components/AppIntroduce'), {
  ssr: false,
});

export default function Home() {
  return (
    <h1 className="text-3xl">
      <div className="h-auto">
        <AppIntroduce />
      </div>
    </h1>
  );
}
