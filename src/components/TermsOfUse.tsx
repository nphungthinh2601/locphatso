"use client"

const TermsOfUse = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white dark:bg-[#121212] rounded-xl shadow-lg max-w-2xl w-full mx-4 overflow-y-auto max-h-[90vh]">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Điều Khoản Sử Dụng</h2>
          <div className="prose dark:prose-invert">
            <h3 className="dark:text-[#ff3333]">1. Chấp nhận Điều khoản</h3>
            <p>
              Bằng cách sử dụng ứng dụng Lộc Phát Số, bạn đồng ý tuân thủ các Điều khoản Sử dụng này. Nếu bạn không đồng
              ý với bất kỳ điều khoản nào, vui lòng không sử dụng ứng dụng.
            </p>

            <h3 className="dark:text-[#ff3333]">2. Quyền Sở Hữu Trí Tuệ</h3>
            <p>
              Ứng dụng Lộc Phát Số và tất cả nội dung, bao gồm nhưng không giới hạn ở văn bản, hình ảnh, logo, và phần
              mềm, thuộc sở hữu của VN Dev Labs và được bảo vệ bởi luật sở hữu trí tuệ.
            </p>

            <h3 className="dark:text-[#ff3333]">3. Sử Dụng Ứng Dụng</h3>
            <p>
              Bạn có quyền sử dụng ứng dụng Lộc Phát Số cho mục đích cá nhân và phi thương mại. Bạn không được phép sao
              chép, sửa đổi, phân phối, hoặc tạo ra các sản phẩm phái sinh từ ứng dụng mà không có sự đồng ý bằng văn
              bản của VN Dev Labs.
            </p>

            <h3 className="dark:text-[#ff3333]">4. Giới hạn Trách Nhiệm</h3>
            <p>
              VN Dev Labs không chịu trách nhiệm về bất kỳ thiệt hại nào phát sinh từ việc sử dụng hoặc không thể sử
              dụng ứng dụng Lộc Phát Số. Chúng tôi cam kết cung cấp thông tin chính xác và cập nhật, nhưng không đảm bảo
              tính hoàn toàn chính xác của kết quả xổ số.
            </p>

            <h3 className="dark:text-[#ff3333]">5. Thay Đổi Điều Khoản</h3>
            <p>
              VN Dev Labs có quyền thay đổi các Điều khoản Sử dụng này bất kỳ lúc nào. Các thay đổi sẽ có hiệu lực ngay
              khi được đăng tải trên ứng dụng. Bạn có trách nhiệm thường xuyên xem xét các Điều khoản này để cập nhật
              thông tin mới nhất.
            </p>

            <h3 className="dark:text-[#ff3333]">6. Luật Áp Dụng</h3>
            <p>
              Các Điều khoản Sử dụng này được điều chỉnh bởi luật pháp Việt Nam. Mọi tranh chấp phát sinh từ việc sử
              dụng ứng dụng sẽ được giải quyết tại tòa án có thẩm quyền tại Việt Nam.
            </p>

            <h3 className="dark:text-[#ff3333]">7. Liên Hệ</h3>
            <p>
              Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về các Điều khoản Sử dụng này, vui lòng liên hệ với chúng tôi
              qua email: ungdunglocphatso@gmail.com.
            </p>
          </div>
        </div>
        <div className="p-4 border-t dark:border-gray-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-orange-500 dark:bg-[#ff3333] text-white rounded-full hover:bg-orange-600 dark:hover:bg-[#ff0000] transition-colors duration-300"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  )
}

export default TermsOfUse

