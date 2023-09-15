export async function GET() {
  if (Math.random() < 0.5) throw new Error('Random error')

  return new Response('Hello, world!')
}