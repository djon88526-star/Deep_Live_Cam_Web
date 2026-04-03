// Translations mapping
const translations = {
    en: {
        hero_title: "Professional Real-time <br><span class=\"gradient-text\">Face Swap AI</span>",
        hero_subtitle: "Unleash the power of AI with 1-click face swapping. Seamlessly integrate with OBS, Zoom, Twitch, and more.",
        stat_users: "Active Users",
        stat_accuracy: "Accuracy",
        stat_performance: "Real-time",
        hero_cta_download: "Free Download",
        hero_cta_learn: "Learn More",
        notice_prefix: "⚠️ <strong>Ethical Use Notice:</strong>",
        notice_text: "Use responsibly with consent. Never use for malicious purposes, fraud, or deception. Always comply with local laws and platform terms of service. This software is for entertainment and creative purposes only.",
        features_title: "Professional <span class=\"gradient-text\">AI Features</span>",
        f1_title: "1-Click Swap",
        f1_desc: "No complex setup. Powered by cutting-edge deep learning algorithms. Choose a face model and start swapping instantly.",
        f2_title: "GPU Accelerated",
        f2_desc: "No lag, no delay. Process up to 60 FPS for seamless real-time performance with optimized GPU acceleration.",
        f3_title: "Universal Support",
        f3_desc: "Swap faces from your webcam during streaming or video calls on Zoom, Teams, Skype, or Discord. Supports pre-recorded video files.",
        req_title: "System Requirements",
        req_min_label: "Minimum:",
        req_min_text: "Mid-range PC, 8GB RAM, DirectX 12.",
        req_opt_label: "Optimal:",
        req_opt_text: "NVIDIA GPU (4GB+ VRAM), 16GB RAM for 60 FPS.",
        req_os_label: "OS:",
        req_os_text: "Windows 10/11 (64-bit).",
        steps_title: "Get Started in <span class=\"gradient-text\">3 Easy Steps</span>",
        s1_title: "Select Face Model",
        s1_desc: "Upload a clear photo (or many for training) of the face you want to use.",
        s2_title: "Configure Settings",
        s2_desc: "Adjust blend, lighting, and GPU settings to achieve natural results.",
        s3_title: "Go Live!",
        s3_desc: "Select \"Deep Live Cam AI\" as your camera in OBS, Zoom, or Discord.",
        faq_title: "Frequently <span class=\"gradient-text\">Asked Questions</span>",
        q1: "Is Deep Live Cam AI free?",
        a1: "Yes, Deep Live Cam AI is completely free and open-source. There are no hidden fees or subscriptions. We believe in making AI technology accessible to everyone.",
        q2: "Which platforms does it support?",
        a2: "Deep Live Cam AI creates a virtual webcam that works with any software: Zoom, Skype, Teams, Discord, OBS, Streamlabs, etc.",
        q3: "Can I train my own face models?",
        a3: "Yes! You need 100-500 clear photos of the target face. Use our included training tools or check our GitHub for guides.",
        q4: "Is it detectable?",
        a4: "Our AI produces high-quality results, but advanced forensic tools may identify AI-generated content. Always use responsibly.",
        dl_header: "UNLEASH THE AI: 1-CLICK TO SWAP",
        dl_subheader: "Select the edition that best fits your workflow. 100% Automated. Instant Execution.",
        dl_lite_badge: "RECOMMENDED",
        dl_lite_title: "LITE WEB INSTALLER",
        dl_lite_subtitle: "Ultra-Lightweight Setup (567MB)",
        dl_lite_desc: "Our smart installer automatically provisions the Python environment and fetches the latest AI models in the background upon first launch.",
        dl_lite_note: "(Estimated setup time: 5-10 minutes depending on network speed)",
        tag_uptodate: "Always Up-to-Date",
        tag_fastdl: "Fast Initial Download",
        btn_dl_lite: "DOWNLOAD LITE (567MB)",
        dl_full_title: "FULL BUNDLE EDITION",
        dl_full_subtitle: "Ultimate Offline Archive (4.04GB)",
        dl_full_desc: "Pre-packed with a dedicated Portable Python engine, CUDA libraries, and all core AI Models. Extract the archive and it's ready to blast off instantly!",
        tag_offline: "100% Offline Capable",
        tag_plugplay: "Instant Plug & Play",
        btn_dl_full: "GET FULL BUNDLE (4.04GB)",
        clean_notice: "🔒 Setup payload is digitally crypted and verified 100% clean by Windows Defender.",
        footer_desc: "Advanced FaceSwap AI Technology providing seamless results for creators and professionals.",
        resources_title: "Resources",
        link_github: "GitHub Source",
        link_docs: "Documentation",
        link_trouble: "Troubleshooting",
        link_community: "Community",
        quick_links_title: "Quick Links",
        nav_home: "Home",
        nav_features: "Features",
        nav_download: "Download",
        demo_title: "Real-time <span class=\"gradient-text\">Performance Demo</span>",
        demo_subtitle: "See Deep Live Cam AI in action with near-zero latency.",
        testimonials_title: "Trusted by <span class=\"gradient-text\">Top Creators</span>",
        testimonials_subtitle: "Join thousands of streamers daily.",
        t1_quote: "\"Deep Live Cam AI revolutionized my Twitch streams. The swap is so fast my audience couldn't even tell!\"",
        t2_quote: "\"The easiest setup I've ever seen for AI tools. No technical knowledge needed.\"",
        t3_quote: "\"Perfect integration with OBS. I use it for my prank videos and the quality is stunning.\"",
        role_streamer: "Verified Streamer",
        role_youtuber: "YouTuber",
        role_creator: "Content Creator"
    },
    vi: {
        hero_title: "Phần Mềm <br><span class=\"gradient-text\">Face Swap AI</span> Chuyên Nghiệp",
        hero_subtitle: "Khai phá sức mạnh của AI với tính năng thay đổi khuôn mặt chỉ trong 1 lần nhấp.",
        hero_cta_download: "Tải Xuống Miễn Phí",
        features_title: "Tính Năng <span class=\"gradient-text\">AI Chuyên Nghiệp</span>",
        f1_title: "Thay Đổi trong 1 Lần Nhấp",
        req_title: "Yêu Cầu Hệ Thống",
        steps_title: "Bắt Đầu với <span class=\"gradient-text\">3 Bước Dễ Dàng</span>",
        dl_header: "KHỞI CHẠY AI: THAY ĐỔI CHỈ VỚI 1 LẦN NHẤP",
        btn_dl_lite: "TẢI BẢN LITE (567MB)",
        btn_dl_full: "TẢI BẢN FULL (4.04GB)",
        resources_title: "Tài Nguyên",
        link_github: "Mã Nguồn GitHub",
        quick_links_title: "Liên Kết Nhanh",
        nav_home: "Trang Chủ",
        nav_features: "Tính Năng",
        nav_download: "Tải Xuống",
        demo_title: "Demo <span class=\"gradient-text\">Hiệu Suất Thực</span>",
        demo_subtitle: "Xem Deep Live Cam AI hoạt động với độ trễ thấp.",
        testimonials_title: "Được Tin Tưởng Bởi <span class=\"gradient-text\">Creators</span>",
        testimonials_subtitle: "Tham gia cùng hàng ngàn streamer mỗi ngày.",
        t1_quote: "\"Deep Live Cam AI đã thay đổi hoàn toàn stream trên Twitch của tôi. Tốc độ swap cực nhanh!\"",
        t2_quote: "\"Cài đặt dễ dàng nhất mà tôi từng thấy cho các công cụ AI.\"",
        t3_quote: "\"Tích hợp hoàn hảo với OBS. Chất lượng ảnh thực sự kinh ngạc.\"",
        role_streamer: "Streamer Đã Xác Minh",
        role_youtuber: "YouTuber",
        role_creator: "Nhà Sáng Tạo Nội Dung"
    },
    "zh-cn": {
        hero_title: "专业实时 <br><span class=\"gradient-text\">AI 换脸</span>",
        hero_subtitle: "只需点击一下，即可释放 AI 换脸的力量。无缝集成 OBS, Zoom, Twitch 等。",
        stat_users: "活跃用户",
        stat_accuracy: "准确率",
        stat_performance: "实时",
        hero_cta_download: "免费下载",
        hero_cta_learn: "了解更多",
        notice_prefix: "⚠️ <strong>伦理使用提示:</strong>",
        notice_text: "请在获得同意的情况下负责任地使用。切勿用于恶意目的、欺诈或欺骗。始终遵守当地法律。此软件仅供娱乐和创意用途。",
        features_title: "专业 <span class=\"gradient-text\">AI 功能</span>",
        f1_title: "一键换脸",
        f1_desc: "无需复杂设置。由尖端深度学习算法驱动。选择面部模型即可立即开始。",
        f2_title: "GPU 加速",
        f2_desc: "无延迟，无等待。针对优化 GPU 加速，处理速度高达 60 FPS。",
        f3_title: "通用支持",
        f3_desc: "在 Zoom, Teams, Skype 或 Discord 的视频通话中调用您的网络摄像头进行换脸。",
        req_title: "系统要求",
        req_min_label: "最低:",
        req_min_text: "中端 PC, 8GB 内存, DirectX 12。",
        req_opt_label: "推荐:",
        req_opt_text: "NVIDIA GPU (4GB+ 显存), 16GB 内存。",
        req_os_label: "操作系统:",
        req_os_text: "Windows 10/11 (64位)。",
        steps_title: "只需 <span class=\"gradient-text\">3 个简单步骤</span> 即可开始",
        s1_title: "选择面部模型",
        s1_desc: "上传一张清晰的照片或多张用于训练的照片。",
        s2_title: "配置设置",
        s2_desc: "调整融合、光照和 GPU 设置以达到自然效果。",
        s3_title: "立即开始!",
        s3_desc: "在 OBS, Zoom 或 Discord 中选择 \"Deep Live Cam\" 作为您的摄像头。",
        faq_title: "常见 <span class=\"gradient-text\">问题解答</span>",
        q1: "Deep Live Cam 是免费的吗？",
        a1: "是的，Deep Live Cam 完全免费且开源。没有隐藏费用或订阅。",
        q2: "它支持哪些平台？",
        a2: "它创建一个虚拟摄像头，适用于任何软件：Zoom, Skype, Teams, Discord, OBS 等。",
        q3: "我可以训练自己的模型吗？",
        a3: "可以！您需要 100-500 张清晰的目标面部照片。",
        q4: "它能被检测到吗？",
        a4: "我们的 AI 效果极佳，但高级分析工具可能识别 AI 生成内容。请负责任使用。",
        dl_header: "一键释放 AI：即刻换脸",
        dl_subheader: "选择最适合您工作流程的版本。100% 自动化执行。",
        dl_lite_badge: "官方推荐",
        dl_lite_title: "精简版 Web 安装器",
        dl_lite_subtitle: "超轻量级设置 (567MB)",
        dl_lite_desc: "通过智能安装器自动配置 Python 环境并在后台获取最新的 AI 模型。",
        dl_lite_note: "(预计设置时间：根据网络速度需 5-10 分钟)",
        tag_uptodate: "始终保持最新",
        tag_fastdl: "快速下载安装",
        btn_dl_lite: "下载精简版 (567MB)",
        dl_full_title: "完整资源包版",
        dl_full_subtitle: "终极离线存档 (4.04GB)",
        dl_full_desc: "预装专用 Python 引擎、CUDA 库和所有核心 AI 模型。解压即用！",
        tag_offline: "100% 离线可用",
        tag_plugplay: "即插即用",
        btn_dl_full: "获取完整包 (4.04GB)",
        clean_notice: "🔒 安装程序已通过加密验证，Windows Defender 扫描 100% 安全无毒。",
        footer_desc: "先进的 FaceSwap AI 技术，为创作者和专业人士提供无缝体验。",
        resources_title: "官方资源",
        link_github: "GitHub 源代码",
        link_docs: "技术文档",
        link_trouble: "故障排除",
        link_community: "加入社区",
        quick_links_title: "快速链接",
        nav_home: "首页",
        nav_features: "功能",
        nav_download: "立即下载",
        demo_title: "实时 <span class=\"gradient-text\">性能演示</span>",
        demo_subtitle: "查看 Deep Live Cam AI 在超低延迟下的表现。",
        testimonials_title: "顶级 <span class=\"gradient-text\">创作者的信任</span>",
        testimonials_subtitle: "加入成千上万使用 Deep Live Cam AI 的主播行列。",
        t1_quote: "\"Deep Live Cam AI 彻底改变了我的 Twitch 直播。换脸速度如此之快！\"",
        t2_quote: "\"这是我见过最简单的 AI 工具设置。无需技术知识。\"",
        t3_quote: "\"与 OBS 完美集成。画质和稳定性令人惊叹。\"",
        role_streamer: "认证主播",
        role_youtuber: "YouTuber",
        role_creator: "内容创作者"
    }
};

