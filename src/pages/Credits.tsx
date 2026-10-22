import SEO from '../components/SEO'
import { TopicHero } from '../components/TopicPage'
import { credits } from '../data/credits'

/** /credits — every third-party image, its author, licence and source. */

const Credits = () => (
  <div className="pt-20">
    <SEO title="Image Credits | Equissetix" description="Authors, licences and sources for the photographs and engravings used on this site." path="/credits" />
    <TopicHero kicker="Image credits" title="Photographs and engravings">
      <p>
        The images on this site are public domain or openly licensed. Cropped versions of CC BY-SA images are shared under
        the same licence.
      </p>
    </TopicHero>
    <section className="section-padding">
      <div className="container-custom">
        <ul className="border-t border-navy-200">
          {Object.values(credits).map((c) => (
            <li key={c.name} className="grid grid-cols-1 gap-2 border-b border-navy-200 py-5 md:grid-cols-[minmax(0,6fr)_minmax(0,3fr)_minmax(0,3fr)] md:gap-8">
              <a href={c.source} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy-900 underline decoration-navy-300 underline-offset-4 hover:text-brand-600">
                {c.title}
              </a>
              <span className="text-navy-700">{c.author}</span>
              <span className="text-navy-600">
                {c.licenceUrl ? (
                  <a href={c.licenceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-brand-600">
                    {c.licence}
                  </a>
                ) : (
                  c.licence
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </div>
)

export default Credits
