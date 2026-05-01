/**
 * Image Protection System for Loh Ek Sem Art Archive
 * Prevents right-click, drag-save, keyboard shortcuts, and screenshots
 */

(function() {
    'use strict';

    // 1. Disable right-click context menu on all images
    document.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG' || e.target.closest('.protected-img')) {
            e.preventDefault();
            return false;
        }
    });

    // 2. Disable drag-to-save on images
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG' || e.target.closest('.protected-img')) {
            e.preventDefault();
            return false;
        }
    });

    // 3. Block keyboard shortcuts for saving/capturing
    document.addEventListener('keydown', function(e) {
        // Ctrl+S, Cmd+S (Save)
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            return false;
        }
        // Ctrl+U, Cmd+U (View Source)
        if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
            e.preventDefault();
            return false;
        }
        // Ctrl+A, Cmd+A (Select All) - optional, can be annoying
        // if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
        //     e.preventDefault();
        //     return false;
        // }
        // Ctrl+Shift+I, Cmd+Option+I (DevTools)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'i' || e.key === 'I')) {
            if (e.shiftKey || e.altKey || e.metaKey) {
                e.preventDefault();
                return false;
            }
        }
        // Ctrl+Shift+J, Cmd+Option+J (DevTools Console)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'j' || e.key === 'J')) {
            if (e.shiftKey || e.altKey || e.metaKey) {
                e.preventDefault();
                return false;
            }
        }
        // Ctrl+Shift+C (DevTools Inspect)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
            if (e.shiftKey) {
                e.preventDefault();
                return false;
            }
        }
        // PrintScreen
        if (e.key === 'PrintScreen') {
            e.preventDefault();
            showProtectionWarning('Screenshot blocked: Content is protected');
            return false;
        }
    });

    // 4. Detect and block screenshot attempts (Windows + PrintScreen)
    document.addEventListener('keyup', function(e) {
        if (e.key === 'PrintScreen') {
            showProtectionWarning('Screenshot blocked: Content is protected');
        }
    });

    // 5. Protect images on page load
    function protectImages() {
        document.querySelectorAll('img').forEach(function(img) {
            // Add data attribute
            img.setAttribute('data-protected', 'true');

            // Wrap in protected container if not already wrapped
            if (!img.closest('.protected-img')) {
                const wrapper = document.createElement('span');
                wrapper.className = 'protected-img';
                img.parentNode.insertBefore(wrapper, img);
                wrapper.appendChild(img);
            }
        });
    }

    // 6. Show protection warning
    function showProtectionWarning(message) {
        // Remove existing warnings
        const existing = document.querySelector('.protection-warning');
        if (existing) existing.remove();

        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'protection-warning';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.85);
            z-index: 999999;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeOut 2s forwards;
        `;

        const messageEl = document.createElement('div');
        messageEl.textContent = message;
        messageEl.style.cssText = `
            background: #b85c38;
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        `;

        overlay.appendChild(messageEl);
        document.body.appendChild(overlay);

        setTimeout(() => {
            overlay.remove();
        }, 2000);
    }

    // 7. Add CSS animation for warning
    const style = document.createElement('style');
    style.textContent = `
        .protected-img {
            position: relative;
            pointer-events: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .protected-img::after {
            content: '';
            position: absolute;
            inset: 0;
            background: transparent;
            z-index: 10;
        }

        .protected-img img {
            pointer-events: none;
            -webkit-user-drag: none;
            -khtml-user-drag: none;
            -moz-user-drag: none;
            -o-user-drag: none;
            user-drag: none;
            -webkit-touch-callout: none;
            cursor: default;
        }

        @keyframes fadeOut {
            0% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // 8. Block developer tools detection (makes it harder)
    let devToolsOpen = false;
    function detectDevTools() {
        const threshold = 160;
        const widthDiff = window.outerWidth - window.innerWidth;
        const heightDiff = window.outerHeight - window.innerHeight;

        if (widthDiff > threshold || heightDiff > threshold) {
            if (!devToolsOpen) {
                devToolsOpen = true;
                document.querySelectorAll('img').forEach(img => {
                    img.style.filter = 'blur(10px)';
                });
                showProtectionWarning('Developer tools detected: Images blurred for protection');
            }
        } else {
            devToolsOpen = false;
            document.querySelectorAll('img').forEach(img => {
                img.style.filter = 'none';
            });
        }
    }

    // Check periodically
    setInterval(detectDevTools, 1000);

    // 9. Disable selection on images
    document.addEventListener('selectstart', function(e) {
        if (e.target.tagName === 'IMG' || e.target.closest('.protected-img')) {
            e.preventDefault();
            return false;
        }
    });

    // 10. Prevent image extraction via DOM removal
    document.addEventListener('DOMNodeRemoved', function(e) {
        if (e.target.tagName === 'IMG') {
            e.target.removeAttribute('src');
        }
    });

    // Initialize protection on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', protectImages);
    } else {
        protectImages();
    }
})();
