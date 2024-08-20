document.addEventListener('DOMContentLoaded', function () {
    console.log("Document loaded. Initializing functions...");

    // Initialize functions
    initNavbar();
    initBurgerMenu();
    initSmoothScroll();
    initFormSubmission();
    initFAQToggle();
    initLearnMorePopup();
    initAboutCompanyPopup();
    initCareerPopup();
    initContactPopup();
    initContactButton();
    initCustomScroll();
    initScrollToTopButton();
    initClientReviewsScroll();
    initCookieConsent();
    initContactForm();  // For the contact form
    initHiringForms();  // For the two hiring forms
    initTermsCheckbox();
    initNewProjectPopup();

    // Funktion för att hantera att användaren måste läsa villkoren innan de kan bocka av rutan
    function initTermsCheckbox() {
        const termsLinks = document.querySelectorAll('#terms-link');
        const termsCheckboxes = document.querySelectorAll('#terms-checkbox');

        termsLinks.forEach((termsLink, index) => {
            termsLink.addEventListener('click', function () {
                termsCheckboxes[index].disabled = false;
            });
        });
    }
});

// Funktion för burger-menyn
function initBurgerMenu() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    if (burger && navLinks) {
        burger.addEventListener('click', function() {
            console.log("Burger menu clicked");
            navLinks.classList.toggle('active');
            burger.classList.toggle('toggle');
        });
    } else {
        console.error("Burger or navLinks element not found");
    }
}

// Funktion för cookie consent popup
function initCookieConsent() {
    const overlay = document.getElementById('cookie-consent-overlay');
    const popup = document.getElementById('cookie-consent-popup');

    overlay.style.display = 'block';
    popup.style.display = 'block';

    document.getElementById('accept-cookies').addEventListener('click', function() {
        hideCookieConsent();
    });

    document.getElementById('reject-cookies').addEventListener('click', function() {
        hideCookieConsent();
    });

    function hideCookieConsent() {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    }
}

// Funktion för kontakt-popup
function initContactPopup() {
    const contactPopup = document.getElementById('contactPopup');
    const closeContactBtn = contactPopup.querySelector('.close');
    const mainContent = document.getElementById('main-content');

    closeContactBtn.addEventListener('click', function() {
        contactPopup.style.display = 'none';
        mainContent.classList.remove('blur');
    });

    window.addEventListener('click', function(event) {
        if (event.target === contactPopup) {
            contactPopup.style.display = 'none';
            mainContent.classList.remove('blur');
        }
    });
}

// Funktion för "About Us"-popup
function initAboutCompanyPopup() {
    const popup = document.getElementById('aboutUsPopup');
    const closeBtn = popup.querySelector('.close');
    const aboutCompanyBtns = document.querySelectorAll('.aboutCompanyBtn');
    const mainContent = document.getElementById('main-content');

    aboutCompanyBtns.forEach(button => {
        button.addEventListener('click', function() {
            popup.style.display = 'flex';
            mainContent.classList.add('blur');
        });
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        mainContent.classList.remove('blur');
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
            mainContent.classList.remove('blur');
        }
    });
}

// Funktion för "Learn More"-popup
function initLearnMorePopup() {
    const popup = document.getElementById('aboutUsPopup');
    const closeBtn = popup.querySelector('.close');
    const learnMoreBtns = document.querySelectorAll('.learnMoreBtn');
    const mainContent = document.getElementById('main-content');

    learnMoreBtns.forEach(button => {
        button.addEventListener('click', function() {
            popup.style.display = 'flex';
            mainContent.classList.add('blur');
        });
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        mainContent.classList.remove('blur');
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
            mainContent.classList.remove('blur');
        }
    });
}

