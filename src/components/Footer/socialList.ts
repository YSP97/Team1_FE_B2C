export interface Social {
  label?: string,
  svgId: string,
  href: string
}

const socialList: Social[] = [
  {label: '이메일', href:
    'info@fitculator.io', svgId: 'icon-mail'},
    {label: '스레드', href:
      'https://www.threads.net/@fitculator_official', svgId: 'icon-threads'},
      {label: '인스타그램', href:
        'https://instagram.com/fitculator_official/', svgId: 'icon-instagram'}
]

export default socialList