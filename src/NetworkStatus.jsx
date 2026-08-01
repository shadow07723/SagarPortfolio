import { useEffect, useState } from "react";

function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="p-4">
      {isOnline ? (
        <p className="text-green-600 font-bold">
          🟢 Internet Connected
        </p>
      ) : (
        <p className="text-red-600 font-bold">
          🔴 Internet Disconnected
        </p>
      )}
    </div>
  );
}

export default NetworkStatus;