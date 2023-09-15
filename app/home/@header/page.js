export const dynamic = 'force-dynamic'

export default async function HomeHeader() {
  const response = await fetch('http://localhost:3000/api')

  if (!response.ok) throw new Error('API error')

  return <nav>Header: {await response.text()}</nav>
}