# Bàn giao thiết kế: 5 trải nghiệm bằng hình

Phạm vi: rà soát mã hiện tại và brief người dùng; chưa phải nghiệm thu trình duyệt. Chỉ tài liệu này được agent Designer chỉnh sửa.

## Vị trí và hành trình

Giữ hero với ba tính năng cốt lõi và CTA → ba tình huống gia đình → ba ảnh màu luôn hiện. Thay hai section cũ `extras-title` và `power-title` bằng một chuỗi năm trải nghiệm ảnh, rồi tiếp tục bình luận hiện có → quà tặng → giá/chính sách → form. Việc thay hai khối này loại trùng lõi lọc/tăng áp/sức nước mà không bỏ tính năng.

Trong chuỗi mới, đưa nhiệt độ và sức nước lên đầu, kế đến chất liệu, tia nước, cách lắp và thiết kế. Nhiệt độ được giải thích ở mức vận hành màn hình/không pin; không lặp thêm bộ ba ảnh đèn.

## Nội dung và asset

| Thứ tự | File | Tiêu đề HTML | Chú thích tối đa một câu | Hình cần giải thích |
|---|---|---|---|---|
| 1 | assets/experience-temperature.png | Nước chảy, màn hình sáng. | Hiển thị nhiệt độ, đèn cảnh báo; không điện, không pin. | Cận màn hình và dòng nước cùng một sản phẩm, không tạo màn hình ở vị trí mới |
| 2 | assets/experience-material.png | ABS mạ Chrome. Lõi bi khoáng. | Bề mặt bóng, lõi lọc đá năng lượng trong thân vòi. | Bề mặt thân và hạt trong phần thân trong suốt; không minh họa lọc vi khuẩn, độc chất |
| 3 | assets/experience-pressure.png | Đầu phun tăng áp. | Các tia nước qua những lỗ phun nhỏ. | Mặt đầu phun và các tia nước; không dựng so sánh tăng áp trước/sau định lượng |
| 4 | assets/experience-install.png | Vặn nối, mở nước, sử dụng. | Tặng kèm dây sen để lắp cùng vòi. | Trình tự nối đầu ren của vòi với dây, rồi nước chảy; không ghi 2 phút hoặc tương thích mọi loại |
| 5 | assets/experience-design.png | Gọn trong tay. Sáng không gian tắm. | Thiết kế Chrome bóng, thuận tiện cầm nắm. | Góc cầm sản phẩm đúng tỷ lệ trong phòng tắm, không khẳng định độ bền nhiều năm |

Các câu là đề xuất bố cục; agent Content chốt claim theo dữ kiện mới. Không sử dụng lại nguyên năm đoạn dài của người dùng trên trang. Không gắn huy hiệu chứng nhận hoặc ngưỡng nhiệt chưa thống nhất vào ảnh.

## Responsive và cấu trúc

- Mỗi trải nghiệm là `article` có một `h3`, một ảnh vuông và một đoạn chú thích. `h2` chung có thể là “Những chi tiết cho mỗi lần tắm.”
- Desktop mỗi article là hai cột 1fr 1fr, ảnh khoảng 480–540 px; xen kẽ ảnh trái/phải. Văn bản vẫn theo thứ tự DOM thống nhất.
- Mobile một cột: tiêu đề → ảnh → chú thích; khoảng cách giữa trải nghiệm 32 px. Tiêu đề 24–28 px, chú thích 15–16 px; không đặt hai ảnh cạnh nhau ở 390 px.
- Ảnh dùng width/height thực tế, width 100%, height auto, aspect-ratio 1, object-fit contain; không crop chi tiết đầu nối hoặc màn hình. Bo góc 18 px mobile, 24 px desktop; nền theo xanh nhạt hiện tại.
- Ưu tiên ảnh không chữ hoặc chữ rất ngắn; chữ HTML chịu trách nhiệm định hướng. Không chồng caption lên hạt lõi, màn hình hoặc đầu ren.
- Tất cả năm ảnh lazy load; không thay preload/fetchpriority hero. Chỉ một CTA sau chuỗi năm trải nghiệm nếu cần, không chèn CTA giữa từng ảnh.
- Giữ nguyên logic sticky sau hero và ẩn tại form. Giữ giá hiện tại, endpoint nhận đơn và khối quà tặng trước bảng giá.

## Nghiệm thu cần thực hiện

Ở 320, 360, 390, 430 và 1440 px: không tràn ngang; toàn bộ chi tiết ảnh nhìn được; năm ảnh có năm nhiệm vụ khác nhau; không có chữ lỗi/nhỏ khó đọc trong ảnh. Hiển thị đủ ba đặc điểm cốt lõi ngay hero. Không lặp section cũ extras/power. Kiểm tra sticky vẫn xuất hiện sau hero; CTA đúng #dang-ky; form mock giữ nguyên giá gói. Không gọi việc đọc mã này là đã kiểm tra trình duyệt.
