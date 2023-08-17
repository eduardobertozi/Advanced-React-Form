import { runQuery } from '@/util/database'
import { NextResponse } from 'next/server'

export async function GET() {
  const paginas = await runQuery(`select * from adm_pagina`)
  return NextResponse.json(paginas.recordset)
}