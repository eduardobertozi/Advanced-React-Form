import { LivroTypes } from '@/models/livro'
import { runQuery } from '@/util/database'
import { uploadFile } from '@/util/uploadFile'
import { NextResponse } from 'next/server'

export async function GET() {
  const livretos = await runQuery(`select * from adm_livro`)

  return NextResponse.json(livretos.recordset)
}

export async function POST(request: Request) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData.entries()) as unknown as LivroTypes
  const file = await uploadFile(formData)

  await runQuery(`
    insert into adm_livro (
      nom_titulo,
      des_livro,
      des_livrariaurl,
      des_urlcapa
    ) values (
      '${data.nomTitulo || ''}',
      '${data.desLivro || ''}',
      '${data.urlLivraria || ''}',
      '${file || ''}'
    )
  `)
    
  return new Response(null, {
    status: 201,
    statusText: 'Created',
  })
}