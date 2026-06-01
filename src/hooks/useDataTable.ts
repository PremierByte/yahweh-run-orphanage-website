"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface DataTableOptions<T> {
  queryKey: string;
  fetchFn: (params: any) => Promise<{ data: T[]; meta: any }>;
  deleteFn?: (ids: number[]) => Promise<any>;
}

export function useDataTable<T extends { id: number }>({
  queryKey,
  fetchFn,
  deleteFn,
}: DataTableOptions<T>) {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sort, setSort] = useState({ column: "created_at", direction: "desc" });
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: [queryKey, search, page, perPage, sort],
    queryFn: () =>
      fetchFn({
        search,
        page,
        per_page: perPage,
        sort_by: sort.column,
        sort_dir: sort.direction,
      }),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      toast.success("Action completed successfully");
      setSelectedIds([]);
    },
    onError: () => toast.error("An error occurred"),
  });

  const toggleSelectRow = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  /**
   * Manually triggers a background refetch of the current query.
   */
  const refresh = async () => {
    await refetch();
  };

  return {
    state: { search, page, perPage, sort, selectedIds },
    actions: {
      setSearch,
      setPage,
      setPerPage,
      setSort,
      setSelectedIds,
      toggleSelectRow,
    },
    deleteMutation,
    refresh,
    items: data?.data || [],
    meta: data?.meta,
    isLoading,
  };
}
