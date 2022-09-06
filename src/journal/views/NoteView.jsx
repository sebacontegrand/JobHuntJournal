import {  DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../component/ImageGallery"
import {useForm} from '../../hooks/useForm'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import { setActiveNote } from "../../store/journal/JournalSlice"
import { startDeletingNote, startSavingNote, startUploadingFiles } from "../../store/journal/thunks"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2'
import { useRef } from "react"

export const NoteView = () => {
const dispatch=useDispatch();
const {active:note, messageSaved, isSaving} = useSelector(state=> state.journal);   
const {title,body,date, onInputChange, formState}=useForm(note);

const dateString = useMemo(()=>{
    const newDate= new Date(date)
    return newDate.toUTCString();
},[date])

const fileInputRef=useRef()


const onSaveNote=()=>{
    dispatch(startSavingNote());
}

useEffect(() => {
  dispatch(setActiveNote(formState))
}, [formState])

useEffect(() => {
  if(messageSaved.length>0){
    Swal.fire('nota actualizada',messageSaved, 'success');
  }
}, [messageSaved])

const onFileInputChange=({target})=>{
  if(target.files===0) return;
   dispatch(startUploadingFiles(target.files))
}

const onDelete =()=>{
  dispatch(startDeletingNote());
}
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{mb:1}}
    className="animate__animated__fadeIn animate__faster">
<Grid item>
   
    <Typography fontSize={20} fintweight='light'>{dateString}</Typography>
<Grid item>
<input type="file"
multiple
onChange={onFileInputChange}
ref={fileInputRef}
style={{display:'none'}}/>

<IconButton
color="primary"
disabled={isSaving}
onClick={()=> fileInputRef.current.click()}>

  <UploadOutlined/>
</IconButton>

    <Button 
    color="primary"
    onClick={onSaveNote}>
        <SaveOutlined sx= {{ fontSize:30, mr: 1 }}/>
        Save
    </Button>


</Grid>
</Grid>
<Grid container>
    <TextField
    type='text'
    variant="filled"
    fullWidth
    placeholder="Enter title"
    label="Company I Applied"
    sx={{border:'none', mb:1}}
    name="title"
    value={title}
    onChange={onInputChange}

    />
<TextField
    type='text'
    variant="filled"
    fullWidth
    placeholder="Job Description"
    minRows={5}
    name="body"
    value={body}
    onChange={onInputChange}
    />
</Grid>
<Grid container justifyContent="end">
  <Button
  onClick={ onDelete }
  sx={{mt:2}}
  color="error">
    <DeleteOutline/>

  </Button>

</Grid>
<ImageGallery images={note?.imageUrls}/>
    </Grid>
  )
}
