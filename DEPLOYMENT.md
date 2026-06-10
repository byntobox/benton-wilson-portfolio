# Publishing Checklist

Before publishing the site on its permanent domain:

1. Add a canonical URL to `index.html`.
2. Change `og:image`, `twitter:image`, and the structured-data image to absolute HTTPS URLs.
3. Add `og:url` using the final homepage URL.
4. Add the final domain to `robots.txt` with a sitemap URL after creating `sitemap.xml`.
5. Verify the social preview with LinkedIn Post Inspector and a general Open Graph validator.
6. Enable HTTPS and redirect the `www` or non-`www` version to one preferred hostname.
7. Use privacy-friendly, cookie-free analytics only if visitor tracking is genuinely useful.
8. Recheck the public resume PDF for any address, phone number, or other details you do not want indexed.