// All supported languages for fallback checking
const allLangs = ['vi', 'zh-cn', 'zh-tw', 'ko', 'ja', 'fr', 'es', 'it', 'de', 'pt', 'da', 'tr', 'id'];
allLangs.forEach(lang => {
    if (!translations[lang]) {
        translations[lang] = JSON.parse(JSON.stringify(translations.en));
    } else {
        // Ensure ALL keys from English exist in the target language
        Object.keys(translations.en).forEach(key => {
            if (!translations[lang][key]) {
                translations[lang][key] = translations.en[key];
            }
        });
    }
});

function changeLang(lang) {
    if (!translations[lang]) return;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update active state in language bar
    document.querySelectorAll('.language-bar a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('onclick') && a.getAttribute('onclick').includes(`'${lang}'`)) {
            a.classList.add('active');
        }
    });

    // Store preference
    localStorage.setItem('preferred_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-up, .animate-fade').forEach(el => observer.observe(el));

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Spatial UI Interaction Layer ---
    const windows = document.querySelectorAll('.spatial-window');
    
    // 3D Tilt Effect
    const handleTilt = (e) => {
        windows.forEach(win => {
            const rect = win.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Only tilt if mouse is near or over the element
            const distance = Math.hypot(x - rect.width/2, y - rect.height/2);
            if (distance > 1000) return; 

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 200; 
            const rotateY = (centerX - x) / 200;
            
            win.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
        });
    };

    const resetTilt = () => {
        windows.forEach(win => {
            win.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
        });
    };

    document.addEventListener('mousemove', handleTilt);
    document.addEventListener('mouseleave', resetTilt);

    // Cursor Glow Movement
    const cursorGlow = document.getElementById('cursor-glow');
    document.addEventListener('mousemove', (e) => {
        if (cursorGlow) {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        }
    });

    // Dynamic Ambient Light Movement
    const lights = document.querySelectorAll('.ambient-light');
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 50;
        const y = (e.clientY / window.innerHeight - 0.5) * 50;
        
        lights.forEach((light, index) => {
            const factor = index === 0 ? 1 : -1;
            light.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        });
    });

    // Original Script Logic (Testimonial Slider)
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.nav-dot');
    const track = document.getElementById('testimonial-track');

    if (track && slides.length > 0) {
        const updateSlider = (index) => {
            currentSlide = index;
            const offset = index * 100;
            track.style.transform = `translateX(-${offset}%)`;
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        };

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => updateSlider(i));
        });

        // Auto slide
        setInterval(() => {
            let next = (currentSlide + 1) % slides.length;
            updateSlider(next);
        }, 5000);
    }

    // Initialize Language
    const savedLang = localStorage.getItem('preferred_lang') || 'en';
    changeLang(savedLang);

    // Event Listeners for Downloads (Safe Check)
    const dlLite = document.getElementById('dl-lite');
    if (dlLite) {
        dlLite.addEventListener('click', (e) => {
            console.log('Download Lite clicked');
        });
    }

    const dlFull = document.getElementById('dl-full');
    if (dlFull) {
        dlFull.addEventListener('click', (e) => {
            console.log('Download Full clicked');
        });
    }

    // --- Dashboard Data Simulation ---
    const accuracyGauge = document.getElementById('gauge-accuracy');
    const speedGauge = document.getElementById('gauge-speed');
    
    if (accuracyGauge && speedGauge) {
        setInterval(() => {
            const acc = 95 + Math.random() * 4;
            const speed = 10 + Math.random() * 5;
            
            // stroke-dashoffset: 283 is empty, 0 is full (for semicircles)
            // But our gauge is a half-circle, so range is ~283 to 141
            accuracyGauge.style.strokeDashoffset = 141 + (100 - acc) * 1.41;
            speedGauge.style.strokeDashoffset = 141 + (speed / 20) * 141;
        }, 3000);
    }

    console.log('Deep Live Cam VFX initialized.');
});
