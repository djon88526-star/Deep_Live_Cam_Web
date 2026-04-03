# 💰 Hướng dẫn thêm quảng cáo vào website

## 1️⃣ Google AdSense - KHUYẾN NGHỊ NHẤT

### Đăng ký AdSense:

**Bước 1:** Vào https://www.google.com/adsense/
**Bước 2:** Click **Get started** → Đăng nhập Gmail
**Bước 3:** Điền thông tin:
- Website URL: `https://deeplivecamai.com`
- Email nhận thông báo
- Quốc gia: Vietnam

**Bước 4:** Đọc và đồng ý điều khoản
**Bước 5:** Điền thông tin thanh toán (địa chỉ, tên)

### Thêm code AdSense vào website:

**Bước 1:** Sau khi đăng ký, AdSense sẽ cho bạn đoạn code
**Bước 2:** Copy đoạn code (dạng như này):

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>
```

**Bước 3:** Thêm vào file `index.html` trong thẻ `<head>`:

Tìm dòng có `</head>` và thêm code AdSense phía trước:

```html
    <!-- Google AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
         crossorigin="anonymous"></script>
    
</head>
```

**Bước 4:** Đợi Google duyệt (1-7 ngày)

### Vị trí đặt quảng cáo tốt nhất:

#### A. Quảng cáo Header (Trên cùng)
Đặt sau thẻ `<header>`, trước `<main>`:

```html
</header>

<!-- AdSense Header Ad -->
<div style="text-align: center; margin: 20px 0;">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="1234567890"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>

<main>
```

#### B. Quảng cáo giữa nội dung (In-content)
Đặt giữa các section:

```html
</section>

<!-- AdSense In-Content Ad -->
<div style="text-align: center; margin: 40px 0;">
    <ins class="adsbygoogle"
         style="display:block; text-align:center;"
         data-ad-layout="in-article"
         data-ad-format="fluid"
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="9876543210"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>

<section>
```

#### C. Quảng cáo Sidebar (Bên cạnh)
Nếu có sidebar:

```html
<aside style="width: 300px; position: sticky; top: 20px;">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="1122334455"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</aside>
```

#### D. Quảng cáo Footer (Cuối trang)
Đặt trước `</footer>`:

```html
<!-- AdSense Footer Ad -->
<div style="text-align: center; margin: 40px 0;">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="5544332211"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>

</footer>
```

---

## 2️⃣ Propeller Ads - DỄ DUYỆT HƠN

**Ưu điểm:**
- ✅ Duyệt nhanh (1-2 ngày)
- ✅ Không yêu cầu traffic cao
- ✅ Minimum payout: $5
- ✅ Nhiều định dạng quảng cáo

**Nhược điểm:**
- ❌ Trả ít hơn AdSense
- ❌ Quảng cáo đôi khi spam

**Đăng ký:**
1. Vào https://propellerads.com/
2. Sign up → Chọn **Publisher**
3. Add website
4. Lấy code và thêm vào website

---

## 3️⃣ Media.net - THAY THẾ ADSENSE

**Ưu điểm:**
- ✅ Quảng cáo contextual (liên quan nội dung)
- ✅ Trả cao (gần bằng AdSense)
- ✅ Powered by Yahoo & Bing

**Yêu cầu:**
- Website tiếng Anh
- Traffic từ US, UK, Canada

**Đăng ký:**
1. Vào https://www.media.net/
2. Apply → Đợi duyệt (3-5 ngày)

---

## 4️⃣ Ezoic - TỰ ĐỘNG TỐI ƯU

**Ưu điểm:**
- ✅ AI tự động tối ưu vị trí quảng cáo
- ✅ Tăng revenue 50-250%
- ✅ Kết hợp nhiều ad network

**Yêu cầu:**
- Minimum 10,000 pageviews/tháng

---

## 💡 Khuyến nghị cho website của bạn:

### Giai đoạn 1: Mới bắt đầu (0-1000 visitors/tháng)
**Dùng Propeller Ads:**
- Dễ duyệt
- Không yêu cầu traffic cao
- Bắt đầu kiếm tiền ngay

### Giai đoạn 2: Đang phát triển (1000-10000 visitors/tháng)
**Chuyển sang Google AdSense:**
- Trả cao hơn
- Uy tín hơn
- Quảng cáo chất lượng

### Giai đoạn 3: Lớn mạnh (10000+ visitors/tháng)
**Thêm Ezoic:**
- Tối ưu tự động
- Tăng revenue tối đa

---

## 📍 Vị trí đặt quảng cáo hiệu quả nhất:

1. **Trên video hướng dẫn** (CTR cao nhất!)
2. **Giữa Features section**
3. **Trước Download buttons**
4. **Cuối trang (Footer)**

**KHÔNG nên đặt:**
- ❌ Quá nhiều quảng cáo (spam)
- ❌ Che khuất nội dung chính
- ❌ Pop-up quá nhiều

---

## 💰 Ước tính thu nhập:

| Traffic/tháng | AdSense | Propeller Ads |
|---------------|---------|---------------|
| 1,000 visits | $2-5 | $1-3 |
| 10,000 visits | $20-100 | $10-30 |
| 100,000 visits | $200-1000 | $100-300 |

**Lưu ý:** Phụ thuộc vào:
- Quốc gia người dùng (US/EU trả cao)
- Niche (Software trả cao)
- CTR (Click-through rate)

---

## 🚀 Bước tiếp theo:

1. **Đăng ký AdSense hoặc Propeller Ads**
2. **Gửi cho tôi code quảng cáo**
3. **Tôi sẽ thêm vào website cho bạn**
4. **Git push và deploy**

Bạn muốn dùng nền tảng nào? Tôi sẽ giúp bạn tích hợp ngay!
