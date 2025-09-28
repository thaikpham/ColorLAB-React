'use client'
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useCallback } from "react";

interface SearchInputProps {
  value: string
}
const SearchInput = ({ value }: SearchInputProps) => {
  const { push } = useRouter();
  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      push(`/admin/recipes?name=${event.currentTarget.value}`)
    }
  }, [push]);
  return (
    <Input
      type="text"
      defaultValue={value}
      onKeyDown={handleKeyDown}
      className="max-w-80 shadow-md"
      placeholder="Search for recipes" />
  )
}

export default SearchInput;
