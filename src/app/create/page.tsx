'use client'

import { useRouter } from "next/navigation"
import React, { useState } from "react"

const CreatePage = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        alert(title + " " + content)
        router.push("/")
    }

    return (
        <form className="w-[500px] mx-auto mt-20 flex flex-col gap-2 rounded-lg" onSubmit={handleSubmit}>
            <input type="text" placeholder="Input your title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border rounded-md p-2 focus:outline-none focus:shadow-md" />
            <textarea rows={10} placeholder="Input your content" value={content} onChange={(e) => setContent(e.target.value)} className="w-full border rounded-md p-2 focus:outline-none focus:shadow-md" />
            <button className="bg-blue-600 p-2 rounded text-white hover:bg-blue-500" disabled={isLoading}>{isLoading ? 'Loading...' : 'Submit'}</button>
        </form>
    )
}

export default CreatePage