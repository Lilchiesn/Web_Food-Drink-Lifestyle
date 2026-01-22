// Main Application - FoodDrinkMaster
class FoodDrinkApp {
    constructor() {
        this.currentPage = 'home';
        this.currentCategory = 'all';
        this.currentRecipe = null;
        this.favorites = new Set();
        this.shoppingList = [];
        
        this.init();
    }
    
    init() {
        // Initialize all components
        this.initNavigation();
        this.initSearch();
        this.initTheme();
        this.initLanguage();
        this.initRecipes();
        this.initModal();
        this.initFilters();
        this.initFABs();
        
        // Load initial data
        this.loadFeaturedRecipes();
        this.loadFoodRecipes();
        this.loadDrinkRecipes();
        
        // Set initial page
        this.showPage('home');
        
        // Add scroll event for header
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    
    // ===== NAVIGATION =====
    initNavigation() {
        // Navigation links
        document.querySelectorAll('[data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.currentTarget.dataset.page;
                this.showPage(page);
                
                // Update active state
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                if (e.currentTarget.classList.contains('nav-item')) {
                    e.currentTarget.classList.add('active');
                }
            });
        });
        
        // Mobile menu toggle
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => {
                navMenu.classList.toggle('show');
                mobileToggle.innerHTML = navMenu.classList.contains('show') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });
        }
        
        // Category tabs
        document.querySelectorAll('.category-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.filterByCategory(category);
                
                // Update active tab
                document.querySelectorAll('.category-tab').forEach(t => {
                    t.classList.remove('active');
                });
                e.currentTarget.classList.add('active');
            });
        });
        
        // Quick categories
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.showPage('food');
                this.filterByCategory(category);
            });
        });
    }
    
    showPage(pageName) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show selected page
        const page = document.getElementById(`${pageName}-page`);
        if (page) {
            page.classList.add('active');
            this.currentPage = pageName;
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Update browser title
            document.title = this.getPageTitle(pageName);
            
            // Hide mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            const mobileToggle = document.querySelector('.mobile-menu-toggle');
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            // Trigger page-specific actions
            this.onPageChange(pageName);
        }
    }
    
    getPageTitle(pageName) {
        const titles = {
            'home': 'FoodDrinkMaster - Học nấu ăn chuyên nghiệp',
            'food': 'Món ăn ngon - Công thức nấu ăn',
            'drink': 'Pha chế đồ uống - Cocktail & Mocktail',
            'tutorial': 'Học nấu ăn - Video hướng dẫn',
            'community': 'Cộng đồng ẩm thực'
        };
        return titles[pageName] || 'FoodDrinkMaster';
    }
    
    onPageChange(pageName) {
        switch(pageName) {
            case 'food':
                this.updateFoodFilters();
                break;
            case 'drink':
                this.updateDrinkFilters();
                break;
            case 'tutorial':
                this.loadTutorials();
                break;
        }
    }
    
    handleScroll() {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // ===== SEARCH =====
    initSearch() {
        const searchInput = document.getElementById('global-search');
        const searchBox = document.querySelector('.search-box');
        const searchSuggestions = document.querySelector('.search-suggestions');
        
        if (searchInput) {
            // Show suggestions on focus
            searchInput.addEventListener('focus', () => {
                searchSuggestions.classList.add('show');
            });
            
            // Hide suggestions on click outside
            document.addEventListener('click', (e) => {
                if (!searchBox.contains(e.target)) {
                    searchSuggestions.classList.remove('show');
                }
            });
            
            // Real-time search
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.trim();
                if (query.length > 0) {
                    this.showSearchSuggestions(query);
                } else {
                    this.showPopularSuggestions();
                }
            });
            
            // Search on Enter
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch(searchInput.value);
                    searchSuggestions.classList.remove('show');
                }
            });
            
            // Search button
            document.querySelector('.search-btn').addEventListener('click', () => {
                this.performSearch(searchInput.value);
                searchSuggestions.classList.remove('show');
            });
            
            // Quick search FAB
            document.getElementById('quick-search').addEventListener('click', () => {
                searchInput.focus();
            });
            
            // Load initial suggestions
            this.showPopularSuggestions();
        }
    }
    
    showPopularSuggestions() {
        const container = document.getElementById('search-suggestions');
        if (!container) return;
        
        const suggestions = [
            { text: 'Phở bò Hà Nội', category: 'Món Việt', icon: 'fa-bowl-rice' },
            { text: 'Mojito Havana', category: 'Cocktail', icon: 'fa-cocktail' },
            { text: 'Salad Quinoa', category: 'Ăn lành', icon: 'fa-leaf' },
            { text: 'Pizza Margherita', category: 'Món Ý', icon: 'fa-pizza-slice' },
            { text: 'Smoothie Bơ Chuối', category: 'Smoothie', icon: 'fa-blender' }
        ];
        
        container.innerHTML = suggestions.map(item => `
            <div class="suggestion-item" data-search="${item.text}">
                <i class="fas ${item.icon}"></i>
                <div class="suggestion-text">${item.text}</div>
                <div class="suggestion-category">${item.category}</div>
            </div>
        `).join('');
        
        // Add click events
        container.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                const searchText = item.dataset.search;
                document.getElementById('global-search').value = searchText;
                this.performSearch(searchText);
                document.querySelector('.search-suggestions').classList.remove('show');
            });
        });
    }
    
    showSearchSuggestions(query) {
        const container = document.getElementById('search-suggestions');
        if (!container) return;
        
        // Simulate API call - in real app, this would be an actual search
        const results = this.searchRecipes(query);
        
        if (results.length > 0) {
            container.innerHTML = results.map(item => `
                <div class="suggestion-item" data-id="${item.id}" data-type="${item.type}">
                    <i class="fas ${item.icon}"></i>
                    <div class="suggestion-text">${item.name}</div>
                    <div class="suggestion-category">${item.category}</div>
                </div>
            `).join('');
            
            // Add click events
            container.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', () => {
                    const id = item.dataset.id;
                    const type = item.dataset.type;
                    this.showRecipeModal(id, type);
                    document.querySelector('.search-suggestions').classList.remove('show');
                });
            });
        } else {
            container.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <p>Không tìm thấy kết quả cho "${query}"</p>
                </div>
            `;
        }
    }
    
    searchRecipes(query) {
        // This would connect to your actual recipe data
        // For now, return mock data
        return [
            { id: 1, name: 'Phở Bò Hà Nội', type: 'food', category: 'Món Việt', icon: 'fa-bowl-rice' },
            { id: 2, name: 'Mojito Havana', type: 'drink', category: 'Cocktail', icon: 'fa-cocktail' },
            { id: 3, name: 'Salad Quinoa', type: 'food', category: 'Ăn lành', icon: 'fa-leaf' }
        ].filter(item => 
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );
    }
    
    performSearch(query) {
        if (!query.trim()) return;
        
        // Show search results
        this.showSearchResults(query);
        
        // Update URL
        window.history.pushState({}, '', `?search=${encodeURIComponent(query)}`);
    }
    
    showSearchResults(query) {
        // This would show a proper search results page
        // For now, just show an alert
        alert(`Tìm kiếm: "${query}"\n\nKết quả sẽ hiển thị ở đây trong phiên bản đầy đủ.`);
    }
    
    // ===== THEME =====
    initTheme() {
        const themeToggle = document.getElementById('theme-toggle');
        const savedTheme = localStorage.getItem('theme') || 'light';
        
        // Set initial theme
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            this.updateThemeButton(true);
        }
        
        // Toggle theme
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const isDark = document.body.classList.toggle('dark-theme');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                this.updateThemeButton(isDark);
            });
        }
    }
    
    updateThemeButton(isDark) {
        const themeToggle = document.getElementById('theme-toggle');
        if (!themeToggle) return;
        
        const icon = themeToggle.querySelector('i');
        const text = themeToggle.querySelector('span');
        
        if (isDark) {
            icon.className = 'fas fa-sun';
            text.textContent = 'Light Mode';
        } else {
            icon.className = 'fas fa-moon';
            text.textContent = 'Dark Mode';
        }
    }
    
    // ===== LANGUAGE =====
    initLanguage() {
        const languageSelector = document.querySelector('.language-selector');
        const currentLanguage = document.querySelector('.current-language');
        const languageDropdown = document.querySelector('.language-dropdown');
        
        if (languageSelector) {
            // Toggle dropdown
            currentLanguage.addEventListener('click', () => {
                languageDropdown.classList.toggle('show');
            });
            
            // Select language
            document.querySelectorAll('.language-option').forEach(option => {
                option.addEventListener('click', () => {
                    const lang = option.dataset.lang;
                    this.changeLanguage(lang);
                    languageDropdown.classList.remove('show');
                });
            });
            
            // Close dropdown on click outside
            document.addEventListener('click', (e) => {
                if (!languageSelector.contains(e.target)) {
                    languageDropdown.classList.remove('show');
                }
            });
        }
    }
    
    changeLanguage(lang) {
        // Update UI text based on language
        // This would connect to your translation system
        console.log(`Changing language to: ${lang}`);
        
        // Update current language display
        const currentLang = document.querySelector('.current-language');
        const flag = currentLang.querySelector('.flag');
        const text = currentLang.querySelector('span:last-child');
        
        switch(lang) {
            case 'vi':
                flag.textContent = '🇻🇳';
                text.textContent = 'Tiếng Việt';
                break;
            case 'en':
                flag.textContent = '🇺🇸';
                text.textContent = 'English';
                break;
            case 'zh':
                flag.textContent = '🇨🇳';
                text.textContent = '中文';
                break;
        }
        
        localStorage.setItem('language', lang);
    }
    
    // ===== RECIPES =====
    initRecipes() {
        // Recipe click events will be added when recipes are loaded
    }
    
    loadFeaturedRecipes() {
        const container = document.getElementById('featured-recipes');
        if (!container) return;
        
        // Mock data - in real app, this would come from your data.js
        const featuredRecipes = [
            {
                id: 1,
                name: 'Phở Bò Hà Nội',
                description: 'Phở bò truyền thống với nước dùng trong ngọt tự nhiên',
                image: 'https://images.unsplash.com/photo-1552465011-b4e30bf7349d?auto=format&fit=crop&w=600',
                time: '4 giờ',
                difficulty: 'hard',
                rating: 4.9
            },
            {
                id: 2,
                name: 'Mojito Havana',
                description: 'Cocktail Cuba với rum, bạc hà và chanh tươi',
                image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600',
                time: '5 phút',
                difficulty: 'easy',
                rating: 4.8
            },
            {
                id: 3,
                name: 'Salad Quinoa',
                description: 'Salad healthy với quinoa, rau củ và sốt mè',
                image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600',
                time: '20 phút',
                difficulty: 'easy',
                rating: 4.5
            }
        ];
        
        container.innerHTML = featuredRecipes.map(recipe => `
            <div class="recipe-card-grid" data-id="${recipe.id}">
                <div class="recipe-image">
                    <img src="${recipe.image}" alt="${recipe.name}">
                </div>
                <div class="recipe-info">
                    <h3>${recipe.name}</h3>
                    <p class="recipe-description">${recipe.description}</p>
                    <div class="recipe-meta">
                        <span class="recipe-time">
                            <i class="fas fa-clock"></i> ${recipe.time}
                        </span>
                        <span class="recipe-difficulty ${recipe.difficulty}">
                            <i class="fas fa-signal"></i>
                            ${this.getDifficultyText(recipe.difficulty)}
                        </span>
                    </div>
                    <div class="recipe-actions">
                        <button class="btn btn-sm btn-primary view-recipe" data-id="${recipe.id}">
                            <i class="fas fa-play"></i> Xem công thức
                        </button>
                        <button class="btn btn-sm btn-outline save-recipe" data-id="${recipe.id}">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Add click events
        this.attachRecipeEvents();
    }
    
    loadFoodRecipes() {
        const container = document.getElementById('food-recipes-grid');
        if (!container) return;
        
        // Similar to loadFeaturedRecipes but with more recipes
        // In real app, this would come from your data.js
        container.innerHTML = '<p>Đang tải công thức món ăn...</p>';
    }
    
    loadDrinkRecipes() {
        const container = document.getElementById('drink-recipes-grid');
        if (!container) return;
        
        container.innerHTML = '<p>Đang tải công thức đồ uống...</p>';
    }
    
    getDifficultyText(level) {
        const levels = {
            'easy': 'Dễ',
            'medium': 'Trung bình',
            'hard': 'Khó'
        };
        return levels[level] || level;
    }
    
    attachRecipeEvents() {
        // View recipe buttons
        document.querySelectorAll('.view-recipe').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const recipeId = e.currentTarget.dataset.id;
                this.showRecipeModal(recipeId, 'food');
            });
        });
        
        // Save recipe buttons
        document.querySelectorAll('.save-recipe').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const recipeId = e.currentTarget.dataset.id;
                this.toggleFavorite(recipeId, e.currentTarget);
            });
        });
        
        // Whole recipe card click
        document.querySelectorAll('.recipe-card-grid').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('button')) {
                    const recipeId = card.dataset.id;
                    this.showRecipeModal(recipeId, 'food');
                }
            });
        });
    }
    
    // ===== MODAL =====
    initModal() {
        const modal = document.getElementById('recipe-modal');
        const closeBtn = modal.querySelector('.modal-close');
        
        // Close modal
        closeBtn.addEventListener('click', () => {
            this.hideRecipeModal();
        });
        
        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.hideRecipeModal();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                this.hideRecipeModal();
            }
        });
        
        // Save recipe in modal
        modal.querySelector('#save-recipe').addEventListener('click', () => {
            if (this.currentRecipe) {
                this.toggleFavorite(this.currentRecipe.id, null);
            }
        });
    }
    
    showRecipeModal(recipeId, type) {
        const modal = document.getElementById('recipe-modal');
        this.currentRecipe = { id: recipeId, type: type };
        
        // Load recipe details
        this.loadRecipeDetails(recipeId, type);
        
        // Show modal
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    hideRecipeModal() {
        const modal = document.getElementById('recipe-modal');
        modal.classList.remove('show');
        document.body.style.overflow = '';
        this.currentRecipe = null;
    }
    
    loadRecipeDetails(recipeId, type) {
        // Mock data - in real app, this would come from your data.js
        const recipe = {
            name: 'Phở Bò Hà Nội',
            description: 'Món phở truyền thống với nước dùng trong ngọt, thịt bò tái mềm',
            rating: 4.9,
            reviewCount: 124,
            time: '4 giờ',
            difficulty: 'Khó',
            cost: 'Ước lượng: 45.000 - 75.000 VNĐ',
            ingredients: [
                { name: 'Xương bò', amount: '1.5kg' },
                { name: 'Bánh phở tươi', amount: '400g' },
                { name: 'Thịt bò tái', amount: '200g' }
            ],
            steps: [
                'Hầm xương bò với hành, gừng, quế trong 3-4 giờ',
                'Chuẩn bị thịt bò thái mỏng',
                'Trần bánh phở qua nước sôi',
                'Xếp thịt và rau thơm vào tô',
                'Chan nước dùng nóng vào và thưởng thức'
            ],
            tips: 'Hầm xương lửa nhỏ để nước dùng trong và ngọt tự nhiên'
        };
        
        // Update modal content
        document.getElementById('modal-recipe-name').textContent = recipe.name;
        
        const detailsContainer = document.querySelector('.recipe-details');
        detailsContainer.innerHTML = `
            <div class="recipe-overview">
                <p>${recipe.description}</p>
                <div class="recipe-stats">
                    <div class="stat">
                        <i class="fas fa-clock"></i>
                        <div>
                            <h4>Thời gian</h4>
                            <p>${recipe.time}</p>
                        </div>
                    </div>
                    <div class="stat">
                        <i class="fas fa-signal"></i>
                        <div>
                            <h4>Độ khó</h4>
                            <p>${recipe.difficulty}</p>
                        </div>
                    </div>
                    <div class="stat">
                        <i class="fas fa-tag"></i>
                        <div>
                            <h4>Chi phí</h4>
                            <p>${recipe.cost}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="recipe-ingredients">
                <h3><i class="fas fa-list-check"></i> Nguyên liệu</h3>
                <ul>
                    ${recipe.ingredients.map(ing => `
                        <li>
                            <span>${ing.name}</span>
                            <span>${ing.amount}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="recipe-steps">
                <h3><i class="fas fa-list-ol"></i> Các bước thực hiện</h3>
                <ol>
                    ${recipe.steps.map((step, index) => `
                        <li>
                            <span class="step-number">${index + 1}</span>
                            <span class="step-text">${step}</span>
                        </li>
                    `).join('')}
                </ol>
            </div>
            
            <div class="recipe-tips">
                <h3><i class="fas fa-lightbulb"></i> Mẹo hay</h3>
                <p>${recipe.tips}</p>
            </div>
        `;
    }
    
    // ===== FILTERS =====
    initFilters() {
        // Clear filters button
        document.getElementById('clear-filters').addEventListener('click', () => {
            this.clearFilters();
        });
        
        // Filter change events
        document.querySelectorAll('.filter-select').forEach(select => {
            select.addEventListener('change', () => {
                this.applyFilters();
            });
        });
    }
    
    filterByCategory(category) {
        this.currentCategory = category;
        this.applyFilters();
    }
    
    applyFilters() {
        console.log('Applying filters:', {
            category: this.currentCategory,
            difficulty: document.getElementById('difficulty-filter').value,
            time: document.getElementById('time-filter').value,
            sort: document.getElementById('sort-filter').value
        });
        
        // In real app, this would filter and update the recipe grid
    }
    
    clearFilters() {
        document.getElementById('difficulty-filter').value = 'all';
        document.getElementById('time-filter').value = 'all';
        document.getElementById('sort-filter').value = 'popular';
        this.currentCategory = 'all';
        
        // Update UI
        document.querySelectorAll('.category-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector('.category-tab[data-category="all"]').classList.add('active');
        
        this.applyFilters();
    }
    
    updateFoodFilters() {
        // Update filter options based on food page
    }
    
    updateDrinkFilters() {
        // Update filter options based on drink page
    }
    
    // ===== FAVORITES =====
    toggleFavorite(recipeId, button) {
        if (this.favorites.has(recipeId)) {
            this.favorites.delete(recipeId);
            if (button) {
                button.innerHTML = '<i class="far fa-heart"></i>';
                button.classList.remove('active');
            }
            this.showNotification('Đã xóa khỏi yêu thích');
        } else {
            this.favorites.add(recipeId);
            if (button) {
                button.innerHTML = '<i class="fas fa-heart"></i>';
                button.classList.add('active');
            }
            this.showNotification('Đã thêm vào yêu thích');
        }
        
        // Update localStorage
        localStorage.setItem('favorites', JSON.stringify([...this.favorites]));
        
        // Update FAB badge
        this.updateFavoritesBadge();
    }
    
    updateFavoritesBadge() {
        const fab = document.getElementById('favorites-btn');
        if (this.favorites.size > 0) {
            fab.setAttribute('data-badge', this.favorites.size);
        } else {
            fab.removeAttribute('data-badge');
        }
    }
    
    // ===== SHOPPING LIST =====
    initFABs() {
        // Favorites FAB
        document.getElementById('favorites-btn').addEventListener('click', () => {
            this.showFavorites();
        });
        
        // Shopping List FAB
        document.getElementById('shopping-list').addEventListener('click', () => {
            this.showShoppingList();
        });
        
        // Recipe Book FAB
        document.getElementById('recipe-book').addEventListener('click', () => {
            this.showRecipeBook();
        });
    }
    
    showFavorites() {
        if (this.favorites.size === 0) {
            this.showNotification('Bạn chưa có công thức yêu thích nào');
            return;
        }
        
        // Show favorites modal or page
        alert(`Bạn có ${this.favorites.size} công thức yêu thích`);
    }
    
    showShoppingList() {
        // Show shopping list modal
        const modal = document.getElementById('cart-modal');
        modal.classList.add('show');
    }
    
    showRecipeBook() {
        // Show recipe book (saved recipes)
        this.showPage('tutorial');
    }
    
    // ===== UTILITIES =====
    showNotification(message, type = 'success') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check' : 'exclamation'}-circle"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Show with animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
        
        // Close button
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new FoodDrinkApp();
});