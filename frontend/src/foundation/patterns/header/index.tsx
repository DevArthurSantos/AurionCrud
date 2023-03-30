import ThemeHandler from "@foundation/components//buttons/themeHandler"

interface HeaderProps {
  themeHandlerState(): void;
}

export default function Header({ themeHandlerState }: HeaderProps) {
  return (
    <>
      <header>
        <div>Header</div>

        <div>
          <ThemeHandler themeHandlerState={themeHandlerState}/>
        </div>
      </header>
    </>
  );
}
