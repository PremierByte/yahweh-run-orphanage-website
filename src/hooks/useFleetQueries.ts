import { useQuery } from "@tanstack/react-query";
import { fleetService } from "@/services/fleetService";

export const useFleetQueries = () => {
  const useFleetTracking = () => {
    return useQuery({
      queryKey: ["fleet", "tracking"],
      queryFn: () => fleetService.getFleetTracking(),
      refetchInterval: 30000, // Background sync every 30s as fallback to real-time events
    });
  };

  return {
    useFleetTracking,
  };
};
