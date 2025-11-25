import { Hono } from "npm:hono";
import * as kv from "./kv_store.tsx";

const analytics = new Hono();

interface PageView {
  timestamp: number;
  page: string;
  category?: string;
  guide?: string;
  userId: string; // Anonymous user ID
}

interface DailySummary {
  date: string;
  visits: number;
  uniqueUsers: Set<string>;
  clicks: number;
}

// Track a page view
analytics.post("/track", async (c) => {
  try {
    const body = await c.req.json();
    const { page, category, guide, userId } = body;
    
    const timestamp = Date.now();
    const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    
    const pageView: PageView = {
      timestamp,
      page,
      category,
      guide,
      userId
    };
    
    // Store the page view
    const viewKey = `analytics:view:${date}:${timestamp}:${userId}`;
    await kv.set(viewKey, pageView);
    
    return c.json({ success: true });
  } catch (error) {
    console.error("Error tracking page view:", error);
    return c.json({ error: "Failed to track page view" }, 500);
  }
});

// Get analytics data for a date range
analytics.get("/data", async (c) => {
  try {
    const days = parseInt(c.req.query("days") || "8");
    
    // Get all analytics views
    const allViews = await kv.getByPrefix("analytics:view:");
    
    if (!allViews || allViews.length === 0) {
      // Return empty data if no views yet
      return c.json({
        dailyData: [],
        allTimeStats: {
          totalVisits: 0,
          totalUsers: 0,
          totalClicks: 0
        }
      });
    }
    
    // Parse and organize by date
    const viewsByDate = new Map<string, PageView[]>();
    const allUsers = new Set<string>();
    
    allViews.forEach((view: PageView) => {
      const date = new Date(view.timestamp).toISOString().split('T')[0];
      if (!viewsByDate.has(date)) {
        viewsByDate.set(date, []);
      }
      viewsByDate.get(date)!.push(view);
      allUsers.add(view.userId);
    });
    
    // Get last N days
    const today = new Date();
    const dailyData = [];
    
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      const views = viewsByDate.get(dateStr) || [];
      const uniqueUsers = new Set(views.map(v => v.userId));
      
      // Format date as "Nov 10"
      const formattedDate = date.toLocaleDateString('es', { month: 'short', day: 'numeric' });
      
      dailyData.push({
        date: formattedDate,
        visits: views.length,
        users: uniqueUsers.size,
        clicks: views.length // For simplicity, counting each view as a click
      });
    }
    
    // Calculate all-time stats
    const allTimeStats = {
      totalVisits: allViews.length,
      totalUsers: allUsers.size,
      totalClicks: allViews.length,
      firstVisit: allViews.length > 0 ? new Date(Math.min(...allViews.map((v: PageView) => v.timestamp))).toLocaleDateString('es') : 'N/A',
      lastVisit: allViews.length > 0 ? new Date(Math.max(...allViews.map((v: PageView) => v.timestamp))).toLocaleDateString('es') : 'N/A'
    };
    
    return c.json({ dailyData, allTimeStats });
  } catch (error) {
    console.error("Error getting analytics data:", error);
    return c.json({ error: "Failed to get analytics data" }, 500);
  }
});

// Get most popular pages
analytics.get("/popular", async (c) => {
  try {
    const allViews = await kv.getByPrefix("analytics:view:");
    
    if (!allViews || allViews.length === 0) {
      return c.json({ pages: [] });
    }
    
    // Count views by page
    const pageCounts = new Map<string, number>();
    
    allViews.forEach((view: PageView) => {
      let pageKey = view.page;
      if (view.category) pageKey += ` > ${view.category}`;
      if (view.guide) pageKey += ` > ${view.guide}`;
      
      pageCounts.set(pageKey, (pageCounts.get(pageKey) || 0) + 1);
    });
    
    // Convert to array and sort
    const pages = Array.from(pageCounts.entries())
      .map(([page, count]) => ({ page, views: count }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);
    
    return c.json({ pages });
  } catch (error) {
    console.error("Error getting popular pages:", error);
    return c.json({ error: "Failed to get popular pages" }, 500);
  }
});

export default analytics;
