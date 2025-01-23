export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      recipes: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          slug: string
          content: string
          image_url: string | null
          author_id: string
          category: string
          difficulty: string
          cooking_time: string
          ingredients: Json[]
          instructions: Json[]
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          slug: string
          content: string
          image_url?: string | null
          author_id: string
          category: string
          difficulty: string
          cooking_time: string
          ingredients: Json[]
          instructions: Json[]
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          slug?: string
          content?: string
          image_url?: string | null
          author_id?: string
          category?: string
          difficulty?: string
          cooking_time?: string
          ingredients?: Json[]
          instructions?: Json[]
        }
      }
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          username: string
          full_name: string
          avatar_url: string | null
          bio: string | null
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string
          username: string
          full_name: string
          avatar_url?: string | null
          bio?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          username?: string
          full_name?: string
          avatar_url?: string | null
          bio?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 