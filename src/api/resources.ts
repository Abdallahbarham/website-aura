import { Request, Response } from "express";
import { getDatabaseConnection } from "../utils/database"; // Corrected import path

export const getResources = async (req: Request, res: Response) => {
  try {
    const db = await getDatabaseConnection();

    // Get pagination parameters from the query
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;

    // Fetch paginated data
    const result = await db.request().query(`
      SELECT id, title, excerpt, category, tags, readTime, imageUrl, content, created_at 
      FROM resources 
      ORDER BY created_at DESC 
      OFFSET ${offset} ROWS FETCH NEXT ${limit} ROWS ONLY
    `);

    // Fetch total count for pagination
    const countResult = await db.request().query("SELECT COUNT(*) as total FROM resources");
    const total = countResult.recordset[0].total;

    // Log the raw data fetched from the database
    console.log("Fetched resources from database:", result.recordset);

    const mappedResources = result.recordset.map((resource: any) => ({
      id: resource.id,
      title: resource.title,
      excerpt: resource.excerpt,
      category: resource.category,
      tags: resource.tags ? resource.tags.split(",") : [], // Convert tags to an array
      readTime: resource.readTime,
      imageUrl: resource.imageUrl,
      content: resource.content,
      date: resource.created_at // Use the actual `created_at` field from the database
    }));

    // Log the mapped resources
    console.log("Mapped resources:", mappedResources);

    res.json({ resources: mappedResources, total });
  } catch (error) {
    console.error("Error fetching resources:", error);
    res.status(500).json({ error: "Failed to fetch resources" });
  }
};
