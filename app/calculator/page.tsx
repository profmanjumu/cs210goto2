'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function CalculatorPage() {

    const [error, setError] = useState('')

    const calculateGrade = () => {

    }
    return (
        <form>
            <Input />

            <Button onClick={() => calculateGrade()} type='submit'>
                Calculate Grade
            </Button>
        </form>
    )

}