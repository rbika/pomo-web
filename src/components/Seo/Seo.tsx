import * as React from 'react'

import { Helmet, HelmetProps } from 'react-helmet'

type SeoProps = {
  title: string
  description?: string
  helmetProps?: HelmetProps
}

const defaultDescription = 'A pomodoro timer web application. '

function Seo({
  title,
  description = defaultDescription,
  helmetProps,
}: SeoProps): JSX.Element {
  return (
    <Helmet {...helmetProps}>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default Seo
