import { Mail, MapPin, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='footer' className='bg-black text-white py-12'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-center mb-4'>
              <img
                src='/images/locphatso_500-500-nobg.png'
                alt='Lộc Phát Số Logo'
                className='w-12 h-12 rounded-lg mr-3'
              />
              <h3 className='text-xl font-bold'>Lộc Phát Số</h3>
            </div>
            <div className='flex items-center text-gray-400'>
              <MapPin className='h-5 w-5 mr-2' />
              <span>TP. Hồ Chí Minh, Việt Nam</span>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Liên Hệ</h3>
            <div className='flex items-center text-gray-400 mb-4'>
              <Mail className='h-5 w-5 mr-2' />
              <a
                href='mailto:ungdunglocphatso@gmail.com'
                className='hover:text-red-400 transition-colors duration-300'
              >
                ungdunglocphatso@gmail.com
              </a>
            </div>
            <div className='flex space-x-4'>
              <a
                href=''
                className='p-2 rounded-full hover:bg-blue-700 transition-colors duration-300'
                aria-label='Facebook'
              >
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z' />
                </svg>
              </a>
              <a
                href=''
                className='p-2 rounded-full hover:bg-sky-600 transition-colors duration-300'
                aria-label='Twitter'
              >
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.38.2-2.05.08.58 1.8 2.26 3.12 4.25 3.16-1.9 1.5-4.3 2.36-6.9 2.36-.45 0-.9-.02-1.33-.07 2.46 1.58 5.4 2.5 8.55 2.5 10.25 0 15.85-8.5 15.85-15.86 0-.24 0-.48-.02-.72.67-.5 1.28-1.1 1.74-1.77z' />
                </svg>
              </a>
              <a
                href=''
                className='p-2 rounded-full hover:bg-red-700 transition-colors duration-300'
                aria-label='YouTube'
              >
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M23.8 7.2s-.2-1.7-1-2.4c-.9-1-1.9-1-2.4-1-3.4-.2-8.4-.2-8.4-.2s-5 0-8.4.2c-.5.1-1.5.1-2.4 1-.7.7-1 2.4-1 2.4S0 9.1 0 11.1v1.8c0 1.9.2 3.9.2 3.9s.2 1.7 1 2.4c.9 1 2.1.9 2.6 1 1.9.2 8.2.2 8.2.2s5 0 8.4-.2c.5-.1 1.5-.1 2.4-1 .7-.7 1-2.4 1-2.4s.2-1.9.2-3.9V11c0-1.9-.2-3.8-.2-3.8zM9.5 15.1V8.4l6.5 3.4-6.5 3.3z' />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Tải Ứng Dụng</h3>
            <div className='flex flex-col space-y-3'>
              <a
                href='#appstore'
                className='flex items-center bg-black border border-gray-700 rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors duration-300'
              >
                <svg
                  className='h-7 w-7 mr-3'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.019-1.154-.242-1.729-.781-.368-.32-.83-.87-1.389-1.652-.594-.829-1.086-1.79-1.473-2.881-.418-1.187-.628-2.334-.628-3.443 0-1.273.275-2.372.823-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z' />
                </svg>
                <div>
                  <div className='text-xs'>Tải về trên</div>
                  <div className='text-sm font-semibold'>App Store</div>
                </div>
              </a>
              <a
                href='#googleplay'
                className='flex items-center bg-black border border-gray-700 rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors duration-300'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='h-7 w-7 mr-3'
                >
                  <path d='M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4' />
                  <rect width='10' height='7' x='12' y='13' rx='2' />
                </svg>
                <div>
                  <div className='text-xs'>Tải về trên</div>
                  <div className='text-sm font-semibold'>Google Play</div>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Liên Kết</h3>
            <ul className='space-y-2'>
              <li className='flex items-center'>
                <FileText className='h-5 w-5 mr-2 text-gray-400' />
                <a
                  href='/app-ads.txt'
                  className='text-gray-400 hover:text-red-400 transition-colors duration-300'
                >
                  App Ads
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <div className='flex items-center mb-4 md:mb-0'>
            <img
              src='/images/vndevlabs_500-500.png'
              alt='VN Dev Labs Logo'
              className='w-8 h-8 rounded-full mr-2'
            />
            <span className='text-sm text-gray-400'>
              Phát triển bởi VN Dev Labs
            </span>
          </div>
          <p className='text-sm text-gray-500'>
            &copy; {currentYear} Lộc Phát Số. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
