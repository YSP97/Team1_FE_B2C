import Image from 'next/image';

interface QRCodeImageProps {
  src: string;
  alt: string;
  caption: string;
}

// QR 코드 이미지 컴포넌트
function QRCodeImage({ src, alt, caption }: QRCodeImageProps) {
  return (
    <figure className="flex flex-1 flex-col items-center gap-8">
      <Image src={src} alt={alt} width={320} height={320} priority={true} />
      <figcaption className="rounded-md bg-gray-400 px-4 py-2 text-base text-white">
        {caption}
      </figcaption>
    </figure>
  );
}

function QRCode() {
  return (
    <>
      {/* 안드로이드 QR 코드 */}
      <QRCodeImage
        src="/assets/bike.png"
        alt="안드로이드 앱 다운로드"
        caption="안드로이드 앱 다운로드"
      />

      {/* iOS QR 코드 */}
      <QRCodeImage
        src="/assets/bike.png"
        alt="iOS 앱 다운로드"
        caption="iOS 앱 다운로드"
      />
    </>
  );
}

export default QRCode;
