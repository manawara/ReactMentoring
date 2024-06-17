export const formatedDate = (date: string) => {
  const newDate = new Date(date).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
  return newDate
}
