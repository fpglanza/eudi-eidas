import { type Metadata } from "next";
import vendors from "@/data/vendors.json";
import VendorTable from "@/components/VendorTable";

export const metadata: Metadata = {
  title: "Vendor EUDI/eIDAS",
  description: "Confronta provider di identità, firme elettroniche e servizi fiduciari.",
};

export default function VendorsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Vendor EUDI / eIDAS</h1>
      {/* @ts-expect-error static json import typing */}
      <VendorTable data={vendors} />
    </main>
  );
}
