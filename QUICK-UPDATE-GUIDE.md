# Hướng dẫn Update Website Nhanh

## 🔄 Nếu đang dùng Drag & Drop

### Cách update:
1. Vào https://dash.cloudflare.com/
2. Pages → Chọn project của bạn
3. Click **Create new deployment**
4. Kéo thả files đã sửa vào
5. Click **Deploy site**

⏱️ Thời gian: 2-3 phút mỗi lần update

---

## ⚡ Nâng cấp lên Git (Khuyến nghị)

### Lợi ích:
- ✅ Update chỉ với 3 lệnh
- ✅ Tự động deploy
- ✅ Có lịch sử thay đổi
- ✅ Có thể rollback nếu lỗi
- ✅ Làm việc nhóm dễ dàng

### Cách chuyển sang Git (Chỉ làm 1 lần):

**Bước 1: Cài Git**
- Download: https://git-scm.com/download/win
- Cài đặt với các tùy chọn mặc định

**Bước 2: Tạo GitHub Account**
- Truy cập: https://github.com/signup
- Đăng ký miễn phí

**Bước 3: Tạo Repository**
1. Vào https://github.com/new
2. Tên repo: `deep-live-cam-web`
3. Chọn **Public**
4. Click **Create repository**

**Bước 4: Push code lên GitHub**

Mở **Git Bash** trong thư mục website và chạy:

```bash
# Khởi tạo Git
git init

# Thêm tất cả files
git add .

# Tạo commit đầu tiên
git commit -m "Initial commit"

# Đổi tên branch thành main
git branch -M main

# Kết nối với GitHub (thay YOUR_USERNAME bằng username GitHub của bạn)
git remote add origin https://github.com/YOUR_USERNAME/deep-live-cam-web.git

# Push code lên
git push -u origin main
```

**Bước 5: Connect với Cloudflare**
1. Vào Cloudflare Dashboard → Pages
2. Click **Create a project** → **Connect to Git**
3. Authorize GitHub
4. Chọn repo `deep-live-cam-web`
5. Build settings để mặc định
6. Click **Save and Deploy**

✅ **Xong!** Giờ project của bạn đã kết nối với Git.

---

## 🚀 Sau khi chuyển sang Git, Update cực nhanh:

### Mỗi lần muốn update website:

```bash
# 1. Thêm files đã sửa
git add .

# 2. Tạo commit với mô tả thay đổi
git commit -m "Update analytics dashboard"

# 3. Push lên GitHub
git push
```

⏱️ **Chỉ mất 10 giây!** Website tự động deploy sau 1-2 phút.

---

## 📊 So sánh 2 phương pháp:

| Tiêu chí | Drag & Drop | Git |
|----------|-------------|-----|
| **Lần đầu setup** | 5 phút ⚡ | 15 phút |
| **Mỗi lần update** | 2-3 phút | 10 giây ⚡ |
| **Tự động deploy** | ❌ | ✅ |
| **Version history** | ❌ | ✅ |
| **Rollback dễ dàng** | ❌ | ✅ |
| **Làm việc nhóm** | ❌ | ✅ |

---

## 💡 Khuyến nghị:

1. **Lần đầu:** Dùng Drag & Drop để test nhanh
2. **Sau đó:** Chuyển sang Git để update dễ dàng hơn

Nếu bạn chỉ update 1-2 lần/tháng → Drag & Drop OK
Nếu bạn update thường xuyên → Nên dùng Git

---

## 🆘 Cần giúp đỡ?

### Video hướng dẫn Git cơ bản:
- https://www.youtube.com/watch?v=RGOj5yH7evk (Tiếng Việt)
- https://www.youtube.com/watch?v=HVsySz-h9r4 (English)

### Tài liệu Cloudflare Pages:
- https://developers.cloudflare.com/pages/

### Nếu gặp lỗi khi push Git:
```bash
# Nếu bị lỗi authentication, dùng Personal Access Token
# Tạo token tại: https://github.com/settings/tokens
# Chọn: repo (full control)
# Khi push, dùng token thay vì password
```
