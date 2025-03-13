'use client';

import { ArrowDown } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import ScrollReveal from './ScrollReveal';
import FloatingElement from './FloatingElement';

const Header = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDownload = () => {
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-orange-100 to-orange-200 dark:from-[#0a0a0a] dark:to-[#121212] -z-10'></div>
      <AnimatedBackground />

      <div className='container mx-auto max-w-6xl relative z-10'>
        <ScrollReveal delay={200} duration={1000}>
          <div className='flex justify-center mb-8'>
            <FloatingElement amplitude={8} period={4}>
              <img
                src='/images/locphatso_500-500-nobg.png'
                alt='Lộc Phát Số Logo'
                className='w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300'
              />
            </FloatingElement>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400} duration={1000}>
          <h1 className='text-3xl md:text-5xl font-bold text-orange-600 dark:text-[#ff3333] mb-6'>
            Dò Vé Số Dễ Dàng – Kiểm Tra Kết Quả Mỗi Ngày!
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={600} duration={1000}>
          <p className='text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6'>
            Ứng dụng dò kết quả vé số truyền thống và Vietlott chính xác và
            nhanh chóng. Cập nhật kết quả liên tục mỗi ngày.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={800} duration={1000}>
          <p className='text-md md:text-lg text-orange-600 dark:text-[#ff3333] max-w-3xl mx-auto mb-12 italic font-medium'>
            "Lộc Phát Số - Trực tiếp, dò và dự đoán kết quả xổ số kiến thiết,
            chơi và nhận thưởng hấp dẫn ngay - Lộc Phát Số nơi trình độ không
            bằng trời độ, chúng sinh bình đẳng."
          </p>
        </ScrollReveal>

        <ScrollReveal delay={1000} duration={1000}>
          <div className='flex flex-col md:flex-row gap-4 justify-center mb-16'>
            <a
              href='#download'
              className='px-8 py-3 bg-orange-500 dark:bg-[#ff3333] hover:bg-orange-600 dark:hover:bg-[#ff0000] text-white rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg'
              onClick={(e) => {
                e.preventDefault();
                scrollToDownload();
              }}
            >
              Tải Ứng Dụng
            </a>
            <a
              href='#features'
              className='px-8 py-3 bg-white dark:bg-[#1a1a1a] hover:bg-gray-100 dark:hover:bg-[#2a2a2a] text-orange-500 dark:text-[#ff3333] rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg'
              onClick={(e) => {
                e.preventDefault();
                scrollToFeatures();
              }}
            >
              Tìm Hiểu Thêm
            </a>
          </div>
        </ScrollReveal>

        <div className='mt-12 animate-bounce'>
          <button
            onClick={scrollToFeatures}
            aria-label='Scroll down'
            className='p-2 rounded-full bg-white dark:bg-[#1a1a1a] shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110'
          >
            <ArrowDown className='h-6 w-6 text-orange-500 dark:text-[#ff3333]' />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
