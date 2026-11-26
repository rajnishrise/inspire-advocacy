# Inspire Advocacy — www.inspireadvocacy.com

Website for **Inspire Advocacy**, the criminal law practice of **Advocate Rupesh Kumar Thakur** at the Civil Court, Motihari, East Champaran, Bihar.

It is a plain static site (HTML, CSS and a little JavaScript). There is no build step, so any page can be edited directly.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `about.html` | About the advocate |
| `practice-areas.html` | Practice areas (bail, trials, excise, NDPS, vehicle release, etc.) |
| `courts.html` | Courts at Motihari, how a case moves, IPC/CrPC → BNS/BNSS table |
| `know-your-rights.html` | Rights on arrest, Zero FIR, free legal aid, helplines |
| `faq.html` | Frequently asked questions |
| `contact.html` | Chamber address, phone, WhatsApp, Facebook, map |
| `disclaimer.html`, `privacy.html`, `credits.html`, `404.html` | Legal and utility pages |

Shared styles are in `assets/css/style.css`, behaviour (mobile menu, disclaimer pop-up) in `assets/js/main.js`.
The header and footer are repeated in each HTML file, so a change to them (for example, a new phone number) should be made in every page. A search-and-replace across `*.html` does it.

## Details still to fill in

Anything the owner still has to provide is shown on the site in a **yellow dashed box** (`<em class="ph">[...]</em>`). To find them all:

```
grep -n 'class="ph"' *.html
```

Nothing is outstanding at the moment.

## Bar Council of India compliance

Advocates in India may not advertise or solicit work (Rule 36, Section IV, Chapter II, Part VI, BCI Rules). Rule 36 allows a website with name, address, contact details, enrolment, qualifications and areas of practice. To stay within that, the site:

- shows a disclaimer that the visitor must accept before using the site (remembered in the browser);
- has **no client testimonials, Google review ratings, success rates, "best lawyer" claims or case results**;
- does not use the State Emblem of India or the Bar Council logo (their use by private persons is restricted);
- keeps an informational tone throughout.

Please keep these rules in mind when editing. In particular, do not add reviews or wording like "best criminal lawyer" (the Google Business profile currently uses that phrase; it is worth changing there too).

## Images

Photographs are open-licence images from Wikimedia Commons, loaded from Commons and credited on each image and on `credits.html`. The logo mark and icons are original to this site.

## Deploying on Vercel

1. In Vercel, **Add New → Project**, import `rajnishrise/inspire-advocacy`.
2. Framework preset: **Other**. Leave build command and output directory empty.
3. Deploy. Then in **Settings → Domains** add `www.inspireadvocacy.com` and `inspireadvocacy.com`, and set the DNS records Vercel shows at your domain registrar. `vercel.json` redirects the bare domain to `www`.

Every push to `main` redeploys the site; pull requests get preview links.

## Local preview

```
npx serve .
```

then open the address it prints. (`serve` supports the clean URLs such as `/about` that Vercel uses.)
