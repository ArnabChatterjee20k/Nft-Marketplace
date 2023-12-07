import React from 'react'
import { ConnectWallet, useUser } from "@thirdweb-dev/react";
export default function WalletAuth() {
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <ConnectWallet/>
    </div>
  )
}
