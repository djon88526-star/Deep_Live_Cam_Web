# 📊 Hướng dẫn thêm Analytics IDs chi tiết

## 1️⃣ Google Analytics 4 (GA4) - MIỄN PHÍ

### Tạo tài khoản và lấy ID:

**Bước 1:** Vào https://analytics.google.com/
**Bước 2:** Đăng nhập Gmail → Click **Start measuring**
**Bước 3:** Điền thông tin:
- Account name: `Deep Live Cam AI`
- Property name: `Deep Live Cam AI Website`
- Time zone: Chọn múi giờ của bạn
- Currency: VND

**Bước 4:** Chọn **Web** → Nhập URL website
**Bước 5:** Copy **Measurement ID** (dạng `G-ABC123DEF4`)

### Thêm vào website:

Mở file `index.html`, tìm 2 chỗ có `G-XXXXXXXXXX` và thay bằng ID của bạn:

**Dòng 451:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123DEF4"></script>
```

**Dòng 456:**
```javascript
gtag('config', 'G-ABC123DEF4');
```

---

## 2️⃣ Microsoft Clarity - MIỄN PHÍ (Khuyến nghị!)

### Tại sao nên dùng Clarity:
- ✅ Hoàn toàn miễn phí
- ✅ Heatmaps (bản đồ nhiệt)
- ✅ Session recordings (quay lại hành vi người dùng)
- ✅ Dễ setup hơn GA4
- ✅ Không giới hạn traffic

### Tạo tài khoản và lấy ID:

**Bước 1:** Vào https://clarity.microsoft.com/
**Bước 2:** Click **Sign up** → Đăng nhập Microsoft account (hoặc tạo mới)
**Bước 3:** Click **Add new project**
**Bước 4:** Điền thông tin:
- Name: `Deep Live Cam AI`
- Website URL: `https://deeplivecamai.com`
- Category: Software

**Bước 5:** Click **Add new project**
**Bước 6:** Copy **Project ID** (dạng `abc123def4`)

### Thêm vào website:

Mở file `index.html`, tìm dòng 465, thay `YOUR_CLARITY_ID`:

**Dòng 465:**
```javascript
})(window, document, "clarity", "script", "abc123def4");
```

---

## 3️⃣ Hotjar - CÓ PHÍ (Tùy chọn)

### Giá:
- Free: 35 sessions/ngày
- Plus: $32/tháng - 100 sessions/ngày
- Business: $80/tháng - 500 sessions/ngày

### Tạo tài khoản và lấy ID:

**Bước 1:** Vào https://www.hotjar.com/
**Bước 2:** Click **Sign up free**
**Bước 3:** Điền thông tin và xác nhận email
**Bước 4:** Add new site:
- Site URL: `https://deeplivecamai.com`
- Site type: Software

**Bước 5:** Copy **Site ID** (dạng số: `1234567`)

### Thêm vào website:

Mở file `index.html`, tìm dòng 473, thay `YOUR_HOTJAR_ID`:

**Dòng 473:**
```javascript
h._hjSettings={hjid:1234567,hjsv:6};
```

---

## 🚀 Sau khi thêm IDs:

### Bước 1: Commit và push lên GitHub

```bash
git add index.html
git commit -m "Add Google Analytics and Microsoft Clarity IDs"
git push
```

### Bước 2: Cloudflare tự động deploy (1-2 phút)

### Bước 3: Kiểm tra hoạt động

**Google Analytics:**
1. Vào https://analytics.google.com/
2. Mở website của bạn trong tab khác
3. Vào GA4 → Reports → Realtime
4. Sẽ thấy 1 active user (chính bạn!)

**Microsoft Clarity:**
1. Vào https://clarity.microsoft.com/
2. Chọn project
3. Mở website của bạn
4. Sau 2-3 phút, sẽ thấy session recording

---

## 📊 So sánh các công cụ:

| Tính năng | GA4 | Clarity | Hotjar |
|-----------|-----|---------|--------|
| **Giá** | Miễn phí | Miễn phí | $32+/tháng |
| **Heatmaps** | ❌ | ✅ | ✅ |
| **Session Recording** | ❌ | ✅ | ✅ |
| **Funnel Analysis** | ✅ | ❌ | ✅ |
| **User Demographics** | ✅ | ❌ | ❌ |
| **Surveys** | ❌ | ❌ | ✅ |
| **Dễ setup** | Trung bình | Dễ | Dễ |

---

## 💡 Khuyến nghị:

**Dùng cả GA4 + Clarity (cả 2 đều miễn phí):**
- **GA4:** Theo dõi traffic, demographics, conversion
- **Clarity:** Xem heatmaps và session recordings

**Bỏ qua Hotjar** nếu bạn không cần surveys hoặc advanced features.

---

## 🎯 Tóm tắt nhanh:

1. **Tạo GA4:** https://analytics.google.com/ → Lấy `G-XXXXXXXXXX`
2. **Tạo Clarity:** https://clarity.microsoft.com/ → Lấy Project ID
3. **Thay trong index.html:**
   - Dòng 451, 456: Thay `G-XXXXXXXXXX`
   - Dòng 465: Thay `YOUR_CLARITY_ID`
4. **Git push**
5. **Đợi deploy** (1-2 phút)
6. **Test:** Mở website và kiểm tra dashboard

---

## 🆘 Cần giúp đỡ?

Nếu bạn gặp khó khăn, gửi cho tôi:
- Screenshot màn hình GA4 hoặc Clarity
- Hoặc ID bạn đã lấy được

Tôi sẽ giúp bạn thêm vào code!
