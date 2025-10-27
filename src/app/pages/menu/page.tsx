'use client'
import { Cards } from "@/app/components/commom/Card";
import { Header } from "@/app/components/commom/headers/Header";
import { SubTitle } from "@/app/components/commom/headers/SubTitulo";
import ContentContainer from "@/app/components/commom/layout/ContentContainer";
import { Footer } from "@/app/components/commom/layout/Footer";
import MainLayout from "@/app/components/commom/layout/MainLayout";
import SectionContainer from "@/app/components/commom/layout/SectionContainer";
import {ArrowDownCircleIcon} from '@heroicons/react/24/solid'
import Link from "next/link";



export default function Menu() {
    const Empresa = {
  ColorStander:'#',
  logoUrl:'https://www.example.com/logo.png',
}
  return (<>
   <MainLayout>
     <ContentContainer>
        <Header>
       AGendaNet
        <SubTitle >Sistema de Agendamento</SubTitle>
        </Header>
        <SectionContainer classname="w-full max-w-md" >
    
            <Cards classname={""}> <Link href="/pages/dashboard">DashBoard</Link></Cards>
            <Cards classname={""}> Agendamento</Cards>
            <Cards classname={""}> Serviços</Cards>
            <Cards classname={""}> Estabelecimento</Cards>
            <Cards classname={""}> Prestadores</Cards>
            <Cards classname={""}> Usuário</Cards>
            <Cards classname={""}> Sair</Cards>
            <div className="flex justify-center items-center">
               <ArrowDownCircleIcon className={`h-6 w-6 mt-4 text-[${Empresa.ColorStander}] `}/>
            </div>
                                      
               
        </SectionContainer>
               <Footer/>
     </ContentContainer>
   </MainLayout>
  
  </>)
}