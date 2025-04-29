// components/ThemeToggle.jsx
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">Dark Mode</span>
      <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
    </div>
  );
}
