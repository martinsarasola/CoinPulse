// Puedes agregar este componente donde quieras mostrar el switch de tema
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Cambiar a {theme === "dark" ? "claro" : "oscuro"}
    </button>
  );
}
