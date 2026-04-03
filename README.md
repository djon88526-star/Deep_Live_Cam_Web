# Deep Live Cam VFX - Website với AI Analytics

Website giới thiệu Deep Live Cam với hệ thống phân tích AI tích hợp.

## 📁 Cấu trúc dự án

```
├── index.html              # Trang chủ chính
├── dashboard.html          # Dashboard phân tích AI
├── style.css               # Stylesheet chính
├── script.js               # JavaScript chính
├── analytics.js            # Hệ thống AI Analytics
├── assets/
│   ├── images/            # Hình ảnh, GIF demo
│   └── videos/            # Video demo
└── docs/
    └── tutorials/         
        └── Video Guid Full.mp4  ⭐ VIDEO HƯỚNG DẪN CHÍNH
```

## 🎥 Video Hướng Dẫn

**Video hướng dẫn cài đặt đầy đủ:** [`docs/tutorials/Video Guid Full.mp4`](docs/tutorials/Video Guid Full.mp4)

Video này được tích hợp trực tiếp vào website tại section "Installation Guide".

## 🤖 Tính năng AI Analytics

### Hệ thống theo dõi người dùng:
- **Theo dõi hành vi**: Mouse movements, clicks, scroll depth
- **Phân tích engagement**: Tính điểm tương tác người dùng
- **Dự đoán ý định**: AI dự đoán người dùng sẽ download, nghiên cứu, hay rời đi
- **Heatmap**: Bản đồ nhiệt click chuột
- **Session tracking**: Theo dõi từng phiên người dùng
- **Device fingerprinting**: Nhận diện thiết bị, trình duyệt, độ phân giải

### Metrics được thu thập:
- ✅ Thời gian trên trang
- ✅ Độ sâu cuộn trang (scroll depth)
- ✅ Click tracking với tọa độ
- ✅ Video interactions (play, pause, complete)
- ✅ Section visibility tracking
- ✅ Download button clicks
- ✅ Form interactions
- ✅ Outbound link tracking
- ✅ Engagement score (0-100)
- ✅ User intent prediction

### Xem Analytics Dashboard:
Mở file `dashboard.html` để xem dashboard phân tích với:
- 📊 Tổng quan thống kê
- 📈 Biểu đồ engagement theo thời gian
- 🎯 Dự đoán ý định người dùng
- 🔥 Click heatmap
- 👥 Danh sách session gần đây

## 🔧 Tích hợp Analytics bên ngoài

Website đã được chuẩn bị sẵn để tích hợp:
- **Google Analytics 4** (GA4)
- **Microsoft Clarity** - Heatmaps & Session recordings
- **Hotjar** - User behavior analytics

Chỉ cần thay thế ID trong `index.html`:
```javascript
// Google Analytics
gtag('config', 'G-XXXXXXXXXX'); // Thay bằng GA4 ID của bạn

// Microsoft Clarity
"clarity", "script", "YOUR_CLARITY_ID" // Thay bằng Clarity ID

// Hotjar
hjid:YOUR_HOTJAR_ID // Thay bằng Hotjar ID
```

## 🚀 Cách sử dụng

1. Mở `index.html` trong trình duyệt
2. Hệ thống analytics tự động bắt đầu theo dõi
3. Dữ liệu được lưu trong localStorage
4. Mở `dashboard.html` để xem phân tích

## 📊 Dữ liệu Analytics

Dữ liệu được lưu local trong `localStorage` với key `dlc_analytics`. 
Trong production, có thể gửi đến server bằng cách uncomment code trong `analytics.js`:

```javascript
fetch('/api/analytics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(analyticsData)
});
```

## 🎨 Tối ưu hóa

- Lazy loading cho images/videos
- GPU acceleration cho animations
- Debounced event tracking
- Sampled mouse movement tracking (mỗi 10 movements)
- Local storage với giới hạn 10 sessions gần nhất

## 📝 SEO

- ✅ Meta tags đầy đủ
- ✅ Open Graph tags
- ✅ JSON-LD Schema
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ Keyword cloud trong footer

## 🌐 Đa ngôn ngữ

Hỗ trợ 14 ngôn ngữ:
- English, Tiếng Việt, 简体中文, 繁體中文, 한국어, 日本語
- Français, Español, Italiano, Deutsch, Português
- Dansk, Türkçe, Bahasa Indonesia

---

**Lưu ý:** Hệ thống analytics tuân thủ quyền riêng tư, chỉ lưu dữ liệu local. Không thu thập thông tin cá nhân nhạy cảm.
