import { Fragment, ReactChildren, FunctionComponent } from 'react'

const Header: FunctionComponent = ({ children }: { children: ReactChildren }) => {
    return (
      <header className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {children}
      </header>
    )
}

export default Header