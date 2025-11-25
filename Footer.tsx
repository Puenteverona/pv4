import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { toast } from "sonner@2.0.3";
import { projectId, publicAnonKey } from "../utils/supabase/info";

interface FooterProps {
  onAdminClick?: () => void;
}

export function Footer({ onAdminClick }: FooterProps) {
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setIsSubmitting(true);
      try {
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-24cbf45b/comments`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${publicAnonKey}`,
            },
            body: JSON.stringify({
              email: email.trim() || "anónimo",
              comment: comment.trim(),
              timestamp: new Date().toISOString(),
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Error al enviar el comentario");
        }

        toast.success("Comentario enviado exitosamente");
        setComment("");
        setEmail("");
      } catch (error) {
        console.error("Error submitting comment:", error);
        toast.error("Error al enviar el comentario. Por favor, intenta de nuevo.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <footer className="bg-[#ff6b35] border-t border-black/20 px-6 py-8 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-black mb-4">Información de Contacto</h3>
            <div className="space-y-2 text-black">
              <p>📧 puenteverona@gmail.com</p>
            </div>
          </div>

          {/* Comments Section */}
          <div>
            <h3 className="text-black mb-4">Comentarios y Sugerencias</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Tu email (opcional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-gray-900"
              />
              <Textarea
                placeholder="Comparte tus comentarios o sugerencias..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                required
                className="bg-white text-gray-900"
              />
              <Button 
                type="submit" 
                className="bg-white hover:bg-gray-100 text-[#ff6b35]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Comentario"}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-black/20 text-center text-black">
          <p>&copy; 2025 Puente Verona. Todos los derechos reservados.</p>
          {onAdminClick && (
            <button 
              onClick={onAdminClick}
              className="mt-2 text-xs text-black/50 hover:text-black/70 underline no-link-style"
            >
              página administrativa
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}