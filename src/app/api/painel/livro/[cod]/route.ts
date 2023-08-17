
import { LivroTypes } from '@/models/livro';
import { runQuery } from '@/util/database';
import { uploadFile } from '@/util/uploadFile';

export async function PUT(request: Request, { params } : { params: { cod: string } }) {
  const codLivro = +params.cod
  const formData = await request.formData()
  const data = Object.fromEntries(formData.entries()) as unknown as LivroTypes
  const file = await uploadFile(formData)
  
  await runQuery(`    
    update adm_livro
    set 
      nom_titulo='${data.nomTitulo}',
      des_livro='${data.desLivro}',
      des_livrariaurl='${data.urlLivraria}',
      ${file && `des_urlcapa='${file}',`}
      dat_ultalteracao=getdate()
      where cod_livro=${codLivro}
  `)
    
  return new Response(null, {
    status: 200,
    statusText: 'Modified',
  })
}

export async function DELETE(request: Request, { params } : { params: { cod: string } }) {
  const codLivro = +params.cod

  await runQuery(`    
    update adm_livro
    set 
      nom_titulo='',
      des_livro='',
      des_livrariaurl='',
      des_urlcapa='',
      dat_ultalteracao=getdate()
      where cod_livro=${codLivro}
  `)
  
  return new Response(null, {
    status: 200,
    statusText: 'Deleted',
  })
}