import app from "./backend/app.js"

export default app

if (!process.env.VERCEL) {
    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => {
        console.log(`API running on port ${PORT}`)
    })
}
