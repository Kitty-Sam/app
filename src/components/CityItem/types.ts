export type CityItemProps = {
  id: string;
  isDefault: boolean;
  selected?: boolean;
  title?: string;
  trashVisibleId: string | null;
  update: (id: string) => void;
};

export type ContextAnimationType = {
  translateX: number;
};
