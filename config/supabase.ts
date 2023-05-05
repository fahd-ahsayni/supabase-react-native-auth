import { deleteItemAsync, setItemAsync, getItemAsync } from "expo-secure-store";
import { createClient } from "@supabase/supabase-js";

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    deleteItemAsync(key);
  },
};

const supabaseUrl = "https://ddyfjmyqfdmblkhyinby.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkeWZqbXlxZmRtYmxraHlpbmJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTI3MzYsImV4cCI6MTk5ODg2ODczNn0.RZaJScyZCx3FlAqWsiyU4O0L0d81vzp-omQp89_oZak";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
