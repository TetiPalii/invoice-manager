import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export default function Verification() {
    return <>
        <div className=" h-screen flex items-center justify-center">
            <Card className="w-[380px] px-5" >
                <CardHeader className="flex items-center justify-center text-center">
                    <div className="rounded-full bg-blue-100 flex items-center justify-center size-20">
                        <Mail className="size-12 text-blue-500" />
                    </div>
                    <CardTitle className="text-2xl font-bold">
                        Check your Email
                    </CardTitle>
                    <CardDescription>We have sent a verification link to you email addess</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="mt-4 rounded-md bg-yellow-50 border-yellow-300 p-4">
                        <div className="flex items-center">
                            <AlertCircle className="size-5 text-yellow-400" />
                            <p className="text-sm font-medium text-yellow-700 ml-2">Be sure tto check your spam folder!</p>
                        </div>

                    </div>
                </CardContent>
                <CardFooter>
                    <Link href={"/"} className={buttonVariants({
                        className: "w-full",
                        variant: "outline",

                    })}>
                        <ArrowLeft /> Back to homepage
                    </Link>
                </CardFooter>
            </Card>
        </div >

    </>
}