// Function to open and close the new project popup
function initNewProjectPopup() {
    const newProjectPopup = document.getElementById('newProjectPopup');
    const closeBtn = newProjectPopup.querySelector('.close');
    const openPopupBtns = document.querySelectorAll('.open-new-project-popup');

    openPopupBtns.forEach(button => {
        button.addEventListener('click', function () {
            newProjectPopup.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        newProjectPopup.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === newProjectPopup) {
            newProjectPopup.style.display = 'none';
        }
    });
}

// Funktion för "Project process on going"-popup
document.addEventListener("DOMContentLoaded", function() {
    const inProgressButtons = document.querySelectorAll(".open-in-progress-popup");
    const inProgressPopup = document.getElementById("in-progress-popup");
    const closeButton = inProgressPopup.querySelector(".close");

    inProgressButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            inProgressPopup.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", function() {
        inProgressPopup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === inProgressPopup) {
            inProgressPopup.style.display = "none";
        }
    });
});

// Funktion för "Career"-popup
function initCareerPopup() {
    const careerPopup = document.getElementById('careerPopup');
    const closeCareerBtn = careerPopup.querySelector('.close');
    const careerButton = document.querySelector('.cta-button-career');
    const mainContent = document.getElementById('main-content');

    careerButton.addEventListener('click', function(event) {
        event.preventDefault();
        careerPopup.style.display = 'flex';
        mainContent.classList.add('blur');
    });

    closeCareerBtn.addEventListener('click', function() {
        careerPopup.style.display = 'none';
        mainContent.classList.remove('blur');
    });

    window.addEventListener('click', function(event) {
        if (event.target === careerPopup) {
            careerPopup.style.display = 'none';
            mainContent.classList.remove('blur');
        }
    });
}

// Funktion för att hantera kontaktknappar i popup-fönster
function initContactButton() {
    const contactBtns = document.querySelectorAll('.cta-button.book-meeting');
    const aboutUsPopup = document.getElementById('aboutUsPopup');
    const careerPopup = document.getElementById('careerPopup');
    const contactPopup = document.getElementById('contactPopup');
    const newProjectPopup = document.getElementById('newProjectPopup');
    const mainContent = document.getElementById('main-content');

    contactBtns.forEach(contactBtn => {
        contactBtn.addEventListener('click', function(event) {
            event.preventDefault();
            console.log("Contact button clicked");
            
            // Stänger alla popup-fönster
            if (aboutUsPopup) aboutUsPopup.style.display = 'none';
            if (careerPopup) careerPopup.style.display = 'none';
            if (newProjectPopup) newProjectPopup.style.display = 'none';
            
            // Öppnar kontaktfönstret
            contactPopup.style.display = 'flex';
            mainContent.classList.add('blur');
        });
    });
}

// Funktion för "Scroll to Top"-knappen
function initScrollToTopButton() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    scrollToTopBtn.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
}

// Funktion för navigationsbaren
function initNavbar() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('nav');
    const navbarHeight = navbar.offsetHeight;

    window.addEventListener('scroll', function() {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            // Scrollar ner - göm navbaren smidigt
            navbar.style.transform = `translateY(-${navbarHeight}px)`;
        } else {
            // Scrollar upp - visa navbaren
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = Math.max(st, 0);
    });
}


// Funktion för smidig scroll för navigationslänkar
function initSmoothScroll() {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            document.querySelector('.nav-links').classList.remove('active');
            document.querySelector('.burger').classList.remove('toggle');
        });
    });
}

// Funktion för formulärhantering
function initFormSubmission() {
    document.querySelector('.hiring-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);

        fetch(this.action, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Form submitted successfully!');
                this.reset();
            } else {
                alert('Error submitting form. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error submitting form. Please try again.');
        });
    });
}

// Funktion för att toggla FAQ
function initFAQToggle() {
    const faqItems = document.querySelectorAll('.faq-question');
    faqItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const active = this.classList.contains('active');

            document.querySelectorAll('.faq-answer').forEach(function(el) {
                el.style.maxHeight = null;
            });

            faqItems.forEach(function(el) {
                el.classList.remove('active');
            });

            if (!active) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                this.classList.add('active');
            }
        });
    });
}

