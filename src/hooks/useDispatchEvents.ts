"use client";

import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import initializeEcho from "@/lib/echo";

export const useDispatchEvents = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const echo = initializeEcho();
    if (!echo) return;

    const channel = echo.channel("dispatch");

    const handleServiceRequestUpdate = (data: any) => {
      console.log("Service Request Updated:", data);
      queryClient.invalidateQueries({ queryKey: ["dispatch"] });
      queryClient.invalidateQueries({ queryKey: ["work-orders"] });
      queryClient.invalidateQueries({ queryKey: ["priority-dispatch-queue"] });
      queryClient.invalidateQueries({ queryKey: ["dispatch-queue-matrix"] });
      queryClient.invalidateQueries({ queryKey: ["fleet", "tracking"] });
      
      const ref = data.serviceRequest?.queue_reference || data.serviceRequest?.id;
      const status = data.serviceRequest?.status;
      
      toast(`Update received for ${ref}. Status: ${status}`);
    };

    const handleWorkOrderCreated = (data: any) => {
      console.log("Work Order Created:", data);
      queryClient.invalidateQueries({ queryKey: ["work-orders"] });
      queryClient.invalidateQueries({ queryKey: ["dispatch"] });
      queryClient.invalidateQueries({ queryKey: ["priority-dispatch-queue"] });
      queryClient.invalidateQueries({ queryKey: ["dispatch-queue-matrix"] });
      queryClient.invalidateQueries({ queryKey: ["fleet", "tracking"] });
      
      const ref = data.workOrder?.work_order_reference || data.workOrder?.id;
      
      toast.success(`New Work Order Generated: ${ref}`);
    };

    channel.listen(".service.request.updated", handleServiceRequestUpdate);
    channel.listen(".work.order.created", handleWorkOrderCreated);

    return () => {
      echo.leaveChannel("dispatch");
    };
  }, [queryClient]);
};
