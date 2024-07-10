import bcrypt from "bcrypt"
import { pool } from "../db.js"
import { createAccessToken } from "../libs/jwt.js"
import md5 from "md5"

export const signin = async (req, res) => {
  const { username, password } = req.body

  const result = await pool.query(" SELECT * FROM users WHERE username = $1", [
    username,
  ])
  if (result.rowCount === 0) {
    return res.status(400).json({ message: "User doesn't exist" })
  }

  const validPassword = await bcrypt.compare(password, result.rows[0].password)

  if (!validPassword) {
    return res.status(400).json({ message: "Wrong password" })
  }

  const token = await createAccessToken({ id: result.rows[0].id })

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000,
  })

  return res.json(result.rows[0])
}

export const signup = async (req, res, next) => {
  const { username, password, name, email } = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const gravatar = `https://www.gravatar.com/avatar/${md5(email)}`
    const result = await pool.query(
      "INSERT INTO users(username, password, name, email, gravatar) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [username, hashedPassword, name, email, gravatar]
    )

    const token = await createAccessToken({ id: result.rows[0].id })

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    })

    return res.json(result.rows[0])
  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({ message: "Email already exists" })
    }

    next(error)
  }
}

export const signout = (req, res) => {
  res.clearCookie("token")
  res.sendStatus(200)
}

export const profile = async (req, res) => {
  const result = await pool.query(" SELECT * FROM users WHERE id = $1", [
    req.userID,
  ])
  return res.json(result.rows[0])
}
