"use client";

import * as React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { RecipeData, RecipeTableList } from "@/type/recipe.type";
import { Button } from "../ui/button";
import Link from "next/link";
import { Pencil, Receipt, X } from "lucide-react";

interface RecipeDataTableProps {
  data: RecipeTableList[]
}

const contrast: Record<RecipeData['contrast'], string> = {
  normal: 'Normal',
  "very-high": 'Very High',
  high: 'High',
  low: 'Low',
  medium: 'Medium',
  soft: 'Soft',
}

const saturation: Record<RecipeData['saturation'], string> = {
  "super-saturated": 'Super Saturated',
  "very-low": 'Very Low',
  extreme: 'Extreme',
  faded: 'Faded',
  high: 'High',
  low: 'Low',
  maximum: 'Maximum',
  moderate: 'Moderate',
  muted: 'Muted',
  normal: 'Normal',
  vibrant: 'Vibrant'

}

export default function RecipeDataTable({ data }: RecipeDataTableProps) {
  return (
    <div className="max-h-[calc(100vh-250px)] overflow-scroll">
      <Table className="min-w-[600px]">
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Contrast</TableHead>
            <TableHead>Personality Color</TableHead>
            <TableHead>Saturation</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.id}</TableCell>
              <TableCell>{p.name}</TableCell>
              <TableCell>{contrast[p.contrast]}</TableCell>
              <TableCell>{p.personalityColor}</TableCell>
              <TableCell>{saturation[p.saturation]}</TableCell>
              <TableCell className="flex justify-between">
                <Button variant='outline' className="cursor-pointer" asChild>
                  <Link href={`/recipes/${p.id}`}>
                    <Receipt />
                  </Link>
                </Button>
                <Button variant='outline' className="cursor-pointer" asChild>
                  <Link href={`/recipes/${p.id}`}>
                    <Pencil />
                  </Link>
                </Button>
                <Button variant='destructive' className="cursor-pointer">
                  <X />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-muted/10 backdrop-blur-2xl">
          <TableRow>
            <TableCell colSpan={4} className="text-right font-medium">
              Total members
            </TableCell>
            <TableCell className="font-bold">{data.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
