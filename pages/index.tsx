import type { NextPage } from "next"

import Layout from "../components/layout"

const Home: NextPage = () => {
  const code = `
  while (asLongAsILive) {
    hasSucceed = try();
    
    if (hasSucceed) {
      gainSkills();
      nextSteps();
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
