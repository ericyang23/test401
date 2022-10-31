import { Box, Flex, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'


const CollectionCard = (props) => {
  const {
    query: { appID },
  } = useRouter()

  return (
    <>
      <Link href={`websites/1`} passHref>
        <Box
          cursor="pointer"
          maxW="1000px"
          ml="auto" mr="auto"
          minH="128px"
          bgColor="#FFFFFF"
          rounded="8px"
          p={4}
          mb={4}
          boxShadow="0px 2px 4px rgba(13, 13, 13, 0.04)"
        >
          <Flex mb={2} w="100%" cursor="pointer">
            <VStack spacing="none" align="stretch">
              <Box>
                <Text fontWeight="bold" fontSize="xl">
                  {props.name}
                </Text>
                <Box mt={2} maxW="1044px" mb={2}>
                  <Text fontWeight="normal" fontSize="md">
                    {props.desc}
                  </Text>
                </Box>
              </Box>
              <Box>
                <Text fontWeight="normal" fontSize="md" color="#5E5E5E">
                  {props.url}
                </Text>
              </Box>
            </VStack>
            <Box minW="110px" minH="110px" bgColor="gray.200">
            </Box>
          </Flex>
        </Box>
      </Link>
    </>
  )
}

export default CollectionCard