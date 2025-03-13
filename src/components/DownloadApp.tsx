import { QrCode, Download } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import FloatingElement from './FloatingElement';

const DownloadApp = () => {
  const androidAppLink =
    'https://play.google.com/store/apps/details?id=cloud.nphungthinh2601.lottery';
  const iosAppLink = 'https://apps.apple.com/app/locphatso';
  return (
    <section
      id='download'
      className='py-20 bg-white dark:bg-[#0a0a0a] relative overflow-hidden'
    >
      {/* Background decoration */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
        <div className='absolute -top-24 -left-24 w-48 h-48 rounded-full bg-orange-200 dark:bg-[#ff3333] opacity-10 animate-pulse'></div>
        <div
          className='absolute top-1/2 -right-24 w-64 h-64 rounded-full bg-orange-200 dark:bg-[#ff3333] opacity-10 animate-pulse'
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className='absolute -bottom-32 left-1/4 w-72 h-72 rounded-full bg-orange-200 dark:bg-[#ff3333] opacity-10 animate-pulse'
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className='container mx-auto max-w-6xl px-4 relative z-10'>
        <ScrollReveal>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4'>
              Tải Ứng Dụng Ngay
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
              Dò vé số nhanh chóng và chính xác mọi lúc, mọi nơi với ứng dụng
              Lộc Phát Số
            </p>
          </div>
        </ScrollReveal>

        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
          {/* Left side - App mockup */}
          <ScrollReveal
            direction='left'
            className='lg:w-1/2 flex justify-center'
          >
            <div className='relative'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-red-500 dark:from-[#ff3333] dark:to-[#ff0000] rounded-[32px] blur opacity-30 animate-pulse'></div>
              <div className='relative bg-gradient-to-b from-orange-100 to-orange-200 dark:from-[#1a1a1a] dark:to-[#121212] rounded-[32px] p-6 shadow-2xl flex items-center justify-center'>
                <FloatingElement amplitude={5} period={3}>
                  <img
                    src='/images/locphatso_500-500-nobg.png'
                    alt='Lộc Phát Số App Preview'
                    className='h-[400px] w-auto'
                  />
                </FloatingElement>
              </div>
            </div>
          </ScrollReveal>

          {/* Right side - Download options */}
          <ScrollReveal direction='right' className='lg:w-1/2'>
            <div className='bg-orange-50 dark:bg-[#121212] rounded-2xl p-8 shadow-lg transform transition-all duration-500 hover:shadow-xl'>
              <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-6'>
                Chọn nền tảng của bạn
              </h3>

              <div className='space-y-6'>
                {/* App Store */}
                <div className='flex flex-col md:flex-row items-center gap-6 p-4 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                  <div className='md:w-1/4 flex justify-center'>
                    <div className='bg-black rounded-xl p-3 w-24 h-24 flex items-center justify-center'>
                      <svg
                        className='h-16 w-16'
                        viewBox='0 0 24 24'
                        fill='white'
                      >
                        <path d='M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.019-1.154-.242-1.729-.781-.368-.32-.83-.87-1.389-1.652-.594-.829-1.086-1.79-1.473-2.881-.418-1.187-.628-2.334-.628-3.443 0-1.273.275-2.372.823-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z' />
                      </svg>
                    </div>
                  </div>
                  <div className='md:w-2/4'>
                    <h4 className='text-xl font-semibold text-gray-800 dark:text-white mb-1'>
                      iOS App Store
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300 text-sm mb-3'>
                      Tải về cho iPhone, iPad và các thiết bị iOS
                    </p>
                    <div className='flex flex-col items-center'>
                      <a
                        href={iosAppLink}
                        className='inline-flex items-center px-4 py-2 bg-orange-500 dark:bg-[#ff3333] hover:bg-orange-600 dark:hover:bg-[#ff0000] text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105'
                      >
                        <Download className='mr-2' size={24} />
                        Tải về ngay
                      </a>
                    </div>
                  </div>
                  <div className='hidden sm:flex md:w-1/4 justify-center'>
                    <div className='bg-white dark:bg-[#2a2a2a] p-2 rounded-xl shadow transform transition-all duration-300 hover:scale-110'>
                      <QrCode className='h-16 w-16 text-gray-800 dark:text-white' />
                    </div>
                  </div>
                </div>

                {/* Google Play */}
                <div className='flex flex-col md:flex-row items-center gap-6 p-4 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                  <div className='md:w-1/4 flex justify-center'>
                    <div className='bg-black rounded-xl p-3 w-24 h-24 flex items-center justify-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='white'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        className='h-16 w-16'
                      >
                        <path d='M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4' />
                        <rect width='10' height='7' x='12' y='13' rx='2' />
                      </svg>
                    </div>
                  </div>
                  <div className='md:w-2/4'>
                    <h4 className='text-xl font-semibold text-gray-800 dark:text-white mb-1'>
                      Google Play
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300 text-sm mb-3'>
                      Tải về cho các thiết bị Android, điện thoại và máy tính
                      bảng.
                    </p>
                    <div className='flex flex-col items-center'>
                      <a
                        href={androidAppLink}
                        className='inline-flex items-center px-4 py-2 bg-orange-500 dark:bg-[#ff3333] hover:bg-orange-600 dark:hover:bg-[#ff0000] text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105'
                      >
                        <Download className='mr-2' size={24} />
                        Tải về ngay
                      </a>
                    </div>
                  </div>
                  <div className='hidden sm:flex md:w-1/4 justify-center'>
                    <div className='bg-white dark:bg-[#2a2a2a] p-2 rounded-xl shadow transform transition-all duration-300 hover:scale-110'>
                      <QrCode className='h-16 w-16 text-gray-800 dark:text-white' />
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-8 p-4 bg-orange-100 dark:bg-[#1a1a1a] rounded-xl transform transition-all duration-300 hover:shadow-inner'>
                <h4 className='font-semibold text-gray-800 dark:text-white mb-2'>
                  Yêu cầu hệ thống:
                </h4>
                <ul className='space-y-1 text-sm text-gray-700 dark:text-gray-300'>
                  <li>• iOS 12.0 trở lên hoặc Android 6.0 trở lên</li>
                  <li>• Kết nối internet để cập nhật kết quả xổ số</li>
                  <li>• Dung lượng trống: 50MB</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
