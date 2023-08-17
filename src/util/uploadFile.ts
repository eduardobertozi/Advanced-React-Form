import { drive, auth } from '@googleapis/drive'

type FileEntry = {
  size: number
  type: string
  name: string
  lastModified: number
}

const gauth = new auth.GoogleAuth({
  keyFile: process.cwd() + '/googledrive.json',
  scopes: ['https://www.googleapis.com/auth/drive'],
})

const gdrive = drive({ version: 'v3', auth: gauth })

/**
 * Finds a file with the specified filename.
 *
 * @param {string} filename - The name of the file to find.
 * @return {object | undefined} - The file object if found, otherwise undefined.
 */
async function findFile(filename: string) {
  const res = await gdrive.files.list()
  return res.data.files?.find((file) => file.name === filename)
}

export async function uploadFile(formData: FormData) {
  const file = formData.get('file') as FileEntry
  const fileExists = await findFile(file.name)
  let response
    
  if (file['size'] > 0 && file['name'] !== '' && !fileExists) {   
    response = await fetch(process.env.UPLOAD_API as string, {
      method: 'POST',
      body: formData,
      cache: 'no-store',
    })  
  } 

  // Se o arquivo existir é retornado o link com o id do arquivo
  let desUrlimagem = fileExists ? `https://drive.google.com/uc?id=${fileExists.id}` : ''

  if (response) {
    const { data } = await response.json()
    return desUrlimagem = `https://drive.google.com/uc?id=${data.id}`
  } 

  return desUrlimagem
}
