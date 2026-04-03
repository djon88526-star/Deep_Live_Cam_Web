# 🔐 Hướng dẫn truy cập Dashboard

## 📍 URL Dashboard sau khi deploy

Sau khi upload lên Cloudflare, dashboard của bạn sẽ có URL:

```
https://your-project-name.pages.dev/dashboard.html
```

**Ví dụ:**
- Nếu project tên là `deep-live-cam-vfx`
- Dashboard URL: `https://deep-live-cam-vfx.pages.dev/dashboard.html`

---

## 🔒 Bảo mật Dashboard

Dashboard hiện đã được bảo vệ bằng mật khẩu đơn giản.

### Mật khẩu mặc định:
```
admin123
```

### ⚠️ QUAN TRỌNG: Đổi mật khẩu trước khi deploy!

**Cách đổi mật khẩu:**

1. Mở file `dashboard.html`
2. Tìm dòng:
   ```javascript
   const DASHBOARD_PASSWORD = 'admin123'; // Thay đổi mật khẩu này!
   ```
3. Thay `admin123` bằng mật khẩu của bạn:
   ```javascript
   const DASHBOARD_PASSWORD = 'matkhaucuaban123';
   ```
4. Lưu file

---

## 🎯 Cách sử dụng Dashboard

### Bước 1: Truy cập Dashboard
1. Mở trình duyệt
2. Vào URL: `https://your-project.pages.dev/dashboard.html`
3. Nhập mật khẩu khi được hỏi
4. Click OK

### Bước 2: Xem dữ liệu
Dashboard sẽ hiển thị:
- 📊 Tổng số sessions
- 📈 Engagement score trung bình
- 📥 **Download button clicks** (Lite vs Full)
- 🔥 Click heatmap
- 🎯 User intent prediction
- 👥 Danh sách user sessions

### Bước 3: Refresh dữ liệu
- Click nút **🔄 Refresh Data** để cập nhật

---

## 📊 Dữ liệu từ đâu?

Dashboard đọc dữ liệu từ **localStorage** của người dùng.

**Lưu ý quan trọng:**
- Mỗi trình duyệt có localStorage riêng
- Dữ liệu chỉ lưu trên máy người dùng
- Dashboard chỉ hiển thị dữ liệu từ máy bạn đang xem

---

## 🚀 Nâng cấp: Thu thập dữ liệu tập trung

Nếu muốn xem dữ liệu của **TẤT CẢ người dùng**, bạn cần:

### Option 1: Dùng Google Analytics
- Đã tích hợp sẵn trong `index.html`
- Thay `G-XXXXXXXXXX` bằng GA4 ID của bạn
- Xem dashboard tại: https://analytics.google.com/

### Option 2: Dùng Microsoft Clarity (Khuyến nghị)
- **MIỄN PHÍ 100%**
- Có heatmap, session recordings
- Dễ setup hơn GA4

**Cách setup Clarity:**
1. Đăng ký tại: https://clarity.microsoft.com/
2. Tạo project mới
3. Copy Clarity ID
4. Mở `index.html`, tìm dòng:
   ```javascript
   "clarity", "script", "YOUR_CLARITY_ID"
   ```
5. Thay `YOUR_CLARITY_ID` bằng ID của bạn
6. Deploy lại website

### Option 3: Dùng Backend riêng
Nếu bạn có server riêng, uncomment code trong `analytics.js`:

```javascript
// Tìm dòng này trong analytics.js:
fetch('/api/analytics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(analyticsData)
});
```

---

## 🔐 Bảo mật nâng cao (Tùy chọn)

### Cách 1: Cloudflare Access (Miễn phí cho 50 users)
1. Vào Cloudflare Dashboard
2. Zero Trust → Access → Applications
3. Add application
4. Chọn Self-hosted
5. Subdomain: `dashboard`
6. Path: `/dashboard.html`
7. Chọn authentication method (Email OTP miễn phí)

→ Chỉ người có email được phép mới vào được!

### Cách 2: Ẩn dashboard khỏi public
Đổi tên file:
```
dashboard.html → dashboard-secret-xyz123.html
```

Chỉ bạn biết URL này!

---

## 📱 Truy cập Dashboard trên Mobile

Dashboard responsive, có thể xem trên điện thoại:
1. Mở trình duyệt trên điện thoại
2. Vào URL dashboard
3. Nhập mật khẩu
4. Xem dữ liệu

---

## 🆘 Troubleshooting

### "No analytics data available yet"
- Có nghĩa là chưa có ai truy cập website
- Hoặc bạn đang xem từ máy khác (localStorage khác)
- **Giải pháp:** Vào trang chính trước, click vài nút, sau đó vào dashboard

### Quên mật khẩu dashboard
1. Mở file `dashboard.html`
2. Xem dòng `const DASHBOARD_PASSWORD = '...'`
3. Đó là mật khẩu của bạn

### Muốn tắt mật khẩu
Xóa đoạn code bảo mật trong `dashboard.html`:
```javascript
// Xóa từ dòng này:
const DASHBOARD_PASSWORD = 'admin123';
// Đến dòng này:
}
```

---

## 📊 Tóm tắt

| Tính năng | Miễn phí | Khó setup | Xem tất cả users |
|-----------|----------|-----------|------------------|
| Dashboard local | ✅ | Dễ | ❌ |
| Google Analytics | ✅ | Trung bình | ✅ |
| Microsoft Clarity | ✅ | Dễ | ✅ |
| Cloudflare Access | ✅ (50 users) | Trung bình | - |

**Khuyến nghị:** Dùng Microsoft Clarity để xem dữ liệu tất cả users!
