import sql from 'mssql'

// run a query against the global connection pool
export async function runQuery(query: string) {
  return sql.connect(process.env.DATABASE_URL as string).then((pool) => {
    return pool.query(query)
  })
}
