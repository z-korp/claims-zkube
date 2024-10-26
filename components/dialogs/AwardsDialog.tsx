"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SpriteAnimation from "@/components/SpriteAnimation";

const AwardsDialog: React.FC<{ onClose: (isOpen: boolean) => void }> = ({ onClose }) => {
    const [username, setUsername] = React.useState("");
    const [isOpen, setIsOpen] = React.useState(true);
    const [spriteState, setSpriteState] = React.useState("firstanimation");

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
        onClose(open);
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Congrats</DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                    <div className="flex items-center justify-center w-full h-3/4 sm:h-full">
                        <SpriteAnimation
                            frameWidth={128}
                            frameHeight={128}
                            columns={21}
                            rows={1}
                            frameRate={5}
                            className="chest-sprite"
                            playOnce={false}
                        />
                    </div>
                    <div className="flex items-center justify-center w-full h-3/4 sm:h-full">
                        <SpriteAnimation
                            frameWidth={128}
                            frameHeight={128}
                            columns={21}
                            rows={1}
                            frameRate={5}
                            className="chest2-sprite"
                            playOnce={false}
                        />
                    </div>
                    <div className="flex items-center justify-center w-full h-3/4 sm:h-full">
                        <SpriteAnimation
                            frameWidth={128}
                            frameHeight={128}
                            columns={12}
                            rows={1}
                            frameRate={5}
                            className="totem-sprite"
                            playOnce={false}
                        />
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default AwardsDialog;
