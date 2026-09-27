# EvenPlate website

Public account confirmation and password recovery pages for EvenPlate.

This repository contains only the static website. The mobile app is maintained separately.

GitHub Pages serves the main branch root. Custom domain: evenplateapp.xyz.

Run checks with `node --test auth_site_test.mjs`.

Email action tokens use URL fragments and are verified only after the user chooses to continue. Browser sessions stay in memory. The Supabase key in `auth/config.mjs` is the public anon key. Never add server keys or account credentials to this repository.
