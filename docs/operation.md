# Landing page vòi sen LED

## Nội dung và giá
- Trang chính: `index.html`, HTML/CSS/JavaScript thuần; ảnh sản phẩm dùng các PNG tại thư mục gốc.
- Giá được chủ dự án cung cấp: giá gốc 689.000đ/chiếc; 1 chiếc 396.000đ, 2 chiếc tổng 750.000đ, 3 chiếc tổng 1.100.000đ. Tổng tính theo gói số lượng. Phí giao hàng xác nhận khi liên hệ; không được tính là miễn phí.
- Đăng ký trên trang là yêu cầu mua để nhân viên xác nhận, không phải thanh toán trực tuyến.
- Bản bàn giao nội dung: `docs/shower-content.md`. Bản thiết kế: `docs/shower-design.md`.

## Kết nối nhận đăng ký
- Giữ URL Google Apps Script trong trang cũ. Không có quyền truy cập mã server hoặc Google Sheet trong nhiệm vụ này.
- Giữ các tên trường `fullname`, `phone`, `address`, `quantity`, `note` để tương thích với kết nối cũ; cần kiểm tra cách server ghi dữ liệu sản phẩm khi vận hành.
- Frontend chỉ xác nhận thành công khi HTTP thành công và JSON phản hồi có `success: true`, `result: "success"` hoặc `status: "success"`. Endpoint cần trả JSON đọc được qua CORS và chỉ xác nhận sau khi lưu thành công.
- Phản hồi không xác định, HTML hoặc lỗi không được xem là đã lưu đơn. Mất phản hồi có thể xảy ra sau khi server đã ghi dữ liệu; backend nên xử lý chống trùng nếu mở rộng hệ thống.
- Không có đơn thật được gửi trong kiểm thử. Hoạt động lưu vào Sheet thực tế cần được chủ endpoint kiểm tra trước khi mở bán.

## Kiểm tra
- `artifacts/verify.cjs` kiểm tra bằng Playwright/Chrome với request Apps Script được mock, không gửi đến dịch vụ thật.
- Script dùng đường dẫn runtime và Chrome có sẵn trên máy hiện tại. Nếu chạy ở máy khác, chỉnh đường dẫn import Playwright, executable Chrome và thư mục dự án cho phù hợp.
- Chạy: `node artifacts/verify.cjs`.
- Kết quả: `artifacts/verification.json`; ảnh giao diện: `artifacts/page-390.png`, `artifacts/page-1440.png`.
