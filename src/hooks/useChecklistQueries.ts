import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { checklistService, NewChecklistData } from "@/services/checklistService";
import { toast } from "react-hot-toast";

export const useChecklistQueries = () => {
  const queryClient = useQueryClient();

  const useChecklists = () => {
    return useQuery({
      queryKey: ["checklists"],
      queryFn: () => checklistService.getChecklists(),
    });
  };

  const useCreateChecklist = () => {
    return useMutation({
      mutationFn: (data: NewChecklistData) => checklistService.createChecklist(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["checklists"] });
        toast.success("New protocol created successfully");
      },
      onError: () => {
        toast.error("Failed to create new protocol");
      },
    });
  };

  const useToggleMandatory = () => {
    return useMutation({
      mutationFn: ({ id, mandatory }: { id: string, mandatory: boolean }) =>
        checklistService.toggleMandatoryStatus(id, !mandatory),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["checklists"] });
        toast.success("Checklist updated successfully");
      },
      onError: () => {
        toast.error("Failed to update checklist");
      },
    });
  };

  return {
    useChecklists,
    useCreateChecklist,
    useToggleMandatory,
  };
};
