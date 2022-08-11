export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""
export const hasExistId = GA_ID !== ""

type ContactEvent = {
  action: "submit_form"
  category: "contact"
  label: string
}

type ClickEvent = {
  action: "click"
  category: "other"
  label: string
}

export type Event = ContactEvent | ClickEvent

export const paveview = (path: string) => {
  window.gtag("config", GA_ID, {
    page_path: path,
  })
}

export const event = ({ action, category, label }: Event) => {
  if (!hasExistId) return

  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
  })
}
