export type UserRole = "user" | "admin";

export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  role: UserRole;
  created_at: string;
}

export interface Template {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: "wedding" | "birthday" | "travel" | "keepsake";
  thumbnail_url?: string;
  preview_badge?: string;
  default_config: {
    theme: string;
    totalPages: number;
    pages: Record<string, any>;
  };
  is_active: boolean;
  is_featured: boolean;
  created_at: string;
}

export interface Album {
  id: string;
  user_id: string;
  template_id?: string;
  title: string;
  person_name: string;
  special_date?: string;
  pages_data: Record<string, any>;
  status: "draft" | "published" | "archived";
  created_at: string;
  updated_at: string;
}
