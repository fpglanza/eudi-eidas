"use client";

import * as React from "react";
import { useMemo, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export type Vendor = {
  name: string;
  country: string;
  categories: string[];
  walletReady: boolean;
  website: string;
};

export default function VendorTable({ data }: { data: Vendor[] }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const columns = useMemo<ColumnDef<Vendor>[]>(() => [
    {
      header: "Vendor",
      accessorKey: "name",
      cell: ({ row }) => (
        <a
          href={row.original.website}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline"
        >
          {row.original.name}
        </a>
      ),
    },
    { header: "Paese", accessorKey: "country" },
    {
      header: "Categorie",
      accessorKey: "categories",
      cell: ({ getValue }) => (
        <div className="flex flex-wrap gap-1">
          {(getValue() as string[]).map((c) => (
            <Badge key={c} variant="secondary">{c}</Badge>
          ))}
        </div>
      ),
    },
    {
      header: "EUDI-ready",
      accessorKey: "walletReady",
      cell: ({ getValue }) => (getValue<boolean>() ? "Sì" : "No"),
    },
  ], []);

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: (row, _columnId, filterValue: string) => {
      const q = (filterValue || "").toLowerCase();
      if (!q) return true;
      const v = row.original;
      return (
        v.name.toLowerCase().includes(q) ||
        v.country.toLowerCase().includes(q) ||
        v.categories.join(" ").toLowerCase().includes(q)
      );
    },
  });

  return (
    <div className="space-y-4">
      <div className="flex gap-2 items-center">
        <Input
          placeholder="Cerca vendor, paese o categoria…"
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="rounded-2xl border">
        <table className="w-full text-sm">
          <thead>
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((h) => (
                  <th
                    key={h.id}
                    className="px-3 py-2 text-left cursor-pointer select-none"
                    onClick={h.column.getToggleSortingHandler()}
                  >
                    {flexRender(h.column.columnDef.header, h.getContext())}
                    {{ asc: " ▲", desc: " ▼" }[h.column.getIsSorted() as string] ?? null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-t">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-3 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm">Righe: {table.getFilteredRowModel().rows.length}</div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Prev
          </Button>
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