// Funktion för anpassad scroll
function initCustomScroll() {
    let scrollSpeed = 0;
    let isScrolling = false;
    let lastScrollTime = Date.now();

    function customScroll(event) {
        const deltaY = event.deltaY;
        const currentTime = Date.now();

        scrollSpeed += deltaY * 0.5;
        lastScrollTime = currentTime;
        isScrolling = true;

        cancelAnimationFrame(scrollInertia);

        window.scrollBy({
            top: deltaY,
            behavior: 'smooth'
        });

        requestAnimationFrame(smoothScroll);
        event.preventDefault();
    }

    function smoothScroll() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - lastScrollTime;

        if (!isScrolling && elapsedTime > 50) {
            scrollSpeed *= 0.95;

            if (Math.abs(scrollSpeed) < 0.5) {
                scrollSpeed = 0;
                return;
            }

            window.scrollBy({
                top: scrollSpeed,
                behavior: 'smooth'
            });

            requestAnimationFrame(smoothScroll);
        }
    }

    window.addEventListener('wheel', customScroll, { passive: false });

    window.addEventListener('mousemove', () => {
        isScrolling = false;
    });

    window.addEventListener('touchmove', () => {
        isScrolling = false;
    });
}

// Funktion för bildspel
document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const slideshow = document.querySelector('.hero-slideshow');
    const totalSlides = slides.length;

    function showSlides() {
        slideIndex++;
        if (slideIndex < totalSlides) {
            slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
            updateDots();
            setTimeout(showSlides, 1500);
        } else {
            slideIndex = totalSlides - 1;
        }
    }

    function plusSlides(n) {
        slideIndex += n;
        if (slideIndex < 0) {
            slideIndex = 0;
        } else if (slideIndex >= totalSlides) {
            slideIndex = totalSlides - 1;
        }
        slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
        updateDots();
    }

    function currentSlide(n) {
        slideIndex = n - 1;
        slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
        });
        dots[slideIndex].classList.add('active');
    }

    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index + 1));
    });

    showSlides();
});

// Funktion för att kopiera e-post
function copyToClipboard(email) {
    const el = document.createElement('textarea');
    el.value = email;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Email address copied to clipboard: ' + email);
}

// Funktion för att hantera kundrecensioner
function initClientReviewsScroll() {
    const container = document.querySelector('.client-testimonials-container');
    const scrollArea = document.querySelector('.client-testimonials-scroll');
    const testimonials = document.querySelectorAll('.client-testimonial');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function scrollToIndex(index) {
        const cardWidth = testimonials[0].offsetWidth;
        const containerWidth = container.clientWidth;
        const gap = 30;
        const totalCardsWidth = cardWidth * testimonials.length + gap * (testimonials.length - 1);

        let offset = (cardWidth + gap) * index - (containerWidth / 2 - cardWidth / 2);

        if (offset < 0) {
            offset = 0;
        } else if (offset > totalCardsWidth - containerWidth) {
            offset = totalCardsWidth - containerWidth;
        }

        scrollArea.style.transform = `translateX(-${offset}px)`;
        currentIndex = index;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - 1);
        scrollToIndex(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(testimonials.length - 1, currentIndex + 1);
        scrollToIndex(currentIndex);
    });

    testimonials.forEach((testimonial, index) => {
        testimonial.addEventListener('click', () => {
            scrollToIndex(index);
        });
    });
}

// Funktion för att kolla om ett element är i viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Funktion för att hantera scroll-händelsen
function handleScroll() {
    const sections = document.querySelectorAll('.section-to-animate');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('animate');
        }
    });
}

// Lägga till scroll-händelsen
window.addEventListener('scroll', handleScroll);

// För att säkerställa att sektionerna visas vid laddning om de är i viewport
document.addEventListener('DOMContentLoaded', handleScroll);

