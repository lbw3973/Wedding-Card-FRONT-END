import { getInvitationData } from "@/apis/server";
import { useQuery } from "@tanstack/react-query";

export const useGetInvitationData = () => {
  const { data: invitationData, isLoading } = useQuery({
    queryKey: ["invitationData"],
    queryFn: () => getInvitationData("s"),
    staleTime: Infinity,
  });
  return { invitationData, isLoading };
};
