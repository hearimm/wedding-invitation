'use client'

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Shadcn Button 컴포넌트 예시 (필요한 컴포넌트 import)
import { Separator } from '@/components/ui/separator'; // Shadcn Separator 컴포넌트 예시
import { Copy, MessageSquareShare, ChevronDown } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { toast } from "sonner"
import { AccountSection } from '@/components/ui/account-section';


const HomePage: React.FC = () => {
  // 컴포넌트 상단에 상태 추가
  const [visibleImages, setVisibleImages] = useState(6);

  const handleUrlCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    toast("Copied !")
  }

  return (
    <>
      <Head>
        <title>최혁 & 이예린 결혼합니다</title>
        <meta name="description" content="최혁님과 이예린님의 결혼식에 초대합니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        {/* 모바일 최적화 viewport 설정 */}
      </Head>

      <div className="font-sans antialiased text-gray-900 bg-gray-100 min-h-screen">
        {/* 전체 배경 및 기본 스타일 */}

        {/* 1. Hero 섹션 (메인 이미지, 신랑/신부 이름, 날짜) */}
        {/* 1. Hero 섹션 (메인 이미지, 신랑/신부 이름, 날짜) */}
        <section className="relative py-5 md:py-32 bg-cover bg-center" style={{ backgroundImage: `url('/images/hero-image.jpg')` }}>
          {/* 배경 오버레이 (흰색 20% 투명도) */}
          <div className="absolute inset-0 bg-white"></div>
          
          {/* 텍스트 컨테이너 (검정색 폰트) */}
          <div className="relative z-10 text-center text-black">
            <h1 className="text-4xl text-left ml-5 md:text-5xl font-bold mb-4">We&apos;re </h1>
            <h1 className="text-4xl text-left ml-5 md:text-5xl font-bold mb-4">getting married!</h1>
            <Image 
              src="/first.jpg" 
              alt="신랑&신부 이미지" 
              width={500}
              height={300}
              className="object-cover w-full h-full" 
            />
            <p>최혁 💍 이예린</p>
            <p className="text-md md:text-lg mt-2">2025년 09월 14일, 일요일 낮 12시 30분</p>
            <p className="text-md md:text-lg mt-2">수원WI컨벤션 I홀</p>
          </div>
        </section>

        {/* 2. 신랑 신부 소개 섹션 */}
        <section className="py-16 px-6 md:px-12">
          <h2 className="text-2xl font-bold text-center mb-8">INVITATION</h2>
          <p className="text-center text-lg leading-relaxed mb-8">
            🍁곱게 물든 단풍으로 가득 찬 가을날🍁<br />
            저희도 서로에게 물들어 <br />
            평생 함께하고자 합니다.<br /><br />
            서로 다른 색으로 만났지만<br />
            앞으로 서로에게 어울리는 색이 되도록<br />
            사랑하고 배려하며 살겠습니다. 💍
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image 
                  src="/mun.png" 
                  alt="신랑 이미지" 
                  width={128}
                  height={128}
                  className="object-cover w-full h-full" 
                />
              </div>
              <h3 className="text-xl font-semibold">신랑 최혁</h3>
              <p className="text-gray-500">최옥남의 장남</p>
              {/* <p className="text-gray-700 mt-2">연락처: 010-xxxx-xxxx</p> */}
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image 
                  src="/sticker.jpeg" 
                  alt="신부 이미지" 
                  width={128}
                  height={128}
                  className="object-cover w-full h-full" 
                />
              </div>
              <h3 className="text-xl font-semibold">신부 이예린</h3>
              <p className="text-gray-500">이승기, 선미용의 장녀</p>
              {/* <p className="text-gray-700 mt-2">연락처: 010-xxxx-xxxx</p> */}
            </div>
          </div>
        </section>

        <Separator /> {/* 구분선 */}

        {/* 3. 예식 정보 섹션 */}
        <section className="py-16 px-6 md:px-12">
          <h2 className="text-2xl font-bold text-center mb-8">EVENT INFO</h2>
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">2025년 09월 14일 (일) 오후 12시 30분</p>
            <p className="text-gray-700 mb-4">수원WI컨벤션 I웨딩홀</p>
            {/* <div className="w-full h-64 bg-gray-200 rounded-md mb-4">
              지도 영역 (나중에 추가)
            </div> */}
            <p className="text-gray-500 mb-2">오시는 길:</p>
            <p className="text-gray-700">
              [지하철] O호선 OOO역 O번 출구 도보 5분<br />
              [버스] OOO 방면 버스 OOO 정류장 하차
            </p>
          </div>
        </section>

        <Separator /> {/* 구분선 */}

        {/* 4. 갤러리 섹션 (이미지 슬라이더 or 그리드) - 필요에 따라 추가 */}
        <section className="py-16 px-6 md:px-12">
          <h2 className="text-2xl font-bold text-center mb-8">GALLERY</h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 mb-8">
            {[
              '/images/gallery-image1.jpg',
              '/images/gallery-image2.png',
              '/images/gallery-image3.jpeg',
              '/images/gallery-image1.jpg',
              '/images/gallery-image2.png',
              '/images/gallery-image3.jpeg',
              '/images/gallery-image1.jpg',
              '/images/gallery-image2.png',
              '/images/gallery-image3.jpeg',
              '/images/gallery-image1.jpg',
              '/images/gallery-image2.png',
              '/images/gallery-image3.jpeg'
            ].slice(0, visibleImages).map((src, index) => (
              <Dialog key={index}>
                <DialogTrigger className="cursor-pointer">
                  <Image 
                    src={src} 
                    alt={`갤러리 이미지 ${index + 1}`} 
                    width={300}
                    height={192}
                    className="w-full h-48 rounded-md object-cover"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogTitle></DialogTitle>
                  <div className="flex justify-center">
                    <Image 
                      src={src} 
                      alt={`확대 이미지 ${index + 1}`} 
                      className="max-h-[80vh] object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          
          {/* Show More 버튼 */}
          {visibleImages < 12 && (
            <div className="flex justify-center">
              
              <Button 
                variant="outline" 
                onClick={() => setVisibleImages(prev => prev + 6)}
                className="mt-4"
              >
                <ChevronDown />
              </Button>
            </div>
          )}
        </section>

        <Separator /> {/* 구분선 */}

        {/* 5. RSVP 섹션 추가 */}
        <section className="py-16 px-6 md:px-12">
          <h2 className="text-2xl font-bold text-center mb-8">RSVP</h2>
          <div className="text-center">
            <p className="text-gray-700 mb-8">
              참석 여부를 알려주시면<br />
              준비에 큰 도움이 됩니다.
            </p>
            
            {/* RSVP 다이얼로그 */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" className="bg-yellow-300 text-gray-700 hover:bg-yellow-400">
                  참석 여부 확인하기
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl p-0">
                <DialogTitle className="text-center p-4 border-b">
                  참석 확인
                </DialogTitle>
                <div className="p-4">
                <iframe
                  src={`https://docs.google.com/forms/d/e/${process.env.NEXT_PUBLIC_GOOGLE_FORM_ID}/viewform?embedded=true`}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="RSVP Form"
                  className="rounded-lg shadow-lg"
                />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>
        
        {/* 5. LOCATION */}

        {/* 5. 축하 메시지 & 연락처 섹션 */}
        <section className="py-16 px-6 md:px-12">
          <h2 className="text-2xl font-bold text-center mb-8">축하 메시지 & 연락처</h2>
          <p className="text-center text-gray-700 mb-8">
            따뜻한 마음 남겨주시면<br />
            결혼 후에도 오래도록 간직하겠습니다.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">신랑 측 연락처</h3>
              <a className="text-gray-700" href="sms:+821022561541">최혁: 010-2256-1541</a><br />
              <a className="text-gray-700">최옥남: 010-xxxx-xxxx</a>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">신부 측 연락처</h3>
              <a className="text-gray-700" href="sms:+821055570432">이예린: 010-5557-0432</a><br />
              <a className="text-gray-700">이승기: 010-xxxx-xxxx</a><br />
              <a className="text-gray-700">선미용: 010-xxxx-xxxx</a>
            </div>
          </div>
          {/* <div className="mt-8 text-center">
            <Button>
              축하 메시지 남기기
            </Button>
          </div> */} {/* 필요에 따라 축하 메시지 남기기 기능 추가 (Form, Backend 연동 등) */}
        </section>

        <Separator /> {/* 구분선 */}

        {/* 6. 계좌 정보 */}
        <AccountSection />
        <Separator /> {/* 구분선 */}
        {/* 7. 감사메시지 & 공유 섹션 */}
        <section className="py-16 px-6 md:px-12">
          <h2 className="text-2xl font-bold text-center mb-8">감사 메시지</h2>
          <p className="text-center text-gray-700 mb-8">
            저희 부부의 소중한 첫걸음을<br />
            함께 축하해 주셔서 감사합니다.<br />
            <br />
            귀한 시간 내어 주신 모든 분들의<br />
            따뜻한 마음과 축복을<br />
            소중히 간직하며 살아가겠습니다.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div className="text-center">
              <Button className='w-full mb-4 bg-yellow-300 text-gray-700'
              >카카오톡으로 청첩장 전하기<MessageSquareShare/></Button>
              <Button className='w-full bg-white text-gray-700'
              onClick={() => handleUrlCopy()}
              >청첩장 주소 복사하기<Copy/></Button>
            </div>
          </div>
        </section>

        <Separator /> {/* 구분선 */}



        <Separator /> {/* 구분선 */}

        {/* 6. Footer 섹션 (간단한 문구) */}
        <footer className="py-8 text-center text-gray-500 text-sm">
          © 2025. 최혁 & 이예린. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default HomePage;