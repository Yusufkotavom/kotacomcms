"use client"

import * as React from 'react'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export default function LoginForm() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	async function onSubmit(event: React.FormEvent) {
		event.preventDefault()
		setError(null)
		setLoading(true)
		try {
			const res = await fetch('/api/users/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password }),
			})
			if (!res.ok) {
				const data = await res.json().catch(() => ({}))
				throw new Error(data?.errors?.[0]?.message || 'Login failed')
			}
			window.location.reload()
		} catch (e: any) {
			setError(e?.message || 'Login failed')
		} finally {
			setLoading(false)
		}
	}

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Sign in to Kotacom</CardTitle>
				<CardDescription>Use your email and password.</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={onSubmit} className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="you@example.com"
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="password">Password</Label>
						<Input
							id="password"
							type="password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="••••••••"
						/>
					</div>
					{error && <p className="text-sm text-red-400">{error}</p>}
					<Button type="submit" disabled={loading} className="w-full">
						{loading ? 'Signing in…' : 'Sign in'}
					</Button>
				</form>
			</CardContent>
		</Card>
	)
}