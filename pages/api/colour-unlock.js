import { createHash } from "crypto"
import project from "../../src/content/shared-colour-foundation.json"

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store")
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return res.status(405).end()
  }
  const password = typeof req.body?.password === "string" ? req.body.password : ""
  if (createHash("sha256").update(password).digest("hex") !== project.access.passwordHash) {
    return res.status(401).json({ error: "Invalid password" })
  }
  res.setHeader("Set-Cookie", "colour_access=granted; HttpOnly; SameSite=Lax; Path=/project/Rebuilding_Colour_as_Shared_Infrastructure; Max-Age=28800" + (process.env.NODE_ENV === "production" ? "; Secure" : ""))
  return res.status(200).json({ ok: true })
}
