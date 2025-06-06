'use client'

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Shadcn Button 컴포넌트 예시 (필요한 컴포넌트 import)
import { Separator } from '@/components/ui/separator'; // Shadcn Separator 컴포넌트 예시
import { Copy, MessageSquareShare, ChevronDown, ExternalLink, MessageSquareText } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { toast } from "sonner"
import { AccountSection } from '@/components/common/account-section';
import Link from 'next/link';

const WEDDING_INFO = {
  groom: {
    name: "Hyuk Choi",
    phone: "010-2256-1541",
    mother: {
      name: "Oknam Choi",
      phone: "010-xxxx-xxxx"
    }
  },
  bride: {
    name: "Yerin Lee",
    phone: "010-5557-0432",
    father: {
      name: "Seungki Lee",
      phone: "010-xxxx-xxxx"
    },
    mother: {
      name: "Miyong Sun",
      phone: "010-xxxx-xxxx"
    }
  },
  date: "September 14, 2025",
  time: "12:30 PM",
  venue: "Suwon WI Convention I Hall",
  address: "310 World Cup-ro, Paldal-gu, Suwon-si, Gyeonggi-do (209 Wooman-dong)"
} as const;

const contactInfo = {
  groom: {
    title: "Groom's Contact Information",
    contacts: [
      { name: WEDDING_INFO.groom.name, relationship: "Groom", phone: WEDDING_INFO.groom.phone },
      { name: WEDDING_INFO.groom.mother.name, relationship: "Mother", phone: WEDDING_INFO.groom.mother.phone },
    ],
  },
  bride: {
    title: "Bride's Contact Information",
    contacts: [
      { name: WEDDING_INFO.bride.name, relationship: "Bride", phone: WEDDING_INFO.bride.phone },
      { name: WEDDING_INFO.bride.father.name, relationship: "Father", phone: WEDDING_INFO.bride.father.phone },
      { name: WEDDING_INFO.bride.mother.name, relationship: "Mother", phone: WEDDING_INFO.bride.mother.phone },
    ],
  },
};

// 전화번호를 SMS 링크 형식으로 변환하는 헬퍼 함수
const formatSmsLink = (phone: string): string => {
  const cleaned = phone.replace(/-/g, ""); // 하이픈(-) 제거
  if (cleaned.startsWith("010")) {
    return `sms:+82${cleaned.substring(1)}`; // '010'을 '+8210'으로 변경
  }
  return `sms:${cleaned}`;
};


