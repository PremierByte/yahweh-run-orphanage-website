import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { dispatchService } from "@/services/dispatchService";
import { emergencyService } from "@/services/emergencyService";

export const useDispatchQueries = () => {
  const usePriorityQueue = (filters?: {
    search?: string;
    status?: string;
    type?: string;
  }) => {
    return useQuery({
      queryKey: ["dispatch", "priority-queue", filters],
      queryFn: () => dispatchService.getPriorityQueue(filters),
    });
  };

  const useIncomingQueue = () => {
    return useQuery({
      queryKey: ["dispatch", "incoming-queue"],
      queryFn: () => dispatchService.getIncomingQueue(),
    });
  };

  const useEmergencyQueue = () => {
    return useQuery({
      queryKey: ["dispatch", "emergency-queue"],
      queryFn: () => emergencyService.getEmergencies(),
    });
  };

  const useTrackingQueue = () => {
    return useQuery({
      queryKey: ["dispatch", "tracking-queue"],
      queryFn: () => dispatchService.getQueue(),
    });
  };

  const useAssignMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (payload: { requestId: string; techName: string }) =>
        dispatchService.assignTechnician(payload),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["dispatch"] });
      },
    });
  };

  const useAutoAssignMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (requestId: string) => dispatchService.autoAssign(requestId),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["dispatch"] });
      },
    });
  };

  return {
    usePriorityQueue,
    useIncomingQueue,
    useEmergencyQueue,
    useTrackingQueue,
    useAssignMutation,
    useAutoAssignMutation,
  };
};
