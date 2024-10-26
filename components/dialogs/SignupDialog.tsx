"use client";

import * as React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignupDialog: React.FC<{ onSignup: (username: string) => void, onSwitch: () => void }> = ({ onSignup, onSwitch }: { onSignup: (username: string) => void, onSwitch: () => void }) => {
    const [username, setUsername] = React.useState("");

    const handleSignup = () => {
        onSignup(username);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="flex justify-center">
                    <Button variant="outline" className="backdrop-blur-sm">Sign up with cartridge</Button>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Play ZKube</DialogTitle>
                    <DialogDescription>
                        Create your account to play ZKube
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center py-4 w-full">
                    <div className="grid grid-cols-4 items-center gap-4 w-full">
                        <Input
                            id="name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="col-span-4 border justify-center"
                        />
                    </div>
                </div>
                <DialogFooter className="flex flex-col items-center">
                    <Button type="submit" className="mb-2" onClick={handleSignup}>Sign up</Button>
                </DialogFooter>
                    <DialogFooter>
                        <p className="text-center">
                            <a href="#" onClick={onSwitch} className="text-blue-500 hover:underline">Already have an account?</a>
                        </p>
                    </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default SignupDialog