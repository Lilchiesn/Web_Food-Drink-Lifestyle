// ===== DATA CẤU TRÚC MỚI =====
// Mỗi mục lớn (Food/Drink) có các chủ đề con
// Mỗi chủ đề con có 4-5 sản phẩm

const foodData = {
    delicious: {
        title: "Món Ngon Thượng Hạng",
        description: "Những món ăn đỉnh cao khiến bạn mê mẩn",
        subcategories: [
            {
                id: "pizza-pasta",
                name: "Pizza & Pasta Ý",
                icon: "fas fa-pizza-slice",
                items: [
                    {
                        id: 1,
                        name: "Pizza Margherita Napoli",
                        image: "fas fa-pizza-slice",
                        description: "Pizza truyền thống Napoli với sốt cà chua, phô mai Mozzarella và lá basil tươi.",
                        story: "Được đặt theo tên Nữ hoàng Margherita của Ý vào năm 1889, với 3 màu đại diện cho cờ Ý.",
                        ingredients: [
                            { name: "Bột mì", amount: "500g" },
                            { name: "Phô mai Mozzarella", amount: "200g" },
                            { name: "Sốt cà chua San Marzano", amount: "150ml" },
                            { name: "Lá basil tươi", amount: "10 lá" }
                        ],
                        price: "59.000 - 89.000 VNĐ",
                        prepTime: "30 phút",
                        difficulty: "Trung bình",
                        tips: "Nướng ở 250°C trong lò đá để có đế giòn hoàn hảo.",
                        rating: 4.8,
                        steps: ["Nhào bột", "Cán bột", "Thêm topping", "Nướng 10 phút"]
                    },
                    {
                        id: 2,
                        name: "Spaghetti Carbonara Roma",
                        image: "fas fa-bacon",
                        description: "Mì Ý sốt kem với trứng, phô mai Pecorino và thịt xông khói.",
                        story: "Món ăn của thợ mỏ than (carbonari) ở Rome, cần nhiều năng lượng.",
                        ingredients: [
                            { name: "Spaghetti", amount: "250g" },
                            { name: "Trứng gà", amount: "3 quả" },
                            { name: "Pancetta", amount: "150g" },
                            { name: "Pecorino Romano", amount: "100g" }
                        ],
                        price: "65.000 - 95.000 VNĐ",
                        prepTime: "25 phút",
                        difficulty: "Dễ",
                        tips: "Không dùng kem! Chỉ dùng trứng và phô mai.",
                        rating: 4.7,
                        steps: ["Luộc mì", "Chiên pancetta", "Trộn sốt", "Kết hợp"]
                    }
                ]
            },
            {
                id: "sushi-japanese",
                name: "Sushi & Nhật Bản",
                icon: "fas fa-fish",
                items: [
                    {
                        id: 3,
                        name: "Sushi Cá Hồi Nigiri",
                        image: "fas fa-fish",
                        description: "Nigiri sushi với cá hồi tươi và cơm sushi dẻo thơm.",
                        story: "Xuất phát từ Tokyo thế kỷ 19, là cách thưởng thức cá tươi nguyên bản.",
                        ingredients: [
                            { name: "Cá hồi phi-lê", amount: "200g" },
                            { name: "Cơm sushi", amount: "2 chén" },
                            { name: "Wasabi", amount: "1 muỗng" },
                            { name: "Nước tương Nhật", amount: "50ml" }
                        ],
                        price: "79.000 - 120.000 VNĐ",
                        prepTime: "40 phút",
                        difficulty: "Khó",
                        tips: "Dùng dao sắc để cắt cá, không làm nát thịt.",
                        rating: 4.9,
                        steps: ["Nấu cơm sushi", "Tạo hình cơm", "Đặt cá lên", "Trình bày"]
                    },
                    {
                        id: 4,
                        name: "Ramen Tonkotsu Hakata",
                        image: "fas fa-bowl-hot",
                        description: "Ramen nước dùng xương heo đậm đà, mì tươi và thịt cháy cạnh.",
                        story: "Xuất xứ từ Hakata, với nước dùng nấu từ xương heo 12-18 giờ.",
                        ingredients: [
                            { name: "Xương heo", amount: "1kg" },
                            { name: "Mì ramen tươi", amount: "300g" },
                            { name: "Thịt heo chashu", amount: "200g" },
                            { name: "Trứng luộc lòng đào", amount: "2 quả" }
                        ],
                        price: "75.000 - 110.000 VNĐ",
                        prepTime: "4 giờ",
                        difficulty: "Rất khó",
                        tips: "Hầm xương ở nhiệt độ sôi nhẹ để nước trong.",
                        rating: 4.8,
                        steps: ["Hầm xương", "Nấu thịt chashu", "Luộc mì", "Lắp ráp"]
                    }
                ]
            },
            {
                id: "steak-bbq",
                name: "Steak & BBQ",
                icon: "fas fa-drumstick-bite",
                items: [
                    {
                        id: 5,
                        name: "Steak Ribeye Mỹ",
                        image: "fas fa-steak",
                        description: "Steak ribeye marbling hoàn hảo, áp chảo vàng nâu.",
                        story: "Ribeye có nhiều mỡ giữa thớ thịt, tạo độ béo và hương vị đặc trưng.",
                        ingredients: [
                            { name: "Thịt bò ribeye", amount: "300g" },
                            { name: "Bơ", amount: "50g" },
                            { name: "Tỏi", amount: "3 tép" },
                            { name: "Hương thảo", amount: "2 nhánh" }
                        ],
                        price: "185.000 - 250.000 VNĐ",
                        prepTime: "15 phút",
                        difficulty: "Trung bình",
                        tips: "Để thịt nghỉ 5 phút sau khi nấu để nước thịt phân bố đều.",
                        rating: 4.9,
                        steps: ["Ướp muối", "Áp chảo", "Thêm bơ tỏi", "Nghỉ và cắt"]
                    }
                ]
            },
            {
                id: "burger-sandwich",
                name: "Burger & Sandwich",
                icon: "fas fa-hamburger",
                items: [
                    {
                        id: 6,
                        name: "Burger Bò Phô Mai",
                        image: "fas fa-hamburger",
                        description: "Burger cổ điển với thịt bò xay, phô mai cheddar và sốt đặc biệt.",
                        story: "Bắt nguồn từ Hamburg, Đức, phổ biến tại Mỹ từ thế kỷ 20.",
                        ingredients: [
                            { name: "Thịt bò xay", amount: "200g" },
                            { name: "Phô mai cheddar", amount: "2 lát" },
                            { name: "Bánh burger", amount: "2 cái" },
                            { name: "Xà lách, cà chua", amount: "50g" }
                        ],
                        price: "65.000 - 95.000 VNĐ",
                        prepTime: "20 phút",
                        difficulty: "Dễ",
                        tips: "Nén nhẹ viên thịt, không nén quá chặt.",
                        rating: 4.6,
                        steps: ["Tạo viên thịt", "Nướng burger", "Lắp ráp", "Thêm sốt"]
                    }
                ]
            }
        ]
    },
    
    healthy: {
        title: "Ăn Lành Sống Khoẻ",
        description: "Dinh dưỡng cân bằng cho cơ thể tràn đầy năng lượng",
        subcategories: [
            {
                id: "salad-bowl",
                name: "Salad & Bowl",
                icon: "fas fa-seedling",
                items: [
                    {
                        id: 7,
                        name: "Buddha Bowl Đầy Màu",
                        image: "fas fa-bowl-food",
                        description: "Bowl đầy màu sắc với ngũ cốc, rau củ và protein.",
                        story: "Đặt tên theo bụng Phật, tượng trưng cho sự no đủ và cân bằng.",
                        ingredients: [
                            { name: "Quinoa", amount: "1 chén" },
                            { name: "Khoai lang nướng", amount: "150g" },
                            { name: "Bơ", amount: "1/2 quả" },
                            { name: "Rau mầm", amount: "50g" }
                        ],
                        price: "45.000 - 75.000 VNĐ",
                        prepTime: "25 phút",
                        difficulty: "Dễ",
                        tips: "Sắp xếp theo màu sắc để tạo hình đẹp mắt.",
                        rating: 4.5,
                        steps: ["Nấu quinoa", "Nướng khoai lang", "Cắt rau củ", "Sắp xếp"]
                    },
                    {
                        id: 8,
                        name: "Salad Cá Ngừ Địa Trung Hải",
                        image: "fas fa-fish",
                        description: "Salad cá ngừ với ô liu, cà chua và dầu olive.",
                        story: "Ẩm thực Địa Trung Hải nổi tiếng với cá và dầu olive tốt cho tim.",
                        ingredients: [
                            { name: "Cá ngừ đóng hộp", amount: "1 hộp" },
                            { name: "Ô liu đen", amount: "50g" },
                            { name: "Cà chua bi", amount: "100g" },
                            { name: "Dầu olive extra virgin", amount: "2 muỗng" }
                        ],
                        price: "55.000 - 85.000 VNĐ",
                        prepTime: "15 phút",
                        difficulty: "Rất dễ",
                        tips: "Dùng cá ngừ ngâm nước thay vì dầu.",
                        rating: 4.4,
                        steps: ["Trộn cá", "Thêm rau củ", "Pha sốt", "Trộn đều"]
                    }
                ]
            },
            {
                id: "breakfast-bowl",
                name: "Bữa Sáng Lành",
                icon: "fas fa-egg",
                items: [
                    {
                        id: 9,
                        name: "Overnight Oats Berry",
                        image: "fas fa-bowl-rice",
                        description: "Yến mạch ngâm qua đêm với sữa hạnh nhân và berry.",
                        story: "Xuất phát từ Thụy Sĩ, hoàn hảo cho người bận rộn.",
                        ingredients: [
                            { name: "Yến mạch cán dẹt", amount: "1/2 chén" },
                            { name: "Sữa hạnh nhân", amount: "1 chén" },
                            { name: "Berry hỗn hợp", amount: "100g" },
                            { name: "Hạt chia", amount: "1 muỗng" }
                        ],
                        price: "35.000 - 55.000 VNĐ",
                        prepTime: "5 phút + qua đêm",
                        difficulty: "Rất dễ",
                        tips: "Ngâm qua đêm để yến mạch mềm và dễ tiêu hóa.",
                        rating: 4.6,
                        steps: ["Trộn yến mạch", "Thêm sữa", "Để qua đêm", "Trang trí"]
                    }
                ]
            },
            {
                id: "vegan-plant",
                name: "Thuần Chay & Thực Vật",
                icon: "fas fa-leaf",
                items: [
                    {
                        id: 10,
                        name: "Curry Đậu Hũ Thái Lan",
                        image: "fas fa-pepper-hot",
                        description: "Curry đậu hũ cay nồng với nước cốt dừa.",
                        story: "Biến tấu từ món curry Thái, thay thế thịt bằng đậu hũ.",
                        ingredients: [
                            { name: "Đậu hũ non", amount: "300g" },
                            { name: "Nước cốt dừa", amount: "400ml" },
                            { name: "Bột curry đỏ", amount: "2 muỗng" },
                            { name: "Rau củ hỗn hợp", amount: "200g" }
                        ],
                        price: "65.000 - 95.000 VNĐ",
                        prepTime: "30 phút",
                        difficulty: "Trung bình",
                        tips: "Chiên sơ đậu hũ để không bị nát khi nấu.",
                        rating: 4.7,
                        steps: ["Chiên đậu hũ", "Xào curry", "Thêm nước cốt dừa", "Nấu chín"]
                    }
                ]
            },
            {
                id: "soup-healthy",
                name: "Súp & Canh Dinh Dưỡng",
                icon: "fas fa-mortar-pestle",
                items: [
                    {
                        id: 11,
                        name: "Súp Bí Đỏ Kem",
                        image: "fas fa-pumpkin",
                        description: "Súp bí đỏ mịn với kem và hạt bí.",
                        story: "Món súp cổ điển châu Âu, giàu vitamin A và chất xơ.",
                        ingredients: [
                            { name: "Bí đỏ", amount: "500g" },
                            { name: "Hành tây", amount: "1 củ" },
                            { name: "Kem tươi", amount: "100ml" },
                            { name: "Hạt bí", amount: "2 muỗng" }
                        ],
                        price: "45.000 - 70.000 VNĐ",
                        prepTime: "35 phút",
                        difficulty: "Dễ",
                        tips: "Xay nhuyễn khi còn nóng để súp mịn.",
                        rating: 4.5,
                        steps: ["Hấp bí đỏ", "Xào hành", "Xay nhuyễn", "Thêm kem"]
                    }
                ]
            }
        ]
    },
    
    vietnamese: {
        title: "Tinh Hoa Việt Nam",
        description: "Hương vị quê hương, tinh tế và đậm đà",
        subcategories: [
            {
                id: "pho-bun",
                name: "Phở & Bún",
                icon: "fas fa-bowl-rice",
                items: [
                    {
                        id: 12,
                        name: "Phở Bò Hà Nội",
                        image: "fas fa-bowl-rice",
                        description: "Phở bò truyền thống với nước dùng trong ngọt, bánh phở mềm.",
                        story: "Xuất hiện đầu thế kỷ 20 tại Hà Nội, là linh hồn ẩm thực Việt.",
                        ingredients: [
                            { name: "Xương bò", amount: "1.5kg" },
                            { name: "Bánh phở tươi", amount: "400g" },
                            { name: "Thịt bò tái", amount: "200g" },
                            { name: "Hành, gừng, quế", amount: "150g" }
                        ],
                        price: "45.000 - 75.000 VNĐ",
                        prepTime: "4 giờ",
                        difficulty: "Khó",
                        tips: "Hầm xương lửa nhỏ để nước trong và ngọt tự nhiên.",
                        rating: 4.9,
                        steps: ["Hầm xương", "Chuẩn bị thịt", "Trần bánh phở", "Lắp ráp"]
                    },
                    {
                        id: 13,
                        name: "Bún Chả Hà Nội",
                        image: "fas fa-fire",
                        description: "Bún chả với thịt nướng, nước mắm chua ngọt và rau sống.",
                        story: "Đặc sản Hà Nội, từng được Tổng thống Obama thưởng thức.",
                        ingredients: [
                            { name: "Thịt heo xay", amount: "300g" },
                            { name: "Bún tươi", amount: "400g" },
                            { name: "Nước mắm", amount: "100ml" },
                            { name: "Rau sống", amount: "200g" }
                        ],
                        price: "40.000 - 65.000 VNĐ",
                        prepTime: "40 phút",
                        difficulty: "Trung bình",
                        tips: "Ướp thịt ít nhất 30 phút để thấm gia vị.",
                        rating: 4.8,
                        steps: ["Ướp thịt", "Nướng chả", "Pha nước mắm", "Trình bày"]
                    }
                ]
            },
            {
                id: "com-viet",
                name: "Cơm Việt",
                icon: "fas fa-utensils",
                items: [
                    {
                        id: 14,
                        name: "Cơm Tấm Sườn Nướng",
                        image: "fas fa-drumstick-bite",
                        description: "Cơm tấm với sườn nướng, bì, chả và nước mắm đặc biệt.",
                        story: "Món ăn dân dã miền Nam, từ hạt gạo tấm vỡ.",
                        ingredients: [
                            { name: "Gạo tấm", amount: "2 chén" },
                            { name: "Sườn heo", amount: "300g" },
                            { name: "Bì heo", amount: "100g" },
                            { name: "Chả trứng", amount: "2 miếng" }
                        ],
                        price: "50.000 - 80.000 VNĐ",
                        prepTime: "50 phút",
                        difficulty: "Trung bình",
                        tips: "Ướp sườn với mật ong để có màu nâu đẹp.",
                        rating: 4.7,
                        steps: ["Nấu cơm tấm", "Ướp và nướng sườn", "Làm bì", "Lắp ráp"]
                    }
                ]
            },
            {
                id: "goi-cuon",
                name: "Gỏi & Cuốn",
                icon: "fas fa-leaf",
                items: [
                    {
                        id: 15,
                        name: "Gỏi Cuốn Tôm Thịt",
                        image: "fas fa-leaf",
                        description: "Bánh tráng cuốn tôm, thịt, bún và rau sống.",
                        story: "Món ăn thanh mát miền Nam, hoàn hảo cho ngày hè.",
                        ingredients: [
                            { name: "Bánh tráng", amount: "10 cái" },
                            { name: "Tôm luộc", amount: "200g" },
                            { name: "Thịt heo luộc", amount: "200g" },
                            { name: "Rau sống", amount: "200g" }
                        ],
                        price: "35.000 - 60.000 VNĐ",
                        prepTime: "30 phút",
                        difficulty: "Trung bình",
                        tips: "Nhúng bánh tráng nhanh tay để không bị rách.",
                        rating: 4.8,
                        steps: ["Luộc tôm thịt", "Chuẩn bị rau", "Cuốn", "Pha nước chấm"]
                    },
                    {
                        id: 16,
                        name: "Gỏi Đu Đủ Tôm Khô",
                        image: "fas fa-carrot",
                        description: "Gỏi đu đủ bào sợi với tôm khô, đậu phộng.",
                        story: "Món ăn đường phố Thái Lan, biến tấu thành phiên bản Việt.",
                        ingredients: [
                            { name: "Đu đủ xanh", amount: "300g" },
                            { name: "Tôm khô", amount: "50g" },
                            { name: "Đậu phộng rang", amount: "30g" },
                            { name: "Rau thơm", amount: "50g" }
                        ],
                        price: "40.000 - 65.000 VNĐ",
                        prepTime: "25 phút",
                        difficulty: "Dễ",
                        tips: "Bào đu đủ thành sợi mỏng, ngâm nước đá để giòn.",
                        rating: 4.6,
                        steps: ["Bào đu đủ", "Ngâm nước đá", "Trộn gỏi", "Rắc đậu phộng"]
                    }
                ]
            },
            {
                id: "banh-viet",
                name: "Bánh Việt",
                icon: "fas fa-birthday-cake",
                items: [
                    {
                        id: 17,
                        name: "Bánh Xèo Miền Tây",
                        image: "fas fa-pancake",
                        description: "Bánh xèo giòn với nhân tôm thịt, giá đỗ.",
                        story: "Đặc sản miền Tây, tên gọi từ âm thanh 'xèo' khi đổ bánh.",
                        ingredients: [
                            { name: "Bột gạo", amount: "200g" },
                            { name: "Tôm tươi", amount: "150g" },
                            { name: "Thịt heo", amount: "100g" },
                            { name: "Giá đỗ", amount: "100g" }
                        ],
                        price: "45.000 - 70.000 VNĐ",
                        prepTime: "40 phút",
                        difficulty: "Khó",
                        tips: "Chảo phải thật nóng, đổ bánh mỏng để giòn.",
                        rating: 4.7,
                        steps: ["Pha bột", "Xào nhân", "Đổ bánh", "Cuốn rau"]
                    }
                ]
            }
        ]
    }
};

