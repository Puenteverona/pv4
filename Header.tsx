import { ArrowLeft, Home } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  onHomeClick: () => void;
  onBackClick: () => void;
  showBackButton?: boolean;
}

export function Header({ onHomeClick, onBackClick, showBackButton = false }: HeaderProps) {
  return (
    <header className="bg-[#ff6b35] border-b border-black/20 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 48 48" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              {/* Bridge pillars */}
              <rect x="8" y="20" width="3" height="20" fill="currentColor"/>
              <rect x="37" y="20" width="3" height="20" fill="currentColor"/>
              
              {/* Bridge deck */}
              <rect x="4" y="18" width="40" height="4" rx="1" fill="currentColor"/>
              
              {/* Suspension cables */}
              <path 
                d="M9.5 18 Q16 12 24 12 Q32 12 38.5 18" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none"
              />
              
              {/* Vertical cables */}
              <line x1="14" y1="14" x2="14" y2="18" stroke="currentColor" strokeWidth="1"/>
              <line x1="20" y1="13" x2="20" y2="18" stroke="currentColor" strokeWidth="1"/>
              <line x1="28" y1="13" x2="28" y2="18" stroke="currentColor" strokeWidth="1"/>
              <line x1="34" y1="14" x2="34" y2="18" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <h1 className="text-black font-bold">Puente Verona</h1>
        </div>
        
        <div className="flex items-center gap-2">
          {showBackButton && (
            <Button
              variant="outline"
              size="sm"
              onClick={onBackClick}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-black border-black/30"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={onHomeClick}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-black border-black/30"
          >
            <Home className="w-4 h-4" />
            Inicio
          </Button>
        </div>
      </div>
    </header>
  );
}