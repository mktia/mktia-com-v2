import type { NextPage } from "next"

import Layout from "../components/layout"

const Home: NextPage = () => {
  const code = `
  while (isFailed) {
    challenge();
  }`
  return (
    <Layout>
      <div className="my-48 text-xl">
        <pre>{code}</pre><pre className="blink">  _</pre>
      </div>
      <p>
        乏しい文章力を向上させるためにブログ記事を書いていたら，いつの間にかプログラムも書けるようになっていました．
      </p>
      <p className="mt-4">
        今はパブリックブロックチェーンに興味があり，DApp開発とかたまにしてます．
      </p>
    </Layout>
  )
}

export default Home
