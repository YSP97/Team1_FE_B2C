export interface Nav {
  label: '팀 소개' | '비즈니스/제휴' | '가격 정책' | '문의하기';
  href: '/about-us' | '/pricing' | '/support' | `https://${string}`;
  external?: boolean;
}

const navigation: Nav[] = [
  {
    label: '팀 소개',
    href: 'https://fitculator.notion.site/Team-Fitculator-e403f49b2528426fb2447835567eadd0',
    external: true,
  },
  {
    label: '비즈니스/제휴',
    href: 'https://fitculator.notion.site/Team-Fitculator-e403f49b2528426fb2447835567eadd0',
    external: true,
  },
  { label: '가격 정책', href: '/pricing' },
  {
    label: '문의하기',
    href: 'https://airtable.com/apprBZkCTk4gpMmSW/pagWPcKsiuiwaS8zs/form',
    external: true,
  },
];

export default navigation;
