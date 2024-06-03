"use client";

import Live from "@/components/Live";
import { Room } from "./Room";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Live />
    </div>
  );
}
