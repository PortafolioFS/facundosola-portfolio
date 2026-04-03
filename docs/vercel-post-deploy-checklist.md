# Vercel Post-Deploy Checklist

Date: 2026-04-02
Project: `facundosola-portfolio`

## Expected deployed versions

- `next`: `16.1.7`
- `react`: `19.2.4`
- `react-dom`: `19.2.4`

## After triggering the deploy

1. Open the latest deployment in Vercel.
2. Confirm the build log shows:
   - `Next.js 16.1.7`
   - successful build completion
3. Confirm production opens correctly.
4. Verify these routes:
   - `/`
   - `/blog`
   - `/projects`
   - `/api/github-projects`
5. Confirm the deployment is using the commit that contains:
   - `package.json`
   - `package-lock.json`
   - `components/blog-section.tsx`
   - `docs/security-audit-before-fix.md`
   - `docs/security-validation-after-fix.md`

## If the Vercel warning persists

1. Verify the **currently active production deployment** is the new one, not an older deployment.
2. Confirm the deployed lockfile contains:
   - `next: 16.1.7`
   - `react: 19.2.4`
   - `react-dom: 19.2.4`
3. Check whether the warning belongs to:
   - another Vercel project
   - an older preview deployment
   - a cached dashboard result still waiting to refresh
4. Trigger a clean redeploy of the latest production commit.
5. Re-check Security / Runtime / Observability views after propagation.

## Security hardening follow-up

1. Review Vercel environment variables and confirm only required secrets exist.
2. Rotate any secret that may have been exposed in client code or committed accidentally.
3. Review deployment protection for preview environments if private previews are required.
4. Do not rely solely on WAF mitigation; dependency patching remains the primary fix.
