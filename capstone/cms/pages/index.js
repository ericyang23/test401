import Head from 'next/head'
import {signIn, signOut, useSession} from 'next-auth/react'
import { Heading, Button, Flex, Text, Spacer  } from '@chakra-ui/react'
import UserForm from './components/UserForm';
import CollectionCard from './components/WebsiteCard';


export default function Index() {
  // Current session
  const {data: session} = useSession()
  console.log(session)
  return (
    <div>
      <Head>
        <title>CMS</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Heading>Content Management System Landing Page</Heading>
      </div>
    </div>
    
  )
}
