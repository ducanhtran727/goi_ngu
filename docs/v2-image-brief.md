# Bàn giao Image Editor — landing page nhiều ảnh, ít chữ

Đã xem `khong-mau.png` và `xanh-lam.png`. Hai ảnh là tham chiếu hình dáng; chữ mô tả ngưỡng nhiệt trên ảnh chưa được xác minh độc lập, không chuyển thành thông số của ảnh mới. Dùng built-in imagegen, mỗi ảnh một lệnh, lưu bản mới trong workspace. Không đè nguồn.

## Khóa nhận diện chung cho cả bốn prompt

Use case: compositing. Input 1 (`khong-mau.png`) is the exact product identity reference, not a typography reference. Input 2 (`xanh-lam.png`) is the product operating-angle reference only. Preserve the same round chrome-rim shower head, central black circular digital display with thin copper rim, clear faceted outer head, dark gray beads in the curved neck, cylindrical transparent handle containing orange-brown beads, broad chrome neck collar and threaded chrome handle end. Do not change the design, add buttons, add electronics, add extra display, or reinterpret the beads as a verified filtration claim. No text overlays, prices, logos, temperature range labels, badges, before/after graphics or water-purity imagery. Product must remain the main readable subject at 360px display width. All water streams originate at nozzle holes surrounding the screen, never from the screen or outside the head. Any attached hose is plain incidental bathroom context, not a certified depiction of the included gift; keep most hose outside frame. No steam, red hot water, self-adjustment or safety guarantee imagery. No artificial medical or child-safety symbols.

## 1. Hero — `hero-v2.png`

Prompt: Create one photorealistic square landing-page hero, calm pale-blue tiled bathroom, soft daylight. Composite the exact reference shower in a plausible wall holder, nearly full product visible, occupying 65–75% of frame. Show shower head face at an angle that reveals the central display and clear bead handle. Thin natural water streams flow diagonally down toward an unseen drain. Keep the actual display small and natural; do not introduce a new numerical temperature claim. LED is a restrained blue detail consistent with the operation reference, not a glowing cartoon plume. Chrome reflections and water must match the room lighting. No people, no built-in captions. Keep key product features inside center 80% for mobile. Apply all identity constraints above.

Nhiệm vụ: nhận ra vòi sen, màn hình và bối cảnh dùng trong một lần nhìn. Alt: “Ảnh minh họa vòi sen LED hiển thị nhiệt độ trong phòng tắm.”

## 2. Chuẩn bị nước cho gia đình — `family-prep-v2.png`

Prompt: Create one photorealistic square lifestyle illustration in the same pale-blue bathroom. A fully clothed adult Vietnamese parent is preparing water beside a small empty child bath basin and neatly folded towel. No child appears. The adult holds the exact reference shower by its handle above the empty basin and looks at its central display. Keep the product face, round screen and orange bead handle clearly recognizable in foreground, about 35–45% of image height. Spray flows downward into the basin, away from the adult's face and body. Adult stance and grip must be anatomically plausible; show one clear hand holding the shower with correct finger count. Restrained LED and natural water, no steam. No text. Apply all identity constraints above.

Nhiệm vụ: khớp nhu cầu chuẩn bị nước trước khi tắm cho con, không ngụ ý màu đèn chứng nhận nước an toàn. Chú thích HTML: “Chuẩn bị nước trước khi tắm cho con”. Alt: “Ảnh minh họa người lớn xem vòi sen khi chuẩn bị nước cạnh chậu tắm trẻ em.”

## 3. Người lớn tuổi — `senior-prep-v2.png`

Prompt: Create one photorealistic square lifestyle illustration, same pale-blue bathroom and soft daylight. A fully clothed older Vietnamese adult calmly prepares the shower before bathing. Three-quarter close view: adult looks toward the central display of the exact reference shower held at waist-to-chest height and tilted downward into the shower tray. Product is prominent, no larger than a plausible hand shower, central screen and orange bead handle visible. No person under the water, no wet clothes, no steam, no fall-risk drama. Hand grip, wrist direction, hose connection and water trajectory are physically coherent. Only one shower head. No text. Apply all identity constraints above.

Nhiệm vụ: thể hiện thao tác quan sát nhiệt độ, không gắn với cam kết phòng bệnh hay chống bỏng. Chú thích HTML: “Quan sát nhiệt độ trước khi sử dụng”. Alt: “Ảnh minh họa người lớn tuổi xem màn hình vòi sen trước khi tắm.”

## 4. Sử dụng hằng ngày — `daily-use-v2.png`

Prompt: Create one photorealistic square close-up in the same pale-blue bathroom. An adult hand holds the exact reference shower; crop to hand, product and water, no body. Face of head and central black round display remain visible in an oblique view, orange bead handle and chrome collar clearly visible. Water sprays naturally downward from nozzle holes around the display into the out-of-frame shower tray. Product is about 65% of frame, correctly scaled to hand. Restrained blue light at nozzle rim, no exaggerated coloured beams, no steam. Perfectly plausible hand anatomy and grip. No text. Apply all identity constraints above.

Nhiệm vụ: nối sản phẩm với thao tác hằng ngày và cách đọc màn hình. Chú thích HTML: “Nhìn nhiệt độ, chủ động chỉnh nước”. Alt: “Ảnh minh họa bàn tay cầm vòi sen LED đang chảy nước.”

## Nghiệm thu và nguồn

- Hiển thị nhãn ngắn bên dưới nhóm: **“Ảnh minh họa bối cảnh sử dụng.”** Hero cũng dùng “Ảnh minh họa” nếu sản phẩm đã được AI dựng lại, không trình bày như ảnh chụp kiểm nghiệm.
- Bàn giao nguồn: ảnh người dùng trong repo; chỉnh/tạo thêm bằng AI: phông phòng tắm, người, bàn tay, ánh sáng, nước; hình dáng sản phẩm phải đối chiếu lại nguồn.
- Không dùng ảnh AI làm bằng chứng dây nối quà tặng trông như thế nào; thiếu ảnh dây nguồn nên chỉ ghi quyền lợi bằng HTML.
- So sánh từng ảnh với hai nguồn ở 100% và 360px: màn hình giữa đầu sen, collar chrome, thân hạt cam, tỷ lệ đầu/thân, tay, nước, dây không xuyên vật thể. Loại hoặc sửa ảnh sai nhận diện.
- Giữ ảnh màu gốc sẵn có hiển thị đủ cả ba trạng thái trên trang; ảnh minh họa mới không thay thế bằng chứng cấu tạo hoặc xác nhận ngưỡng nhiệt.
- Chữ tiêu đề/chú thích, giá và quyền lợi để ở HTML; không nhồi chữ vào raster. Dùng object-fit: contain cho hero; xem crop từng ảnh bối cảnh trước khi dùng cover.
- Ưu tiên xuất WebP từ bản raster cuối bằng công cụ cho phép, giữ PNG gốc mới; không sửa bằng script thay cho imagegen.

Giới hạn: bản này là brief và checklist; chưa tạo hoặc nghiệm thu ảnh đầu ra.
