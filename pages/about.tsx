import type { NextPage } from "next"
import { useEffect, useState } from "react"
import { FaGithub, FaTwitter } from "react-icons/fa"
import AYearText from "../components/aYearText"
import Layout from "../components/layout"
import ReadMoreButton from "../components/readMoreButton"
import SectionTitle from "../components/sectionTitle"
import SkillText from "../components/skillText"
import SocialText from "../components/socialText"
import data from "../contents/about.json"

const About: NextPage = () => {
  const [isExpand, setExpand] = useState(false)
  return (
    <Layout title="About" description="Introduce my skill set">
      <div className="mb-6 mt-8">
        <SectionTitle title="About me" />
      </div>
      <div className="mx-auto w-72 md:w-96">
        {isExpand ? (
          data.aboutMe.map((item) => {
            return (
              <div className="mb-3">
                <AYearText
                  year={item.year}
                  events={item.content}
                  key={item.year}
                />
              </div>
            )
          })
        ) : (
          <AYearText
            year={data.aboutMe[0].year}
            events={data.aboutMe[0].content}
          />
        )}
      </div>
      <div className="mt-8 mx-auto w-14" onClick={() => setExpand(!isExpand)}>
        <ReadMoreButton isExpand={isExpand} />
      </div>

      <div className="mb-6 mt-16">
        <SectionTitle title="Skill" />
      </div>
      <div className="mx-auto w-72 md:w-96">
        <div className="mb-3">
          <SkillText
            title="Programming - Expert"
            terms={data.skill.programming.expert}
          />
        </div>
        <div className="mb-3">
          <SkillText
            title="Programming - Intermediate"
            terms={data.skill.programming.intermediate}
          />
        </div>
        <div className="mb-3">
          <SkillText
            title="Programming - Beginner"
            terms={data.skill.programming.beginner}
          />
        </div>
        <div className="mb-3">
          <SkillText title="Markup & Preprocessing" terms={data.skill.markup} />
        </div>
        <div className="mb-3">
          <SkillText title="Framework" terms={data.skill.framework} />
        </div>
        <div className="mb-3">
          <SkillText title="Service" terms={data.skill.service} />
        </div>
        <div className="mb-3">
          <SkillText title="Software" terms={data.skill.software} />
        </div>
        <div className="mb-3">
          <SkillText
            title="Operating system"
            terms={data.skill.operatingSystem}
          />
        </div>
        <div className="mb-3">
          <SkillText title="IDE & Prototyping tool" terms={data.skill.tool} />
        </div>
      </div>

      <div className="mb-6 mt-16">
        <SectionTitle title="Social" />
      </div>
      <div className="mx-auto w-48">
        <div className="mb-6">
          <SocialText url={data.social.twitter}>
            <FaTwitter size={24} />
          </SocialText>
        </div>
        <SocialText url={data.social.github}>
          <FaGithub size={24} />
        </SocialText>
      </div>

      <div className="mt-20 mx-auto w-72 md:w-96">
        <p className="text-center text-gray-400 text-xs">
          Modify a rabbit icon and use it as a favicon of this site.&nbsp;
          <a
            href="https://www.flaticon.com/free-icons/rabbit"
            title="rabbit icons"
          >
            Rabbit icons created by Freepik - Flaticon
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default About
