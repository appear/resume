export function formatDate({
  start_date,
  end_date,
}: {
  start_date?: string
  end_date?: string
}): string {
  return `${start_date} ${end_date ? `~ ${end_date}` : ''}`
}
