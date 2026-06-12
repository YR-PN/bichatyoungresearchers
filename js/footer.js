(function() {
    const style = document.createElement('style');
    style.textContent = `
        .footer {
            background-color: #1e293b;
            color: #ffffff;
            padding: 50px 0 20px;
            margin-top: 60px;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
            margin-bottom: 30px;
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
            padding: 0 20px;
        }

        .footer-section h4 {
            margin-bottom: 15px;
            font-size: 18px;
        }

        .footer-section p,
        .footer-section a,
        .footer-section li {
            font-size: 14px;
            line-height: 1.8;
            opacity: 0.9;
        }

        .footer-section ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .footer-section li {
            margin-bottom: 8px;
        }

        .footer-section a {
            color: #ffffff;
            text-decoration: none;
        }

        .footer-section a:hover {
            text-decoration: underline;
        }

        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 20px;
            text-align: center;
            opacity: 0.8;
            font-size: 14px;
            max-width: 1000px;
            margin: 0 auto;
            padding-left: 20px;
            padding-right: 20px;
        }

        .last-updated {
            color: #64748b;
            font-size: 14px;
            margin-bottom: 30px;
        }
    `;
    document.head.appendChild(style);

    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-section">
                <h4>Contact</h4>
                <p>Email: <a href="mailto:youngresearchersparisnord@gmail.com">youngresearchersparisnord@gmail.com</a></p>
            </div>
            <div class="footer-section">
                <h4>Legal</h4>
                <ul>
                    <li><a href="privacy.html">Privacy Policy</a></li>
                    <li><a href="terms.html">Terms of Use</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Follow Us</h4>
                <ul>
                    <li><a href="https://www.linkedin.com/in/association-des-jeunes-chercheurs-de-l-hopital-grand-paris-nord-b16451290/">LinkedIn</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 BYRD. All rights reserved.</p>
        </div>
    `;

    document.body.appendChild(footer);
})();
