import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import AOS from 'aos'

import UpperSection from '@/components/aboutus/upperSection'
import Informtion from '@/components/aboutus/information'
import Offer from '@/components/aboutus/offer'
import Facts from '@/components/aboutus/facts'
import TicketInPress from '@/components/aboutus/ticketInPress'
import TeamInformation from '@/components/aboutus/teem'
import TeamManagement from '@/components/aboutus/teamManagement'
import Inspiration from '@/components/aboutus/inspiration'
import LegalInformation from '@/components/aboutus/legalInfo'

const About = ({ data }) => {
  // console.log(data);
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <Box sx={{ px: { sm: 2, md: 0 } }}>
      {/* Image section */}
      <UpperSection />

      {/* About us information */}
      <Informtion />

      {/* Offer */}
      <Offer />

      {/* slider bosbe */}

      {/* Facts */}
      <Facts />

      {/* Press  */}
      <TicketInPress />

      {/* Teem information */}
      <TeamInformation />

      {/* Team management information */}
      <TeamManagement />

      {/* Inspirations */}
      <Inspiration />

      {/* Legal Information */}
      <LegalInformation />
    </Box>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
export default About
