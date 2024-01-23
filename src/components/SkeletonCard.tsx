import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
const SkeletonCard = () => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex-row gap-4 items-center">
        <Skeleton className=" w-12 h-12 rounded-full" />
        <Skeleton className="h-6 flex-grow" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 flex-grow mt-4" />
        <Skeleton className="h-4 flex-grow mt-4" />
        <Skeleton className="h-4 w-1/2 mt-4" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Skeleton className="h-10 w-28" />
        <Skeleton className="h-5 w-16 rounded-xl" />

      </CardFooter>
    </Card>
  );
};

export default SkeletonCard;
