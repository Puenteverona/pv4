import { projectId, publicAnonKey } from './supabase/info';

// Generate or retrieve anonymous user ID
const getUserId = (): string => {
  let userId = localStorage.getItem('pv_analytics_uid');
  if (!userId) {
    userId = `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem('pv_analytics_uid', userId);
  }
  return userId;
};

interface TrackPageViewParams {
  page: string;
  category?: string;
  guide?: string;
}

export const trackPageView = async ({ page, category, guide }: TrackPageViewParams) => {
  try {
    const userId = getUserId();
    
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-24cbf45b/analytics/track`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          page,
          category,
          guide,
          userId
        })
      }
    );

    if (!response.ok) {
      console.error('Failed to track page view:', await response.text());
    }
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

export const getAnalytics = async (days: number = 8) => {
  try {
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-24cbf45b/analytics/data?days=${days}`,
      {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch analytics data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching analytics:', error);
    throw error;
  }
};

export const getPopularPages = async () => {
  try {
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-24cbf45b/analytics/popular`,
      {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch popular pages');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching popular pages:', error);
    throw error;
  }
};
