import { addLocaleData } from "react-intl"
import locale_en from "react-intl/locale-data/en"
import locale_vi from "react-intl/locale-data/vi"

import messages_vi from "translations/vi.json"
import messages_en from "translations/en.json"


export const messages = {
  'vi': messages_vi,
  'en': messages_en
}

const addLocale = () => (
  addLocaleData([...locale_en, ...locale_vi])
)

export default addLocale
