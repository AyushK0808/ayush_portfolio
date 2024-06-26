"use client";

import {ThemeProvider} from "next-themes";
import { useEffect,useState } from "react";

const Providers = ({children}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {return (
    <div> {children} </div>
    )
}

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}; 

export default Providers;