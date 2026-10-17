export function ThemeScript() {
  const code = `
    (function () {
      try {
        var stored = localStorage.getItem('theme');
        var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var isDesktop = window.matchMedia('(min-width: 1024px)').matches;
        var theme = stored === 'light' || stored === 'dark'
          ? stored
          : (isDesktop || systemDark) ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.style.colorScheme = theme;
      } catch (_) {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
      }
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
