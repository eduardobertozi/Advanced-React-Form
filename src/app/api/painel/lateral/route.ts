import { NextResponse } from 'next/server';
import { runQuery } from '@/util/database';

export async function GET() {
  const lateral = await runQuery(`select * from adm_destaquelateral order by num_ordem asc`)

  return NextResponse.json(lateral.recordset)
}