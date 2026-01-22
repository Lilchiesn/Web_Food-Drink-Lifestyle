// Advanced Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const suggestionsContainer = document.getElementById('search-suggestions');
    
    if (searchInput && suggestionsContainer) {
        // Show suggestions on focus
        searchInput.addEventListener('focus', showSuggestions);
        
        // Hide suggestions when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
                hideSuggestions();
            }
        });
        
        // Handle input for real-time suggestions
        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            if (query.length > 0) {
                showRealTimeSuggestions(query);
            } else {
                showPopularSuggestions();
            }
        });
        
        // Handle search button click
        if (searchBtn) {
            searchBtn.addEventListener('click', performAdvancedSearch);
        }
        
        // Handle Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performAdvancedSearch();
            }
        });
        
        // Show popular suggestions by default
        showPopularSuggestions();
    }
});

function showSuggestions() {
    const container = document.getElementById('search-suggestions');
    if (container) {
        container.style.display = 'block';
    }
}

function hideSuggestions() {
    const container = document.getElementById('search-suggestions');
    if (container) {
        container.style.display = 'none';
    }
}

function showPopularSuggestions() {
    const container = document.getElementById('search-suggestions');
    if (!container) return;
    
    const popularSuggestions = [
        { text: "Phở bò Hà Nội", type: "food", category: "vietnamese" },
        { text: "Bánh mì chảo", type: "food", category: "vietnamese" },
        { text: "Gỏi cuốn", type: "food", category: "vietnamese" },
        { text: "Pizza Ý", type: "food", category: "delicious" },
        { text: "Salad quinoa", type: "food", category: "healthy" },
        { text: "Nước ép cam", type: "drink", category: "juice" },
        { text: "Smoothie bơ", type: "drink", category: "smoothie" },
        { text: "Mojito", type: "drink", category: "cocktail" },
        { text: "Margarita", type: "drink", category: "cocktail" }
    ];
    
    container.innerHTML = `
        <div class="suggestions-header">
            <i class="fas fa-fire"></i>
            <span>Tìm kiếm phổ biến</span>
        </div>
        ${popularSuggestions.map(item => `
            <div class="suggestion-item" data-type="${item.type}" data-category="${item.category}" data-text="${item.text}">
                <i class="fas fa-${getIconForType(item.type)}"></i>
                <span>${item.text}</span>
                <div class="suggestion-badge">${getCategoryName(item.category)}</div>
            </div>
        `).join('')}
        <div class="suggestions-footer">
            <i class="fas fa-lightbulb"></i>
            <span>Nhập từ khóa để tìm kiếm nâng cao</span>
        </div>
    `;
    
    // Add click events to suggestion items
    container.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', function() {
            const text = this.getAttribute('data-text');
            const type = this.getAttribute('data-type');
            const category = this.getAttribute('data-category');
            
            document.getElementById('search-input').value = text;
            performSearchWithFilter(text, type, category);
            hideSuggestions();
        });
    });
}

function showRealTimeSuggestions(query) {
    const container = document.getElementById('search-suggestions');
    if (!container) return;
    
    // Search in all data
    const allItems = getAllSearchableItems();
    const filteredItems = allItems.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.ingredients.some(ing => ing.name.toLowerCase().includes(query.toLowerCase()))
    ).slice(0, 10); // Limit to 10 results
    
    if (filteredItems.length > 0) {
        container.innerHTML = `
            <div class="suggestions-header">
                <i class="fas fa-search"></i>
                <span>Kết quả cho "${query}"</span>
            </div>
            ${filteredItems.map(item => `
                <div class="suggestion-item" data-id="${item.id}" data-type="${item.type}" data-category="${item.category}">
                    <i class="fas fa-${getIconForType(item.type)}"></i>
                    <div class="suggestion-details">
                        <div class="suggestion-title">${item.name}</div>
                        <div class="suggestion-desc">${item.description.substring(0, 50)}...</div>
                    </div>
                    <div class="suggestion-badge">${getCategoryName(item.category)}</div>
                </div>
            `).join('')}
            <div class="suggestions-footer">
                <i class="fas fa-arrow-up"></i>
                <span>Dùng phím mũi tên để chọn, Enter để xác nhận</span>
            </div>
        `;
        
        // Add keyboard navigation
        setupKeyboardNavigation();
    } else {
        container.innerHTML = `
            <div class="suggestions-header">
                <i class="fas fa-search"></i>
                <span>Không tìm thấy kết quả</span>
            </div>
            <div class="no-results">
                <i class="fas fa-exclamation-circle"></i>
                <p>Không tìm thấy "${query}"</p>
                <small>Thử với từ khóa khác hoặc xem gợi ý phổ biến</small>
            </div>
        `;
    }
    
    // Add click events
    container.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const type = this.getAttribute('data-type');
            const category = this.getAttribute('data-category');
            
            navigateToItem(id, type, category);
            hideSuggestions();
        });
    });
}

