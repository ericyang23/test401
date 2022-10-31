import { Box} from '@chakra-ui/react'
import NavBar from './Nav'

const Layout = ({ children }) => {

  return (
    <>
      <Box minH="100vh" bgColor={'#F4F4F4'}>
        <NavBar/>
          <Box>
            {children}
          </Box>
      </Box>
    </>
  )
}

export default Layout