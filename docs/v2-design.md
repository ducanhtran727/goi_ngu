# Brief UI/UX — landing page ưu tiên hình ảnh

Đã đối chiếu tài liệu người dùng cung cấp, hồ sơ Mobile UI/UX Designer và mã hiện tại. Đây là bàn giao thiết kế, chưa phải kết quả kiểm tra bằng trình duyệt.

## Mạch trang và nhiệm vụ của ảnh

1. **Hero — hiểu ngay sản phẩm:** nhãn “Vòi sen LED hiển thị nhiệt độ”; tiêu đề “Nhìn nhiệt độ nước. Chủ động trước khi tắm.” Ảnh `assets/hero-clean.png` phải thấy rõ đầu sen, màn hình, tia nước, tay cầm trong phòng tắm. Không phủ chữ lên sản phẩm. Ba chú thích HTML ngắn: “Hiển thị nhiệt độ”, “Đèn báo 3 màu”, “Chạy bằng sức nước”. Trên mobile tiêu đề trước ảnh, ảnh trước nội dung giá; bỏ đoạn mô tả dài và các nhãn trang trí trùng lặp.
2. **Gói mua ngay sau ảnh:** ba thẻ 1 chiếc / 296.000đ, 2 chiếc / 550.000đ, 3 chiếc / 750.000đ. Giá gốc 689.000đ/chiếc chỉ đặt cạnh gói 1, không gây hiểu rằng đó là giá gốc cả combo. Mỗi thẻ có CTA “Chọn 1 chiếc”, “Chọn 2 chiếc”, “Chọn 3 chiếc”; chọn gói cập nhật form và cuộn tới form. Quyền lợi chung ngay dưới: tặng dây nối, miễn phí vận chuyển, đổi trả miễn phí 14 ngày đầu nếu dùng không ưng, bảo hành lỗi nhà sản xuất 24 tháng. Không cần lặp tất cả quyền lợi trong từng thẻ.
3. **Khớp nhu cầu:** tiêu đề “Một bước kiểm tra cho cả nhà”. Ba ảnh riêng `assets/use-family.png`, `assets/use-senior.png`, `assets/use-daily.png`, chú thích tương ứng “Chuẩn bị nước tắm cho con”, “Quan sát nhiệt độ khi tắm cho người lớn tuổi”, “Kiểm tra nước trước mỗi lần tắm”. Người trong ảnh mặc quần áo; minh họa bước chuẩn bị, không để trẻ tự dùng nước nóng. Ghi “Ảnh minh họa tình huống sử dụng” một lần. CTA bên dưới “Chọn gói cho gia đình”.
4. **Đèn 3 màu:** giữ cả 3 ảnh hiện có hiển thị sẵn, mỗi nhãn đi cùng chính ảnh màu đó. Không tabs, carousel, nút chọn màu hay giả lập màu là biến thể sản phẩm. Một dòng mở đầu “Ba trạng thái đèn trên cùng một vòi sen”. Một ghi chú rõ, ngắn: “Đèn hỗ trợ quan sát; luôn kiểm tra nước trước khi tắm. Vòi sen không tự điều chỉnh nhiệt độ.”
5. **Sức nước và lắp đặt:** ảnh cấu tạo đã có `khong-mau.png` để nguyên tỷ lệ, không cắt chữ/chi tiết đầu nối. Tiêu đề “Không cắm điện. Không thay pin.”; chú thích “Màn hình và đèn hoạt động bằng sức nước”. Ba bước ngắn: “Kiểm tra đầu nối” → “Lắp vòi sen và dây nối phù hợp” → “Mở nước, kiểm tra rò rỉ”. Không viết tương thích mọi/hầu hết đầu nối khi chưa có thông số.
6. **FAQ rồi form:** FAQ chỉ xử lý bộ hàng, tương thích, đổi trả/bảo hành, giá/vận chuyển. Form tiêu đề trực tiếp “Đăng ký mua vòi sen LED”; mô tả một câu “Để lại thông tin, chúng tôi liên hệ xác nhận trước khi giao.” Giữ tổng tiền và miễn phí vận chuyển gần nút gửi. Trạng thái form phải thể hiện đăng ký, không đồng nhất với đơn giao hàng đã xác nhận.

## Hình ảnh và responsive

- Nền xuyên suốt xanh lơ nhạt `#eaf2f5`, chữ navy `#102b42`, CTA cam `#bd451f`; dùng thẻ trắng cho gói mua/form, không đổi sang nhiều nền tối khác nhau giữa bài.
- Mobile 320–430 px: lề 16 px, khoảng cách khối 40–48 px; h1 30–36 px, h2 26–30 px, chú thích 14–16 px. Tránh title 42–68 px cũ chiếm hết màn hình đầu.
- Hero nên xuất 4:5 hoặc vuông, tối thiểu 1000 px cạnh ngắn. Hiển thị `width:100%; height:auto`, không crop đầu sen hoặc màn hình. Ảnh tình huống riêng 4:3, có thể cùng tỷ lệ nhưng vùng nội dung luôn đầy đủ.
- Không dùng ảnh triptych thu nhỏ nguyên tấm trên mobile: từng ô sẽ quá nhỏ để thấy thao tác. Ưu tiên 3 ảnh riêng và xếp dọc; desktop đặt 3 cột.
- Ảnh có chữ gốc và ảnh đèn: `height:auto` hoặc `object-fit:contain`. Bỏ khung/mô tả phụ nếu chỉ lặp nội dung nhìn thấy trong ảnh. Chú thích ở HTML để rõ trên mobile và hỗ trợ accessibility.
- Gói mua xếp dọc trên mobile, mỗi hàng có số lượng, giá và nút rõ ràng; desktop 3 cột. Không gắn “bán chạy” hoặc “được chọn nhiều” nếu không có dữ liệu.
- Nút ít nhất 44 px cao; sticky CTA có safe area và padding cuối trang. Ẩn khi form xuất hiện hoặc người dùng nhập liệu để tránh che trường.

## Tiêu chí nghiệm thu

- 320, 360, 390, 430 px và desktop 1440 px không tràn ngang; ảnh nhận diện sản phẩm đầy đủ, chữ chú thích dễ đọc.
- Khách thấy đúng thứ tự ảnh bìa → giá và quyền lợi → ảnh tình huống; trước FAQ không có đoạn văn quá 2–3 dòng trừ cảnh báo cần thiết.
- Cả ba ảnh LED và cả ba tình huống thấy được khi cuộn bình thường, không cần thao tác mở ảnh.
- Chọn từng gói cập nhật đúng tổng 296.000đ / 550.000đ / 750.000đ; không gửi đơn thật trong kiểm thử.
- Kiểm tra lại form thành công/thất bại mock, dữ liệu giữ khi thất bại, focus lỗi, điều hướng bàn phím, sticky không che nút/form.
- Kiểm tra hình AI so với ảnh gốc: màn hình, mặt sen, thân trong có hạt, đầu nối phải bảo toàn; không dùng ảnh bị đổi cấu tạo dù bố cục đẹp.
