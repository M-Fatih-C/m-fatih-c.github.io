# GitHub Pages publication

**The owner approved publication of the reviewed preview on 8 November 2026.**

The user-site repository is `M-Fatih-C/m-fatih-c.github.io` and the URL is
`https://m-fatih-c.github.io`. The repository was created specifically for this
portfolio after approval. The existing 22 project repositories are outside the
publication scope.

## Before publication

1. Review the private-project summaries, experience, education and CV PDFs.
2. Confirm exact certificate/publication records if they should be listed by name.
3. Run Node 22.23.4, `npm ci`, `npm run qa`, and `npm audit --audit-level=high`.
4. Inspect localized primary pages and selected long case studies on mobile and desktop.
5. Obtain explicit approval for public source creation and site publication.

## After approval

1. Create the new public user-site repository. Do not modify any of the existing
   22 project repositories or merge their PRs as part of site deployment.
2. Upload only this sanitized source package and lockfile to its `main` branch.
   Exclude `node_modules`, `dist`, `.astro`, `reports`, work notes, original repo
   mapping, screenshots of private source and any `.env` file.
3. In Settings → Pages, choose **GitHub Actions** as the source.
4. Optionally configure a required reviewer for the `github-pages` environment.
5. Run **Deploy approved portfolio to GitHub Pages** manually from `main`, setting
   `publish` to true. Merely pushing source does not trigger deployment.
6. Confirm the deployed URL, both locale routes, PDFs, 404 behavior and social assets.

The workflow uses the official Astro action (`withastro/action@v6`) and GitHub's
Pages deployment action (`actions/deploy-pages@v5`). `site` is the user-site root;
no repository-subdirectory `base` is set. The `build` script performs content,
generated-link and privacy checks before upload.

Local builds and Lighthouse measurements do not verify hosted GitHub Pages
permissions, environment protection or the final CDN behavior. Those can only be
checked after approved remote setup and deployment.

Official reference: [Deploy your Astro site to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).
