/**
 * AsgarliOps Landing Page - Main Script
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    lucide.createIcons();
    
    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-action .btn');
    
    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenu.classList.contains('active') ? 'x' : 'menu';
        mobileToggle.innerHTML = `<i data-lucide="${icon}"></i>`;
        lucide.createIcons();
        
        // Prevent body scroll when menu is open
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    mobileToggle.addEventListener('click', toggleMenu);
    
    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // 4. Scroll Animations (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-up');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animated
                // fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(el => fadeObserver.observe(el));

    // 5. Demo Chat Animation Trigger
    const demoSection = document.getElementById('demo');
    const chatContainer = document.querySelector('.chat-container');
    
    if (demoSection && chatContainer) {
        const chatObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    demoSection.classList.add('chat-animate');
                    chatObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        chatObserver.observe(demoSection);
    }

    // 6. Contact Form Submission Form Demo
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const btn = contactForm.querySelector('.submit-btn');
            const originalText = btn.innerHTML;
            
            // Show loading state
            btn.innerHTML = '<span>Göndərilir...</span><i data-lucide="loader-2" class="icon-sm btn-icon rotate"></i>';
            lucide.createIcons();
            
            // Prepare form data
            const formData = new FormData(contactForm);
            
            try {
                // Submit to Netlify Forms
                const response = await fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(formData).toString()
                });
                
                if (response.ok) {
                    // Success state
                    btn.innerHTML = '<span>Təşəkkürlər! Tezliklə əlaqə saxlayacağıq.</span><i data-lucide="check-circle" class="icon-sm btn-icon"></i>';
                    btn.style.backgroundColor = 'var(--accent-teal)';
                    lucide.createIcons();
                    contactForm.reset();
                } else {
                    throw new Error('Network response was not ok.');
                }
            } catch (error) {
                // Error state
                btn.innerHTML = '<span>Xəta baş verdi. Yenidən cəhd edin.</span><i data-lucide="alert-circle" class="icon-sm btn-icon"></i>';
                btn.style.backgroundColor = '#ef4444'; // Red error color
                lucide.createIcons();
            }
            
            // Reset button after 3 seconds
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
                lucide.createIcons();
            }, 3000);
        });
    }
});
