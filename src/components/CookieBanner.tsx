import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "cookie_consent";

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border z-50 p-4 shadow-lg">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">
              Utilizziamo cookie per migliorare la tua esperienza. Continuando a navigare accetti il nostro utilizzo dei cookie.{" "}
              <Link to="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              {" e "}
              <Link to="/cookie-policy" className="text-primary hover:underline">
                Cookie Policy
              </Link>
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={rejectCookies}
              className="text-xs"
            >
              Rifiuta
            </Button>
            <Button
              size="sm"
              onClick={acceptCookies}
              className="text-xs"
            >
              Accetta
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowBanner(false)}
              className="p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};