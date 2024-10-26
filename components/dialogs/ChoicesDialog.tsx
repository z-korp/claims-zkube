"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ChoicesDialog: React.FC<{ onClose: (isOpen: boolean) => void }> = ({ onClose }) => {
    const [username, setUsername] = React.useState("");
    const [isOpen, setIsOpen] = React.useState(true);

    const handleSignin = () => {
        console.log("Username:", username);
    };

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
        onClose(open);
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Welcome Back</DialogTitle>
                    <DialogDescription>
                        Options
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col justify-center w-full space-y-4">
                    <Button variant="outline" className="backdrop-blur-sm">Free Games 1</Button>
                    <Button variant="outline" className="backdrop-blur-sm">Free Games 2</Button>
                    <Button variant="outline" className="backdrop-blur-sm">Free Games 3</Button>
                    <Button variant="outline" className="backdrop-blur-sm">Free Games 4</Button>
                </div>
                <DialogFooter className="flex flex-col items-center">
                    <Button type="button" onClick={handleSignin} className="mb-2">Sign in</Button>
                </DialogFooter>
                <DialogFooter>
                    <p className="text-center">
                        <a href="/signup" className="text-blue-500 hover:underline">Don't have an account?</a>
                    </p>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ChoicesDialog;