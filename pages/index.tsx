import type { NextPage } from "next"

import TopLayout from "../components/topLayout"

const code = `
while (IAmAlive) {
  challenge();
  if (satisfied) {
    break;
  }
}`

const Home: NextPage = () => {
  return (
    <TopLayout>
      <div className="flex items-center justify-center h-full text-xl">
        <div>
          <pre>{code}</pre>
          <pre className="blink">_</pre>
        </div>
      </div>
    </TopLayout>
  )
}

export default Home
