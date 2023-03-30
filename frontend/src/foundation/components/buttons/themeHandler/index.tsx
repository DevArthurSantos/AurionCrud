interface ThemeHandlerProps {
  themeHandlerState(): void
}

export default function ThemeHandler({ themeHandlerState }: ThemeHandlerProps) {
  return (
    <>
      <button onClick={themeHandlerState}>Click</button>
    </>
  );
}
