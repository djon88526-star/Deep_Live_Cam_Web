# Hướng dẫn Deploy lên Cloudflare Pages

## 🎯 Phương pháp đơn giản nhất (Drag & Drop)

### Bước 1: Đăng nhập Cloudflare
1. Truy cập: https://dash.cloudflare.com/
2. Đăng ký tài khoản miễn phí (nếu chưa có)

### Bước 2: Tạo Pages Project
1. Vào **Pages** từ sidebar
2. Click **Create a project**
3. Chọn **Upload assets**
4. Kéo thả toàn bộ thư mục hoặc chọn files:
   - index.html
   - dashboard.html
   - style.css
   - script.js
   - analytics.js
   - robots.txt
   - sitemap.xml
   - Thư mục assets/ (toàn bộ)
   - Thư mục docs/ (toàn bộ)

### Bước 3: Deploy
1. Đặt tên project: `deep-live-cam-vfx`
2. Click **Deploy site**
3. Đợi 1-2 phút

✅ **Hoàn tất!** URL của bạn: `https://deep-live-cam-vfx.pages.dev`

---

## 🚀 Phương pháp qua Git (Tự động deploy khi update)

### Bước 1: Cài đặt Git (nếu chưa có)
Download: https://git-scm.com/download/win

### Bước 2: Tạo GitHub Repository
1. Truy cập: https://github.com/new
2. Tên repo: `deep-live-cam-web`
3. Chọn **Public**
4. Click **Create repository**

### Bước 3: Push code lên GitHub
Mở terminal trong thư mục project và chạy:

```bash
git init
git add .
git commit -m "Initial commit - Deep Live Cam VFX website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/deep-live-cam-web.git
git push -u origin main
```

### Bước 4: Connect với Cloudflare Pages
1. Vào Cloudflare Dashboard → **Pages**
2. Click **Create a project** → **Connect to Git**
3. Authorize GitHub
4. Chọn repository `deep-live-cam-web`
5. **Build settings:**
   - Framework preset: **None**
   - Build command: (để trống)
   - Build output directory: `/`
   - Root directory: `/`
6. Click **Save and Deploy**

✅ Mỗi lần bạn push code mới, website tự động update!

---

## 💰 Chi phí

### Cloudflare Pages - MIỄN PHÍ bao gồm:
- ✅ Unlimited bandwidth
- ✅ Unlimited requests
- ✅ 500 builds/month
- ✅ SSL/HTTPS miễn phí
- ✅ Custom domain miễn phí
- ✅ CDN toàn cầu
- ✅ DDoS protection

### Giới hạn Free Plan:
- 500 builds/tháng (đủ dùng)
- 20,000 files/deployment
- 25 MB/file

**Website của bạn hoàn toàn nằm trong giới hạn miễn phí!**

---

## 🌐 Custom Domain (Tùy chọn)

Nếu bạn có domain riêng (vd: deeplivecam.com):

1. Vào Pages project → **Custom domains**
2. Click **Set up a custom domain**
3. Nhập domain của bạn
4. Thêm DNS records theo hướng dẫn
5. Đợi DNS propagate (5-30 phút)

✅ SSL certificate tự động được cấp miễn phí!

---

## 📊 Analytics trên Cloudflare

Cloudflare cung cấp thêm analytics miễn phí:
- Page views
- Unique visitors
- Bandwidth usage
- Geographic distribution
- Top pages

Vào **Pages project** → **Analytics** để xem.

---

## 🔧 Cập nhật website

### Nếu dùng Drag & Drop:
1. Vào Pages project
2. Click **Create new deployment**
3. Upload files mới

### Nếu dùng Git:
```bash
git add .
git commit -m "Update website"
git push
```
→ Tự động deploy!

---

## ⚡ Tối ưu thêm

### 1. Bật Cloudflare CDN
- Tự động bật khi dùng Cloudflare Pages
- Website load nhanh toàn cầu

### 2. Bật Auto Minify
1. Vào **Speed** → **Optimization**
2. Bật **Auto Minify** cho HTML, CSS, JS

### 3. Bật Brotli Compression
- Tự động bật, giảm 20-30% kích thước file

---

## 🎉 Kết quả

Sau khi deploy, bạn sẽ có:
- ✅ Website public với URL: `https://your-project.pages.dev`
- ✅ HTTPS miễn phí
- ✅ CDN toàn cầu
- ✅ Load cực nhanh
- ✅ Analytics dashboard
- ✅ Không tốn 1 xu nào!

**Lưu ý:** Video `Video Guid Full.mp4` (395MB) sẽ được upload lên Cloudflare. Nếu muốn tối ưu, có thể host video trên YouTube hoặc Vimeo và embed vào.