function getAllSearchableItems() {
    const items = [];
    
    // Add food items
    Object.keys(foodData).forEach(category => {
        foodData[category].forEach(item => {
            items.push({
                ...item,
                type: 'food',
                category: category
            });
        });
    });
    
    // Add drink items
    Object.keys(drinkData.healthy).forEach(category => {
        drinkData.healthy[category].forEach(item => {
            items.push({
                ...item,
                type: 'drink',
                category: category
            });
        });
    });
    
    // Add cocktail items
    drinkData.cocktails.forEach(item => {
        items.push({
            ...item,
            type: 'drink',
            category: 'cocktail'
        });
    });
    
    return items;
}

function getIconForType(type) {
    const icons = {
        'food': 'utensils',
        'drink': 'glass-martini-alt',
        'juice': 'lemon',
        'smoothie': 'blender',
        'cocktail': 'cocktail'
    };
    return icons[type] || 'search';
}

function getCategoryName(category) {
    const names = {
        'delicious': 'Món Ngon',
        'healthy': 'Ăn Lành',
        'vietnamese': 'Việt Nam',
        'juice': 'Nước Ép',
        'smoothie': 'Smoothie',
        'cocktail': 'Cocktail'
    };
    return names[category] || category;
}

function performAdvancedSearch() {
    const query = document.getElementById('search-input').value.trim();
    if (!query) {
        alert('Vui lòng nhập từ khóa tìm kiếm!');
        return;
    }
    
    // Perform search
    const results = searchEverything(query);
    displaySearchResults(results, query);
    hideSuggestions();
}

function searchEverything(query) {
    const allItems = getAllSearchableItems();
    const searchQuery = query.toLowerCase();
    
    return allItems.filter(item => {
        // Search in name
        if (item.name.toLowerCase().includes(searchQuery)) return true;
        
        // Search in description
        if (item.description.toLowerCase().includes(searchQuery)) return true;
        
        // Search in ingredients
        if (item.ingredients.some(ing => ing.name.toLowerCase().includes(searchQuery))) return true;
        
        // Search in story if exists
        if (item.story && item.story.toLowerCase().includes(searchQuery)) return true;
        
        // Search in benefits if exists
        if (item.benefits && item.benefits.toLowerCase().includes(searchQuery)) return true;
        
        return false;
    });
}

