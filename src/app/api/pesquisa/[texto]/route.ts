import { runQuery } from '@/util/database'
import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { texto: string }}) {
  const texto = params.texto
  const result = await runQuery(`exec dbo.Proc_WPesquisaCursos @num_ano=${0}, @des_texto='${texto}'`)
  
  return NextResponse.json(result.recordset)
}