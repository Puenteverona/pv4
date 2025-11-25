import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import analytics from "./analytics.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-24cbf45b/health", (c) => {
  return c.json({ status: "ok" });
});

// Analytics routes
app.route("/make-server-24cbf45b/analytics", analytics);

// Comments routes
app.post("/make-server-24cbf45b/comments", async (c) => {
  try {
    const body = await c.req.json();
    const { email, comment, timestamp } = body;

    if (!comment) {
      return c.json({ error: "Comment is required" }, 400);
    }

    // Generate a unique ID for the comment
    const commentId = `comment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Store the comment in the KV store
    await kv.set(commentId, {
      email: email || "anónimo",
      comment,
      timestamp: timestamp || new Date().toISOString(),
    });

    console.log(`Comment saved: ${commentId}`);
    return c.json({ success: true, id: commentId });
  } catch (error) {
    console.error("Error saving comment:", error);
    return c.json({ error: "Failed to save comment" }, 500);
  }
});

app.get("/make-server-24cbf45b/comments", async (c) => {
  try {
    // Get all comments by prefix
    const comments = await kv.getByPrefix("comment_");
    
    // Sort by timestamp (newest first)
    const sortedComments = comments.sort((a, b) => {
      const timeA = new Date(a.value.timestamp).getTime();
      const timeB = new Date(b.value.timestamp).getTime();
      return timeB - timeA;
    });

    return c.json({ comments: sortedComments });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return c.json({ error: "Failed to fetch comments" }, 500);
  }
});

Deno.serve(app.fetch);