function displaySearchResults(results, query) {
    // Create results modal
    const modalHTML = `
        <div class="modal" id="search-results-modal">
            <div class="modal-content" style="max-width: 800px;">
                <div class="modal-header">
                    <h2>Kết quả tìm kiếm: "${query}"</h2>
                    <button class="close-btn">&times;</button>
                </div>
                
                <div class="search-results-stats">
                    <i class="fas fa-chart-bar"></i>
                    <span>Tìm thấy ${results.length} kết quả</span>
                </div>
                
                <div class="search-results-list">
                    ${results.length > 0 ? results.map(item => `
                        <div class="search-result-item" data-id="${item.id}" data-type="${item.type}" data-category="${item.category}">
                            <div class="result-icon">
                                <i class="fas fa-${getIconForType(item.type)}"></i>
                            </div>
                            <div class="result-details">
                                <h3>${item.name}</h3>
                                <p class="result-desc">${item.description}</p>
                                <div class="result-meta">
                                    <span class="result-category">${getCategoryName(item.category)}</span>
                                    <span class="result-price">${item.price}</span>
                                </div>
                            </div>
                            <button class="result-action-btn">
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    `).join('') : `
                        <div class="no-results-found">
                            <i class="fas fa-search-minus"></i>
                            <h3>Không tìm thấy kết quả</h3>
                            <p>Thử với từ khóa khác hoặc duyệt theo danh mục</p>
                            <button class="btn" onclick="showPage('home')">
                                <i class="fas fa-home"></i> Về trang chủ
                            </button>
                        </div>
                    `}
                </div>
                
                ${results.length > 0 ? `
                    <div class="search-results-filter">
                        <h4><i class="fas fa-filter"></i> Lọc kết quả:</h4>
                        <div class="filter-buttons">
                            <button class="filter-btn active" data-filter="all">Tất cả</button>
                            <button class="filter-btn" data-filter="food">Món ăn</button>
                            <button class="filter-btn" data-filter="drink">Đồ uống</button>
                            <button class="filter-btn" data-filter="vietnamese">Việt Nam</button>
                        </div>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
    
    // Remove existing modal
    const existingModal = document.getElementById('search-results-modal');
    if (existingModal) existingModal.remove();
    
    // Add new modal
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    const modal = document.getElementById('search-results-modal');
    modal.classList.add('active');
    
    // Add event listeners
    modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    });
    
    // Add click events to result items
    modal.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const type = this.getAttribute('data-type');
            const category = this.getAttribute('data-category');
            
            navigateToItem(id, type, category);
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        });
    });
    
    // Add filter functionality
    modal.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            modal.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter results
            const filteredResults = filter === 'all' 
                ? results 
                : results.filter(item => {
                    if (filter === 'food') return item.type === 'food';
                    if (filter === 'drink') return item.type === 'drink';
                    if (filter === 'vietnamese') return item.category === 'vietnamese';
                    return true;
                });
            
            // Update results display
            const resultsList = modal.querySelector('.search-results-list');
            resultsList.innerHTML = filteredResults.map(item => `
                <div class="search-result-item" data-id="${item.id}" data-type="${item.type}" data-category="${item.category}">
                    <div class="result-icon">
                        <i class="fas fa-${getIconForType(item.type)}"></i>
                    </div>
                    <div class="result-details">
                        <h3>${item.name}</h3>
                        <p class="result-desc">${item.description}</p>
                        <div class="result-meta">
                            <span class="result-category">${getCategoryName(item.category)}</span>
                            <span class="result-price">${item.price}</span>
                        </div>
                    </div>
                    <button class="result-action-btn">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            `).join('');
            
            // Update stats
            const stats = modal.querySelector('.search-results-stats span');
            stats.textContent = `Tìm thấy ${filteredResults.length} kết quả`;
            
            // Re-add click events
            resultsList.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    const type = this.getAttribute('data-type');
                    const category = this.getAttribute('data-category');
                    
                    navigateToItem(id, type, category);
                    modal.classList.remove('active');
                    setTimeout(() => modal.remove(), 300);
                });
            });
        });
    });
}

function navigateToItem(id, type, category) {
    if (type === 'food') {
        showPage('food');
        switchTab(category);
        
        // Scroll to and highlight the item
        setTimeout(() => {
            const itemElement = document.querySelector(`.food-item[data-id="${id}"]`);
            if (itemElement) {
                itemElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                itemElement.style.animation = 'highlight 1s ease';
                
                // Show item details after a delay
                setTimeout(() => {
                    showFoodModal(id, category);
                }, 1000);
            }
        }, 500);
    } else if (type === 'drink') {
        showPage('drink');
        const tab = category === 'cocktail' ? 'cocktails' : 'healthy-drinks';
        switchTab(tab);
        
        setTimeout(() => {
            const itemElement = document.querySelector(`.drink-item[data-id="${id}"]`);
            if (itemElement) {
                itemElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                itemElement.style.animation = 'highlight 1s ease';
                
                setTimeout(() => {
                    showDrinkModal(id, category);
                }, 1000);
            }
        }, 500);
    }
}

