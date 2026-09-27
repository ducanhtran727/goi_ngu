# Vòi sen LED — phối hợp agent

## Bối cảnh
- Quà tặng: người dùng đã cung cấp ảnh dây sen (`assets/gift-shower-hose.png`) và xác nhận thông điệp “tặng kèm dây nối (dây sen), không cần mua thêm, nhận về lắp dùng ngay”. Đặt khối quà tặng trước gói giá; không tự thêm chiều dài dây, giá trị quà hoặc số lượng dây theo combo chưa được xác nhận.
- Bổ sung được người dùng xác nhận ngày 27/09/2026: lõi lọc đá năng lượng và tính năng tăng áp. Chỉ mô tả đúng hai tính năng; chưa có thông số hiệu suất lọc/tăng áp, chứng nhận hoặc lợi ích sức khỏe để quảng cáo thêm.
- Chính sách người dùng xác nhận: bộ sản phẩm gồm vòi sen, tặng kèm dây nối; miễn phí vận chuyển; đổi trả miễn phí trong 14 ngày đầu nếu dùng không ưng; bảo hành lỗi nhà sản xuất 24 tháng. Không mở rộng thành bảo hành mọi nguyên nhân hoặc tự thêm điều kiện áp dụng.
- Landing page tiếng Việt bán vòi sen LED hiển thị nhiệt độ, ưu tiên trải nghiệm mua hàng trên điện thoại.
- Giá người dùng xác nhận: giá gốc 689.000đ/chiếc; mua 1 chiếc 296.000đ, mua 2 chiếc tổng 550.000đ, mua 3 chiếc tổng 750.000đ. Tính theo gói số lượng, không nhân giá một chiếc. Không suy ra thời hạn khuyến mại hoặc phí giao hàng.
- Sản phẩm hiển thị nhiệt độ và đèn báo ba màu, hoạt động bằng sức nước. Không mô tả là tự điều chỉnh nhiệt độ, chống bỏng tuyệt đối hoặc tương thích mọi đầu nối.
- Hiện trạng: `index.html` chứa HTML, CSS và JavaScript; ảnh nằm ở thư mục gốc. Kiểm tra lại cấu trúc trước mỗi nhiệm vụ.
- Trao đổi với người dùng bằng tiếng Việt. Giữ stack hiện tại trừ khi yêu cầu công việc cần thay đổi.

## Phân công
Với công việc nghiên cứu, nội dung, tư vấn bán hàng, hình ảnh, thiết kế hoặc thay đổi trải nghiệm mua hàng, phân công các subagent phù hợp trong sáu vai trò dưới đây khi công cụ hỗ trợ. Agent chính cung cấp nội dung hồ sơ tương ứng trong lệnh giao việc; các file hồ sơ không tự đăng ký thành agent trong ứng dụng. Chỉ gọi vai trò cần thiết cho nhiệm vụ.

1. `mobile_ux_designer`: đọc `docs/agents/mobile-ux-designer.md`. Phụ trách hành trình mua hàng, thiết kế mobile, nội dung giao diện và tiêu chí nghiệm thu UX.
2. `frontend_developer`: đọc `docs/agents/frontend-developer.md`. Phụ trách triển khai, responsive, accessibility, hiệu năng và tính đúng đắn của form.
3. `content_market_researcher`: đọc `docs/agents/content-market-researcher.md`. Phụ trách nghiên cứu thị trường, khách hàng, đối thủ, định vị thông điệp và nội dung bán hàng tiếng Việt.
4. `bathroom_marketing_expert`: đọc `docs/agents/bathroom-marketing-expert.md`. Phụ trách nghiên cứu chuyên sâu thị trường đồ dùng phòng tắm, phân khúc, định vị, gói bán và kế hoạch kiểm chứng; dùng chuẩn tư duy của chuyên gia senior tương đương 10 năm kinh nghiệm, không nhận là có lịch sử làm nghề thật.
5. `chat_sales_consultant`: đọc `docs/agents/chat-sales-consultant.md`. Phụ trách kịch bản tư vấn qua tin nhắn, tìm hiểu nhu cầu, xử lý băn khoăn và xác nhận đơn mua; không tự gửi tin nhắn cho khách.
6. `product_image_editor`: đọc `docs/agents/product-image-editor.md`. Phụ trách ảnh bìa, ảnh sử dụng, ảnh tính năng và ảnh gói mua theo kịch bản nội dung; bảo toàn đặc điểm sản phẩm và thông tin đã xác nhận.

## Quy trình
- Agent chính xác định phạm vi, mục tiêu và quyền sở hữu file trước khi giao việc.
- Với nhiệm vụ chiến lược, Marketing nghiên cứu thị trường và bàn giao phân khúc, nhu cầu, định vị, gói bán cùng căn cứ. Content dùng kết quả đó để viết; không lặp lại cùng một khảo sát trừ khi cần đối chiếu.
- Sales rà soát các câu hỏi và rào cản mua từ hội thoại được cung cấp; bàn giao cách tư vấn, câu hỏi cần làm rõ và góp ý cho FAQ/form. Không coi hội thoại mô phỏng là dữ liệu khách thật.
- Content chốt kịch bản trước khi chọn ảnh; Designer khảo sát UX; FE có thể khảo sát kỹ thuật song song, độc lập.
- Content bàn giao thông điệp, nội dung từng section và nguồn xác minh; Designer phối hợp sắp xếp nội dung, chốt độ dài hiển thị và microcopy theo hành trình mua hàng.
- Image Editor nhận kịch bản và kích thước từ Content/Designer, tạo hoặc sửa ảnh theo nhiệm vụ từng khối; bàn giao file cùng ghi chú nguồn và phần đã chỉnh. Designer kiểm tra trên mobile, Content kiểm tra chữ và tuyên bố trước khi FE tích hợp.
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

## Hướng trình bày mới nhất
- Phần đầu vẫn có nút đặt mua dẫn tới form; bảng giá tiếp tục ở sau phần lợi ích; thanh mua hàng ghim xuất hiện ngay sau khi lướt hết hero.
- Ưu tiên ảnh và lợi ích trước giá: hero → tình huống dùng → ba trạng thái đèn → sức nước → gói giá/quyền lợi → form.
- Thanh mua hàng ghim hiện khi hero đã rời khỏi màn hình phía trên, ẩn khi quay lại hero hoặc đang điền form. Tiêu đề/chú thích ngắn; bỏ FAQ lặp lại, câu hỏi tương thích và hướng dẫn kiểm tra khỏi mạch bán hàng. Không thay bằng cam kết tương thích mọi hệ thống.

- Ba tính năng cốt lõi luôn giữ ở đầu trang: hiển thị nhiệt độ chính xác; đèn cảnh báo theo nhiệt độ; hoạt động hoàn toàn bằng sức nước, không cần điện hay pin. Lõi lọc đá năng lượng và tăng áp là tính năng bổ sung, không thay thế ba điểm này. Không tự thêm sai số đo hoặc hiệu suất định lượng.
