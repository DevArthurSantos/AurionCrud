import Layout from "@/infra/components/patterns/layout"
import Hero from "@/infra/components/patterns/sections/hero"
import Feature from "@/infra/components/patterns/sections/feature"



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