const drinkData = {
    healthy: {
        title: "Đồ Uống Lành Mạnh",
        description: "Năng lượng tươi mới, tốt cho sức khỏe",
        subcategories: [
            {
                id: "fresh-juice",
                name: "Nước Ép Tươi",
                icon: "fas fa-lemon",
                items: [
                    {
                        id: 1,
                        name: "Nước Ép Cam Cà Rốt",
                        image: "fas fa-carrot",
                        description: "Nước ép cam tươi kết hợp cà rốt ngọt tự nhiên.",
                        benefits: "Giàu Vitamin A, C - Tốt cho mắt và tăng cường miễn dịch.",
                        ingredients: [
                            { name: "Cam tươi", amount: "3 quả" },
                            { name: "Cà rốt", amount: "2 củ" },
                            { name: "Gừng", amount: "1 lát" }
                        ],
                        price: "25.000 - 40.000 VNĐ",
                        prepTime: "10 phút",
                        tips: "Uống ngay sau khi ép để không mất vitamin.",
                        rating: 4.7,
                        steps: ["Rửa nguyên liệu", "Gọt vỏ", "Ép lấy nước", "Khuấy đều"]
                    },
                    {
                        id: 2,
                        name: "Nước Ép Dưa Hấu Bạc Hà",
                        image: "fas fa-watermelon",
                        description: "Dưa hấu tươi mát với lá bạc hà the mát.",
                        benefits: "Giải nhiệt, bù nước và điện giải mùa hè.",
                        ingredients: [
                            { name: "Dưa hấu", amount: "300g" },
                            { name: "Lá bạc hà", amount: "5 lá" },
                            { name: "Chanh", amount: "1/2 quả" }
                        ],
                        price: "22.000 - 35.000 VNĐ",
                        prepTime: "8 phút",
                        tips: "Chọn dưa hấu ruột đỏ, vỏ vàng để có vị ngọt tự nhiên.",
                        rating: 4.5,
                        steps: ["Cắt dưa hấu", "Ép lấy nước", "Thêm bạc hà", "Khuấy đều"]
                    },
                    {
                        id: 3,
                        name: "Nước Ép Cần Tây Táo Xanh",
                        image: "fas fa-apple-alt",
                        description: "Cần tây detox kết hợp táo xanh giòn ngọt.",
                        benefits: "Thanh lọc cơ thể, hỗ trợ tiêu hóa và giảm cân.",
                        ingredients: [
                            { name: "Cần tây", amount: "3 cọng" },
                            { name: "Táo xanh", amount: "2 quả" },
                            { name: "Dưa leo", amount: "1/2 quả" }
                        ],
                        price: "28.000 - 45.000 VNĐ",
                        prepTime: "12 phút",
                        tips: "Uống vào buổi sáng khi bụng đói để hiệu quả detox tốt nhất.",
                        rating: 4.6,
                        steps: ["Rửa sạch", "Cắt miếng", "Ép lấy nước", "Lọc qua rây"]
                    }
                ]
            },
            {
                id: "smoothie-bowl",
                name: "Smoothie & Bowl",
                icon: "fas fa-blender",
                items: [
                    {
                        id: 4,
                        name: "Smoothie Bơ Chuối",
                        image: "fas fa-blender",
                        description: "Smoothie bơ chuối béo ngậy với sữa hạnh nhân.",
                        benefits: "Giàu kali, chất xơ và chất béo lành mạnh cho tim.",
                        ingredients: [
                            { name: "Bơ chín", amount: "1 quả" },
                            { name: "Chuối", amount: "1 quả" },
                            { name: "Sữa hạnh nhân", amount: "200ml" },
                            { name: "Hạt chia", amount: "1 muỗng" }
                        ],
                        price: "32.000 - 50.000 VNĐ",
                        prepTime: "8 phút",
                        tips: "Dùng bơ Hass có vị béo đậm hơn, có thể thêm protein powder.",
                        rating: 4.8,
                        steps: ["Cắt bơ chuối", "Cho vào máy xay", "Thêm sữa", "Xay nhuyễn"]
                    },
                    {
                        id: 5,
                        name: "Smoothie Rau Xanh Detox",
                        image: "fas fa-leaf",
                        description: "Smoothie detox với rau chân vịt, dứa và chanh.",
                        benefits: "Thanh lọc cơ thể, giàu chất diệp lục và enzyme.",
                        ingredients: [
                            { name: "Rau chân vịt", amount: "50g" },
                            { name: "Dứa", amount: "100g" },
                            { name: "Chanh", amount: "1/2 quả" },
                            { name: "Nước dừa", amount: "150ml" }
                        ],
                        price: "30.000 - 48.000 VNĐ",
                        prepTime: "10 phút",
                        tips: "Uống ngay sau khi xay, không để lâu ngoài không khí.",
                        rating: 4.4,
                        steps: ["Rửa rau", "Cắt dứa", "Xay cùng nước dừa", "Lọc nếu cần"]
                    }
                ]
            },
            {
                id: "herbal-tea",
                name: "Trà Thảo Mộc",
                icon: "fas fa-mug-hot",
                items: [
                    {
                        id: 6,
                        name: "Trà Gừng Mật Ong",
                        image: "fas fa-mug-hot",
                        description: "Trà gừng ấm nóng với mật ong nguyên chất.",
                        benefits: "Làm ấm cơ thể, hỗ trợ tiêu hóa và tăng cường miễn dịch.",
                        ingredients: [
                            { name: "Gừng tươi", amount: "50g" },
                            { name: "Mật ong", amount: "2 muỗng" },
                            { name: "Chanh", amount: "1/2 quả" },
                            { name: "Nước sôi", amount: "300ml" }
                        ],
                        price: "20.000 - 35.000 VNĐ",
                        prepTime: "15 phút",
                        tips: "Ngâm gừng 5-10 phút để tiết ra tinh chất.",
                        rating: 4.7,
                        steps: ["Thái gừng", "Ngâm nước sôi", "Thêm mật ong", "Khuấy đều"]
                    },
                    {
                        id: 7,
                        name: "Trà Atiso Túi Lọc",
                        image: "fas fa-leaf",
                        description: "Trà atiso thơm dịu, tốt cho gan và tiêu hóa.",
                        benefits: "Mát gan, giải độc, hỗ trợ hệ tiêu hóa hoạt động tốt.",
                        ingredients: [
                            { name: "Trà atiso túi lọc", amount: "1 túi" },
                            { name: "Nước sôi 90°C", amount: "250ml" },
                            { name: "Đường phèn (tùy chọn)", amount: "1 viên" }
                        ],
                        price: "18.000 - 30.000 VNĐ",
                        prepTime: "5 phút",
                        tips: "Pha ở 90°C, ngâm 3-5 phút để trà không bị đắng.",
                        rating: 4.5,
                        steps: ["Đun nước", "Cho túi trà", "Ngâm 5 phút", "Thưởng thức"]
                    }
                ]
            },
            {
                id: "milk-alternative",
                name: "Sữa Thực Vật",
                icon: "fas fa-seedling",
                items: [
                    {
                        id: 8,
                        name: "Sữa Hạnh Nhân Tự Làm",
                        image: "fas fa-seedling",
                        description: "Sữa hạnh nhân thơm béo, không đường tự nhiên.",
                        benefits: "Không lactose, giàu vitamin E và canxi từ thực vật.",
                        ingredients: [
                            { name: "Hạnh nhân", amount: "1 chén" },
                            { name: "Nước lọc", amount: "4 chén" },
                            { name: "Quả chà là", amount: "2 quả" },
                            { name: "Muối biển", amount: "1 nhúm" }
                        ],
                        price: "35.000 - 55.000 VNĐ",
                        prepTime: "8 giờ + 10 phút",
                        tips: "Ngâm hạnh nhân qua đêm để sữa mịn và dễ tiêu hóa.",
                        rating: 4.6,
                        steps: ["Ngâm hạnh nhân", "Xay nhuyễn", "Lọc qua vải", "Bảo quản lạnh"]
                    },
                    {
                        id: 9,
                        name: "Sữa Đậu Nành Truyền Thống",
                        image: "fas fa-bean",
                        description: "Sữa đậu nành nguyên chất, thơm ngon bổ dưỡng.",
                        benefits: "Nguồn protein thực vật, isoflavone tốt cho sức khỏe.",
                        ingredients: [
                            { name: "Đậu nành", amount: "1 chén" },
                            { name: "Nước lọc", amount: "6 chén" },
                            { name: "Đường (tùy chọn)", amount: "3 muỗng" }
                        ],
                        price: "25.000 - 40.000 VNĐ",
                        prepTime: "8 giờ + 30 phút",
                        tips: "Đun sôi ít nhất 20 phút để loại bỏ chất độc tự nhiên.",
                        rating: 4.7,
                        steps: ["Ngâm đậu", "Xay đậu", "Lọc bã", "Đun sôi"]
                    }
                ]
            }
        ]
    },
    
    cocktails: {
        title: "Cocktail & Mocktail",
        description: "Nghệ thuật pha chế, từ cổ điển đến hiện đại",
        subcategories: [
            {
                id: "classic-cocktails",
                name: "Cocktail Cổ Điển",
                icon: "fas fa-cocktail",
                items: [
                    {
                        id: 10,
                        name: "Mojito Havana",
                        image: "fas fa-cocktail",
                        description: "Rum Havana, lá bạc hà, chanh tây và soda Cuba.",
                        story: "Có nguồn gốc từ Cuba, trở nên phổ biến nhờ nhà văn Hemingway.",
                        ingredients: [
                            { name: "Rum trắng Havana", amount: "50ml" },
                            { name: "Lá bạc hà", amount: "10 lá" },
                            { name: "Chanh tây", amount: "1 quả" },
                            { name: "Đường nâu", amount: "2 muỗng" }
                        ],
                        price: "85.000 - 140.000 VNĐ",
                        prepTime: "7 phút",
                        alcohol: "15%",
                        tips: "Vò nhẹ lá bạc hà để giải phóng tinh dầu, không xay nát.",
                        rating: 4.9,
                        steps: ["Vò bạc hà", "Vắt chanh", "Thêm rum", "Khuấy đều", "Thêm soda"]
                    },
                    {
                        id: 11,
                        name: "Margarita Salt Rim",
                        image: "fas fa-glass-whiskey",
                        description: "Tequila, Cointreau và nước chanh với viền muối.",
                        story: "Được phát minh năm 1938 tại Tijuana, Mexico.",
                        ingredients: [
                            { name: "Tequila blanco", amount: "50ml" },
                            { name: "Cointreau", amount: "25ml" },
                            { name: "Nước chanh tươi", amount: "25ml" },
                            { name: "Muối biển", amount: "Viền ly" }
                        ],
                        price: "95.000 - 160.000 VNĐ",
                        prepTime: "8 phút",
                        alcohol: "20%",
                        tips: "Chỉ làm ướt nửa viền ly để người uống có thể lựa chọn.",
                        rating: 4.7,
                        steps: ["Làm viền muối", "Lắc nguyên liệu", "Lọc vào ly", "Trang trí"]
                    },
                    {
                        id: 12,
                        name: "Old Fashioned Classic",
                        image: "fas fa-whiskey-glass",
                        description: "Whisky bourbon, đường, bitters và vỏ cam.",
                        story: "Một trong những cocktail lâu đời nhất, từ những năm 1800.",
                        ingredients: [
                            { name: "Whisky bourbon", amount: "60ml" },
                            { name: "Đường nâu", amount: "1 viên" },
                            { name: "Angostura bitters", amount: "2 dash" },
                            { name: "Vỏ cam", amount: "1 miếng" }
                        ],
                        price: "120.000 - 200.000 VNĐ",
                        prepTime: "10 phút",
                        alcohol: "35%",
                        tips: "Dùng đá khối lớn để làm loãng chậm, khuấy nhẹ nhàng.",
                        rating: 4.8,
                        steps: ["Cho đường", "Thêm bitters", "Thêm whisky", "Khuấy", "Trang trí"]
                    }
                ]
            },
            {
                id: "international-cocktails",
                name: "Cocktail Quốc Tế",
                icon: "fas fa-globe-americas",
                items: [
                    {
                        id: 13,
                        name: "Japanese Slipper",
                        image: "fas fa-shoe-prints",
                        description: "Midori melon liqueur, Cointreau và nước chanh tươi.",
                        story: "Được tạo ra năm 1984 tại Melbourne, Australia.",
                        ingredients: [
                            { name: "Midori melon liqueur", amount: "30ml" },
                            { name: "Cointreau", amount: "30ml" },
                            { name: "Nước chanh tươi", amount: "30ml" }
                        ],
                        price: "95.000 - 150.000 VNĐ",
                        prepTime: "5 phút",
                        alcohol: "18%",
                        tips: "Dùng chanh vàng thay vì chanh xanh để ít đắng hơn.",
                        rating: 4.6,
                        steps: ["Cho tất cả vào shaker", "Lắc mạnh", "Lọc vào ly", "Trang trí"]
                    },
                    {
                        id: 14,
                        name: "French Martini",
                        image: "fas fa-martini-glass",
                        description: "Vodka, Chambord raspberry liqueur và nước ép dứa.",
                        story: "Phổ biến tại các quán bar ở New York những năm 1980.",
                        ingredients: [
                            { name: "Vodka", amount: "45ml" },
                            { name: "Chambord", amount: "15ml" },
                            { name: "Nước ép dứa", amount: "30ml" }
                        ],
                        price: "110.000 - 180.000 VNĐ",
                        prepTime: "6 phút",
                        alcohol: "22%",
                        tips: "Lắc thật mạnh để tạo bọt mịn và làm lạnh đều.",
                        rating: 4.7,
                        steps: ["Cho vodka và Chambord", "Thêm nước ép dứa", "Lắc mạnh", "Lọc", "Trang trí"]
                    },
                    {
                        id: 15,
                        name: "Red Sangria Tây Ban Nha",
                        image: "fas fa-wine-glass",
                        description: "Rượu vang đỏ, rượu mùi cam, trái cây tươi và soda.",
                        story: "Có nguồn gốc từ Tây Ban Nha và Bồ Đào Nha.",
                        ingredients: [
                            { name: "Rượu vang đỏ", amount: "750ml" },
                            { name: "Rượu mùi cam", amount: "100ml" },
                            { name: "Trái cây hỗn hợp", amount: "300g" }
                        ],
                        price: "150.000 - 250.000 VNĐ",
                        prepTime: "15 phút + ủ",
                        alcohol: "12%",
                        tips: "Ủ qua đêm để hương vị trái cây hòa quyện với rượu.",
                        rating: 4.8,
                        steps: ["Cắt trái cây", "Cho vào bình", "Thêm rượu", "Ủ 4+ giờ", "Thêm soda"]
                    }
                ]
            },
            {
                id: "tropical-cocktails",
                name: "Cocktail Nhiệt Đới",
                icon: "fas fa-umbrella-beach",
                items: [
                    {
                        id: 16,
                        name: "Pina Colada Puerto Rico",
                        image: "fas fa-cocktail",
                        description: "Rum, nước cốt dừa và nước ép dứa, xay cùng đá.",
                        story: "Quốc thức của Puerto Rico từ năm 1978.",
                        ingredients: [
                            { name: "Rum trắng", amount: "60ml" },
                            { name: "Nước cốt dừa", amount: "60ml" },
                            { name: "Nước ép dứa", amount: "90ml" },
                            { name: "Đá viên", amount: "1 cốc" }
                        ],
                        price: "95.000 - 160.000 VNĐ",
                        prepTime: "5 phút",
                        alcohol: "15%",
                        tips: "Xay đá thật nhuyễn để có kết cấu smoothie mịn.",
                        rating: 4.7,
                        steps: ["Cho tất cả vào máy xay", "Xay nhuyễn", "Đổ vào ly", "Trang trí"]
                    },
                    {
                        id: 17,
                        name: "Mai Tai Polynesia",
                        image: "fas fa-umbrella-beach",
                        description: "Rum, curaçao, hạnh nhân syrup và nước chanh.",
                        story: "Được tạo ra tại Oakland, California năm 1944.",
                        ingredients: [
                            { name: "Rum vàng", amount: "45ml" },
                            { name: "Rum đen", amount: "15ml" },
                            { name: "Curaçao", amount: "15ml" },
                            { name: "Hạnh nhân syrup", amount: "15ml" }
                        ],
                        price: "110.000 - 190.000 VNĐ",
                        prepTime: "7 phút",
                        alcohol: "25%",
                        tips: "Dùng 2 loại rum để tạo chiều sâu hương vị.",
                        rating: 4.8,
                        steps: ["Cho tất cả vào shaker", "Lắc mạnh", "Đổ vào ly đá", "Trang trí"]
                    }
                ]
            },
            {
                id: "mocktail-non-alcohol",
                name: "Mocktail Không Cồn",
                icon: "fas fa-glass-water",
                items: [
                    {
                        id: 18,
                        name: "Virgin Mojito",
                        image: "fas fa-glass-water",
                        description: "Mojito không cồn với bạc hà, chanh và soda.",
                        story: "Phiên bản lành mạnh của Mojito cổ điển.",
                        ingredients: [
                            { name: "Lá bạc hà", amount: "10 lá" },
                            { name: "Chanh tây", amount: "1 quả" },
                            { name: "Đường nâu", amount: "2 muỗng" },
                            { name: "Soda", amount: "200ml" }
                        ],
                        price: "45.000 - 75.000 VNĐ",
                        prepTime: "5 phút",
                        alcohol: "0%",
                        tips: "Có thể thay soda bằng nước có ga không đường.",
                        rating: 4.5,
                        steps: ["Vò bạc hà", "Vắt chanh", "Thêm đường", "Khuấy", "Thêm soda"]
                    },
                    {
                        id: 19,
                        name: "Berry Fizz Sparkling",
                        image: "fas fa-glass-water",
                        description: "Mocktail berry với soda hồng và trái cây tươi.",
                        story: "Mocktail hiện đại, màu sắc bắt mắt.",
                        ingredients: [
                            { name: "Berry hỗn hợp", amount: "100g" },
                            { name: "Nước chanh", amount: "30ml" },
                            { name: "Simple syrup", amount: "15ml" },
                            { name: "Soda hồng", amount: "150ml" }
                        ],
                        price: "55.000 - 85.000 VNĐ",
                        prepTime: "8 phút",
                        alcohol: "0%",
                        tips: "Nghiền nhẹ berry để tiết màu tự nhiên.",
                        rating: 4.6,
                        steps: ["Nghiền berry", "Thêm syrup", "Thêm soda", "Khuấy nhẹ", "Trang trí"]
                    }
                ]
            }
        ]
    }
};

