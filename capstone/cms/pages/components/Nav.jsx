import {
    Box,
    Flex,
    Avatar,
    HStack,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
  } from '@chakra-ui/react'
  import {signIn, signOut, useSession} from 'next-auth/react'
  import { useRouter } from 'next/router'
  import { useEffect } from 'react'
const NavBar = () => {
    //const { data: session } = useSession()
    const { data: session, status } = useSession()
    console.log(session)
    const router = useRouter()

    const logOut = async () => {
        await signOut({ callbackUrl: 'http://localhost:3000/' })
    }
    const logIn = async () => {
        await signIn('google', { callbackUrl: 'http://localhost:3000/websites' })
    }

    return (
        <>
            <Box bg='#FFFFFF' px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <HStack spacing={8} alignItems={'center'}>
                <Box fontSize="20px" fontWeight="bold" onClick={()=>{router.push('/websites')}} cursor="pointer">Logo</Box>
                <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}></HStack>
            </HStack>
            <Flex alignItems={'center'}>
                {session ? 
                <Menu>
                    <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}>
                        <Avatar
                        size={'sm'}
                        src={session?.user?.image}
                        />
                    </MenuButton>
                
                    <MenuList>
                        <MenuItem>{session?.user?.name}</MenuItem>
                        <MenuItem>{session?.user?.email}</MenuItem>
                        <MenuDivider/>
                        <MenuItem onClick={logOut}>Log Out</MenuItem>
                    </MenuList>
                </Menu>
                : 
                <Button onClick={logIn}>Log In</Button>
                }
            </Flex>
            </Flex>
            </Box>
        </>
    )
}

export default NavBar