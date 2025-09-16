import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        {/* 404 Animation */}
        <div className="relative">
          <div className="text-8xl font-bold text-primary/20 select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-16 h-16 text-muted-foreground animate-pulse" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Page Not Found</h1>
          <p className="text-muted-foreground leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild className="group">
            <a href="/">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
              <ArrowLeft className="ml-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
