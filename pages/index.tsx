import type { NextPage } from "next"

import Layout from "../components/layout"

const Home: NextPage = () => {
  const code = `
  while (asLongAsILive) {
    hasResult = challenge();
    
    if (hasResult) {
      continue();
    } else {
      getNewSkill();
      goToNextStep();
    }
  }`
  return (
    <Layout>
      <div className="my-48 text-xl">
        <pre>{code}</pre><pre className="blink">  _</pre>
      </div>
    </Layout>
  )
}

export default Home
