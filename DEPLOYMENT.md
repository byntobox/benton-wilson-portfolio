# Publishing Checklist

Production domain: `https://bentonjwilson.info/`.

The November 2026 revision includes canonical URLs, absolute social-image URLs,
`og:url`, and a three-page sitemap referenced from `robots.txt`. The corrected
résumé and current profile photo from the remote `main` branch are preserved.
The remaining checks below apply to future domain changes or hosting reviews.

When changing the permanent domain:

1. Add a canonical URL to `index.html`.
2. Change `og:image`, `twitter:image`, and the structured-data image to absolute HTTPS URLs.
3. Add `og:url` using the final homepage URL.
4. Add the final domain to `robots.txt` with a sitemap URL after creating `sitemap.xml`.
5. Verify the social preview with LinkedIn Post Inspector and a general Open Graph validator.
6. Enable HTTPS and redirect the `www` or non-`www` version to one preferred hostname.
7. Use privacy-friendly, cookie-free analytics only if visitor tracking is genuinely useful.
8. Recheck the public resume PDF for any address, phone number, or other details you do not want indexed.
