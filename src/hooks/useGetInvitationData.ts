import { getInvitationData } from "@/apis/server";
import { IResInvitation } from "@/types/invitation";
import { useQuery } from "@tanstack/react-query";

export const useGetInvitationData = (id: string) => {
  const { data: invitationData, isLoading } = useQuery<IResInvitation>({
    queryKey: ["invitationData"],
    queryFn: () => getInvitationData(id),
    staleTime: Infinity,
  });
  return { invitationData, isLoading };
};
