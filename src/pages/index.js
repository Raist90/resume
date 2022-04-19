// import statements
import * as React from "react"
import Layout from "../components/layout"
import LeftSection from "../components/left-section"
import RightSection from "../components/right-section"

const IndexPage = () => {
  return (
    <Layout pageTitle="Manuel De Toma | Resume">
      <LeftSection />
      <RightSection />
    </Layout>
  )
}

export default IndexPage
