'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Nguyễn Minh Triết',
      avatar: '/images/locphatso_500-500-nobg.png?height=100&width=100',
      rating: 5,
      text: 'Ứng dụng rất hữu ích, giúp tôi dò vé số nhanh chóng và chính xác. Giao diện đẹp và dễ sử dụng!',
    },
    {
      id: 2,
      name: 'Phạm Quốc Thiên Bảo',
      avatar: '/images/locphatso_500-500-nobg.png?height=100&width=100',
      rating: 5,
      text: 'Tôi đã thử nhiều ứng dụng dò vé số nhưng Lộc Phát Số là tốt nhất. Cập nhật kết quả nhanh và chính xác.',
    },
    {
      id: 3,
      name: 'Lê Đặng Gia Anh',
      avatar: '/images/locphatso_500-500-nobg.png?height=100&width=100',
      rating: 4,
      text: 'Ứng dụng tuyệt vời, giúp tôi không bỏ lỡ bất kỳ kết quả xổ số nào. Rất tiện lợi!',
    },
    {
      id: 4,
      name: 'Lê Viên Hoàng Uyển',
      avatar: '/images/locphatso_500-500-nobg.png?height=100&width=100',
      rating: 5,
      text: 'Giao diện thân thiện, dễ sử dụng. Tôi đặc biệt thích tính năng dò Vietlott, rất chính xác.',
    },
    {
      id: 5,
      name: 'Phạm Kim Hạnh',
      avatar: '/images/locphatso_500-500-nobg.png?height=100&width=100',
      rating: 5,
      text: 'Ứng dụng hoạt động rất tốt, không có quảng cáo phiền hà. Tôi đã giới thiệu cho tất cả bạn bè của mình.',
    },
    {
      id: 6,
      name: 'Phạm Đình Chí Kiên',
      avatar: '/images/locphatso_500-500-nobg.png?height=100&width=100',
      rating: 4,
      text: 'Rất hài lòng với ứng dụng này. Dễ dàng kiểm tra kết quả xổ số mỗi ngày mà không cần phải xem TV.',
    },
    {
      id: 7,
      name: 'Trần Nhật Minh',
      avatar: '/images/locphatso_500-500-nobg.png?height=100&width=100',
      rating: 5,
      text: 'Ứng dụng rất đáng tin cậy. Tôi đã trúng số nhờ kiểm tra vé qua đây!',
    },
    {
      id: 8,
      name: 'Đỗ Phương Linh',
      avatar: '/images/locphatso_500-500-nobg.png?height=100&width=100',
      rating: 5,
      text: 'Tôi thích cách ứng dụng cập nhật kết quả nhanh chóng. Không còn lo bỏ lỡ kết quả nữa!',
    },
    {
      id: 9,
      name: 'Nguyễn Văn Hùng',
      avatar: '/images/locphatso_500-500-nobg.png?height=100&width=100',
      rating: 4,
      text: 'Ứng dụng tốt, nhưng tôi mong muốn có thêm tính năng dự đoán kết quả xổ số!',
    },
    {
      id: 10,
      name: 'Bùi Thanh Tùng',
      avatar: '/images/locphatso_500-500-nobg.png?height=100&width=100',
      rating: 5,
      text: 'Dễ sử dụng, không cần phải tìm kiếm trên nhiều trang web khác nhau để xem kết quả!',
    },
    {
      id: 11,
      name: 'Hà Kiều My',
      avatar: '/images/locphatso_500-500-nobg.png?height=100&width=100',
      rating: 5,
      text: 'Ứng dụng gọn nhẹ, chạy mượt và không bị lỗi. Tôi rất hài lòng!',
    },
    {
      id: 12,
      name: 'Võ Hoàng Dũng',
      avatar: '/images/locphatso_500-500-nobg.png?height=100&width=100',
      rating: 4,
      text: 'Ứng dụng tốt, nhưng có thể cải thiện phần giao diện để trực quan hơn.',
    },
    {
      id: 13,
      name: 'Lý Hồng Ngọc',
      avatar: '/images/locphatso_500-500-nobg.png?height=100&width=100',
      rating: 5,
      text: 'Tôi thích chế độ tối của ứng dụng, giúp xem kết quả vào ban đêm dễ dàng hơn!',
    },
    {
      id: 14,
      name: 'Trương Minh Hòa',
      avatar: '/images/locphatso_500-500-nobg.png?height=100&width=100',
      rating: 5,
      text: 'Tính năng thông báo kết quả rất tiện lợi. Không cần phải mở ứng dụng cũng biết ngay kết quả!',
    },
    {
      id: 15,
      name: 'Dương Thị Phượng',
      avatar: '/images/locphatso_500-500-nobg.png?height=100&width=100',
      rating: 5,
      text: 'Tôi thấy ứng dụng rất hữu ích, mong rằng sẽ có thêm nhiều tính năng hơn trong tương lai!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Get visible testimonials
  const visibleTestimonials = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <section id='testimonials' className='py-20 bg-white dark:bg-[#0a0a0a]'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4'>
            Người Dùng Nói Gì Về Chúng Tôi
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Hàng ngàn người dùng đã tin tưởng và sử dụng Lộc Phát Số mỗi ngày
          </p>
        </div>

        <div className='relative'>
          <div className='flex justify-center gap-6 overflow-hidden'>
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className='bg-orange-50 dark:bg-[#121212] p-6 rounded-xl shadow-md flex-1 min-w-[280px] max-w-[350px] transition-all duration-300'
              >
                <div className='flex items-center mb-4'>
                  <img
                    src={
                      testimonial.avatar || '/images/locphatso_500-500-nobg.png'
                    }
                    alt={`Avatar of ${testimonial.name}`}
                    className='w-12 h-12 rounded-full mr-4'
                  />
                  <div>
                    <h3 className='font-semibold text-gray-800 dark:text-white'>
                      {testimonial.name}
                    </h3>
                    <div className='flex'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className='text-gray-600 dark:text-gray-300 italic'>
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-[#1a1a1a] p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition-colors duration-300'
            aria-label='Previous testimonial'
          >
            <ChevronLeft className='h-6 w-6 text-gray-800 dark:text-white' />
          </button>

          <button
            onClick={nextSlide}
            className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-[#1a1a1a] p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition-colors duration-300'
            aria-label='Next testimonial'
          >
            <ChevronRight className='h-6 w-6 text-gray-800 dark:text-white' />
          </button>
        </div>

        <div className='flex justify-center mt-8'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 mx-1 rounded-full ${
                index === currentIndex
                  ? 'bg-orange-500 dark:bg-[#ff3333]'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
