"use client";

import { useState } from "react";
import { useCryptoData } from "@/app/hooks/useCryptoData";
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
import { ChevronDownIcon, ChevronUpIcon, ListFilterIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import {} from "@/components/ui/popover";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

type CryptoCoin = {
  id: number;
  nombre: string;
  simbolo: string;
  imagen: string;
  precio_actual: number;
  market_cap_rank: number;
  market_cap: number;
  volumen_total: number;
};

const columns: ColumnDef<CryptoCoin>[] = [
  {
    header: "Rank",
    accessorKey: "market_cap_rank",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("market_cap_rank")}</div>
    ),
    size: 50,
  },
  {
    header: "Nombre",
    accessorKey: "nombre", // Clave para el filtro global
    cell: ({ row }) => (
      <div className="flex items-center gap-3 font-medium">
        <Image
          src={row.original.imagen}
          alt={row.original.nombre}
          width={36}
          height={36}
        />
        <span>{row.getValue("nombre")}</span>
        <Badge variant="secondary">{row.original.simbolo.toUpperCase()}</Badge>
      </div>
    ),
    size: 250,
  },
  {
    header: "Precio (USD)",
    accessorKey: "precio_actual",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("precio_actual"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-left font-semibold">{formatted}</div>;
    },
    size: 150,
  },
  {
    header: "Capitalización de Mercado",
    accessorKey: "market_cap",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("market_cap"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact", // Formato compacto (e.g., $1.2T, $500B)
      }).format(amount);
      return <div className="text-left">{formatted}</div>;
    },
    size: 200,
  },
  {
    header: "Volumen (24h)",
    accessorKey: "volumen_total",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("volumen_total"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
      }).format(amount);
      return <div className="text-left">{formatted}</div>;
    },
    size: 200,
  },
];

export default function TableComponent() {
  const { data, error, isLoading } = useCryptoData();

  const [sorting, setSorting] = useState<SortingState>([
    { id: "market_cap_rank", desc: false }, // Ordenar por rank por defecto
  ]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    // Si hay datos, úsalos; de lo contrario, un array vacío.
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter,
    },
  });

  if (isLoading) return <div>Cargando datos de criptomonedas...</div>;
  if (error) return <div>Error al cargar los datos.</div>;

  return (
    <div className="space-y-4">
      {/* Filtro global */}
      <div className="flex items-center">
        <div className="relative w-full max-w-sm">
          <Input
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Buscar por nombre o símbolo..."
            className="pl-8"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-2">
            <ListFilterIcon className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Tabla */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    style={{ width: `${header.getSize()}px` }}
                  >
                    <div
                      className="flex cursor-pointer select-none items-center gap-2"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <ChevronUpIcon className="h-4 w-4" />,
                        desc: <ChevronDownIcon className="h-4 w-4" />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No se encontraron resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Paginación */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}
