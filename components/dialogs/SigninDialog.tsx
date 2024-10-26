"use client";

import * as React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SigninDialog: React.FC<{ onSignin: () => void, onSwitch: () => void }> = ({ onSignin, onSwitch }: { onSignin: () => void, onSwitch: () => void }) => {
    const [username, setUsername] = React.useState("");
    const [isOpen, setIsOpen] = React.useState(true); // État pour contrôler l'ouverture du dialog

    const handleSignin = () => {
        console.log("Username:", username);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <div className="flex justify-center">
                    <Button variant="outline" className="backdrop-blur-sm">Sign in with cartridge</Button>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Welcome Back</DialogTitle>
                    <DialogDescription>
                        Please enter your credentials to sign in
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center py-4 w-full">
                    <div className="grid grid-cols-4 items-center gap-4 w-full">
                        <Input
                            id="username"
                            placeholder="Username"
                            className="col-span-4 border justify-center"
                            onChange={(e) => setUsername(e.target.value)} // Mise à jour de l'état
                        />
                    </div>
                </div>
                <DialogFooter className="flex flex-col items-center">
                    <Button type="button" onClick={onSignin} className="mb-2">Sign in with cartridge</Button>
                </DialogFooter>
                <DialogFooter>
                    <p className="text-center">
                    <a href="#" onClick={onSwitch} className="text-blue-500 hover:underline">Don't have an account?</a>
                    </p>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default SigninDialog;