// Search suggestions data - Tất cả items để tìm kiếm
const searchSuggestions = [
    // Món Ngon
    "Pizza Margherita Napoli", "Spaghetti Carbonara", "Sushi Cá Hồi Nigiri", 
    "Ramen Tonkotsu", "Steak Ribeye Mỹ", "Burger Bò Phô Mai",
    
    // Ăn Lành
    "Buddha Bowl", "Salad Cá Ngừ", "Overnight Oats", "Curry Đậu Hũ", "Súp Bí Đỏ",
    
    // Ẩm Thực Việt
    "Phở Bò Hà Nội", "Bún Chả Hà Nội", "Cơm Tấm Sườn Nướng", 
    "Gỏi Cuốn Tôm Thịt", "Gỏi Đu Đủ Tôm Khô", "Bánh Xèo Miền Tây",
    
    // Nước Ép
    "Nước Ép Cam Cà Rốt", "Nước Ép Dưa Hấu", "Nước Ép Cần Tây Táo",
    
    // Smoothie
    "Smoothie Bơ Chuối", "Smoothie Rau Xanh",
    
    // Trà
    "Trà Gừng Mật Ong", "Trà Atiso",
    
    // Sữa
    "Sữa Hạnh Nhân", "Sữa Đậu Nành",
    
    // Cocktail
    "Mojito Havana", "Margarita", "Old Fashioned", "Japanese Slipper", 
    "French Martini", "Red Sangria", "Pina Colada", "Mai Tai",
    
    // Mocktail
    "Virgin Mojito", "Berry Fizz",
    
    // Từ khóa chung
    "Công thức healthy", "Món ăn giảm cân", "Detox cơ thể",
    "Cocktail không cồn", "Đồ uống mùa hè", "Bữa sáng lành mạnh",
    "Ẩm thực Việt Nam", "Món Ý", "Đồ uống giải nhiệt"
];

// Helper function để lấy tất cả items cho search
function getAllItemsForSearch() {
    const allItems = [];
    
    // Lấy tất cả food items
    Object.keys(foodData).forEach(category => {
        foodData[category].subcategories.forEach(subcategory => {
            subcategory.items.forEach(item => {
                allItems.push({
                    ...item,
                    type: 'food',
                    mainCategory: category,
                    subCategory: subcategory.id
                });
            });
        });
    });
    
    // Lấy tất cả drink items
    Object.keys(drinkData).forEach(category => {
        drinkData[category].subcategories.forEach(subcategory => {
            subcategory.items.forEach(item => {
                allItems.push({
                    ...item,
                    type: 'drink',
                    mainCategory: category,
                    subCategory: subcategory.id
                });
            });
        });
    });
    
    return allItems;
}