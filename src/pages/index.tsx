import { GetServerSideProps, NextPage } from 'next'
import { FaDochub, FaBook } from 'react-icons/fa'
import styles from '~/styles/Home.module.css'
import HashIcon from '../svgs/hash-icon.svg'
import { NextAppPageProps } from '~/types/app'
import Layout from '~/components/Layout'

type IndexPageServerSideProps = {
  meta: {
    title: string
  }
}

const IndexPage: NextPage<NextAppPageProps> = ({ meta }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className="w-full flex flex-col place-items-center text-6xl gap-2">
            <HashIcon />
            <img src="/nsk.png" alt="NSK Logo" className="w-32" /> {meta?.title}
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <FaDochub className="text-4xl mb-2" />
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <FaBook className="text-4xl mb-2" />
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </Layout>
  )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps<IndexPageServerSideProps> =
  async () => {
    return {
      props: {
        meta: {
          title: 'Next.js Starter Kit',
        },
      },
    }
  }
