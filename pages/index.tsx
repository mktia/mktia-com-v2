import type { NextPage } from "next"

import Layout from "../components/layout"

const Home: NextPage = () => {
  const code = `
  while (asLongAsILive) {
    hasSucceed = challenge();
    
    if (hasSucceed) {
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
