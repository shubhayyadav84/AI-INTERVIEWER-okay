import multer from "multer"

// Memory storage — required on Vercel (read-only filesystem, no public/ folder)
export const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
})
