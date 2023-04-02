import Logo, { LogoSizing } from "@/foundation/components/logo";
import Social from "@foundation/components/social";

function DocsFooter() {

  return (
    <footer className="footer">
      <article className="flex items-center justify-center h-full flex-col gap-6  mx-auto">
        <div className="flex gap-3 items-center">
          <Social />
        </div>
        <div className="flex gap-2 items-center text-white">
          &copy; 2023, Todos os direitos reservados. <Logo sizing={LogoSizing.small} />
        </div>
      </article>
    </footer>
  )
}

export default DocsFooter;