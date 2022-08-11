export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""
export const hasExistId = GA_ID !== ""

export const paveview = (path) => {
  window.gtag("config", GA_ID, {
    page_path: path,
  })
}

export const event = ({ action, category, label, value = "" }) => {
  if (!hasExistId) return

  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  })
}
