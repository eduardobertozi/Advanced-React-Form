import { runQuery } from '@/util/database';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { texto: string }}) {
  const desTexto = params.texto
  const prof = await runQuery(`exec Proc_WPesquisaProfessores @des_texto='${desTexto}', @tip_busca='X'`)
  
  return NextResponse.json(prof.recordset)
}