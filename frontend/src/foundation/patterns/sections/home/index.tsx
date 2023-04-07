import Layout from "@foundation//patterns/layout"
import Hero from "@foundation//patterns/sections/hero"
import Feature from "@foundation//patterns/sections/feature"


function HomeSection() {

  return (
    <section id="homeSection">
      <Layout>
        <Hero />
        <Feature />
      </Layout>
    </section>
  )
}

export default HomeSection
