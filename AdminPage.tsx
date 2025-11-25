import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Eye, Users, MousePointer, Calendar, TrendingUp, MessageSquare } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { getAnalytics } from "../utils/analytics";
import { projectId, publicAnonKey } from "../utils/supabase/info";

const ADMIN_PASSWORD = "pv12345@";

interface DailyData {
  date: string;
  visits: number;
  users: number;
  clicks: number;
}

interface AllTimeStats {
  totalVisits: number;
  totalUsers: number;
  totalClicks: number;
  firstVisit: string;
  lastVisit: string;
}

interface Comment {
  key: string;
  value: {
    email: string;
    comment: string;
    timestamp: string;
  };
}

export function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dailyData, setDailyData] = useState<DailyData[]>([]);
  const [allTimeStats, setAllTimeStats] = useState<AllTimeStats | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      loadAnalytics();
      loadComments();
    }
  }, [isAuthenticated]);

  const loadAnalytics = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAnalytics(8);
      setDailyData(data.dailyData);
      setAllTimeStats(data.allTimeStats);
    } catch (err) {
      setError("Error al cargar los datos de análisis");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const loadComments = async () => {
    setLoadingComments(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-24cbf45b/comments`,
        {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`Error al cargar los comentarios: ${response.status}`);
      }

      const data = await response.json();
      console.log("Comments loaded:", data);
      setComments(data.comments || []);
    } catch (err) {
      console.error("Error loading comments:", err);
      // Don't show error toast, just log it - maybe there are no comments yet
      setComments([]);
    } finally {
      setLoadingComments(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast.success("Acceso concedido");
    } else {
      toast.error("Contraseña incorrecta");
      setPassword("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Página Administrativa</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Contraseña
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingrese la contraseña"
                  required
                  className="w-full"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white"
              >
                Ingresar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-gray-900 mb-8">Panel de Análisis de Tráfico</h1>
          <p className="text-gray-600">Cargando datos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-gray-900 mb-8">Panel de Análisis de Tráfico</h1>
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  const totalVisits = allTimeStats ? allTimeStats.totalVisits : 0;
  const totalUsers = allTimeStats ? allTimeStats.totalUsers : 0;
  const totalClicks = allTimeStats ? allTimeStats.totalClicks : 0;

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-gray-900 mb-8">Panel de Análisis de Tráfico</h1>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 mb-1">Visitas Totales</p>
                  <p className="text-gray-900">{totalVisits}</p>
                </div>
                <Eye className="w-8 h-8 text-[#ff6b35]" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 mb-1">Usuarios Únicos</p>
                  <p className="text-gray-900">{totalUsers}</p>
                </div>
                <Users className="w-8 h-8 text-[#ff6b35]" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 mb-1">Clics Totales</p>
                  <p className="text-gray-900">{totalClicks}</p>
                </div>
                <MousePointer className="w-8 h-8 text-[#ff6b35]" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Traffic Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tráfico del Sitio Web (Últimos 8 Días)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="visits" 
                  stroke="#ff6b35" 
                  strokeWidth={2}
                  name="Visitas"
                />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="#4ade80" 
                  strokeWidth={2}
                  name="Usuarios"
                />
                <Line 
                  type="monotone" 
                  dataKey="clicks" 
                  stroke="#60a5fa" 
                  strokeWidth={2}
                  name="Clics"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* All-Time Statistics */}
        {allTimeStats && (
          <Card>
            <CardHeader>
              <CardTitle>Estadísticas de Todos los Tiempos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#ff6b35]">
                    <TrendingUp className="w-5 h-5" />
                    <p className="text-gray-600">Total de Visitas</p>
                  </div>
                  <p className="text-gray-900">{allTimeStats.totalVisits}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#ff6b35]">
                    <Users className="w-5 h-5" />
                    <p className="text-gray-600">Usuarios Únicos</p>
                  </div>
                  <p className="text-gray-900">{allTimeStats.totalUsers}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#ff6b35]">
                    <MousePointer className="w-5 h-5" />
                    <p className="text-gray-600">Total de Clics</p>
                  </div>
                  <p className="text-gray-900">{allTimeStats.totalClicks}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#ff6b35]">
                    <Calendar className="w-5 h-5" />
                    <p className="text-gray-600">Primera Visita</p>
                  </div>
                  <p className="text-gray-900 text-sm">{allTimeStats.firstVisit}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#ff6b35]">
                    <Calendar className="w-5 h-5" />
                    <p className="text-gray-600">Última Visita</p>
                  </div>
                  <p className="text-gray-900 text-sm">{allTimeStats.lastVisit}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  <strong>Promedio de visitas por día:</strong>{" "}
                  {allTimeStats.totalVisits > 0 && allTimeStats.firstVisit !== 'N/A' 
                    ? Math.round(allTimeStats.totalVisits / Math.max(1, Math.ceil((Date.now() - new Date(allTimeStats.firstVisit).getTime()) / (1000 * 60 * 60 * 24))))
                    : 0}
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  <strong>Promedio de páginas por usuario:</strong>{" "}
                  {allTimeStats.totalUsers > 0 
                    ? (allTimeStats.totalVisits / allTimeStats.totalUsers).toFixed(2)
                    : 0}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Comments Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Comentarios de Usuarios</CardTitle>
          </CardHeader>
          <CardContent>
            {loadingComments ? (
              <p className="text-gray-600">Cargando comentarios...</p>
            ) : comments.length > 0 ? (
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.key} className="bg-gray-100 p-4 rounded">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-[#ff6b35]" />
                      <p className="text-gray-600">Comentario de {comment.value.email}</p>
                    </div>
                    <p className="text-gray-900 mt-2">{comment.value.comment}</p>
                    <p className="text-gray-500 text-sm mt-2">Enviado el {new Date(comment.value.timestamp).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No hay comentarios disponibles.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}