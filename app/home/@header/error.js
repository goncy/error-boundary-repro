'use client'

import {useRouter} from "next/navigation"

export default function ErrorPage({reset}) {
  const router = useRouter();

  return (
    <button onClick={() => {
      router.refresh()
      reset()
    }}>Reset error</button>
  )
}