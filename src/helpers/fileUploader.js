export const fileUpload= async (file)=>{
if(!file) throw new Error('No file to upload')
    const cloudUrl='https://api.cloudinary.com/v1_1/sebastiancontegrand/image/upload'

    const formData = new FormData();
    formData.append ('upload_preset','react-journal')
    formData.append('file', file);

    try{
        const resp = await fetch( cloudUrl,{
            method: 'POST',
            body:formData
        });
        console.log(resp)
        if(!resp.ok) throw new Error ('Error Uploading')
        const CloudResp = await resp.json();
        console.log(CloudResp)
        return CloudResp.secure_url;

    }catch(error){


        throw new Error(error.message)
    }
}