// Lägga till services animation
document.addEventListener('DOMContentLoaded', function () {
    function animateCounters() {
        const steps = document.querySelectorAll('#services .step h1');

        steps.forEach(step => {
            const target = parseInt(step.textContent);
            let count = 0;
            let repetitions = 0;
            const maxRepetitions = 3;

            function startCountAnimation() {
                const interval = setInterval(() => {
                    count++;
                    if (count > 9) {
                        count = 1;
                    }
                    step.textContent = count;
                    if (count === target) {
                        clearInterval(interval);
                        repetitions++;
                        if (repetitions < maxRepetitions) {
                            startCountAnimation();
                        } else {
                            step.textContent = target;
                        }
                    }
                }, 100);
            }

            startCountAnimation();
        });
    }

    function isPartiallyInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

        const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

        return (vertInView && horInView);
    }

    function handleScroll() {
        const servicesSection = document.getElementById('services');
        if (isPartiallyInViewport(servicesSection)) {
            animateCounters();
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

// Funktion för kontaktformulär hiring
function initHiringForms() {
    const hiringForms = document.querySelectorAll('.hiring-form');
    hiringForms.forEach(form => {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const formData = {
                name: form.querySelector('input[name="name"]').value,
                email: form.querySelector('input[name="email"]').value,
                message: form.querySelector('textarea[name="message"]').value
            };

            emailjs.send('YOUR_SERVICE_ID', 'YOUR_HIRING_TEMPLATE_ID', formData)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Application submitted successfully!');
                    form.reset();
                }, function(error) {
                    console.error('FAILED...', error);
                    alert('Error submitting application. Please try again later.');
                });
        });
    });
}

// Funktion för kontaktformulär contact
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {
            name: contactForm.querySelector('input[name="name"]').value,
            email: contactForm.querySelector('input[name="email"]').value,
            message: contactForm.querySelector('textarea[name="message"]').value
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_CONTACT_TEMPLATE_ID', formData)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                contactForm.reset();
                document.getElementById('contactPopup').style.display = 'none';
                document.getElementById('main-content').classList.remove('blur');
            }, function(error) {
                console.error('FAILED...', error);
                alert('Error sending message. Please try again later.');
            });
    });
}

// Funktion för profil scroll bilder TOOLS
document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.querySelector('#tools-scroll .scroll-content');
    const scrollWrapper = document.querySelector('#tools-scroll');
    let scrollSpeed = 0.5; // Standard scrollhastighet
    let slowSpeed = 0.1; // Hastighet vid hover
    let isHovering = false;

    function startScrolling() {
        scrollContainer.style.transition = 'none'; // Ta bort tidigare transition
        let scrollLeft = scrollWrapper.scrollLeft;
        scrollLeft += isHovering ? slowSpeed : scrollSpeed;
        if (scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollWrapper.scrollLeft = 0; // Återställ scroll-positionen för en loopande effekt
        } else {
            scrollWrapper.scrollLeft = scrollLeft;
        }
        requestAnimationFrame(startScrolling);
    }

    scrollContainer.addEventListener('mouseover', function () {
        isHovering = true;
    });

    scrollContainer.addEventListener('mouseout', function () {
        isHovering = false;
    });

    startScrolling();
});

// Funktion för profil scroll bilder
document.addEventListener("DOMContentLoaded", function() {
    // Första slideshow-container (profilbilder)
    let slideIndex1 = 0;
    const slides1 = document.querySelectorAll('.slideshow-container img');

    function showSlides1() {
        for (let i = 0; i < slides1.length; i++) {
            slides1[i].style.display = 'none';
        }
        
        slideIndex1++;
        if (slideIndex1 > slides1.length) {
            slideIndex1 = 1;
        }
        
        slides1[slideIndex1 - 1].style.display = 'block';
        setTimeout(showSlides1, 7000);
    }

    showSlides1();

    // Andra slideshow-container (emojis)
    let slideIndex2 = 0;
    const slides2 = document.querySelectorAll('.slideshow-container2 img');

    function showSlides2() {
        // Göm alla emojis
        slides2.forEach(img => img.style.display = 'none');

        // Visa den aktuella emojin
        slides2[slideIndex2].style.display = 'inline-block';
        
        // Lägg till klassen 'bounce' för att animera
        slides2[slideIndex2].classList.add('bounce');

        // Ta bort klassen 'bounce' efter animationen är klar
        setTimeout(() => {
            slides2[slideIndex2].classList.remove('bounce');
            slideIndex2++;
            if (slideIndex2 >= slides2.length) {
                slideIndex2 = 0;
            }
            showSlides2();
        }, 3000);
    }

    showSlides2();
});
