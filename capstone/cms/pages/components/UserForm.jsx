import {
  Button,
  Flex,
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Center,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const UserForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const initialRef = React.useRef(null)

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    onClose()
  })

  return (
    <>
      <Box onClick={onOpen}>
          <Center cursor="pointer" w="164px" h={10} borderRadius="4px" bgColor="#5552F6">
            <Text fontSize="sm" color="white">
              Create Website
            </Text>
          </Center>
        </Box>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="2xl">
          <form onSubmit={onSubmit}>
            <ModalHeader pt={7}>Get Started</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormControl isRequired>
                  <Flex>
                    <FormLabel htmlFor="name">Website Name</FormLabel>
                  </Flex>

                  <Input
                    maxLength={50}
                    id="name"
                    placeholder="Enter website name"
                    {...register('name', {
                      required: 'This is required',
                    })}
                  />
                  <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel htmlFor="description">Website Description</FormLabel>
                  <Textarea
                    maxLength={200}
                    id="description"
                    placeholder="Enter website description"
                    {...register('description', {
                      required: 'This is required',
                    })}
                  />
                  <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel htmlFor="fullname">Full Name</FormLabel>
                  <Input
                    maxLength={50}
                    id="fullname"
                    placeholder="Enter full name"
                    {...register('fullname', {
                      required: 'This is required',
                    })}
                  />
                  <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel htmlFor="url">URL Address</FormLabel>
                  <Input
                    id="url"
                    placeholder="Enter URL Address"
                    {...register('url', {
                      required: 'This is required',
                    })}
                  />
                  <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                </FormControl>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={onClose}
                variant="outline"
                rounded="md"
                color="#5552F6"
                borderColor="#5552F6"
                fontSize="sm"
                fontWeight="semibold"
              >
                Cancel
              </Button>
              <Button
                isLoading={isSubmitting}
                type="submit"
                ml="8px"
                bgColor="#5552f6"
                rounded="md"
                textColor="white"
                fontSize="sm"
                fontWeight="semibold"
              >
                Create
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default UserForm