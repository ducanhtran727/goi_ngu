# Vòi sen LED — phối hợp agent

## Bối cảnh
- Landing page tiếng Việt bán vòi sen LED hiển thị nhiệt độ, ưu tiên trải nghiệm mua hàng trên điện thoại.
- Giá người dùng xác nhận: giá gốc 689.000đ/chiếc; mua 1 chiếc 296.000đ, mua 2 chiếc tổng 550.000đ, mua 3 chiếc tổng 750.000đ. Tính theo gói số lượng, không nhân giá một chiếc. Không suy ra thời hạn khuyến mại hoặc phí giao hàng.
- Sản phẩm hiển thị nhiệt độ và đèn báo ba màu, hoạt động bằng sức nước. Không mô tả là tự điều chỉnh nhiệt độ, chống bỏng tuyệt đối hoặc tương thích mọi đầu nối.
- Hiện trạng: `index.html` chứa HTML, CSS và JavaScript; ảnh nằm ở thư mục gốc. Kiểm tra lại cấu trúc trước mỗi nhiệm vụ.
- Trao đổi với người dùng bằng tiếng Việt. Giữ stack hiện tại trừ khi yêu cầu công việc cần thay đổi.

## Phân công
Với công việc nội dung, thiết kế hoặc thay đổi đáng kể trải nghiệm mua hàng, phân công các subagent phù hợp trong ba vai trò dưới đây khi công cụ hỗ trợ. Agent chính cung cấp nội dung hồ sơ tương ứng trong lệnh giao việc; các file hồ sơ không tự đăng ký thành agent trong ứng dụng.

1. `mobile_ux_designer`: đọc `docs/agents/mobile-ux-designer.md`. Phụ trách hành trình mua hàng, thiết kế mobile, nội dung giao diện và tiêu chí nghiệm thu UX.
2. `frontend_developer`: đọc `docs/agents/frontend-developer.md`. Phụ trách triển khai, responsive, accessibility, hiệu năng và tính đúng đắn của form.
3. `content_market_researcher`: đọc `docs/agents/content-market-researcher.md`. Phụ trách nghiên cứu thị trường, khách hàng, đối thủ, định vị thông điệp và nội dung bán hàng tiếng Việt.

## Quy trình
- Agent chính xác định phạm vi, mục tiêu và quyền sở hữu file trước khi giao việc.
- Content nghiên cứu khách hàng và thị trường; Designer khảo sát UX; FE có thể khảo sát kỹ thuật song song, độc lập.
- Content bàn giao thông điệp, nội dung từng section và nguồn xác minh; Designer phối hợp sắp xếp nội dung, chốt độ dài hiển thị và microcopy theo hành trình mua hàng.
- Designer bàn giao yêu cầu cụ thể và trạng thái tương tác; FE triển khai sau khi nhận bàn giao nội dung và thiết kế cần thiết. Không để nhiều agent cùng sửa `index.html` đồng thời.
- Designer rà soát giao diện đã triển khai; Content kiểm tra nội dung, tính nhất quán và căn cứ của các tuyên bố; FE xử lý sai lệch; agent chính tích hợp và báo cáo kiểm chứng.
- Với sửa lỗi nhỏ chỉ thuộc một chuyên môn, giao đúng agent cần thiết để tránh tạo công việc thừa.
- Nếu không có công cụ subagent, agent chính áp dụng lần lượt các hồ sơ cần thiết và nói rõ giới hạn.

## Quy tắc chung
- Không tự tạo đánh giá khách hàng, số liệu doanh số, khuyến mại, tồn kho, chính sách hoặc cam kết sức khỏe chưa có nguồn xác nhận.
- Không tự đổi giá, endpoint nhận đơn hay gửi đơn thật khi kiểm thử. Dùng mock cho request đặt hàng.
- Mục tiêu tăng chuyển đổi phải đi cùng thông tin minh bạch, thao tác dễ hiểu và trạng thái đặt hàng chính xác.
- Báo cáo tách rõ điều đã kiểm tra trên mã, điều đã kiểm tra bằng trình duyệt và điều chưa xác minh. Không khẳng định tăng chuyển đổi khi chưa đo lường.
- Không tự cài framework, dịch vụ analytics hay triển khai lên production chỉ để phục vụ rà soát.
