"use client"
import Navbar from "@/components/Navbar";
import Meals from "@/containers/Meals";
import { GET_MEAL } from "@/query/schema";
import { initialState, useUserStore } from "@/store/useUserStore";
import { useQuery } from "@apollo/client";
import { headers } from "next/headers";
import { useEffect, useState } from "react";

export default function Home() {
  const [meals, setMeals] = useState<[]>([])
  const {user, jwt} = useUserStore((state) => ({
    user: state.user, 
    jwt: state.jwt
  }))
  console.log(user, jwt);
  // console.log(meals);
  const {loading, error, data} = useQuery(GET_MEAL, {
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${jwt}`
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
