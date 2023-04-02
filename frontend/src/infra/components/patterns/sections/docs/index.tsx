import "./styled.css"
import DocsHeader from "@/foundation/components/header/docsHeader";
import DocsFooter from "@/foundation/components/footer/docsFooter";

function DocSection() {

  return (
    <section className="docsContainer">
      <DocsHeader />
      <div className="navBar">b</div>
      <div className="indexs">c</div>
      <div className="content">d</div>
      <DocsFooter />
    </section>
  )
}

export default DocSection
