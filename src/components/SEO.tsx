import { Helmet } from 'react-helmet-async'
import { defaultSEO } from '../utils/seo'

interface SEOProps {
  title?: string
  description?: string
  /** Absolute or root-relative path for canonical + og:url, e.g. "/pricing". */
  path?: string
  /** Override social share image (defaults to site OG image). */
  image?: string
  type?: string
  /** Discourage indexing (e.g. the 404 page). */
  noindex?: boolean
}

const SITE_URL = 'https://equissetix.com'

const SEO = ({ title, description, path, image, type = 'website', noindex = false }: SEOProps) => {
  const resolvedTitle = title || defaultSEO.title!
  const resolvedDescription = description || defaultSEO.description!
  const resolvedImage = image || defaultSEO.image!
  const url = path ? `${SITE_URL}${path}` : defaultSEO.url!

  return (
    <Helmet>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={resolvedImage} />
    </Helmet>
  )
}

export default SEO
