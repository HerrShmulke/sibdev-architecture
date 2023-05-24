import { MaybeRef, computed, unref } from "vue";
import { formatDate } from "../utils/date";

export function useFormatDate(date: MaybeRef<Date>) {
  return computed(() => formatDate(unref(date)));
}