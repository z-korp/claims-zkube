"use client"
import Scene from "./Scene"
import { useState } from "react"
import SignupDialog from "@/components/dialogs/SignupDialog"
import SigninDialog from "@/components/dialogs/SigninDialog"
import AwardsDialog from "@/components/dialogs/AwardsDialog"
import CheckEligibilityDialog from "@/components/dialogs/CheckEligibilityDialog"

export default function IndexPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [wantSignin, setWantSignin] = useState(false);
  const [wantSignup, setWantSignup] = useState(true);
  const [isEligible, setIsEligible] = useState(false);

  const handleSignup = () => {
    setWantSignup(true);
    setWantSignin(false);
  }

  const handleSignin = () => {
    setWantSignin(true);
    setWantSignup(false);
  }

  const handleConnect = () => {
    setWantSignup(false);
    setWantSignin(false);
    setIsConnected(true);
  }
  
  const handleDisconnect = () => {
    setWantSignup(true);
    setWantSignin(false);
    setIsConnected(false);
  }

  const handleCheckEligibility = () => {
    setWantSignup(false);
    setWantSignin(false);
    setIsConnected(true);
  }

  return (
    <div className="relative flex h-screen border-4">
      <Scene />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {!isConnected && (wantSignup ? <SignupDialog onSignup={handleConnect} onSwitch={handleSignin} /> : <SigninDialog onSignin={handleConnect} onSwitch={handleSignup} />)}
        {/* {isConnected && <CheckEligibilityDialog onClose={handleDisconnect} />} */}
        {isConnected && <AwardsDialog onClose={handleDisconnect} />}
      </div>
    </div>
  )
}
