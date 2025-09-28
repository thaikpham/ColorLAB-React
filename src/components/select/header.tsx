'use client'
import { useToast } from "@/hooks/use-toast";
import React from "react";
import { CheckboxPro } from "../ui/checkbox-pro";

export default function SelectAllHeader({
  table,
  toast,
}: {
  table: {
    getIsAllRowsSelected: () => boolean;
    getIsSomeRowsSelected: () => boolean;
    toggleAllRowsSelected: (value: boolean) => void;
  };
  toast: ReturnType<typeof useToast>["toast"];
}) {
  const allSelected = table.getIsAllRowsSelected();
  const someSelected = table.getIsSomeRowsSelected();
  const prevAllSelectedRef = React.useRef(allSelected);

  React.useEffect(() => {
    if (allSelected && !prevAllSelectedRef.current) {
      toast({
        title: "All Rows Selected",
        description: "All rows in the table have been selected",
      });
    }
    prevAllSelectedRef.current = allSelected;
  }, [allSelected, toast]);

  const handleSelectAll = (value: boolean) => {
    table.toggleAllRowsSelected(value);
  };

  return (
    <CheckboxPro
      key={
        allSelected
          ? "header-checked"
          : someSelected
            ? "header-indeterminate"
            : "header-unchecked"
      }
      checked={allSelected || (someSelected && "indeterminate")}
      onCheckedChange={(value) => handleSelectAll(!!value)}
      aria-label="Select all rows"
    />
  );
}
