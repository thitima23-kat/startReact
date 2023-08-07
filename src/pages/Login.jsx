import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    useToast,
    Icon,
    FormControl,
    FormErrorMessage,
  } from '@chakra-ui/react';
   import { useForm } from "react-hook-form"
   import { yupResolver } from "@hookform/resolvers/yup"
   import * as yup from "yup";
import { Login } from '../services/LoginServices';
import { useNavigate } from 'react-router-dom';
  
  const avatars = [
    {
      name: 'Ryan Florence',
      url: 'https://thethaiger.com/th/wp-content/uploads/2023/02/%E0%B8%88%E0%B8%B4%E0%B8%99%E0%B8%A2%E0%B8%AD%E0%B8%87-got7-%E0%B8%A1%E0%B8%B2%E0%B9%84%E0%B8%97%E0%B8%A2.jpg',
    },
    {
      name: 'Segun Adebayo',
      url: 'https://f.ptcdn.info/190/050/000/onmros9e8skHV86iQGT-o.jpg',
    },
    {
      name: 'Kent Dodds',
      url: 'https://s359.kapook.com/r/600/auto/pagebuilder/3f348bdc-7399-4496-bb93-16e5d133a1a9.jpg',
    },
    {
      name: 'Prosper Otemuyiwa',
      url: 'https://www.nme.com/wp-content/uploads/2021/03/mark-tuan-got7-032921.jpg',
    },
    {
      name: 'Christian Nwamba',
      url: 'https://scontent.fbkk22-6.fna.fbcdn.net/v/t39.30808-6/348954242_894787861586489_2476653006950825396_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGlBdRAKw2Kr8rp9-ooHLtae_OYKc-F33R785gpz4XfdBWs1W2NEaHlU5_h2tiJtw_Ip-ZKF46AUu2NZMVv4HJs&_nc_ohc=pOctIYJhlIYAX_c6mK8&_nc_ht=scontent.fbkk22-6.fna&oh=00_AfDSZB8tdTNfGj5oNbru3DGb4cVNGFxV9KRlOo63xV5h3A&oe=649F2576',
    },
  ];
  
  export default function login() {
    
    const navi = useNavigate();
    const Toast = useToast();

    const schema = yup.object().shape({
      email:yup.string().required('กรุณาป้อนอีเมลด้วยจ้า').email('ต้องใช้รูปแบบอีเมล'),
      password:yup.string().required('กรุณาป้องรหัสผ่าน').min(4,'รหัสผ่านอย่างน้อย4ตัวอักษร'),
    })
    .required();

    const {
      register, handleSubmit,formState: { errors },} = useForm({
      resolver: yupResolver(schema)
      });

      const onSubmit = async (data)=>{
        console.log(data)
        try{
            const result = await Login(data);
            console.log(result.data);
            if (result.data.access_token){
              localStorage.setItem("token",JSON.stringify(result.data.access_token))
              navi("/home");
            }
            // Toast({
            //   title: 'Login Success',
            //   description: result.data.mesaage,
            //   status: 'success',
            //   duration: 3000,
            //   isClosable: true,
            // })
        }catch(errors){
          
          console.log(errors)
        }

      }






    return (
      <Box position={'relative'}>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}>
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
              Senior web designers{' '}
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,green.400)"
                bgClip="text">
                &
              </Text>{' '}
              Full-Stack Developers
            </Heading>
            <Stack direction={'row'} spacing={4} align={'center'}>
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                    size={useBreakpointValue({ base: 'md', md: 'lg' })}
                    position={'relative'}
                    zIndex={2}
                    _before={{
                      content: '""',
                      width: 'full',
                      height: 'full',
                      rounded: 'full',
                      transform: 'scale(1.125)',
                      bgGradient: 'linear(to-bl, orange.400,green.400)',
                      position: 'absolute',
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                +
              </Text>
              <Flex
                align={'center'}
                justify={'center'}
                fontFamily={'heading'}
                fontSize={{ base: 'sm', md: 'lg' }}
                bg={'gray.800'}
                color={'white'}
                rounded={'full'}
                minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
                minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
                position={'relative'}
                _before={{
                  content: '""',
                  width: 'full',
                  height: 'full',
                  rounded: 'full',
                  transform: 'scale(1.125)',
                  bgGradient: 'linear(to-bl, orange.400,green.400)',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}>
                YOU
              </Flex>
            </Stack>
          </Stack>
          <Stack
            bg={'gray.50'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}>
            <Stack spacing={4}>
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                Let me in My ACCOUNT
                <Text
                  as={'span'}
                  bgGradient="linear(to-r, red.400,orange.400)"
                  bgClip="text">
                  !
                </Text>
              </Heading>
              <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                We’re looking for amazing engineers just like you! Become a part
                of our rockstar engineering team and skyrocket your career!
              </Text>
            </Stack>
            <Box as={'form'} mt={10} onSubmit={handleSubmit(onSubmit)} noValidate>
              <Stack spacing={4}>
                
              <FormControl  isInvalid={errors.email ? true : false}>
              <Input
                  {...register("email")}
                  placeholder="firstname@lastname.io"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                 <FormErrorMessage>
                  {errors.email && errors.email?.message}
                 </FormErrorMessage>
                 </FormControl>



                  
              <FormControl  isInvalid={errors.password ? true : false}>
              <Input
                {...register('password')}
                  placeholder="password"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                 <FormErrorMessage>
                  {errors.password && errors.password?.message}
                 </FormErrorMessage>
                 </FormControl>
                
                
              </Stack>
              <Button
                  type='submit'
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, orange.400,green.400)"
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, red.400,pink.400)',
                  boxShadow: 'xl',
                }}>
              Login
              </Button>
            </Box>
            form
          </Stack>
        </Container>
        <Blur
          position={'absolute'}
          top={-10}
          left={-10}
          style={{ filter: 'blur(70px)' }}
        />
      </Box>
    );
  }
  
  export const Blur = (props) => {
    return (
      <Icon
        width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
        zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
        height="560px"
        viewBox="0 0 528 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <circle cx="71" cy="61" r="111" fill="#F56565" />
        <circle cx="244" cy="106" r="139" fill="#ED64A6" />
        <circle cy="291" r="139" fill="#ED64A6" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
      </Icon>
    );
  };