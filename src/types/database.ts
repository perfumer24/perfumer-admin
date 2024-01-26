export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      accord: {
        Row: {
          created_at: string;
          id: string;
          ko_name: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          ko_name?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          ko_name?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      brand: {
        Row: {
          created_at: string;
          en_name: string | null;
          id: string;
          ko_name: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          en_name?: string | null;
          id?: string;
          ko_name?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          en_name?: string | null;
          id?: string;
          ko_name?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      fragrance: {
        Row: {
          created_at: string;
          id: number;
          ko_name: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          ko_name?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          ko_name?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      perfume: {
        Row: {
          accord_join_id: number | null;
          base_notes: number[] | null;
          brand_id: string | null;
          created_at: string;
          description: string | null;
          en_name: string | null;
          id: string;
          img_urls: string[] | null;
          ko_name: string | null;
          middle_notes: number[] | null;
          oil_amount_per_alcohol: string | null;
          perfume_accord_join_id: string | null;
          top_notes: number[] | null;
          updated_at: string | null;
        };
        Insert: {
          accord_join_id?: number | null;
          base_notes?: number[] | null;
          brand_id?: string | null;
          created_at?: string;
          description?: string | null;
          en_name?: string | null;
          id?: string;
          img_urls?: string[] | null;
          ko_name?: string | null;
          middle_notes?: number[] | null;
          oil_amount_per_alcohol?: string | null;
          perfume_accord_join_id?: string | null;
          top_notes?: number[] | null;
          updated_at?: string | null;
        };
        Update: {
          accord_join_id?: number | null;
          base_notes?: number[] | null;
          brand_id?: string | null;
          created_at?: string;
          description?: string | null;
          en_name?: string | null;
          id?: string;
          img_urls?: string[] | null;
          ko_name?: string | null;
          middle_notes?: number[] | null;
          oil_amount_per_alcohol?: string | null;
          perfume_accord_join_id?: string | null;
          top_notes?: number[] | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "perfume_accord_join_id_fkey";
            columns: ["accord_join_id"];
            isOneToOne: false;
            referencedRelation: "perfume_accord_join_table";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "perfume_brand_id_fkey";
            columns: ["brand_id"];
            isOneToOne: false;
            referencedRelation: "brand";
            referencedColumns: ["id"];
          },
        ];
      };
      perfume_accord_join_table: {
        Row: {
          accord_id: string;
          created_at: string;
          id: number;
          perfume_id: string;
          updated_at: string | null;
        };
        Insert: {
          accord_id: string;
          created_at?: string;
          id?: number;
          perfume_id: string;
          updated_at?: string | null;
        };
        Update: {
          accord_id?: string;
          created_at?: string;
          id?: number;
          perfume_id?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "perfume_accord_join_table_accord_id_fkey";
            columns: ["accord_id"];
            isOneToOne: false;
            referencedRelation: "accord";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "perfume_accord_join_table_perfume_id_fkey";
            columns: ["perfume_id"];
            isOneToOne: false;
            referencedRelation: "perfume";
            referencedColumns: ["id"];
          },
        ];
      };
      perfume_price: {
        Row: {
          created_at: string;
          id: number;
          perfume_id: string | null;
          price: number | null;
          updated_at: string | null;
          volume: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          perfume_id?: string | null;
          price?: number | null;
          updated_at?: string | null;
          volume?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          perfume_id?: string | null;
          price?: number | null;
          updated_at?: string | null;
          volume?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "perfume_price_perfume_id_fkey";
            columns: ["perfume_id"];
            isOneToOne: false;
            referencedRelation: "perfume";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
        Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
        Database["public"]["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never;
