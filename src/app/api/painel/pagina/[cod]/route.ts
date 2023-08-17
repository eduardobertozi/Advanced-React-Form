import { PaginaTypes } from '@/models/pagina'
import { runQuery } from '@/util/database'
import { uploadFile } from '@/util/uploadFile'

export async function PUT(request: Request, { params } : { params: { cod: string } }) {
  const codPagina = +params.cod
  const formData = await request.formData()
  const data = Object.fromEntries(formData.entries()) as unknown as PaginaTypes
  const file = await uploadFile(formData)

  await runQuery(`
    update adm_pagina
    set
      nom_titulo='${data.nomTitulo}',
      ${file && `des_urlcapa='${file}',`}
      des_conteudo='${data.desConteudo}',
      dat_ultalteracao=getdate()
    where cod_pagina=${codPagina}
  `)

  return new Response(null, {
    status: 200,
    statusText: 'Modified',
  })
}

export async function DELETE(request: Request, { params } : { params: { cod: string } }) {
  const codPagina = +params.cod

  await runQuery(`
    update adm_pagina
    set
      nom_titulo='',
      des_urlcapa='',
      des_conteudo='',
      dat_ultalteracao=getdate()
    where cod_pagina=${codPagina}
  `)

  return new Response(null, {
    status: 200,
    statusText: 'Deleted',
  })
}