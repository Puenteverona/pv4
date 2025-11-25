import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Homepage } from "./components/Homepage";
import { CategoryPage } from "./components/CategoryPage";
import { GuidePage } from "./components/GuidePage";
import { AdminPage } from "./components/AdminPage";
import { Toaster } from "./components/ui/sonner";
import { trackPageView } from "./utils/analytics";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "category" | "guide" | "admin">("home");
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [currentGuide, setCurrentGuide] = useState<string>("");
  const [pageHistory, setPageHistory] = useState<Array<{ page: "home" | "category" | "guide" | "admin"; category?: string; guide?: string }>>([]);

  // Track page views whenever navigation happens
  useEffect(() => {
    if (currentPage !== "admin") {
      trackPageView({
        page: currentPage,
        category: currentCategory || undefined,
        guide: currentGuide || undefined
      });
    }
  }, [currentPage, currentCategory, currentGuide]);

  const navigateToCategory = (categoryId: string) => {
    setPageHistory([...pageHistory, { page: currentPage, category: currentCategory, guide: currentGuide }]);
    setCurrentPage("category");
    setCurrentCategory(categoryId);
    setCurrentGuide("");
  };

  const navigateToGuide = (guideId: string) => {
    setPageHistory([...pageHistory, { page: currentPage, category: currentCategory, guide: currentGuide }]);
    setCurrentPage("guide");
    setCurrentGuide(guideId);
  };

  const navigateHome = () => {
    setCurrentPage("home");
    setCurrentCategory("");
    setCurrentGuide("");
    setPageHistory([]);
  };

  const navigateBack = () => {
    if (pageHistory.length > 0) {
      const lastPage = pageHistory[pageHistory.length - 1];
      setCurrentPage(lastPage.page);
      setCurrentCategory(lastPage.category || "");
      setCurrentGuide(lastPage.guide || "");
      setPageHistory(pageHistory.slice(0, -1));
    } else {
      navigateHome();
    }
  };

  const navigateToAdmin = () => {
    setPageHistory([...pageHistory, { page: currentPage, category: currentCategory, guide: currentGuide }]);
    setCurrentPage("admin");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header
        onHomeClick={navigateHome}
        onBackClick={navigateBack}
        showBackButton={currentPage !== "home"}
      />
      
      <main className="flex-1">
        {currentPage === "home" ? (
          <Homepage onCategoryClick={navigateToCategory} />
        ) : currentPage === "category" ? (
          <CategoryPage categoryId={currentCategory} onGuideClick={navigateToGuide} />
        ) : currentPage === "guide" ? (
          <GuidePage guideId={currentGuide} categoryId={currentCategory} onGuideClick={navigateToGuide} />
        ) : (
          <AdminPage />
        )}
      </main>
      
      <Footer onAdminClick={navigateToAdmin} />
      <Toaster />
    </div>
  );
}
