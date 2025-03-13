import { Check, Shield, Zap, Smartphone, Sun, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Features = () => {
  const features = [
    {
      icon: <Check className='h-8 w-8 text-green-500' />,
      title: 'Dò Kết Quả Đa Dạng',
      description:
        'Hỗ trợ dò kết quả vé số truyền thống và Vietlott một cách nhanh chóng và chính xác.',
    },
    {
      icon: <Clock className='h-8 w-8 text-blue-500' />,
      title: 'Cập Nhật Liên Tục',
      description:
        'Kết quả xổ số được cập nhật nhanh chóng và chính xác ngay sau khi có kết quả.',
    },
    {
      icon: <Sun className='h-8 w-8 text-yellow-500' />,
      title: 'Chế Độ Sáng/Tối',
      description:
        'Tùy chỉnh giao diện theo sở thích với chế độ sáng hoặc tối, bảo vệ mắt khi sử dụng ban đêm.',
    },
    {
      icon: <Smartphone className='h-8 w-8 text-purple-500' />,
      title: 'Giao Diện Thân Thiện',
      description:
        'Thiết kế trực quan, dễ sử dụng cho mọi đối tượng người dùng.',
    },
    {
      icon: <Shield className='h-8 w-8 text-red-500' />,
      title: 'Bảo Mật & Uy Tín',
      description:
        'Cam kết bảo vệ thông tin người dùng và cung cấp kết quả chính xác.',
    },
    {
      icon: <Zap className='h-8 w-8 text-orange-500 dark:text-[#ff4d4d]' />,
      title: 'Tốc Độ Nhanh Chóng',
      description:
        'Tối ưu hóa hiệu suất, giúp dò vé số nhanh chóng chỉ trong vài giây.',
    },
  ];

  return (
    <section id='features' className='py-20 bg-white dark:bg-[#0a0a0a]'>
      <div className='container mx-auto max-w-6xl px-4'>
        <ScrollReveal>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4'>
              Tính Năng Nổi Bật
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
              Lộc Phát Số mang đến trải nghiệm dò vé số hoàn hảo với nhiều tính
              năng hữu ích
            </p>
          </div>
        </ScrollReveal>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100} direction='up'>
              <div className='bg-orange-50 dark:bg-[#121212] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-orange-100 dark:hover:bg-[#1a1a1a]'>
                <div className='mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-semibold text-gray-800 dark:text-white mb-2'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600} direction='up'>
          <div className='mt-20 flex justify-center'>
            <div className='bg-orange-100 dark:bg-[#121212] p-8 rounded-2xl max-w-4xl transform transition-all duration-500 hover:shadow-xl'>
              <div className='flex flex-col md:flex-row items-center'>
                <div className='md:w-1/2 mb-8 md:mb-0 md:pr-8'>
                  <img
                    src='/images/locphatso_500-500-nobg.png'
                    alt='Lộc Phát Số App Description'
                    className='rounded-xl shadow-lg w-full hover:shadow-xl transition-shadow duration-300'
                  />
                </div>
                <div className='md:w-1/2'>
                  <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-4'>
                    Tại Sao Chọn Lộc Phát Số?
                  </h3>
                  <ul className='space-y-3'>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0' />
                      <span className='text-gray-700 dark:text-gray-300'>
                        Cập nhật kết quả xổ số hàng ngày
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0' />
                      <span className='text-gray-700 dark:text-gray-300'>
                        Hỗ trợ đầy đủ các loại vé số tại Việt Nam
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0' />
                      <span className='text-gray-700 dark:text-gray-300'>
                        Giao diện thân thiện, dễ sử dụng
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0' />
                      <span className='text-gray-700 dark:text-gray-300'>
                        Hoàn toàn miễn phí
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0' />
                      <span className='text-gray-700 dark:text-gray-300'>
                        Phát triển bởi đội ngũ chuyên nghiệp
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Features;
