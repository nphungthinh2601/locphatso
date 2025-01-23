'use client';

import { useState } from 'react';
import { FileText, ChevronDown, ChevronUp } from 'lucide-react';

const PolicyTerms = () => {
  const [activeTab, setActiveTab] = useState('privacy');
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const privacySections = [
    {
      id: 'collection',
      title: '1. Thu thập thông tin',
      content: `Chúng tôi chỉ thu thập thông tin cần thiết để cung cấp dịch vụ dò vé số. Thông tin này có thể bao gồm:
      • Thông tin thiết bị (loại thiết bị, hệ điều hành)
      • Dữ liệu sử dụng ứng dụng (tần suất sử dụng, tính năng được sử dụng)
      • Dữ liệu vé số đã dò (nếu bạn lưu lại)
      • Email (nếu bạn cung cấp)
      
      Chúng tôi không thu thập thông tin cá nhân như tên, địa chỉ, số điện thoại trừ khi bạn chủ động cung cấp cho chúng tôi khi liên hệ hỗ trợ.`,
    },
    {
      id: 'use',
      title: '2. Sử dụng thông tin',
      content: `Thông tin thu thập được sử dụng để:
      • Cung cấp và cải thiện dịch vụ dò vé số
      • Phân tích xu hướng sử dụng để cải thiện trải nghiệm người dùng
      • Khắc phục sự cố và hỗ trợ kỹ thuật
      • Gửi thông báo về kết quả xổ số, thưởng (nếu bạn đăng ký nhận thông báo)`,
    },
    {
      id: 'sharing',
      title: '3. Chia sẻ thông tin',
      content: `Chúng tôi không bán, trao đổi hoặc chuyển giao thông tin cá nhân của bạn cho bên thứ ba. Điều này không bao gồm các bên thứ ba đáng tin cậy hỗ trợ chúng tôi vận hành ứng dụng, miễn là các bên đồng ý giữ bí mật thông tin này.
      
      Chúng tôi có thể chia sẻ thông tin khi chúng tôi tin rằng việc tiết lộ là cần thiết để tuân thủ pháp luật, thực thi chính sách của chúng tôi, hoặc bảo vệ quyền lợi, tài sản hoặc an toàn của chúng tôi hoặc người khác.`,
    },
    {
      id: 'security',
      title: '4. Bảo mật thông tin',
      content: `Chúng tôi thực hiện các biện pháp bảo mật hợp lý để bảo vệ thông tin của bạn. Tuy nhiên, không có phương thức truyền qua internet hoặc lưu trữ điện tử nào là an toàn 100%. Do đó, mặc dù chúng tôi nỗ lực sử dụng các phương tiện thương mại chấp nhận được để bảo vệ thông tin cá nhân của bạn, chúng tôi không thể đảm bảo an ninh tuyệt đối.`,
    },
    {
      id: 'cookies',
      title: '5. Cookies và công nghệ tương tự',
      content: `Ứng dụng của chúng tôi có thể sử dụng "cookies" để nâng cao trải nghiệm người dùng. Cookies là các tệp nhỏ được lưu trữ trên thiết bị của bạn để ghi nhớ thông tin và cài đặt. Bạn có thể cấu hình thiết bị của mình để từ chối tất cả cookies hoặc thông báo khi cookie được gửi. Tuy nhiên, nếu bạn không chấp nhận cookies, một số phần của ứng dụng có thể không hoạt động chính xác.`,
    },
    {
      id: 'changes',
      title: '6. Thay đổi chính sách',
      content: `Chúng tôi có thể cập nhật Chính sách Bảo mật này theo thời gian. Chúng tôi sẽ thông báo về bất kỳ thay đổi nào bằng cách đăng Chính sách Bảo mật mới trên ứng dụng. Bạn nên kiểm tra chính sách này định kỳ để cập nhật thông tin mới nhất về cách chúng tôi bảo vệ thông tin của bạn.`,
    },
    {
      id: 'contact',
      title: '7. Liên hệ',
      content: `Nếu bạn có bất kỳ câu hỏi nào về Chính sách Bảo mật này, vui lòng liên hệ với chúng tôi qua email: ungdunglocphatso@gmail.com`,
    },
  ];

  const termsSections = [
    {
      id: 'acceptance',
      title: '1. Chấp nhận Điều khoản',
      content: `Bằng cách sử dụng ứng dụng Lộc Phát Số, bạn đồng ý tuân thủ các Điều khoản Sử dụng này. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng không sử dụng ứng dụng.`,
    },
    {
      id: 'intellectual',
      title: '2. Quyền Sở Hữu Trí Tuệ',
      content: `Ứng dụng Lộc Phát Số và tất cả nội dung, bao gồm nhưng không giới hạn ở văn bản, hình ảnh, logo, và phần mềm, thuộc sở hữu của VN Dev Labs và được bảo vệ bởi luật sở hữu trí tuệ.`,
    },
    {
      id: 'usage',
      title: '3. Sử Dụng Ứng Dụng',
      content: `Bạn có quyền sử dụng ứng dụng Lộc Phát Số cho mục đích cá nhân và phi thương mại. Bạn không được phép sao chép, sửa đổi, phân phối, hoặc tạo ra các sản phẩm phái sinh từ ứng dụng mà không có sự đồng ý bằng văn bản của VN Dev Labs.`,
    },
    {
      id: 'liability',
      title: '4. Giới hạn Trách Nhiệm',
      content: `VN Dev Labs không chịu trách nhiệm về bất kỳ thiệt hại nào phát sinh từ việc sử dụng hoặc không thể sử dụng ứng dụng Lộc Phát Số. Chúng tôi cam kết cung cấp thông tin chính xác và cập nhật, nhưng không đảm bảo tính hoàn toàn chính xác của kết quả xổ số.`,
    },
    {
      id: 'changes',
      title: '5. Thay Đổi Điều Khoản',
      content: `VN Dev Labs có quyền thay đổi các Điều khoản Sử dụng này bất kỳ lúc nào. Các thay đổi sẽ có hiệu lực ngay khi được đăng tải trên ứng dụng. Bạn có trách nhiệm thường xuyên xem xét các Điều khoản này để cập nhật thông tin mới nhất.`,
    },
    {
      id: 'law',
      title: '6. Luật Áp Dụng',
      content: `Các Điều khoản Sử dụng này được điều chỉnh bởi luật pháp Việt Nam. Mọi tranh chấp phát sinh từ việc sử dụng ứng dụng sẽ được giải quyết tại tòa án có thẩm quyền tại Việt Nam.`,
    },
    {
      id: 'contact',
      title: '7. Liên Hệ',
      content: `Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về các Điều khoản Sử dụng này, vui lòng liên hệ với chúng tôi qua email: ungdunglocphatso@gmail.com`,
    },
  ];

  return (
    <section id='policy-terms' className='py-20 bg-orange-50 dark:bg-[#0a0a0a]'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4'>
            Chính Sách & Điều Khoản
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Cam kết bảo vệ thông tin người dùng và quy định sử dụng ứng dụng Lộc
            Phát Số
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-8'>
          <div className='md:w-1/4'>
            <div className='sticky top-20'>
              <div className='flex mb-6 border-b border-gray-200 dark:border-gray-700'>
                <button
                  className={`flex-1 py-3 font-medium text-center ${
                    activeTab === 'privacy'
                      ? 'text-orange-500 dark:text-[#ff3333] border-b-2 border-orange-500 dark:border-[#ff3333]'
                      : 'text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-[#ff3333]'
                  }`}
                  onClick={() => setActiveTab('privacy')}
                >
                  <FileText className='h-5 w-5 mx-auto mb-1' />
                  CS Bảo Mật
                </button>
                <button
                  className={`flex-1 py-3 font-medium text-center ${
                    activeTab === 'terms'
                      ? 'text-orange-500 dark:text-[#ff3333] border-b-2 border-orange-500 dark:border-[#ff3333]'
                      : 'text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-[#ff3333]'
                  }`}
                  onClick={() => setActiveTab('terms')}
                >
                  <FileText className='h-5 w-5 mx-auto mb-1' />
                  ĐK Sử Dụng
                </button>
              </div>

              <div className='hidden md:block'>
                <h3 className='text-lg font-semibold mb-4 text-gray-800 dark:text-white'>
                  Mục lục
                </h3>
                <ul className='space-y-2'>
                  {activeTab === 'privacy' &&
                    privacySections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className='text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-[#ff3333] transition-colors duration-300'
                          onClick={(e) => {
                            e.preventDefault();
                            toggleSection(section.id);
                            document
                              .getElementById(section.id)
                              ?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  {activeTab === 'terms' &&
                    termsSections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className='text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-[#ff3333] transition-colors duration-300'
                          onClick={(e) => {
                            e.preventDefault();
                            toggleSection(section.id);
                            document
                              .getElementById(section.id)
                              ?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <div className='md:w-3/4'>
            <div className='bg-white dark:bg-[#121212] rounded-xl shadow-md p-6 md:p-8'>
              {activeTab === 'privacy' && (
                <div>
                  <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-6'>
                    Chính Sách Bảo Mật
                  </h3>
                  <p className='text-gray-700 dark:text-gray-300 mb-8'>
                    Chính sách bảo mật này mô tả cách VN Dev Labs thu thập, sử
                    dụng và bảo vệ thông tin khi bạn sử dụng ứng dụng Lộc Phát
                    Số. Chúng tôi cam kết bảo vệ quyền riêng tư của bạn và chỉ
                    thu thập những thông tin cần thiết để cung cấp dịch vụ tốt
                    nhất.
                  </p>

                  <div className='space-y-6'>
                    {privacySections.map((section) => (
                      <div
                        key={section.id}
                        id={section.id}
                        className='border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0'
                      >
                        <button
                          className='flex justify-between items-center w-full text-left'
                          onClick={() => toggleSection(section.id)}
                        >
                          <h4 className='text-xl font-semibold text-gray-800 dark:text-white'>
                            {section.title}
                          </h4>
                          {expandedSection === section.id ? (
                            <ChevronUp className='h-5 w-5 text-orange-500 dark:text-[#ff3333]' />
                          ) : (
                            <ChevronDown className='h-5 w-5 text-orange-500 dark:text-[#ff3333]' />
                          )}
                        </button>
                        <div
                          className={`mt-4 text-gray-700 dark:text-gray-300 whitespace-pre-line ${
                            expandedSection === section.id
                              ? 'block'
                              : 'hidden md:block'
                          }`}
                        >
                          {section.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'terms' && (
                <div>
                  <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-6'>
                    Điều Khoản Sử Dụng
                  </h3>
                  <p className='text-gray-700 dark:text-gray-300 mb-8'>
                    Bằng cách truy cập hoặc sử dụng ứng dụng Lộc Phát Số, bạn
                    đồng ý tuân thủ và chịu ràng buộc bởi các điều khoản và điều
                    kiện sau đây. Vui lòng đọc kỹ các điều khoản này trước khi
                    sử dụng ứng dụng của chúng tôi.
                  </p>

                  <div className='space-y-6'>
                    {termsSections.map((section) => (
                      <div
                        key={section.id}
                        id={section.id}
                        className='border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0'
                      >
                        <button
                          className='flex justify-between items-center w-full text-left'
                          onClick={() => toggleSection(section.id)}
                        >
                          <h4 className='text-xl font-semibold text-gray-800 dark:text-white'>
                            {section.title}
                          </h4>
                          {expandedSection === section.id ? (
                            <ChevronUp className='h-5 w-5 text-orange-500 dark:text-[#ff3333]' />
                          ) : (
                            <ChevronDown className='h-5 w-5 text-orange-500 dark:text-[#ff3333]' />
                          )}
                        </button>
                        <div
                          className={`mt-4 text-gray-700 dark:text-gray-300 ${
                            expandedSection === section.id
                              ? 'block'
                              : 'hidden md:block'
                          }`}
                        >
                          {section.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyTerms;
