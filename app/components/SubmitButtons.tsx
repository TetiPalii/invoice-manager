"use client"

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function SubmitButton() {
    const { pending } = useFormStatus();

    return <>
        {pending ? <Button disabled className="w-full"> <Loader2 className="size-4 mr-2  animate-spin"></Loader2>Please wait ...</Button> : <Button type="submit" className="w-full">Submit</Button>} </>
}