import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const MyCardComponent: React.FC = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="mt-4 backdrop-blur-sm">Login With Cartridge</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] ">
          <DialogHeader>
          <img src="images/bgcard.png" alt="Description de l'image" className="mx-auto my-4" />
          </DialogHeader>
          <DialogHeader>
            <DialogTitle className="text-center">Play ZKube</DialogTitle>
            <DialogDescription className="text-center">
              Create your onchain player identiy
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid  items-center gap-4">
              <Input
                id="name"
                className="col-span-2"
                placeholder="Username"
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "Username"}
              />
            </div>
          </div>
          <DialogFooter className="flex-col justify-center">
            <Button type="submit" className="w-full">Sign up</Button>
            <DialogDescription className="text-center">
              {/* Already have an account? <Link href="/login">Login</Link> */}
              Already have an account ? 
            </DialogDescription>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyCardComponent;
