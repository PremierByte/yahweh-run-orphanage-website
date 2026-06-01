import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { workOrderService } from "@/services/workOrderService";
import { toast } from "sonner";

export const useWorkOrderQueries = () => {
  const queryClient = useQueryClient();

  const useWorkOrders = () => {
    return useQuery({
      queryKey: ["work-orders"],
      queryFn: () => workOrderService.getAll(),
    });
  };

  const useActiveWorkOrders = () => {
    return useQuery({
      queryKey: ["work-orders", "active"],
      queryFn: () => workOrderService.getActiveOrders(),
      refetchInterval: 10000,
    });
  };

  const useWorkOrderDetails = (referenceId: string) => {
    return useQuery({
      queryKey: ["work-orders", referenceId],
      queryFn: () => workOrderService.getByReference(referenceId),
      enabled: !!referenceId,
    });
  };

  const useCreateWorkOrder = () => {
    return useMutation({
      mutationFn: (payload: {
        service_request_id: number;
        assigned_technician?: string;
        scheduled_at?: string;
        description?: string;
      }) => workOrderService.create(payload),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["work-orders"] });
        queryClient.invalidateQueries({ queryKey: ["dispatch"] }); // Invalidate dispatch queues as status changes
        toast.success("Work order generated successfully");
      },
      onError: (error: any) => {
        toast.error(
          error.response?.data?.message || "Failed to generate work order"
        );
      },
    });
  };

  return {
    useWorkOrders,
    useWorkOrderDetails,
    useCreateWorkOrder,
    useActiveWorkOrders,
  };
};
