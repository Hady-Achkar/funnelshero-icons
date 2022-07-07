import { Icon, RawData } from "../types";

export const ContentTransducer = (RawContent: any[]): Icon[] => {
  return RawContent.map((item) => {
    return {
      id: item?.id.toString(),
      url: item?.images["128"],
      description: item?.description,
    };
  });
};
