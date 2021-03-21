import { FunctionComponent } from "react"

import { Fragment, ReactChildren } from 'react'

const BaseLayout: FunctionComponent = ({ children }: { children: ReactChildren }) => {
    return (
      <Fragment>
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {children}
        </div>
      </Fragment>
    )
}

export default BaseLayout