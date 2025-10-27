'use client';
import { Button } from "@/app/components/commom/buttons/Buttons"
import { Cards } from "@/app/components/commom/Card"
import ContentContainer from "@/app/components/commom/layout/ContentContainer"
import { Footer } from "@/app/components/commom/layout/Footer"
import { Header } from "@/app/components/commom/headers/Header"
import MainLayout from "@/app/components/commom/layout/MainLayout"
import SectionContainer from "@/app/components/commom/layout/SectionContainer"
import { SubTitle } from "@/app/components/commom/headers/SubTitulo"
import {ArrowDownCircleIcon} from '@heroicons/react/24/solid'
import { Title } from "@/app/components/commom/headers/Titulo"
import { ButtonPlus } from "@/app/components/commom/buttons/ButtonsPlus"
import Link from "next/link"
import { useRouter } from "next/navigation";



const Empresa = {
  ColorStander:'#200461ff',
  logoUrl:'https://www.example.com/logo.png',
}

export default function Login() {
   const router = useRouter();
  function handleLogin() { 

    // Lógica de login aqui
    router.push('/pages/dashboard')
   }

  return (<>
  <div >
  <MainLayout>

        <ContentContainer>
       <Header classname={Empresa.ColorStander}>DashBoard Page
           <SubTitle >Bem vindo ao Seu painel de controle!!</SubTitle>
           <ButtonPlus bgcolor={Empresa.ColorStander}/>
       </Header>
            <SectionContainer classname="w-full max-w-md">
                <Cards classname={""}> 

                   <Title classname={`text-[${Empresa.ColorStander}] flex justify-center items-center mb-4 p-2`}>Login</Title>
                    
                    <label>Email</label>
                    <input type="password" placeholder="Password" className="w-full p-2 mb-4 border border-gray-300 rounded"/>
                    <label>Código</label>
                    <input type="text" placeholder="Username" className="w-full p-2 mb-4 border border-gray-300 rounded"/>
            
                        <Button  bgcolor={Empresa.ColorStander} onClick={handleLogin}>Acessar</Button>
                        <div className="p-4">
                        <Link href={"/pages/schedule"} className={`text-[${Empresa.ColorStander}] hover:underline`}>Criar uma conta</Link>
                       
                        </div>
                        <div className="flex justify-center items-center">
                            <ArrowDownCircleIcon className={`h-6 w-6 mt-4 text-[${Empresa.ColorStander}] `}/>
                        </div>
                       
                </Cards>
         
                
            </SectionContainer>
            
       <Footer/>
        </ContentContainer>
 
   </MainLayout>
       
     
    </div>
  
  </>)
  }
