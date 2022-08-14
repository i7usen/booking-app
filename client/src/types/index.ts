export interface Range {
  startDate?: Date | undefined;
  endDate?: Date | undefined;
  color?: string | undefined;
  key?: string | undefined;
}

export type Options = {
  adult?: number;
  chidlren?: number;
  room?: number;
};

export type RangeFocus = [number, 0 | 1];
