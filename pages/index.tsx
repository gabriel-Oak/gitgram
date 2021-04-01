import Head from 'next/head'

export default function Home() {
  return (
    <main>ola</main>
  )
}

export async function getStaticProps() {
  return {
    props: { }
  }
}
