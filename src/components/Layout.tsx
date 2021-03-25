import { Fragment, FunctionComponent } from 'react'
import classNames from 'classnames'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  usePadding?: boolean,
  useBackdrop?: boolean
}

const FullLayout: FunctionComponent<LayoutProps> = ({ children, usePadding, useBackdrop }) => {
    return (
      <Fragment>
        <Header/>
        <main className={classNames(
            `w-full h-screen mx-auto`,
            usePadding && 'px-2 sm:px-6 lg:px-8',
            useBackdrop && 'bg-gray-200'
            )}>
            {children}
        </main>
        <Footer/>
      </Fragment>
    )
}

FullLayout.defaultProps = {
  usePadding: true,
  useBackdrop: false
}

export default FullLayout