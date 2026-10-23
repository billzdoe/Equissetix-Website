import { ReactNode } from 'react'
import Button from './Button'

/** Header band for the topic pages (/performance, /vet-care, /science). */
export const TopicHero = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="bg-ink text-white">
    <div className="container-custom py-14 sm:py-20 lg:py-24">
      <h1 className="max-w-4xl text-[2.6rem] leading-[0.98] text-white sm:text-6xl lg:text-7xl">{title}</h1>
      <div className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">{children}</div>
    </div>
  </section>
)

/** The one closing call to action every page ends on. */
export const CloseCTA = ({
  title = 'Join the pilot program.',
  body = 'We’re opening TrainingTree Pro to a small group of barns first. Use it with your own horses and help shape what comes next.',
}: {
  title?: string
  body?: string
}) => (
  <section className="bg-green-700 text-white">
    <div className="container-custom flex flex-col items-start gap-6 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-2xl">
        <h2 className="text-white">{title}</h2>
        <p className="mt-3 text-lg text-white/80">{body}</p>
      </div>
      <Button to="/contact" variant="primary" size="lg" className="shrink-0">
        Join the pilot
      </Button>
    </div>
  </section>
)
