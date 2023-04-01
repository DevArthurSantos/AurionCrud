import { useEffect, useState } from "react";

function useGetIp(): string | undefined {
  const [ip, setIp] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getIp = (callback: (ip: string) => void) => {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://l2.io/ip.js?var=userip";
      script.onload = () => callback((window as any).userip);
      script.onerror = () => callback("unknown");

      document.body.appendChild(script);
    };

    if (typeof document !== "undefined") {
      getIp((ip) => setIp(ip));
    }
  }, []);

  return ip;
}

export default useGetIp;