function setupKeyboardNavigation() {
    const searchInput = document.getElementById('search-input');
    const suggestions = document.querySelectorAll('.suggestion-item');
    let selectedIndex = -1;
    
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, suggestions.length - 1);
            updateSelection();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, -1);
            updateSelection();
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
            e.preventDefault();
            suggestions[selectedIndex].click();
        }
    });
    
    function updateSelection() {
        suggestions.forEach((item, index) => {
            item.classList.toggle('active', index === selectedIndex);
        });
    }
}

function performSearchWithFilter(query, type, category) {
    document.getElementById('search-input').value = query;
    performAdvancedSearch();
}

// Add highlight animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes highlight {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); box-shadow: 0 0 20px var(--primary); }
        100% { transform: scale(1); }
    }
    
    .search-results-stats {
        background: var(--light);
        padding: 15px;
        border-radius: 10px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--dark);
    }
    
    .search-result-item {
        display: flex;
        align-items: center;
        padding: 20px;
        background: white;
        border-radius: 10px;
        margin-bottom: 10px;
        cursor: pointer;
        transition: var(--transition);
        border: 1px solid #eee;
    }
    
    .search-result-item:hover {
        transform: translateX(5px);
        box-shadow: var(--shadow-md);
    }
    
    .result-icon {
        font-size: 1.5rem;
        color: var(--primary);
        margin-right: 15px;
    }
    
    .result-details {
        flex: 1;
    }
    
    .result-details h3 {
        margin: 0 0 5px 0;
        color: var(--dark);
    }
    
    .result-desc {
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 10px;
    }
    
    .result-meta {
        display: flex;
        gap: 15px;
        font-size: 0.85rem;
    }
    
    .result-category {
        background: var(--light);
        padding: 3px 10px;
        border-radius: 15px;
        color: var(--dark);
    }
    
    .result-price {
        color: var(--primary);
        font-weight: 600;
    }
    
    .result-action-btn {
        background: var(--primary);
        color: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        transition: var(--transition);
    }
    
    .result-action-btn:hover {
        background: var(--secondary);
    }
    
    .no-results-found {
        text-align: center;
        padding: 40px;
    }
    
    .no-results-found i {
        font-size: 4rem;
        color: #ccc;
        margin-bottom: 20px;
    }
    
    .search-results-filter {
        margin-top: 30px;
        padding-top: 20px;
        border-top: 1px solid #eee;
    }
    
    .filter-buttons {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 10px;
    }
    
    .filter-btn {
        padding: 8px 20px;
        background: var(--light);
        border: 1px solid #ddd;
        border-radius: 20px;
        cursor: pointer;
        transition: var(--transition);
    }
    
    .filter-btn.active {
        background: var(--primary);
        color: white;
        border-color: var(--primary);
    }
    
    .suggestions-header, .suggestions-footer {
        padding: 10px 15px;
        background: var(--light);
        color: var(--dark);
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .suggestion-item {
        padding: 12px 15px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
        transition: var(--transition);
        border-bottom: 1px solid #eee;
    }
    
    .suggestion-item:hover, .suggestion-item.active {
        background: var(--primary);
        color: white;
    }
    
    .suggestion-item.active .suggestion-badge {
        background: white;
        color: var(--primary);
    }
    
    .suggestion-details {
        flex: 1;
    }
    
    .suggestion-title {
        font-weight: 500;
    }
    
    .suggestion-desc {
        font-size: 0.85rem;
        opacity: 0.8;
    }
    
    .suggestion-badge {
        background: var(--light);
        padding: 3px 10px;
        border-radius: 15px;
        font-size: 0.8rem;
    }
    
    .suggestion-item:hover .suggestion-badge {
        background: white;
        color: var(--primary);
    }
`;
document.head.appendChild(style);