const HomePage: React.FC = () => {
  // 컴포넌트 상단에 상태 추가
  const [visibleImages, setVisibleImages] = useState(6);
  useEffect(() => {
    // Kakao SDK 초기화 (componentDidMount 시점에 실행)
    if (!window.Kakao) return; // Kakao SDK가 로드되지 않았을 경우 early return
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY); // 발급받은 JavaScript 키로 초기화
  }, []);

  const handleUrlCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    toast("Copied !")
  }

  const handleAddrCopy = () => {
    navigator.clipboard.writeText(WEDDING_INFO.address)
    toast(WEDDING_INFO.address + " Address Copied !")
  }
  
  const handleShareKakao = () => {
    if (!window.Kakao) {
      navigator.clipboard.writeText(window.location.href)
      toast.warning("🚧 공사중 🚧")
      return
    }; // Kakao SDK가 로드되지 않았을 경우 early return
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Hyuk 💍 Yerin 결혼합니다', // 공유할 제목 (청첩장 제목)
        description: 'September 14, 2025, a beautiful autumn day filled with colorful leaves.', // 공유할 설명
        imageUrl: `${window.location.origin}/first.jpg`, // 대표 이미지 주소 (썸네일)
        link: {
          mobileWebUrl: window.location.href, // 모바일 웹 URL (청첩장 주소)
          webUrl: window.location.href, // PC 웹 URL (청첩장 주소)
        },
      },
      buttons: [
        {
          title: '청첩장 확인하기', // 버튼 제목
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };


  return (
    <>
      <Head>
        <title>Hyuk 💍 Yerin Wedding Invitation</title>
        <meta name="description" content="We invite you to celebrate our wedding ceremony." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        {/* 모바일 최적화 viewport 설정 */}
      </Head>

      <div className="font-sans antialiased text-gray-900 bg-gray-100 min-h-screen">
        {/* 전체 배경 및 기본 스타일 */}

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
            <p>{WEDDING_INFO.groom.name} 💍 {WEDDING_INFO.bride.name}</p>
            <p className="text-md md:text-lg mt-2">{WEDDING_INFO.date}, 일요일 {WEDDING_INFO.time}</p>
            <p className="text-md md:text-lg mt-2">{WEDDING_INFO.venue}</p>
          </div>
        </section>

        {/* 2. 신랑 신부 소개 섹션 */}
        <section className="py-16 px-6 md:px-12">
          <h2 className="text-2xl font-bold text-center mb-8">INVITATION</h2>
          <p className="text-center text-lg leading-relaxed mb-8">
            🍁On a beautiful autumn day filled with colorful leaves🍁<br />
            We have decided to spend our lives together.<br /><br />
            Though we started with different colors,<br />
            We promise to love and care for each other,<br />
            Becoming the perfect match for one another. 💍
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto">
                <Image 
                  src="/images/gallery-image2.jpg" 
                  alt="Groom's image" 
                  width={128}
                  height={128}
                  className="object-cover w-full h-full" 
                />
              </div>
              <h3 className="text-xl font-semibold">🤵 Groom {WEDDING_INFO.groom.name}</h3>
              <p className="text-gray-500">First son of {WEDDING_INFO.groom.mother.name}</p>
              {/* <p className="text-gray-700 mt-2">연락처: 010-xxxx-xxxx</p> */}
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto">
                <Image 
                  src="/images/gallery-image3.jpeg"
                  alt="Bride's image" 
                  width={128}
                  height={128}
                  className="object-cover w-full h-full" 
                />
              </div>
              <h3 className="text-xl font-semibold">👰‍♀️ Bride {WEDDING_INFO.bride.name}</h3>
              <p className="text-gray-500">First daughter of {WEDDING_INFO.bride.father.name} & {WEDDING_INFO.bride.mother.name}</p>
              {/* <p className="text-gray-700 mt-2">연락처: 010-xxxx-xxxx</p> */}
            </div>
          </div>
        </section>

        <Separator /> {/* 구분선 */}


        {/* 3. 예식 정보 섹션 */}
        <section className="py-16 px-6 md:px-12">
          <h2 className="text-2xl font-bold text-center mb-8">EVENT INFO</h2>
          <div className="text-center">

            <p className="text-lg font-semibold mb-2">{WEDDING_INFO.date} (일) {WEDDING_INFO.time}</p>
            <p className="text-gray-700 mb-4">{WEDDING_INFO.venue}</p>
            {/* <div className="w-full h-64 bg-gray-200 rounded-md mb-4">
              지도 영역 (나중에 추가)
            </div> */}
            <div className="flex flex-col md:flex-row justify-center">
              <div className="text-center">

                <Link href={"https://wiconvention.co.kr/location"} passHref target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full mb-4">
                    Directions
                    <ExternalLink />
                  </Button>
                </Link>

              <Button variant="outline" className="w-full mb-4" onClick={handleAddrCopy}>
                Copy Address
                <Copy />
              </Button>

              </div>
            </div>

            <div className='flex justify-center mb-4 md:flex-row md:gap-4'> {/* flex-col 제거, md:flex-row, md:gap-2 추가 */}
              <Link href={"https://kko.kakao.com/NaE2tABAU_"} passHref target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="mx-2 bg-yellow-300 text-gray-700 hover:bg-yellow-400"> {/* w-full 유지, md:w-auto, mx-2 추가 */}
                  Kakao Map
                  <ExternalLink />
                </Button>
              </Link>

              <Link href={"https://naver.me/5z5I6K2Q"} passHref target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="mx-2 text-gray-700 bg-green-400 hover:bg-green-500"> {/* w-full 유지, md:w-auto, mx-2 추가 */}
                  Naver Map
                  <ExternalLink />
                </Button>
              </Link>
            </div>

            <p className="text-gray-500 mb-2">Directions:</p>
            <p className="text-gray-700">
              🚘 By Car<br />
              Suwon World Cup Stadium Parking Lot 4 or 7<br />
              <br />
              🚍 By Bus<br />
              Get off at Suwon World Cup Stadium or Dongseong Middle School
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
              '/images/gallery-image2.jpg',
              '/images/gallery-image3.jpeg',
              '/images/gallery-image1.jpg',
              '/images/gallery-image2.jpg',
              '/images/gallery-image3.jpeg',
              '/images/gallery-image1.jpg',
              '/images/gallery-image2.jpg',
              '/images/gallery-image3.jpeg',
              '/images/gallery-image1.jpg',
              '/images/gallery-image2.jpg',
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
                  <div className="relative w-full h-[70vh] flex justify-center">
                    <Image 
                      src={src} 
                      alt={`확대 이미지 ${index + 1}`}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-md"
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
              Please let us know if you can attend.<br />
              Your response will help us prepare better.
            </p>
            
            {/* RSVP 다이얼로그 */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" className="bg-yellow-300 text-gray-700 hover:bg-yellow-400">
                  RSVP
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl p-0">
                <DialogTitle className="text-center p-4 border-b">
                  Please RSVP
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
          <h2 className="text-2xl font-bold text-center mb-8">Congratulations & Contact</h2>
          <p className="text-center text-gray-700 mb-8">
            Your warm wishes will be<br />
            cherished in our hearts forever.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Groom's Contact Information</h3>
              <div className="flex flex-col items-center gap-2">
                {contactInfo.groom.contacts.map((contact, index) => (
                  contact.phone && contact.phone.includes('-') ? (
                    <a
                      key={index}
                      className="inline-flex items-center gap-1.5 text-gray-700 hover:text-blue-600 transition-colors"
                      href={formatSmsLink(contact.phone)}
                    >
                      <span>{`${contact.name}: ${contact.phone}`}</span>
                      <MessageSquareText size={16} />
                    </a>
                  ) : (
                    <span key={index} className="text-gray-700">
                      {`${contact.relationship}: ${contact.name}`}
                    </span>
                  )
                ))}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Bride's Contact Information</h3>
              <div className="flex flex-col items-center gap-2">
                {contactInfo.bride.contacts.map((contact, index) => (
                  contact.phone && contact.phone.includes('-') ? (
                    <a
                      key={index}
                      className="inline-flex items-center gap-1.5 text-gray-700 hover:text-blue-600 transition-colors"
                      href={formatSmsLink(contact.phone)}
                    >
                      <span>{`${contact.name}: ${contact.phone}`}</span>
                      <MessageSquareText size={16} />
                    </a>
                  ) : (
                    <span key={index} className="text-gray-700">
                      {`${contact.relationship}: ${contact.name}`}
                    </span>
                  )
                ))}
              </div>
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
          <h2 className="text-2xl font-bold text-center mb-8">Thank You Message</h2>
          <p className="text-center text-gray-700 mb-8">
            Thank you for celebrating<br />
            the beginning of our journey together.<br />
            <br />
            We will cherish all the warm wishes and blessings<br />
            from everyone who took the time to share this special moment with us.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div className="text-center">
              <Button className='w-full mb-4 bg-yellow-300 text-gray-700 hover:bg-yellow-400'
              onClick={() => handleShareKakao()}
              >Share via KakaoTalk<MessageSquareShare/></Button>
              <Button variant="outline"
              className='w-full mb-4'
              onClick={() => handleUrlCopy()}
              >Copy Invitation URL<Copy/></Button>
            </div>
          </div>
        </section>

        <Separator /> {/* 구분선 */}

        {/* 6. Footer 섹션 (간단한 문구) */}
        <footer className="py-8 text-center text-gray-500 text-sm">
          © 2025. {WEDDING_INFO.groom.name} & {WEDDING_INFO.bride.name}. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default HomePage;