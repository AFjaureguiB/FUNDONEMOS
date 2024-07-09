import { pool } from "../db.js"

export const getAllInfo = async (req, res, next) => {
  const result = await pool.query("SELECT * FROM info")
  return res.json(result.rows)
}

export const getInfo = async (req, res) => {
  const result = await pool.query("SELECT * FROM info WHERE id = $1", [
    req.params.id,
  ])

  if (result.rowCount === 0) {
    return res
      .status(404)
      .json({ message: "Information doesn't exists with this ID" })
  }

  return res.send(result.rows[0])
}

export const createInfo = async (req, res, next) => {
  const { title, description } = req.body

  try {
    const result = await pool.query(
      "INSERT INTO info (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    )
    res.json(result.rows[0])
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({ message: "Info already exists" })
    }
    next(error)
  }
}

export const updateInfo = async (req, res) => {
  const id = req.params.id
  const { title, description } = req.body
  const result = await pool.query(
    "UPDATE info SET title = $1, description = $2 WHERE id = $3 RETURNING *",
    [title, description, id]
  )
  if (result.rowCount === 0) {
    return res
      .status(404)
      .json({ message: "The info doesn't exists in this ID" })
  }
  return res.json(result.rows[0])
}

export const deleteInfo = async (req, res) => {
  const result = await pool.query("DELETE FROM info WHERE id = $1", [
    req.params.id,
  ])

  if (result.rowCount === 0) {
    return res.status(404).json({ message: "The info doesn't exists" })
  }

  return res.sendStatus(204)
}
