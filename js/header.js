(function() {
    // Detect if we're on the home page or in a subdirectory
    const isHomePage = !window.location.pathname.includes('/pages/');
    const basePath = isHomePage ? '' : '..';

    const favicons = [
        { rel: 'icon', type: 'image/x-icon', href: '../images/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '../images/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '../images/favicon/favicon-16x16.png' },
        { rel: 'apple-touch-icon', href: '../images/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '../images/favicon/site.webmanifest' }
    ];
 
    favicons.forEach(faviconConfig => {
        const link = document.createElement('link');
        link.rel = faviconConfig.rel;
        if (faviconConfig.type) link.type = faviconConfig.type;
        if (faviconConfig.sizes) link.sizes = faviconConfig.sizes;
        link.href = faviconConfig.href;
        document.head.appendChild(link);
    });


    const style = document.createElement('style');
    style.textContent = `
        .navbar {
            background-color: #ffffff;
            border-bottom: 1px solid #e2e8f0;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12);
        }
        .navbar .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            max-width: 1000px;
            margin: 0 auto;
        }
        .nav-brand h1 {
            font-size: 24px;
            color: #d62057;
            margin: 0;
        }
        .nav-links {
            display: flex;
            list-style: none;
            gap: 30px;
            margin: 0;
            padding: 0;
            align-items: center;
        }
        .nav-links > li {
            position: relative;
        }
        .nav-links a {
            text-decoration: none;
            color: #1e293b;
            font-weight: 500;
            transition: color 0.2s;
            border-bottom: 3px solid transparent;
            padding-bottom: 5px;
        }
        .nav-links a:hover {
            color: #d62057;
            border-bottom-color: #d62057;
        }
        .dropdown-toggle::after {
            content: " ▼";
            font-size: 10px;
        }
        .dropdown-menu {
            display: none;
            position: absolute;
            top: calc(100% + 12px);
            left: 0;
            background-color: #ffffff;
            list-style: none;
            padding: 8px 0;
            margin: 0;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            z-index: 999;
            min-width: 200px;
        }
        .dropdown-menu li {
            margin: 0;
            padding: 0;
        }
        .dropdown-menu a {
            display: block;
            padding: 10px 20px;
            color: #1e293b;
            border-bottom: none;
            white-space: nowrap;
        }
        .dropdown-menu a:hover {
            background-color: #f8fafc;
            color: #d62057;
            border-bottom: none;
        }
    `;
    document.head.appendChild(style);

    const nav = document.createElement('nav');
    nav.className = 'navbar';
    nav.innerHTML = `
        <div class="container">
            <div class="nav-brand">
                <h1>Bichat Young Researchers</h1>
            </div>
            <ul class="nav-links">
                <li><a href="${isHomePage ? '/' : '../index.html'}">Home</a></li>
                <li>
                    <a href="#" class="dropdown-toggle">BYRD 2026</a>
                    <ul class="dropdown-menu">
                        <li><a href="${isHomePage ? 'pages/' : ''}register.html">Register</a></li>
                        <li><a href="${isHomePage ? 'pages/' : ''}call-for-papers.html">Call for Abstracts</a></li>
                        <li><a href="${isHomePage ? 'pages/' : ''}submit-abstract.html">Submit Abstract</a></li>
                        <li><a href="${isHomePage ? 'pages/' : ''}schedule.html">BYRD Schedule</a></li>
                    </ul>
                </li>
                <li><a href="${isHomePage ? 'pages/' : ''}about.html">About us</a></li>
            </ul>
        </div>
    `;

    document.body.insertBefore(nav, document.body.firstChild);

    const toggle = nav.querySelector('.dropdown-toggle');
    const menu   = nav.querySelector('.dropdown-menu');

    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target)) {
            menu.style.display = 'none';
        }
    });
})();
