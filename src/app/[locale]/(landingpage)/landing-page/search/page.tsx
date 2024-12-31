import PageSearch from "../../../../../components/page-search"
import { getDictionary } from "../../../dictionaries"

const Page = async (props: { params: Promise<{ lang: string }> }) => {
  const params = await props.params
  const lang = params.lang

  const dict = await getDictionary(lang)

  return <PageSearch lang={lang} dict={dict} />
}

export default Page
