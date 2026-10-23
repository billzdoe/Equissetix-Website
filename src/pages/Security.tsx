import SEO from '../components/SEO'
import { pageSEO } from '../utils/seo'
import { TopicHero, CloseCTA } from '../components/TopicPage'

/**
 * /security. Rewritten 2026-10-22 so every line matches what the
 * TrainingTree Pro code and hosting actually do (checked in the live repo,
 * 1d094fe): bcrypt, authenticator 2FA with backup codes, 30-minute access
 * tokens renewing for 14 days, sign-in IP logging, rate-limited sign-in and
 * sign-up, per-horse permissions, append-only audit trails
 * (core/audit_immutability.py), app-level encryption of calendar and wearable
 * credentials with a rotatable key (core/crypto.py), HSTS/CSP/X-Frame-Options
 * headers, bandit + safety scans in CI, data export (/me/export) and account
 * deletion, and the paid Render database's point-in-time recovery.
 *
 * Removed because nothing backs them: SOC 2, HIPAA, third-party audits, a
 * security operations centre, 24/7 monitoring, intrusion detection,
 * penetration testing, 24-hour patching, hardware key storage, disaster
 * recovery drills and recovery-time targets. Add one back only when it is real.
 */

const sections = [
  {
    title: 'Signing in',
    items: [
      'Passwords are stored only as bcrypt hashes, never as the password itself.',
      'Two-factor sign-in works with any authenticator app, with single-use backup codes in case a phone is lost.',
      'A sign-in lasts 30 minutes and renews quietly for up to 14 days, so a stolen session token stops working quickly.',
      'Repeated sign-in and sign-up attempts are rate-limited, and the address each sign-in came from is recorded.',
    ],
  },
  {
    title: 'Who sees what',
    items: [
      'Access is set per horse. Owners see their own horses, and a vet sees the horses the barn shares with them.',
      'Every change to who can see a horse, and every share, is written to that horse’s access history.',
      'Audit trails can only be added to. The app blocks any attempt to edit or delete them, and logs the attempt.',
    ],
  },
  {
    title: 'Your data in transit and at rest',
    items: [
      'Every connection between your devices and our servers is encrypted (HTTPS), with browser security headers that keep it that way.',
      'Logins for connected calendars and wearables are encrypted a second time inside the app, with a key that can be rotated.',
      'The database runs on a paid managed plan with point-in-time recovery, so it can be restored to a recent moment if something goes wrong.',
    ],
  },
  {
    title: 'How we build it',
    items: [
      'Every change to the code is scanned automatically for common security mistakes and for known problems in the libraries it uses.',
      'Wearable connections stay off until a barn connects its own account.',
    ],
  },
  {
    title: 'Your rights over your data',
    items: [
      'You can download a copy of your data from your account at any time.',
      'You can delete your account, and your personal details go with it.',
    ],
  },
]

const Security = () => (
  <div className="pt-20">
    <SEO title={pageSEO.security.title} description={pageSEO.security.description} path="/security" />

    <TopicHero title="How we keep your barn’s data safe.">
      <p>
        Health records, workouts and owner details are sensitive. Here is exactly how TrainingTree Pro protects them,
        written so you can check every line.
      </p>
    </TopicHero>

    <section className="section-padding">
      <div className="container-custom grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-2">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-3xl sm:text-4xl">{s.title}</h2>
            <ul className="mt-6 space-y-4">
              {s.items.map((item) => (
                <li key={item} className="grid grid-cols-[0.75rem_1fr] gap-3 text-lg text-navy-700">
                  <span aria-hidden="true" className="mt-[0.6em] h-2 w-2 bg-gold-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding bg-plate">
      <div className="container-custom grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl sm:text-4xl">Keeping your account safe</h2>
          <ul className="mt-6 space-y-3 text-lg text-navy-700">
            <li>Turn on two-factor sign-in, and keep your backup codes somewhere safe.</li>
            <li>Give each person their own login instead of sharing one.</li>
            <li>Sign out on shared computers in the barn office.</li>
            <li>Check a horse’s access history if you’re unsure who can see it.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl">Report a security problem</h2>
          <p className="mt-6 text-lg text-navy-700">
            If you think you’ve found a security problem, or something looks wrong in your account, email us and we’ll
            look into it straight away.
          </p>
          <a
            href="mailto:info@equissetix.com?subject=Security%20report"
            className="mt-4 inline-block text-lg font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700"
          >
            info@equissetix.com
          </a>
        </div>
      </div>
    </section>

    <CloseCTA />
  </div>
)

export default Security
