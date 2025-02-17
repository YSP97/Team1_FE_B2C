import { mockPrivacy } from "@/mockData/mockPrivacy";

export default function PrivacyPolicy() {
  return (
    <main className='bg-bg-primary p-6 md:p-16 '>
      <h2 className='text-white font-extrabold text-md mb-4 md:text-lg md:mb-8'>
        개인정보 처리방침
      </h2>
      <dl className='flex flex-col gap-6'>
        {mockPrivacy.map((item, index) => (
          <div key={index} className='flex flex-col gap-1'>
            <dt className='text-gray-100 text-base font-semibold'>
              {item.title}
            </dt>
            {Array.isArray(item.content) ? (
              item.content.map((paragraph, i) =>
                typeof paragraph === "string" ? (
                  <dd key={i} className='text-sm font-light text-gray-100'>
                    {paragraph}
                  </dd>
                ) : (
                  <dd key={i} className='text-sm font-light text-gray-100'>
                    <p className='font-light'>{paragraph.list}</p>
                    <ul className='list-disc pl-5'>
                      {paragraph.desc.map((descItem, j) =>
                        Array.isArray(descItem) ? (
                          <ul key={j} className='list-disc pl-5'>
                            {descItem.map((subItem, k) => (
                              <li key={k}>{subItem}</li>
                            ))}
                          </ul>
                        ) : (
                          <li key={j}>{descItem}</li>
                        )
                      )}
                    </ul>
                  </dd>
                )
              )
            ) : (
              <dd className='text-sm font-light text-gray-100'>
                {item.content}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </main>
  );
}
