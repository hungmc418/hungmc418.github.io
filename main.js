// Console logging
console.log('╔═══════════════════════════════════════════╗');
console.log('║   💎 BoxPvPMC Store Loaded Successfully   ║');
console.log('╚═══════════════════════════════════════════╝');
console.log('🌐 Server: node1.minet.vn:30074');
console.log('💬 Discord: discord.gg/BoxPvPMC');
console.log('👤 Contact: @trandangkhoavn');
console.log('⏰ Time:', new Date().toLocaleString());
console.log('==========================================');

// Buy Rank Function
function buyRank(rankName, price) {
    console.log(`🛒 User clicked BUY button for: ${rankName} (${price})`);

    const message = `Bạn muốn mua rank ${rankName} với giá ${price}?\n\n` +
                    `Vui lòng liên hệ qua Discord để thanh toán:\n` +
                    `💬 discord.gg/BoxPvPMC\n` +
                    `👤 Liên hệ: @trandangkhoavn`;

    const confirmed = confirm(message);

    if (confirmed) {
        console.log(`✅ User confirmed purchase of ${rankName}`);
        // Open Discord in new tab
        window.open('https://discord.gg/BoxPvPMC', '_blank');

        // Show success message
        setTimeout(() => {
            alert(`✅ Đang chuyển đến Discord!\n\nHãy liên hệ @trandangkhoavn để hoàn tất thanh toán rank ${rankName}.`);
        }, 500);
    } else {
        console.log(`❌ User cancelled purchase of ${rankName}`);
    }
}

// Apply Helper Function
function applyHelper() {
    console.log('📝 User clicked APPLY HELPER button');

    const message = `Bạn muốn ứng tuyển vị trí HELPER?\n\n` +
                    `Hãy chuẩn bị các thông tin sau:\n` +
                    `• Tên\n` +
                    `• Tuổi\n` +
                    `• Ingame\n` +
                    `• Team\n` +
                    `• Thời gian chơi\n` +
                    `• Biết làm gì cho server\n` +
                    `• Mục đích\n\n` +
                    `Sau đó liên hệ @trandangkhoavn trên Discord để khảo sát!`;

    const confirmed = confirm(message);

    if (confirmed) {
        console.log('✅ User confirmed HELPER application');
        window.open('https://discord.gg/BoxPvPMC', '_blank');

        setTimeout(() => {
            alert('✅ Đang chuyển đến Discord!\n\nHãy ping @trandangkhoavn với đầy đủ thông tin để được khảo sát HELPER.');
        }, 500);
    } else {
        console.log('❌ User cancelled HELPER application');
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            console.log(`🔗 Smooth scrolled to: ${this.getAttribute('href')}`);
        }
    });
});

// Log rank card interactions
document.querySelectorAll('.rank-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const rank = this.getAttribute('data-rank');
        if (rank) {
            console.log(`👀 User viewing: ${rank.toUpperCase()} rank`);
        }
    });

    // Add hover sound effect (optional - can be enabled if you have sound files)
    card.addEventListener('mouseenter', function() {
        // Play hover sound here if needed
        // new Audio('hover.mp3').play();
    });
});

// Discord button click tracking
document.querySelectorAll('[href*="discord.gg"]').forEach(link => {
    link.addEventListener('click', function(e) {
        console.log('💬 User clicked Discord link');
        console.log('🔗 Redirecting to: discord.gg/BoxPvPMC');
    });
});

// Track page visibility
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('👋 User left the page');
    } else {
        console.log('👀 User returned to the page');
        console.log('⏰ Time:', new Date().toLocaleString());
    }
});

// Scroll to top button (auto-generated)
let scrollButton = document.createElement('button');
scrollButton.innerHTML = '⬆️';
scrollButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00ff88, #00b359);
    color: white;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    display: none;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(0, 255, 136, 0.4);
    transition: all 0.3s ease;
`;
scrollButton.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('⬆️ User clicked scroll to top');
};

document.body.appendChild(scrollButton);

// Show/hide scroll button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

scrollButton.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1) translateY(-5px)';
    this.style.boxShadow = '0 8px 30px rgba(0, 255, 136, 0.6)';
});

scrollButton.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) translateY(0)';
    this.style.boxShadow = '0 4px 20px rgba(0, 255, 136, 0.4)';
});

// Error handling
window.addEventListener('error', function(event) {
    console.error('❌ JavaScript Error:', event.error);
});

// Page load complete
window.addEventListener('load', function() {
    console.log('✅ All resources loaded successfully!');
    console.log('🎮 BoxPvPMC Store is ready!');
    console.log('💎 Enjoy shopping for ranks!');

    // Add entrance animation to cards
    const cards = document.querySelectorAll('.rank-card, .rule-card, .helper-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Easter egg - Konami code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            console.log('🎉 KONAMI CODE ACTIVATED!');
            alert('🎉 Chúc mừng! Bạn đã mở khóa easter egg!\n\nLiên hệ @trandangkhoavn với code "KONAMI" để nhận 10% discount!');
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

console.log('✅ main.js initialized successfully!');
console.log('💡 Tip: Try the Konami Code for a surprise! ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA');
