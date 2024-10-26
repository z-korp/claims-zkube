"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const CheckEligibilityDialog: React.FC<{ onClose: (isOpen: boolean) => void, onCheckEligibility: (isEligible: boolean) => void }> = ({ onClose, onCheckEligibility }) => {
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
                    <Button variant="outline" className="backdrop-blur-sm"> Check Eligibility </Button>
                </div>
                <div className="flex flex-col justify-center w-full space-y-4">
                    {/* <Button onClick={onCheckEligibility}variant="outline" className="backdrop-blur-sm"> Other Options </Button> */}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CheckEligibilityDialog;