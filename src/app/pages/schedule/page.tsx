'use client'
import Calendar from "@/app/components/calendar/Calendar";
import { Cards } from "@/app/components/commom/Card";
import { Header } from "@/app/components/commom/headers/Header";
import { SubTitle } from "@/app/components/commom/headers/SubTitulo";
import ContentContainer from "@/app/components/commom/layout/ContentContainer";
import { Footer } from "@/app/components/commom/layout/Footer";
import MainLayout from "@/app/components/commom/layout/MainLayout";
import SectionContainer from "@/app/components/commom/layout/SectionContainer";

export default function Schedule() {
  return (<>
   <MainLayout>
     <ContentContainer>
        <Header>
       Agendamento
        <SubTitle >Bem vindo ao seu agendamento!!</SubTitle>
        </Header>
        <SectionContainer classname="w-full max-w-md" >
          <Calendar/>
           <Cards classname={""}> AGendamentos</Cards>
             <Cards classname={""}> AGendamentos</Cards>
               <Cards classname={""}> AGendamentos</Cards>
        </SectionContainer>
               <Footer/>
     </ContentContainer>
   </MainLayout>
  
  </>)
}