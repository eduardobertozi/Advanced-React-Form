import { runQuery } from '@/util/database'
import { NextResponse } from 'next/server'

export async function GET() {
  const banners = await runQuery(`select * from adm_destaque`)
  
  return NextResponse.json(banners.recordset)
}