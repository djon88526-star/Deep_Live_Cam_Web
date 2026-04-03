// Advanced AI-Powered Analytics & User Tracking System
// Deep Live Cam AI - User Behavior Analysis

class AIAnalytics {
    constructor() {
        this.sessionId = this.generateSessionId();
        this.userId = this.getUserId();
        this.events = [];
        this.userProfile = {
            device: this.detectDevice(),
            browser: this.detectBrowser(),
            language: navigator.language,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            viewport: `${window.innerWidth}x${window.innerHeight}`,
            colorDepth: window.screen.colorDepth,
            platform: navigator.platform,
            touchSupport: 'ontouchstart' in window,
            connectionType: this.getConnectionType()
        };
        this.behaviorData = {
            mouseMovements: [],
            clicks: [],
            scrollDepth: 0,
            timeOnPage: 0,
            interactions: [],
            heatmapData: []
        };
        this.startTime = Date.now();
        this.init();
    }

    generateSessionId() {
        return 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    getUserId() {
        let userId = localStorage.getItem('dlc_user_id');
        if (!userId) {
            userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('dlc_user_id', userId);
        }
        return userId;
    }

    detectDevice() {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return 'tablet';
        }
        if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return 'mobile';
        }
        return 'desktop';
    }

    detectBrowser() {
        const ua = navigator.userAgent;
        let browser = 'Unknown';
        if (ua.indexOf('Firefox') > -1) browser = 'Firefox';
        else if (ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1) browser = 'Opera';
        else if (ua.indexOf('Trident') > -1) browser = 'IE';
        else if (ua.indexOf('Edge') > -1) browser = 'Edge';
        else if (ua.indexOf('Chrome') > -1) browser = 'Chrome';
        else if (ua.indexOf('Safari') > -1) browser = 'Safari';
        return browser;
    }

    getConnectionType() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        return connection ? connection.effectiveType : 'unknown';
    }

    init() {
        // Track page view
        this.trackEvent('page_view', {
            url: window.location.href,
            referrer: document.referrer,
            title: document.title
        });

        // Mouse movement tracking (sampled)
        let mouseSampleRate = 0;
        document.addEventListener('mousemove', (e) => {
            mouseSampleRate++;
            if (mouseSampleRate % 10 === 0) { // Sample every 10th movement
                this.behaviorData.mouseMovements.push({
                    x: e.clientX,
                    y: e.clientY,
                    timestamp: Date.now()
                });
                // Keep only last 100 movements
                if (this.behaviorData.mouseMovements.length > 100) {
                    this.behaviorData.mouseMovements.shift();
                }
            }
        });

        // Click tracking with heatmap
        document.addEventListener('click', (e) => {
            const clickData = {
                x: e.clientX,
                y: e.clientY,
                target: e.target.tagName,
                targetId: e.target.id,
                targetClass: e.target.className,
                timestamp: Date.now()
            };
            this.behaviorData.clicks.push(clickData);
            this.behaviorData.heatmapData.push({ x: e.clientX, y: e.clientY });

            this.trackEvent('click', clickData);
        });

        // Scroll depth tracking
        let maxScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                this.behaviorData.scrollDepth = Math.round(scrollPercent);

                // Track milestone scrolls
                if ([25, 50, 75, 100].includes(Math.round(scrollPercent))) {
                    this.trackEvent('scroll_depth', { depth: Math.round(scrollPercent) });
                }
            }
        });

        // Time on page
        setInterval(() => {
            this.behaviorData.timeOnPage = Math.round((Date.now() - this.startTime) / 1000);
        }, 1000);

        // Track section visibility
        this.trackSectionVisibility();

        // Track download button clicks
        this.trackDownloadButtons();

        // Track video interactions
        this.trackVideoInteractions();

        // Track form interactions
        this.trackFormInteractions();

        // Track outbound links
        this.trackOutboundLinks();

        // Send data before page unload
        window.addEventListener('beforeunload', () => {
            this.sendAnalytics();
        });

        // Periodic data send (every 30 seconds)
        setInterval(() => {
            this.sendAnalytics();
        }, 30000);

        // Track engagement score
        this.calculateEngagementScore();
    }

    trackEvent(eventName, data = {}) {
        const event = {
            event: eventName,
            timestamp: Date.now(),
            sessionId: this.sessionId,
            userId: this.userId,
            data: data
        };
        this.events.push(event);
        console.log('📊 Event tracked:', eventName, data);
    }

    trackSectionVisibility() {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.trackEvent('section_view', {
                        section: entry.target.id,
                        visibility: entry.intersectionRatio
                    });
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => observer.observe(section));
    }

    trackDownloadButtons() {
        const dlButtons = document.querySelectorAll('#dl-lite, #dl-full, .btn-primary');
        dlButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let buttonType = 'unknown';
                let buttonCategory = 'other';

                if (btn.id === 'dl-lite') {
                    buttonType = 'Download Lite (119MB)';
                    buttonCategory = 'lite';
                } else if (btn.id === 'dl-full') {
                    buttonType = 'Download Full (4.24GB)';
                    buttonCategory = 'full';
                } else if (btn.textContent.includes('Free Download') || btn.textContent.includes('Download Now')) {
                    buttonType = 'Hero Download Button';
                    buttonCategory = 'hero';
                } else {
                    buttonType = btn.textContent.trim();
                }

                this.trackEvent('download_click', {
                    button: buttonType,
                    buttonId: btn.id,
                    buttonCategory: buttonCategory,
                    buttonText: btn.textContent.trim(),
                    position: this.getElementPosition(btn),
                    section: this.getCurrentSection(btn)
                });

                console.log('🎯 Download button clicked:', buttonType);
            });
        });
    }

    getCurrentSection(element) {
        let current = element;
        while (current && current !== document.body) {
            if (current.tagName === 'SECTION' && current.id) {
                return current.id;
            }
            current = current.parentElement;
        }
        return 'unknown';
    }

    trackVideoInteractions() {
        const videos = document.querySelectorAll('video');
        videos.forEach((video, index) => {
            video.addEventListener('play', () => {
                this.trackEvent('video_play', { videoIndex: index, src: video.src });
            });
            video.addEventListener('pause', () => {
                this.trackEvent('video_pause', { videoIndex: index, currentTime: video.currentTime });
            });
            video.addEventListener('ended', () => {
                this.trackEvent('video_complete', { videoIndex: index });
            });
        });
    }

    trackFormInteractions() {
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                this.trackEvent('form_field_focus', { field: input.name || input.id });
            });
            input.addEventListener('blur', () => {
                this.trackEvent('form_field_blur', { field: input.name || input.id });
            });
        });
    }

    trackOutboundLinks() {
        const links = document.querySelectorAll('a[href^="http"]');
        links.forEach(link => {
            link.addEventListener('click', () => {
                this.trackEvent('outbound_click', { url: link.href, text: link.textContent });
            });
        });
    }

    getElementPosition(element) {
        const rect = element.getBoundingClientRect();
        return {
            x: rect.left,
            y: rect.top,
            width: rect.width,
            height: rect.height
        };
    }

    calculateEngagementScore() {
        setInterval(() => {
            const score = this.getEngagementScore();
            this.trackEvent('engagement_score', { score });
        }, 60000); // Every minute
    }

    getEngagementScore() {
        let score = 0;

        // Time on page (max 30 points)
        score += Math.min(this.behaviorData.timeOnPage / 10, 30);

        // Scroll depth (max 20 points)
        score += (this.behaviorData.scrollDepth / 100) * 20;

        // Clicks (max 25 points)
        score += Math.min(this.behaviorData.clicks.length * 2, 25);

        // Mouse movements (max 15 points)
        score += Math.min(this.behaviorData.mouseMovements.length / 10, 15);

        // Events (max 10 points)
        score += Math.min(this.events.length, 10);

        return Math.round(score);
    }

    // AI-powered user intent prediction
    predictUserIntent() {
        const intents = {
            'ready_to_download': 0,
            'researching': 0,
            'comparing': 0,
            'leaving': 0
        };

        // Analyze behavior patterns
        if (this.behaviorData.scrollDepth > 75) intents.researching += 30;
        if (this.behaviorData.timeOnPage > 120) intents.researching += 20;
        if (this.behaviorData.clicks.length > 5) intents.ready_to_download += 25;

        const downloadSectionViews = this.events.filter(e =>
            e.event === 'section_view' && e.data.section === 'download'
        ).length;
        if (downloadSectionViews > 2) intents.ready_to_download += 30;

        if (this.behaviorData.timeOnPage < 30 && this.behaviorData.scrollDepth < 25) {
            intents.leaving += 40;
        }

        return intents;
    }

    // Send analytics data to server
    sendAnalytics() {
        const analyticsData = {
            sessionId: this.sessionId,
            userId: this.userId,
            userProfile: this.userProfile,
            behaviorData: this.behaviorData,
            events: this.events,
            engagementScore: this.getEngagementScore(),
            userIntent: this.predictUserIntent(),
            timestamp: Date.now()
        };

        // Store locally for now (can be sent to server)
        this.saveToLocalStorage(analyticsData);

        // In production, send to analytics server:
        // fetch('/api/analytics', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(analyticsData)
        // });

        console.log('📈 Analytics data prepared:', analyticsData);
    }

    saveToLocalStorage(data) {
        try {
            const existingData = JSON.parse(localStorage.getItem('dlc_analytics') || '[]');
            existingData.push(data);
            // Keep only last 10 sessions
            if (existingData.length > 10) existingData.shift();
            localStorage.setItem('dlc_analytics', JSON.stringify(existingData));
        } catch (e) {
            console.error('Failed to save analytics:', e);
        }
    }

    // Get analytics dashboard data
    getDashboardData() {
        try {
            return JSON.parse(localStorage.getItem('dlc_analytics') || '[]');
        } catch (e) {
            return [];
        }
    }

    // Generate heatmap visualization
    generateHeatmap() {
        const canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = document.documentElement.scrollHeight;
        const ctx = canvas.getContext('2d');

        this.behaviorData.heatmapData.forEach(point => {
            const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 50);
            gradient.addColorStop(0, 'rgba(255, 0, 0, 0.5)');
            gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(point.x - 50, point.y - 50, 100, 100);
        });

        return canvas;
    }
}

// Initialize analytics
const analytics = new AIAnalytics();

// Expose to window for debugging
window.dlcAnalytics = analytics;

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AIAnalytics;
}
