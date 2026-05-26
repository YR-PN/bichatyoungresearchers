# SciConf 2025 - Conference Website

A lightweight, GDPR-compliant conference website for abstract submissions built with static HTML, CSS, and no backend dependencies.

## Features

✅ **Static Site** - No server required, deploys directly to GitHub Pages  
✅ **GDPR Compliant** - Full privacy policy and GDPR consent mechanisms  
✅ **Web3Forms Integration** - EU-friendly form handling with unlimited free submissions  
✅ **Responsive Design** - Mobile-friendly interface  
✅ **Zero Dependencies** - Pure HTML, CSS, and JavaScript (no frameworks)  
✅ **Professional Layout** - Multiple pages for papers, schedule, about, etc.  
✅ **Fast Loading** - Lightweight and optimized  

## Project Structure

```
sciconf2025/
├── index.html                 # Home page
├── css/
│   └── style.css             # Main stylesheet
├── pages/
│   ├── call-for-papers.html  # Call for Papers page
│   ├── submit-abstract.html  # Abstract submission form
│   ├── schedule.html         # Conference schedule
│   ├── about.html            # About the conference
│   ├── privacy.html          # Privacy Policy (GDPR)
│   ├── terms.html            # Terms of Use
│   └── thank-you.html        # Submission confirmation
└── README.md                 # This file
```

## Quick Start

### 1. Get the Web3Forms Access Key

1. Visit [web3forms.com](https://web3forms.com/)
2. Click "Start Free" (no credit card required)
3. Enter your email and create an account
4. You'll get an **Access Key** (looks like: `your_access_key_here`)
5. Copy this key

### 2. Update the Form Configuration

Edit `pages/submit-abstract.html` and replace:

```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
```

With your actual access key:

```html
<input type="hidden" name="access_key" value="a1b2c3d4e5f6g7h8i9j0">
```

### 3. Customize Conference Information

Edit all HTML files and replace:
- `SciConf 2025` → Your conference name
- `info@sciconf2025.org` → Your contact email
- `+33 (0)1 23 45 67 89` → Your phone number
- Conference dates, tracks, and other details
- Links in footer and navigation

Key files to update:
- `index.html` - Home page hero and details
- `pages/call-for-papers.html` - Research tracks and submission guidelines
- `pages/about.html` - Conference themes, organizing committee
- `pages/schedule.html` - Conference schedule

### 4. Test Locally

1. Open `index.html` in your web browser
2. Navigate through all pages
3. Test the form submission from `pages/submit-abstract.html`
4. You should receive a confirmation email

### 5. Deploy to GitHub Pages

#### Option A: Using Git Command Line

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/sciconf2025.git
git branch -M main
git push -u origin main
```

#### Option B: Using GitHub Web Interface

1. Create a new repository on GitHub named `sciconf2025` (or your preferred name)
2. Upload all files to the repository
3. Go to repository **Settings** → **Pages**
4. Select **Source**: "Deploy from a branch"
5. Select **Branch**: `main` → `/ (root)`
6. Click **Save**
7. Your site will be live at: `https://YOUR_USERNAME.github.io/sciconf2025/`

#### Option C: Using a Custom Domain

1. Follow steps 1-5 above
2. In Settings → Pages, add your custom domain
3. Update your domain's DNS settings to point to GitHub Pages
4. Add a `CNAME` file to your repo with your domain name

## Configuration

### Email Notifications

The form automatically sends submissions to your email. To set this up:

1. Go to [web3forms.com](https://web3forms.com/)
2. Log in to your account
3. Add your email address in settings
4. All form submissions will be sent there

### Change Redirect Page

Edit `pages/submit-abstract.html`:

```html
<input type="hidden" name="redirect" value="https://yoursite.github.io/pages/thank-you.html">
```

Change the URL to redirect to a different page after submission.

### Custom Domain

To use your own domain instead of GitHub Pages URL:

1. Buy a domain (GoDaddy, Namecheap, etc.)
2. Update DNS records to point to GitHub Pages:
   - Add an A record: `185.199.108.153`
   - Add an A record: `185.199.109.153`
   - Add an A record: `185.199.110.153`
   - Add an A record: `185.199.111.153`
3. Add CNAME file to your repo
4. Enable in GitHub Settings → Pages

## Privacy & GDPR

This template includes:
- ✅ GDPR-compliant privacy policy (`pages/privacy.html`)
- ✅ Terms of use (`pages/terms.html`)
- ✅ Data consent checkbox on form
- ✅ Web3Forms (EU-friendly, GDPR-compliant)
- ✅ No cookies or tracking
- ✅ Clear data retention policies

**Important**: Update the privacy policy with your organization's details:
- Organization name and address
- Data contact/DPO information
- Specific data retention periods
- Any additional data processors

## Form Fields

The abstract submission form includes:

**Paper Information:**
- Paper title
- Research track selection
- Keywords
- Abstract text

**Author Information:**
- First and last name
- Email
- Affiliation
- Country
- Phone (optional)

**Co-Authors:**
- List format for multiple authors

**Presentation Preference:**
- Oral or poster preference

**GDPR Compliance:**
- Privacy policy agreement
- Newsletter opt-in
- Proceedings acknowledgment

## Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## File Sizes

Optimized for fast loading:
- HTML files: ~15-25 KB each
- CSS: ~12 KB
- Total package: <100 KB

## Troubleshooting

### Form Submissions Not Working

1. Verify Web3Forms access key is correct in `submit-abstract.html`
2. Check that your email is verified in Web3Forms dashboard
3. Check spam folder for confirmation emails
4. Test at [web3forms.com/test](https://web3forms.com/test)

### Navigation Links Broken

1. Check file paths in navigation (pages/ directory)
2. Verify `.html` file names match link href values
3. For custom domains, ensure paths are correct

### Styling Issues

1. Clear browser cache (Ctrl+Shift+Delete)
2. Verify `css/style.css` is in correct location
3. Check browser console for CSS errors

### Custom Domain Not Working

1. Verify DNS records are updated (can take 24-48 hours)
2. Check CNAME file content
3. Verify domain in GitHub Settings → Pages

## Useful Resources

- **Web3Forms Documentation**: https://web3forms.com/docs
- **GitHub Pages Help**: https://docs.github.com/en/pages
- **GDPR Compliance**: https://gdpr-info.eu/
- **HTML5 Reference**: https://developer.mozilla.org/en-US/docs/Web/HTML

## Support & Help

For issues or questions:

1. **Web3Forms Support**: https://web3forms.com/support
2. **GitHub Community**: https://github.community/
3. **GDPR Questions**: Contact your Data Protection Authority

## License

This template is provided as-is for conference use. Feel free to modify and distribute with appropriate attribution.

## Changes Made From Template

To customize this template for your conference, update:

1. **Contact Information** - Replace all email addresses and phone numbers
2. **Conference Details** - Dates, location, name
3. **Research Tracks** - Your specific paper categories
4. **Call for Papers** - Submission guidelines specific to your field
5. **Schedule** - Your actual conference program
6. **Organizing Committee** - Your committee members
7. **Accessibility Information** - Your venue details
8. **Legal Documents** - Organization name, DPO contact, data retention

## Version History

- **v1.0** (January 2025) - Initial release

---

**Last Updated**: January 2025
