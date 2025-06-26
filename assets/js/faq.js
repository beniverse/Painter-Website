// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        
        if (question && answer) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        if (otherAnswer) {
                            otherAnswer.classList.remove('active');
                            slideUp(otherAnswer);
                        }
                    }
                });
                
                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                    answer.classList.remove('active');
                    slideUp(answer);
                } else {
                    item.classList.add('active');
                    answer.classList.add('active');
                    slideDown(answer);
                }
            });
        }
    });
    
    // Smooth slide animations
    function slideDown(element) {
        element.style.display = 'block';
        element.style.height = '0px';
        element.style.overflow = 'hidden';
        element.style.transition = 'height 0.3s ease';
        
        // Get the full height
        const fullHeight = element.scrollHeight + 'px';
        
        // Trigger animation
        requestAnimationFrame(() => {
            element.style.height = fullHeight;
        });
        
        // Clean up after animation
        setTimeout(() => {
            element.style.height = 'auto';
            element.style.overflow = 'visible';
        }, 300);
    }
    
    function slideUp(element) {
        element.style.height = element.scrollHeight + 'px';
        element.style.overflow = 'hidden';
        element.style.transition = 'height 0.3s ease';
        
        requestAnimationFrame(() => {
            element.style.height = '0px';
        });
        
        setTimeout(() => {
            element.style.display = 'none';
            element.style.height = 'auto';
            element.style.overflow = 'visible';
        }, 300);
    }
    
    // Search functionality for FAQs (if search box exists)
    const faqSearch = document.getElementById('faq-search');
    if (faqSearch) {
        faqSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                const answer = item.querySelector('.faq-answer');
                
                if (question && answer) {
                    const questionText = question.textContent.toLowerCase();
                    const answerText = answer.textContent.toLowerCase();
                    
                    if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
                        item.style.display = 'block';
                        
                        // Highlight search terms
                        if (searchTerm.length > 2) {
                            highlightSearchTerm(question, searchTerm);
                            if (item.classList.contains('active')) {
                                highlightSearchTerm(answer, searchTerm);
                            }
                        }
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
            
            // Show "no results" message if no items visible
            const visibleItems = Array.from(faqItems).filter(item => 
                item.style.display !== 'none'
            );
            
            updateNoResultsMessage(visibleItems.length === 0);
        });
    }
    
    function highlightSearchTerm(element, term) {
        const originalText = element.getAttribute('data-original-text') || element.textContent;
        
        // Store original text if not already stored
        if (!element.getAttribute('data-original-text')) {
            element.setAttribute('data-original-text', originalText);
        }
        
        if (term.length < 2) {
            element.innerHTML = originalText;
            return;
        }
        
        const regex = new RegExp(`(${term})`, 'gi');
        const highlightedText = originalText.replace(regex, '<mark style="background-color: #ffc107; padding: 2px 4px; border-radius: 3px;">$1</mark>');
        element.innerHTML = highlightedText;
    }
    
    function updateNoResultsMessage(show) {
        let noResultsMsg = document.getElementById('faq-no-results');
        
        if (show && !noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.id = 'faq-no-results';
            noResultsMsg.className = 'faq-no-results';
            noResultsMsg.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: #666;">
                    <h3>No FAQs found</h3>
                    <p>Try searching with different keywords or <a href="pages/contact.html" style="color: #ffc107;">contact us</a> directly.</p>
                </div>
            `;
            
            const faqContainer = document.querySelector('.faq-container');
            if (faqContainer) {
                faqContainer.appendChild(noResultsMsg);
            }
        } else if (!show && noResultsMsg) {
            noResultsMsg.remove();
        }
    }
    
    // Auto-expand FAQ from URL hash
    if (window.location.hash) {
        const hashId = window.location.hash.substring(1);
        const targetFaq = document.getElementById(hashId);
        
        if (targetFaq && targetFaq.classList.contains('faq-item')) {
            setTimeout(() => {
                const question = targetFaq.querySelector('.faq-question');
                if (question) {
                    question.click();
                    targetFaq.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 500);
        }
    }
    
    // Category filtering (if category buttons exist)
    const categoryBtns = document.querySelectorAll('.faq-category-btn');
    if (categoryBtns.length > 0) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Update active button
                categoryBtns.forEach(otherBtn => otherBtn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter FAQ items
                faqItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    
                    if (category === 'all' || itemCategory === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                        // Close if expanded
                        item.classList.remove('active');
                        const answer = item.querySelector('.faq-answer');
                        if (answer) {
                            answer.classList.remove('active');
                            answer.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
}); 