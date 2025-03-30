"use client"

import * as React from "react"
import { Copy, ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { toast } from "sonner"


interface Account {
  name: string
  bank: string
  number: string
}

const groomAccounts: Account[] = [
  { name: "신랑", bank: "카카오뱅크", number: "3333-0850-34377" },
  { name: "신랑 어머니", bank: "카카오뱅크", number: "3333-0850-34377" }
]

const brideAccounts: Account[] = [
    { name: "신부", bank: "카카오뱅크", number: "3333-0663-04405" },
    { name: "신부 아버지", bank: "농협", number: "352-1858-358543" },
    { name: "신부 어머니", bank: "농협", number: "352-1858-358543" }
  ]

export function AccountSection() {
  const [isGroomOpen, setIsGroomOpen] = React.useState(true)
  const [isBrideOpen, setIsBrideOpen] = React.useState(true)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text.replace(/-/g, ''))
    toast("Copied !")
  }

  return (
    <section className="py-16 px-6 md:px-12 max-w-screen-md mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
          마음 전하실 곳
        </h2>
        <p className="text-gray-500 text-base md:text-lg">
        참석이 어려워 직접 축하를 전하지 못하는<br/> 
        분들을 위해 계좌번호를 기재하였습니다.<br/><br/>
        전해주시는 진심은 소중하게 간직하여<br/>
        좋은 부부의 모습으로 보답하겠습니다.
        </p>
      </div>

      <div className="space-y-8">
        {/* 신랑측 계좌 */}
        <Collapsible 
          open={isGroomOpen} 
          onOpenChange={setIsGroomOpen}
          className="bg-white rounded-lg shadow-sm"
        >
          <CollapsibleTrigger asChild>
            <Button 
              variant="ghost" 
              className="w-full justify-between p-4 md:p-5"
            >
              <div className="flex items-center gap-3">
                <span className="text-base md:text-lg font-bold text-gray-900">
                  신랑측 계좌
                </span>
              </div>
              <ChevronsUpDown className="h-5 w-5 text-primary" />
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="px-4 md:px-5 pb-4 md:pb-5">
            {groomAccounts.map((account) => (
              <div key={account.name} className="mt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">{account.name}</p>
                    <p className="text-base font-medium text-gray-900">
                      {account.bank}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-base text-gray-700">
                      {account.number}
                    </p>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleCopy(account.bank + ' ' + account.number)}
                    >
                      <Copy className="h-4 w-4 text-primary" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* 신부측 계좌 */}
        <Collapsible 
          open={isBrideOpen} 
          onOpenChange={setIsBrideOpen}
          className="bg-white rounded-lg shadow-sm"
        >
          <CollapsibleTrigger asChild>
            <Button 
              variant="ghost" 
              className="w-full justify-between p-4 md:p-5"
            >
              <div className="flex items-center gap-3">
                <span className="text-base md:text-lg font-bold text-gray-900">
                  신부측 계좌
                </span>
              </div>
              <ChevronsUpDown className="h-5 w-5 text-primary" />
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="px-4 md:px-5 pb-4 md:pb-5">
            {brideAccounts.map((account) => (
              <div key={account.name} className="mt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">{account.name}</p>
                    <p className="text-base font-medium text-gray-900">
                      {account.bank}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-base text-gray-700">
                      {account.number}
                    </p>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleCopy(account.number)}
                    >
                      <Copy className="h-4 w-4 text-primary" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  )
}