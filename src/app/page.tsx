"use client"
import Navbar from "@/components/Navbar";
import Meals from "@/containers/Meals";
import { GET_MEAL } from "@/query/schema";
import { useUserStore } from "@/store/useUserStore";
import { useQuery } from "@apollo/client";
import { headers } from "next/headers";
import { useEffect, useState } from "react";

export default function Home() {
  const [meals, setMeals] = useState<[]>([])
  const {user, jwt} = useUserStore((state) => state.jwt)
  console.log(user, jwt);

  console.log(meals);
  const {loading, error, data} = useQuery(GET_MEAL, {
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE4MTc1NzIwLCJleHAiOjE3MjA3Njc3MjB9.lXMWKeDdkJgYlw4_HDAqN3IALD_BisrLLiii1aI8I4s`
      }
    }
  })


  useEffect(() => {
    setMeals(data?.meals?.data)
  }, [data])


  if(loading) return <p>Loading... ... ... ...</p>
  if(error) <p>{error.message}</p>


  return (
    <main>
      <Navbar />
      <Meals meals={meals} />
    </main>
  );
}
