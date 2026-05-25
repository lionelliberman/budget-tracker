"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase/client";

export default function Home() {
  useEffect(() => {
    async function test() {
      const { data, error } = await supabase
        .from("customers")
        .select("*")
        .limit(1);

      console.log(data);
      console.log(error);
    }

    test();
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">Budget Tracker</h1>
    </main>
  );
}
