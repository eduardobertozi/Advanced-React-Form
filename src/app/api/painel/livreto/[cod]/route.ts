
import { LivretoTypes } from '@/models/livreto';
import { runQuery } from '@/util/database';
import { uploadFile } from '@/util/uploadFile';

export async function PUT(request: Request, { params } : { params: { cod: string } }) {
  const codLivreto = +params.cod
  const formData = await request.formData()
  const data = Object.fromEntries(formData.entries()) as unknown as LivretoTypes
  const file = await uploadFile(formData)
  
  await runQuery(`
    update adm_livreto
    set 
      nom_titulo='${data.nomTitulo}',
      des_livreto='${data.desLivreto}',
      ${file !== null && `des_urlpdf='${file}',`}
      dat_ultalteracao=getdate()
      where cod_livreto=${codLivreto}
  `)
    
  return new Response(null, {
    status: 200,
    statusText: 'Modified',
  })
}

export async function DELETE(request: Request, { params } : { params: { cod: string } }) {
  const codLivreto = +params.cod

  await runQuery(`
    update adm_livreto
    set 
      nom_titulo='',
      des_livreto='',
      des_urlpdf='',
      dat_ultalteracao=getdate()
      where cod_livreto=${codLivreto}
  `)
  
  return new Response(null, {
    status: 200,
    statusText: 'Deleted',
  })
}