export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ru-RU').format(date);
}

export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('ru-RU', { timeStyle: 'short' }).format(date);
}