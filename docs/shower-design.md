# Thiết kế landing page vòi sen LED

## Bản triển khai
- Agent FE triển khai giao diện; agent chính rà soát trình duyệt và hoàn thiện. Agent Designer bị giới hạn sử dụng trước khi hoàn tất bàn giao, nên không ghi nhận là đã duyệt thiết kế.
- Hướng thị giác: nền trắng ngà và xanh băng, chữ xanh navy, CTA cam đậm, tiêu đề lớn, khoảng cách rõ giữa các phần.
- Dùng nguyên ảnh sản phẩm, giữ đầy đủ nội dung trong ảnh. Không tạo hình ảnh hoặc lời chứng thực giả.
- Desktop: hero hai cột, nội dung và ảnh cân bằng. Mobile: tiêu đề → ảnh sản phẩm → diễn giải, giá và CTA; thanh đăng ký cố định giúp truy cập form, ẩn khi form đi vào màn hình.
- Hành trình: hiểu sản phẩm → nhu cầu gia đình → xem ba trạng thái đèn → cách vận hành/lắp đặt → FAQ → đăng ký mua.
- Ba ảnh xanh lục, xanh lam, đỏ hiển thị sẵn dưới nhãn tương ứng, xếp dọc trên mobile và ba cột trên desktop; đây là minh họa trạng thái đèn, không phải biến thể để đặt mua.
- Giá gói: 1 chiếc 296.000đ, 2 chiếc 550.000đ, 3 chiếc 750.000đ. Tổng trong form chưa gồm phí giao hàng.

## Nghiệm thu
- Kiểm tra viewport 320, 360, 390, 430 và 1440 CSS px: không tràn ngang, ảnh tải được.
- Kiểm tra ba ảnh màu hiển thị sẵn, số lượng và tổng tiền, lỗi form, focus tới trường lỗi, trạng thái gửi và kết quả.
- Dùng request mock để kiểm tra; không gửi đăng ký thật vào Sheet.
- Ảnh giao diện và kết quả kiểm tra được lưu trong `artifacts/`. Chưa kiểm tra trên điện thoại vật lý hoặc đo chuyển đổi.
