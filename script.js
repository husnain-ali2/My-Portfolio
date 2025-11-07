// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    initNavigation();
    
    // Initialize profile picture upload
    initProfileUpload();
    
    // Initialize the identity protocol if on home page
    if (document.querySelector('#home').classList.contains('active')) {
        initProgram();
    }
    
    // Initialize contact form
    initContactForm();
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show selected page
            const targetId = this.getAttribute('href').substring(1);
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    });
}

// Profile picture upload functionality
function initProfileUpload() {
    const profilePicContainer = document.querySelector('.profile-pic-container');
    const profileUpload = document.getElementById('profileUpload');
    const profilePic = document.getElementById('profilePic');
    const contactPic = document.querySelector('.contact-pic');
    const footerPic = document.querySelector('.footer-pic');
    
    if (profilePicContainer && profileUpload) {
        profilePicContainer.addEventListener('click', function() {
            profileUpload.click();
        });
        
        profileUpload.addEventListener('change', function(e) {
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    // Update all profile pictures
                    if (profilePic) profilePic.src = e.target.result;
                    if (contactPic) contactPic.src = e.target.result;
                    if (footerPic) footerPic.src = e.target.result;
                }
                
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    }
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
}

// Original identity protocol code with corrections
function initProgram() {
    var initDot = document.getElementById("loading");
    if (!initDot) return;
    
    var loading = setInterval(function() {
        if(initDot.innerHTML.length >= 3) {
            initDot.innerHTML = "";
        } else {
            initDot.innerHTML += ".";
        }
    }, 350);

    var loadingMessage = document.getElementById("loadingH1");
    
    setTimeout(function() {
        clearInterval(loading);
        if (loadingMessage) loadingMessage.style.display = 'none';
    }, 1500);
    
    setTimeout(function(){
        var greeting = "UNIDENTIFIED ORGANIC LIFEFORM DETECTED";
        var message = "RUNNING CODEPEN RESUME PROTOCOL (CRP) FOR @GOTHBURZ";
        var name = "NAME: HUSNAIN ALI";
        var alias = "KNOWN ALIAS: ALI";
        var occupation = "OCCUPATION: FRONT END DEVELOPER | WORDPRESS DEVELOPER | DESIGNER | PYTHON DEVELOPER | BACK END DEVELOPER | WEB SECURITY ANALYZER";
        var frontEnd = "FRONT END DEVELOPMENT CORE: HTML5 | CSS3 | JAVASCRIPT | Python ";
        var PHYFrameworks = "PYTHON FRAMEWORKS: DJANGO | FLASK | FASTAPI | PANDAS | NUMPY";
        var PHYLibs = "PYTHON LIBRARIES: REQUESTS | BEAUTIFULSOUP | SELENIUM | SCIKIT-LEARN";
        var CSSFrameworks = "CSS FRAMEWORKS: BOOTSTRAP | SEMANTIC UI";
        var CSSPre = "CSS PREPROCESSORS: SASS | LESS | STYLUS";
        var frontEndAnimation = "FRONT END ANIMATION: CANVAS | HTML5 | SVG";
        var cmsDevelopment = "WORDPRESS DEVELOPMENT: WORDPRESS";
        var wordpress = "WORDPRESS: CUSTOM THEMING | PLUGINS";
        var design = "DESIGN CORE: ADOBE SUITE";
        var webDesign = "WEB DESIGN: INDESIGN CC | MUSE CC";
        var branding = "ILLUSTRATIONS & BRANDING: ILLUSTRATOR CC | PHOTOSHOP CC";
        var designAnimation = "ANIMATION DESIGN: AFTER EFFECTS CC | FLASH CC";
        var webSecurity = "WEB SECURITY ANALYSIS: OWASP TOOLS | BURP SUITE | NMAP | METASPLOIT";
        
        function initProgramAlpha(i) {
            var greetingElement = document.getElementById("greeting");
            if (!greetingElement) return;
            
            greetingElement.classList.add("cursor");
            greetingElement.textContent = greeting.substring(0, i);
            
            if(i < greeting.length){
                setTimeout(function(){
                    initProgramAlpha(i + 1);
                }, 35);   
            } else {
                greetingElement.classList.remove("cursor");
                initIdentityResults(0);
            }
        }
        
        function initIdentityResults(i){
            var messageElement = document.getElementById("message");
            if (!messageElement) return;
            
            messageElement.classList.add("sign", "cursor");
            messageElement.textContent = message.substring(0, i);
            
            if(i < message.length){
                setTimeout(function(){
                    initIdentityResults(i + 1);
                }, 35);   
            } else {
                messageElement.classList.remove("cursor");
                
                // Show loading message
                var loadingMessage2 = document.getElementById("loadingMessage2");
                if (loadingMessage2) loadingMessage2.style.display = 'block';
                
                var dotAlpha = document.getElementById("alpha-loading");
                var loadingAlpha = setInterval(function() {
                    if(dotAlpha && dotAlpha.innerHTML.length >= 3) {
                        dotAlpha.innerHTML = "";
                    } else if (dotAlpha) {
                        dotAlpha.innerHTML += ".";
                    }
                }, 350);
                
                setTimeout(function() {
                    clearInterval(loadingAlpha);
                    if (loadingMessage2) loadingMessage2.style.display = 'none';
                    initName(0);
                }, 2000);
            }
        }
        
        function initName(i){
            var nameElement = document.getElementById("name");
            if (!nameElement) return;
            
            nameElement.classList.add("sign", "cursor");
            nameElement.textContent = name.substring(0, i);
            
            if(i < name.length){
                setTimeout(function(){
                    initName(i + 1);   
                }, 35);
            } else {
                nameElement.classList.remove("cursor");
                setTimeout(function() {
                    initAlias(0);
                }, 500);      
            }
        }
        
        function initAlias(i){
            var aliasElement = document.getElementById("alias");
            if (!aliasElement) return;
            
            aliasElement.classList.add("sign", "cursor");
            aliasElement.textContent = alias.substring(0, i);
            
            if(i < alias.length){
                setTimeout(function(){
                    initAlias(i + 1);   
                }, 35);
            } else {
                aliasElement.classList.remove("cursor");
                setTimeout(function() {
                    initOccupation(0);
                }, 500);
            }
        }
        
        function initOccupation(i){
            var occupationElement = document.getElementById("occupation");
            if (!occupationElement) return;
            
            occupationElement.classList.add("sign", "cursor");
            occupationElement.textContent = occupation.substring(0, i);
            
            if(i < occupation.length){
                setTimeout(function(){
                    initOccupation(i + 1);   
                }, 35);
            } else {
                occupationElement.classList.remove("cursor");
                setTimeout(function() {
                    initFrontEnd(0);
                }, 500);
            }
        }
        
        function initFrontEnd(i){
            var frontEndSpan = document.getElementById("front-end-span");
            var frontEndElement = document.getElementById("front-end");
            
            if (frontEndSpan) frontEndSpan.className = "fas fa-wrench";
            if (!frontEndElement) return;
            
            frontEndElement.classList.add("cursor");
            frontEndElement.textContent = frontEnd.substring(0, i);
            
            if(i < frontEnd.length){
                setTimeout(function(){
                    initFrontEnd(i + 1);  
                }, 35);
            } else {
                frontEndElement.classList.remove("cursor");
                setTimeout(function() {
                    initPHYFrameworks(0);
                }, 500);
            }
        }
        
        function initPHYFrameworks(i){
            var element = document.getElementById("PHY-frameworks");
            if (!element) return;
            
            element.classList.add("sign", "cursor");
            element.textContent = PHYFrameworks.substring(0, i);
            
            if(i < PHYFrameworks.length){
                setTimeout(function(){
                    initPHYFrameworks(i + 1);  
                }, 35);
            } else {
                element.classList.remove("cursor");
                setTimeout(function() {
                    initPHYLibs(0);
                }, 500);
            }
        }
        
        function initPHYLibs(i){
            var element = document.getElementById("PHY-libs");
            if (!element) return;
            
            element.classList.add("sign", "cursor");
            element.textContent = PHYLibs.substring(0, i);
            
            if(i < PHYLibs.length){
                setTimeout(function(){
                    initPHYLibs(i + 1);  
                }, 35);
            } else {
                element.classList.remove("cursor");
                setTimeout(function() {
                    initCSSFrameworks(0);
                }, 500);
            }
        }
        
        function initCSSFrameworks(i){
            var element = document.getElementById("css-frameworks");
            if (!element) return;
            
            element.classList.add("sign", "cursor");
            element.textContent = CSSFrameworks.substring(0, i);
            
            if(i < CSSFrameworks.length){
                setTimeout(function(){
                    initCSSFrameworks(i + 1);  
                }, 35);
            } else {
                element.classList.remove("cursor");
                setTimeout(function() {
                    initCSSPre(0);
                }, 500);
            }
        }
        
        function initCSSPre(i){
            var element = document.getElementById("css-pre");
            if (!element) return;
            
            element.classList.add("sign", "cursor");
            element.textContent = CSSPre.substring(0, i);
            
            if(i < CSSPre.length){
                setTimeout(function(){
                    initCSSPre(i + 1);  
                }, 35);
            } else {
                element.classList.remove("cursor");
                setTimeout(function() {
                    initFrontEndAnimation(0);
                }, 500);
            }
        }
        
        function initFrontEndAnimation(i){
            var element = document.getElementById("front-end-animation");
            if (!element) return;
            
            element.classList.add("sign", "cursor");
            element.textContent = frontEndAnimation.substring(0, i);
            
            if(i < frontEndAnimation.length){
                setTimeout(function(){
                    initFrontEndAnimation(i + 1);  
                }, 35);
            } else {
                element.classList.remove("cursor");
                setTimeout(function() {
                    initCMSDevelopment(0);
                }, 500);
            }
        }
        
        function initCMSDevelopment(i){
            var cmsSpan = document.getElementById("cms-span");
            var cmsElement = document.getElementById("CMS-development");
            
            if (cmsSpan) cmsSpan.className = "fab fa-wordpress";
            if (!cmsElement) return;
            
            cmsElement.classList.add("cursor");
            cmsElement.textContent = cmsDevelopment.substring(0, i);
            
            if(i < cmsDevelopment.length){
                setTimeout(function(){
                    initCMSDevelopment(i + 1);  
                }, 35);
            } else {
                cmsElement.classList.remove("cursor");
                setTimeout(function() {
                    initWordpress(0);
                }, 500);
            }
        }
        
        function initWordpress(i){
            var element = document.getElementById("wordpress");
            if (!element) return;
            
            element.classList.add("sign", "cursor");
            element.textContent = wordpress.substring(0, i);
            
            if(i < wordpress.length){
                setTimeout(function(){
                    initWordpress(i + 1);  
                }, 35);
            } else {
                element.classList.remove("cursor");
                setTimeout(function() {
                    initDesign(0);
                }, 500);
            }
        }
        
        function initDesign(i){
            var designSpan = document.getElementById("design-span");
            var designElement = document.getElementById("design");
            
            if (designSpan) designSpan.className = "fas fa-paint-brush";
            if (!designElement) return;
            
            designElement.classList.add("cursor");
            designElement.textContent = design.substring(0, i);
            
            if(i < design.length){
                setTimeout(function(){
                    initDesign(i + 1);  
                }, 35);
            } else {
                designElement.classList.remove("cursor");
                setTimeout(function() {
                    initWebDesign(0);
                }, 500);
            }
        }
        
        function initWebDesign(i){
            var element = document.getElementById("web-design");
            if (!element) return;
            
            element.classList.add("sign", "cursor");
            element.textContent = webDesign.substring(0, i);
            
            if(i < webDesign.length){
                setTimeout(function(){
                    initWebDesign(i + 1);  
                }, 35);
            } else {
                element.classList.remove("cursor");
                setTimeout(function() {
                    initBranding(0);
                }, 500);
            }
        }
        
        function initBranding(i){
            var element = document.getElementById("branding");
            if (!element) return;
            
            element.classList.add("sign", "cursor");
            element.textContent = branding.substring(0, i);
            
            if(i < branding.length){
                setTimeout(function(){
                    initBranding(i + 1);  
                }, 35);
            } else {
                element.classList.remove("cursor");
                setTimeout(function() {
                    initDesignAnimation(0);
                }, 500);
            }
        }
        
        function initDesignAnimation(i){
            var element = document.getElementById("design-animation");
            if (!element) return;
            
            element.classList.add("sign", "cursor");
            element.textContent = designAnimation.substring(0, i);
            
            if(i < designAnimation.length){
                setTimeout(function(){
                    initDesignAnimation(i + 1);  
                }, 35);
            } else {
                element.classList.remove("cursor");
                setTimeout(function() {
                    initWebSecurity(0);
                }, 500);
            }
        }
        
        function initWebSecurity(i){
            var securitySpan = document.getElementById("security-span");
            var element = document.getElementById("web-security");
            
            if (securitySpan) securitySpan.className = "fas fa-shield-alt";
            if (!element) return;
            
            element.classList.add("sign", "cursor");
            element.textContent = webSecurity.substring(0, i);
            
            if(i < webSecurity.length){
                setTimeout(function(){
                    initWebSecurity(i + 1);  
                }, 35);
            } else {
                element.classList.remove("cursor");
                // Animation complete
            }
        }
        
        // Start the animation sequence
        initProgramAlpha(0);
        
    }, 1500);
}