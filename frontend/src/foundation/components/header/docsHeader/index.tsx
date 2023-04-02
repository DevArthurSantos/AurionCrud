import Logo from "@/foundation/components/logo";
import Social from "@foundation/components/social";

function DocsHeader() {

  return (
    <>
      <header className="header">
        <article className="flex items-center justify-between max-w-90% h-full mx-auto">
          <Logo />
          <div className="flex gap-3 items-center">
            <Social />
          </div>
        </article>
      </header>
    </>
  )
}

export default DocsHeader;