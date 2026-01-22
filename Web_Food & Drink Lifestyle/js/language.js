// Language configuration
const translations = {
    vi: {
        // Navigation
        "nav-home": "Trang chủ",
        "nav-food": "Món ăn",
        "nav-drink": "Đồ uống",
        "nav-tutorial": "Hướng dẫn",
        "nav-about": "Về chúng tôi",
        
        // Site info
        "site-title": "Food&Drink Hub",
        "site-subtitle": "Nơi ẩm thực kể chuyện",
        
        // Hero section
        "signature-line1": "Mỗi món ăn là một câu chuyện,",
        "signature-line2": "mỗi ly nước là một trải nghiệm",
        "subtitle": "Khám phá thế giới ẩm thực đầy màu sắc - Nơi hương vị và sức khỏe hòa quyện",
        
        // Guide section
        "guide-title": "BẠN CÓ THỂ TỰ LÀM!",
        "guide-text": "Chúng tôi sẽ hướng dẫn bạn từng bước tạo nên những món ăn và đồ uống tuyệt vời ngay tại nhà.",
        "guide-button": "Bắt đầu học ngay",
        
        // Category cards
        "food-title": "FOOD",
        "food-teaser": "Bí mật đằng sau những món ăn khiến tim bạn rung động và cơ thể bạn biết ơn",
        "food-hint": "Delicious vs Healthy - Cuộc chiến không hồi kết?",
        "drink-title": "DRINK",
        "drink-teaser": "Từ ly nước ép tươi mát đến cocktail quyến rũ - Tất cả đều có câu chuyện riêng",
        "drink-hint": "Healthy hay Happy? Tại sao không chọn cả hai!",
        "explore-btn": "Khám phá ngay",
        
        // Page titles
        "food-page-title": "THẾ GIỚI MÓN ĂN",
        "food-page-subtitle": "Hướng dẫn chi tiết từng bước - Tự tin vào bếp",
        "drink-page-title": "THẾ GIỚI ĐỒ UỐNG",
        "drink-page-subtitle": "Từ căn bản đến nâng cao - Pha chế chuyên nghiệp tại nhà",
        "tutorial-title": "HƯỚNG DẪN CHI TIẾT",
        "tutorial-subtitle": "Từ cơ bản đến nâng cao - Tự tin trở thành đầu bếp tại gia",
        "about-title": "VỀ CHÚNG TÔI",
        "about-subtitle": "Food&Drink Hub - Nơi ẩm thực kể chuyện và lan tỏa đam mê",
        
        // Tabs
        "tab-delicious": "Món Ngon",
        "tab-delicious-desc": "Những món ăn khiến tim bạn rung động",
        "tab-healthy": "Ăn Lành",
        "tab-healthy-desc": "Món ăn mà cơ thể bạn biết ơn",
        "tab-vietnamese": "Ẩm Thực Việt",
        "tab-vietnamese-desc": "Hương vị quê hương",
        "tab-healthy-drinks": "Đồ Uống Lành",
        "tab-cocktails": "Cocktail & Mocktail",
        "tab-cocktails-desc": "Nghệ thuật trong từng giọt",
        
        // Section intros
        "delicious-title": "Món Ngon Tuyệt Đỉnh",
        "delicious-intro": "Những công thức đã được kiểm chứng, dễ làm và ngon không cưỡng nổi",
        "healthy-title": "Thực Đơn Lành Mạnh",
        "healthy-intro": "Dinh dưỡng cân bằng cho cơ thể khỏe mạnh",
        "vietnamese-title": "Tinh Hoa Ẩm Thực Việt",
        "vietnamese-intro": "Hương vị đậm đà, dân dã mà tinh tế",
        
        // Drink categories
        "juice-category": "Nước ép trái cây tươi",
        "juice-desc": "Cung cấp vitamin tự nhiên, tươi mát - Tự làm trong 5 phút",
        "smoothie-category": "Smoothies & Sinh tố",
        "smoothie-desc": "Kết hợp hoàn hảo dinh dưỡng và hương vị - Dễ làm",
        
        // Cocktail intro
        "cocktail-intro": "Những công thức cocktail kinh điển đã làm say lòng biết bao thế hệ - Hướng dẫn từ A đến Z",
        
        // Tutorial
        "step1-title": "Chuẩn bị nguyên liệu",
        "step1-desc": "Chúng tôi sẽ liệt kê đầy đủ nguyên liệu bạn cần, kèm mẹo chọn lựa và bảo quản",
        "step2-title": "Từng bước thực hiện",
        "step2-desc": "Hình ảnh và video minh họa chi tiết từng bước, không bỏ qua bất kỳ mẹo nhỏ nào",
        "step3-title": "Hoàn thiện và thưởng thức",
        "step3-desc": "Cách trình bày đẹp mắt, mẹo bảo quản và kết hợp để có trải nghiệm ẩm thực trọn vẹn",
        "video-title": "Video hướng dẫn trực quan",
        "video-desc": "Xem cách chuyên gia thực hiện từng bước",
        "tips-title": "MẸO HAY CHO NGƯỜI MỚI",
        "tip1": "Đọc toàn bộ công thức trước khi bắt đầu",
        "tip2": "Chuẩn bị sẵn tất cả nguyên liệu và dụng cụ",
        "tip3": "Làm theo từng bước, không bỏ qua chi tiết nhỏ",
        "tip4": "Ghi chú lại kinh nghiệm của bạn để lần sau làm tốt hơn",
        "tip5": "Đừng ngại sáng tạo và điều chỉnh cho phù hợp khẩu vị",
        
        // About
        "about-text1": "Chào mừng bạn đến với Food&Drink Hub - không gian dành cho những người yêu ẩm thực và quan tâm đến sức khỏe.",
        "about-text2": "Chúng tôi tin rằng ai cũng có thể trở thành đầu bếp tại chính căn bếp của mình. Không cần là chuyên gia, chỉ cần có đam mê và được hướng dẫn đúng cách.",
        "about-text3": "Mỗi công thức tại đây đều được kiểm chứng, hướng dẫn chi tiết từng bước và đảm bảo thành công ngay từ lần đầu thử nghiệm.",
        
        // Footer
        "footer-links": "Liên kết",
        "privacy": "Chính sách bảo mật",
        "terms": "Điều khoản sử dụng",
        "contact": "Liên hệ hợp tác",
        "footer-social": "Kết nối với chúng tôi",
        "footer-mission": "Hướng dẫn bạn từng bước tạo nên những món ăn và đồ uống tuyệt vời",
        "footer-rights": "Tất cả các quyền được bảo lưu.",
        
        // Search
        "search-placeholder": "Tìm công thức, nguyên liệu...",
        "back-home": "Quay lại Trang chủ",
        
        // Modal
        "price-label": "Ước lượng chi phí",
        "prep-time": "Thời gian chuẩn bị",
        "difficulty": "Độ khó",
        "ingredients-title": "Nguyên liệu",
        "steps-title": "Các bước thực hiện",
        "story-title": "Câu chuyện",
        "tips-title-modal": "Mẹo hay",
        "benefits-title": "Lợi ích sức khỏe",
        "add-to-favorites": "Thêm vào yêu thích",
        "start-cooking": "Bắt đầu nấu",
        "alcohol-content": "Nồng độ cồn"
    },
    en: {
        "nav-home": "Home",
        "nav-food": "Food",
        "nav-drink": "Drinks",
        "nav-tutorial": "Tutorial",
        "nav-about": "About",
        "site-title": "Food&Drink Hub",
        "site-subtitle": "Where cuisine tells stories",
        "signature-line1": "Every dish is a story,",
        "signature-line2": "every drink is an experience",
        "subtitle": "Discover the colorful world of cuisine - Where flavor and health harmonize",
        "guide-title": "YOU CAN MAKE IT!",
        "guide-text": "We'll guide you step by step to create amazing food and drinks right at home.",
        "guide-button": "Start Learning Now",
        "food-title": "FOOD",
        "food-teaser": "Secrets behind dishes that make your heart flutter and your body grateful",
        "food-hint": "Delicious vs Healthy - An endless battle?",
        "drink-title": "DRINK",
        "drink-teaser": "From fresh juices to enchanting cocktails - Each has its own story",
        "drink-hint": "Healthy or Happy? Why not choose both!",
        "explore-btn": "Explore Now",
        "food-page-title": "WORLD OF FOOD",
        "food-page-subtitle": "Step-by-step guide - Confidence in the kitchen",
        "drink-page-title": "WORLD OF DRINKS",
        "drink-page-subtitle": "From basic to advanced - Professional mixing at home",
        "tutorial-title": "DETAILED TUTORIAL",
        "tutorial-subtitle": "From basic to advanced - Confidently become a home chef",
        "about-title": "ABOUT US",
        "about-subtitle": "Food&Drink Hub - Where cuisine tells stories and spreads passion",
        "tab-delicious": "Delicious",
        "tab-delicious-desc": "Dishes that make your heart flutter",
        "tab-healthy": "Healthy",
        "tab-healthy-desc": "Dishes your body will thank you for",
        "tab-vietnamese": "Vietnamese Cuisine",
        "tab-vietnamese-desc": "Hometown flavors",
        "tab-healthy-drinks": "Healthy Drinks",
        "tab-cocktails": "Cocktails & Mocktails",
        "tab-cocktails-desc": "Art in every drop",
        "delicious-title": "Amazing Delicious Dishes",
        "delicious-intro": "Proven recipes, easy to make and irresistibly delicious",
        "healthy-title": "Healthy Meal Plans",
        "healthy-intro": "Balanced nutrition for a healthy body",
        "vietnamese-title": "Vietnamese Culinary Essence",
        "vietnamese-intro": "Rich, rustic yet sophisticated flavors",
        "juice-category": "Fresh Fruit Juices",
        "juice-desc": "Natural vitamins, fresh - Make in 5 minutes",
        "smoothie-category": "Smoothies & Shakes",
        "smoothie-desc": "Perfect combination of nutrition and flavor - Easy to make",
        "cocktail-intro": "Classic cocktail recipes that have captivated generations - Guide from A to Z",
        "step1-title": "Prepare Ingredients",
        "step1-desc": "We list all ingredients you need, with selection and storage tips",
        "step2-title": "Step-by-step Execution",
        "step2-desc": "Detailed images and videos for each step, no small tip overlooked",
        "step3-title": "Finish and Enjoy",
        "step3-desc": "Beautiful presentation, storage tips and combinations for complete culinary experience",
        "video-title": "Visual Guide Videos",
        "video-desc": "Watch experts execute each step",
        "tips-title": "TIPS FOR BEGINNERS",
        "tip1": "Read entire recipe before starting",
        "tip2": "Prepare all ingredients and tools in advance",
        "tip3": "Follow steps, don't skip small details",
        "tip4": "Note down your experience for next time",
        "tip5": "Don't be afraid to be creative and adjust to your taste",
        "about-text1": "Welcome to Food&Drink Hub - a space for food lovers and health conscious people.",
        "about-text2": "We believe everyone can become a chef in their own kitchen. No need to be an expert, just have passion and proper guidance.",
        "about-text3": "Every recipe here is tested, detailed step-by-step guidance and guaranteed success from the first try.",
        "footer-links": "Links",
        "privacy": "Privacy Policy",
        "terms": "Terms of Use",
        "contact": "Contact Cooperation",
        "footer-social": "Connect With Us",
        "footer-mission": "Guide you step by step to create amazing food and drinks",
        "footer-rights": "All rights reserved.",
        "search-placeholder": "Search recipes, ingredients...",
        "back-home": "Back to Home",
        "price-label": "Estimated cost",
        "prep-time": "Preparation time",
        "difficulty": "Difficulty",
        "ingredients-title": "Ingredients",
        "steps-title": "Steps",
        "story-title": "Story",
        "tips-title-modal": "Tips",
        "benefits-title": "Health Benefits",
        "add-to-favorites": "Add to Favorites",
        "start-cooking": "Start Cooking",
        "alcohol-content": "Alcohol content"
    },
    zh: {
        "nav-home": "首页",
        "nav-food": "美食",
        "nav-drink": "饮品",
        "nav-tutorial": "教程",
        "nav-about": "关于我们",
        "site-title": "美食饮品中心",
        "site-subtitle": "美食讲故事的地方",
        "signature-line1": "每道菜都是一个故事,",
        "signature-line2": "每杯饮料都是一次体验",
        "subtitle": "探索多彩的美食世界 - 风味与健康和谐相融",
        "guide-title": "你可以自己做！",
        "guide-text": "我们将逐步指导您在家中制作精美的美食和饮品。",
        "guide-button": "立即开始学习",
        "food-title": "美食",
        "food-teaser": "让您心动、身体感恩的美食背后的秘密",
        "food-hint": "美味 vs 健康 - 无尽的战斗？",
        "drink-title": "饮品",
        "drink-teaser": "从新鲜果汁到迷人鸡尾酒 - 每个都有独特故事",
        "drink-hint": "健康还是快乐？为什么不两者兼得！",
        "explore-btn": "立即探索",
        "food-page-title": "美食世界",
        "food-page-subtitle": "分步指南 - 厨房自信",
        "drink-page-title": "饮品世界",
        "drink-page-subtitle": "从基础到高级 - 在家专业调酒",
        "tutorial-title": "详细教程",
        "tutorial-subtitle": "从基础到高级 - 自信成为家庭厨师",
        "about-title": "关于我们",
        "about-subtitle": "美食饮品中心 - 美食讲故事、传播热情的地方",
        "tab-delicious": "美味佳肴",
        "tab-delicious-desc": "让您心动的美食",
        "tab-healthy": "健康饮食",
        "tab-healthy-desc": "身体会感谢您的美食",
        "tab-vietnamese": "越南美食",
        "tab-vietnamese-desc": "家乡风味",
        "tab-healthy-drinks": "健康饮品",
        "tab-cocktails": "鸡尾酒 & 无酒精鸡尾酒",
        "tab-cocktails-desc": "每滴都是艺术",
        "delicious-title": "绝妙美味佳肴",
        "delicious-intro": "经过验证的食谱，易做且令人无法抗拒的美味",
        "healthy-title": "健康餐计划",
        "healthy-intro": "均衡营养，健康身体",
        "vietnamese-title": "越南美食精髓",
        "vietnamese-intro": "浓郁、质朴而精致的风味",
        "juice-category": "新鲜果汁",
        "juice-desc": "天然维生素，新鲜 - 5分钟制作",
        "smoothie-category": "冰沙 & 奶昔",
        "smoothie-desc": "营养与风味的完美结合 - 易于制作",
        "cocktail-intro": "迷倒世代的经典鸡尾酒配方 - A到Z指南",
        "step1-title": "准备食材",
        "step1-desc": "我们列出您所需的所有食材，附选择与储存技巧",
        "step2-title": "分步执行",
        "step2-desc": "每个步骤的详细图像和视频，不遗漏任何小技巧",
        "step3-title": "完成与享用",
        "step3-desc": "精美的摆盘，储存技巧和搭配，完整的烹饪体验",
        "video-title": "视觉指南视频",
        "video-desc": "观看专家执行每个步骤",
        "tips-title": "初学者技巧",
        "tip1": "开始前阅读完整食谱",
        "tip2": "提前准备所有食材和工具",
        "tip3": "按照步骤操作，不跳过大细节",
        "tip4": "记录您的经验以备下次使用",
        "tip5": "不要害怕创造性调整以适应您的口味",
        "about-text1": "欢迎来到美食饮品中心 - 为美食爱好者和注重健康的人士打造的空间。",
        "about-text2": "我们相信每个人都可以成为自己厨房的厨师。不需要成为专家，只需要热情和正确的指导。",
        "about-text3": "这里的每个食谱都经过测试，提供详细的分步指导，并保证第一次尝试就成功。",
        "footer-links": "链接",
        "privacy": "隐私政策",
        "terms": "使用条款",
        "contact": "联系合作",
        "footer-social": "联系我们",
        "footer-mission": "逐步指导您制作精美的美食和饮品",
        "footer-rights": "保留所有权利。",
        "search-placeholder": "搜索食谱，食材...",
        "back-home": "返回首页",
        "price-label": "预估成本",
        "prep-time": "准备时间",
        "difficulty": "难度",
        "ingredients-title": "食材",
        "steps-title": "步骤",
        "story-title": "故事",
        "tips-title-modal": "技巧",
        "benefits-title": "健康益处",
        "add-to-favorites": "添加到收藏",
        "start-cooking": "开始烹饪",
        "alcohol-content": "酒精含量"
    }
};

// Language management
let currentLanguage = 'vi';

function changeLanguage(lang) {
    currentLanguage = lang;
    updatePageText();
    localStorage.setItem('preferred-language', lang);
}

function updatePageText() {
    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translations[currentLanguage][key];
            } else if (element.tagName === 'OPTION') {
                // Don't update option text as it's set by the select itself
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
    
    // Update modal if open
    updateModalLanguage();
}

function updateModalLanguage() {
    const modal = document.querySelector('.modal.active');
    if (modal) {
        // Update modal content based on current language
        // This would be implemented based on your modal structure
    }
}

// Initialize language
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferred-language') || 'vi';
    const languageSelect = document.getElementById('language-select');
    
    if (languageSelect) {
        languageSelect.value = savedLanguage;
        changeLanguage(savedLanguage);
        
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
});