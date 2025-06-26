// Form Validation and Handling
document.addEventListener('DOMContentLoaded', function() {
    
    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Quote Request Form Handling
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', handleQuoteForm);
    }
    
    // Real-time validation
    const inputs = document.querySelectorAll('.form-input, .form-textarea, .form-select');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearError);
    });
    
    function handleContactForm(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message')
        };
        
        if (validateContactForm(data)) {
            showFormSuccess('Thank you for your message! We\'ll get back to you within 24 hours.');
            e.target.reset();
        }
    }
    
    function handleQuoteForm(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            projectType: formData.get('project-type'),
            location: formData.get('location'),
            dimensions: formData.get('dimensions'),
            description: formData.get('description'),
            timeline: formData.get('timeline')
        };
        
        if (validateQuoteForm(data)) {
            showFormSuccess('Thank you for your quote request! We\'ll provide a detailed estimate within 48 hours.');
            e.target.reset();
        }
    }
    
    function validateContactForm(data) {
        let isValid = true;
        
        // Name validation
        if (!data.name || data.name.trim().length < 2) {
            showFieldError('name', 'Please enter a valid name');
            isValid = false;
        }
        
        // Email validation
        if (!data.email || !isValidEmail(data.email)) {
            showFieldError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Phone validation (optional but if provided should be valid)
        if (data.phone && !isValidPhone(data.phone)) {
            showFieldError('phone', 'Please enter a valid phone number');
            isValid = false;
        }
        
        // Message validation
        if (!data.message || data.message.trim().length < 10) {
            showFieldError('message', 'Please enter a message (at least 10 characters)');
            isValid = false;
        }
        
        return isValid;
    }
    
    function validateQuoteForm(data) {
        let isValid = true;
        
        // Name validation
        if (!data.name || data.name.trim().length < 2) {
            showFieldError('name', 'Please enter a valid name');
            isValid = false;
        }
        
        // Email validation
        if (!data.email || !isValidEmail(data.email)) {
            showFieldError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Phone validation
        if (!data.phone || !isValidPhone(data.phone)) {
            showFieldError('phone', 'Please enter a valid phone number');
            isValid = false;
        }
        
        // Project type validation
        if (!data.projectType) {
            showFieldError('project-type', 'Please select a project type');
            isValid = false;
        }
        
        // Location validation
        if (!data.location || data.location.trim().length < 5) {
            showFieldError('location', 'Please enter a valid location');
            isValid = false;
        }
        
        // Description validation
        if (!data.description || data.description.trim().length < 20) {
            showFieldError('description', 'Please provide more details about your project (at least 20 characters)');
            isValid = false;
        }
        
        return isValid;
    }
    
    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        const fieldName = field.name;
        
        clearError(e);
        
        switch (fieldName) {
            case 'name':
                if (value.length < 2) {
                    showFieldError(fieldName, 'Name must be at least 2 characters');
                }
                break;
            case 'email':
                if (value && !isValidEmail(value)) {
                    showFieldError(fieldName, 'Please enter a valid email address');
                }
                break;
            case 'phone':
                if (value && !isValidPhone(value)) {
                    showFieldError(fieldName, 'Please enter a valid phone number');
                }
                break;
            case 'message':
                if (value.length > 0 && value.length < 10) {
                    showFieldError(fieldName, 'Message must be at least 10 characters');
                }
                break;
            case 'description':
                if (value.length > 0 && value.length < 20) {
                    showFieldError(fieldName, 'Please provide more details (at least 20 characters)');
                }
                break;
        }
    }
    
    function clearError(e) {
        const field = e.target;
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
        field.classList.remove('error');
    }
    
    function showFieldError(fieldName, message) {
        const field = document.querySelector(`[name="${fieldName}"]`);
        if (!field) return;
        
        // Remove existing error
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error class
        field.classList.add('error');
        
        // Create error element
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.color = '#e74c3c';
        errorElement.style.fontSize = '0.875rem';
        errorElement.style.marginTop = '0.25rem';
        
        // Insert after field
        field.parentNode.insertBefore(errorElement, field.nextSibling);
    }
    
    function showFormSuccess(message) {
        // Create success notification
        const notification = document.createElement('div');
        notification.className = 'form-success-notification';
        notification.innerHTML = `
            <div style="
                background: #2ecc71;
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 6px;
                margin: 1rem 0;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                box-shadow: 0 4px 6px rgba(46, 204, 113, 0.3);
            ">
                <span style="font-size: 1.2rem;">✓</span>
                <span>${message}</span>
            </div>
        `;
        
        // Insert at top of form
        const form = document.querySelector('#contact-form, #quote-form');
        if (form) {
            form.insertBefore(notification, form.firstChild);
            
            // Auto-remove after 5 seconds
            setTimeout(() => {
                notification.remove();
            }, 5000);
            
            // Scroll to success message
            notification.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
        // Remove all non-digits
        const digits = phone.replace(/\D/g, '');
        // Check if it's 10 digits (US format) or 11 digits (with country code)
        return digits.length >= 10 && digits.length <= 11;
    }
    
    // Add CSS for error states
    const style = document.createElement('style');
    style.textContent = `
        .form-input.error,
        .form-textarea.error,
        .form-select.error {
            border-color: #e74c3c;
            box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
        }
        
        .field-error {
            animation: fadeInError 0.3s ease;
        }
        
        @keyframes fadeInError {
            from {
                opacity: 0;
                transform: translateY(-5px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}); 