import React from "react";
import { useRouter } from "next/router";
import CourseCardDash from "@/components/CourseCardDash";


function Dash() {

    return (
        <div className="bg-white dark:bg-black"> 
         <h2 className="font-medium text-2xl">Find your new career</h2>
         <CourseCardDash />
        </div>
    )
}

export default Dash