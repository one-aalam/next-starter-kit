import { Fragment, ReactChildren, FunctionComponent } from 'react'
import Header from './Header'
import Footer from './Footer'

const FullLayout: FunctionComponent = ({ children }: { children: ReactChildren }) => {
    return (
      <Fragment>
        <Header/>
        <main className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {children}
        </main>
        <Footer/>
      </Fragment>
    )
}

export default FullLayout