export interface Nav {
  label: '팀 소개' | '비즈니스/제휴' | '가격 정책' | '문의하기';
  href: '/about-us' | '/pricing' | '/support' | `https://${string}`;
  external?: boolean;
}

const navigation: Nav[] = [
  { label: '팀 소개', href: '/about-us' },
  { label: '비즈니스/제휴', href: 'https://github.com/YSP97', external: true },
  { label: '가격 정책', href: '/pricing' },
  { label: '문의하기', href: '/support' },
];

export default navigation;