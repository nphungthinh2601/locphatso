'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Screenshots = () => {
  // For demonstration, we'll use placeholder images
  // In a real implementation, you would use the actual app screenshots
  const screenshots = [
    {
      id: 1,
      src: '/images/screenshot1.png',
      alt: 'Màn hình chính ứng dụng Lộc Phát Số',
    },
    {
      id: 2,
      src: '/images/screenshot2.png',
      alt: 'Tính năng dò vé số truyền thống',
    },
    { id: 3, src: '/images/screenshot3.png', alt: 'Tính năng dò vé Vietlott' },
    { id: 4, src: '/images/screenshot4.png', alt: 'Lịch sử dò vé số' },
    { id: 5, src: '/images/screenshot5.png', alt: 'Thông báo trúng thưởng' },
    { id: 6, src: '/images/screenshot6.png', alt: 'Chế độ tối của ứng dụng' },
    { id: 7, src: '/images/screenshot7.png', alt: 'Cài đặt ứng dụng' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, screenshots.length]);

  // Pause auto-scroll when user interacts
  const handleManualNavigation = (direction) => {
    setAutoPlay(false);
    if (direction === 'prev') {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
      );
    }
    // Resume auto-scroll after 5 seconds of inactivity
    setTimeout(() => setAutoPlay(true), 5000);
  };

  // Calculate visible screenshots for the carousel
  const visibleScreenshots = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % screenshots.length;
    visibleScreenshots.push(screenshots[index]);
  }

  return (
    <section id='screenshots' className='py-20 bg-orange-50 dark:bg-[#0a0a0a]'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4'>
            Giao Diện Ứng Dụng
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Khám phá giao diện trực quan và dễ sử dụng của ứng dụng Lộc Phát Số
          </p>
        </div>

        <div className='relative'>
          <div className='flex justify-center items-center gap-4 md:gap-8'>
            {visibleScreenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                className={`relative transition-all duration-300 ${
                  index === 1
                    ? 'z-10 scale-110 shadow-xl'
                    : 'scale-90 opacity-70 shadow-md'
                } ${index !== 1 ? 'hidden sm:block' : ''}`} // Chỉ hiển thị ảnh chính trên mobile
              >
                <div className='bg-gray-800 rounded-[32px] p-3 inline-block'>
                  <img
                    src={
                      screenshot.src ||
                      `/images/locphatso_500-500-nobg.png?height=600&width=300`
                    }
                    alt={screenshot.alt}
                    className='h-[500px] w-auto rounded-[24px] border-4 border-gray-800'
                  />
                  {/* Hiệu ứng phản chiếu */}
                  <div className='absolute bottom-3 left-3 right-3 h-1/3 bg-gradient-to-b from-transparent to-black opacity-20 rounded-b-[24px] pointer-events-none'></div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => handleManualNavigation('prev')}
            className='absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-[#1a1a1a] p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition-colors duration-300'
            aria-label='Previous screenshot'
          >
            <ChevronLeft className='h-6 w-6 text-gray-800 dark:text-white' />
          </button>

          <button
            onClick={() => handleManualNavigation('next')}
            className='absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-[#1a1a1a] p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition-colors duration-300'
            aria-label='Next screenshot'
          >
            <ChevronRight className='h-6 w-6 text-gray-800 dark:text-white' />
          </button>
        </div>

        <div className='mt-12 text-center'>
          <a
            href='#download'
            className='px-8 py-3 bg-orange-500 dark:bg-[#ff3333] hover:bg-orange-600 dark:hover:bg-[#ff0000] text-white rounded-xl font-medium text-lg transition-colors duration-300 shadow-md inline-block'
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById('download')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Tải Ứng Dụng Ngay
          </a>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
