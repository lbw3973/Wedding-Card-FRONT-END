import { IReqInvitationJSON, IReqInvitationPhotos } from "@/types/invitation";
import { formInstance, instance } from "./axios";
import { getUserInfo } from "./kakao";
import { encrypt } from "@/utils/crypto";

export const postInvitationData = async ({
  JsonData,
  Images,
  isTemp,
}: {
  JsonData: IReqInvitationJSON;
  Images: IReqInvitationPhotos;
  isTemp: boolean;
}) => {
  const formData = new FormData();

  if (Images.main_photo) {
    formData.append("mainImage", Images.main_photo);
  }

  if (Images.slide_photos) {
    Images.slide_photos.forEach(image => {
      formData.append(`images${image.index + 1}`, image.file);
    });
  }

  if (Images.kakao_thumbnail) {
    formData.append("thumbnail", Images.kakao_thumbnail);
  }

  formData.append("json", new Blob([JSON.stringify(JsonData)], { type: "application/json" }));

  const uid = await getUserInfo();
  const crypto = encrypt(uid.id.toString());

  const res = await formInstance.post(`/save/${isTemp ? "temp" : "information"}`, formData, {
    headers: { uid: crypto },
  });
  return res;
};

export const testData = async ({ JsonData }: { JsonData: IReqInvitationJSON }) => {
  const uid = await getUserInfo();
  const crypto = encrypt(uid.id.toString());
  const res = await instance.post("/test", JsonData, { headers: { uid: crypto } });
  return res;
};

export const getInvitationData = async (uid: string) => {
  const res = await instance.get("/inquiry", { headers: { Uid: uid } });
  return res.data;
};
