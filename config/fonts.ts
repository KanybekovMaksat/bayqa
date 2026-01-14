import localFont from 'next/font/local';

export const fontSans = localFont({
  src: [
    {
      path: '../public/fonts/TikTokSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/TikTokSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/TikTokSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/TikTokSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/TikTokSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/TikTokSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/TikTokSans-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
});
