"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import  MoonIcon  from "./MoonIcon";
import  SunIcon  from "./SunIcon";
import {Switch} from "@nextui-org/react"

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleTheme=()=>{
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <div>
       <Switch
       defaultSeleted
       size='lg'
       color='success'
       onClick={handleTheme}
       startContent={<MoonIcon />}
       endcontent={<SunIcon />}
      // label={theme === "dark" ? <MoonIcon /> : <SunIcon />}
      // checked={theme === "dark"}
      // onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
    </div>
   
  );
};

export default ThemeSwitcher;