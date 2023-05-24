import { MaybeRef, computed, unref } from "vue";
import { formatTime } from "../utils/date";

export function useFormatTime(date: MaybeRef<Date>) {
  return computed(() => formatTime(unref(date)));
}