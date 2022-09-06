import { AddOutlined } from "@mui/icons-material"
import { IconButton} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { JournalLayout } from "../../auth/layout/JournalLayout"
import { startNewNote } from "../../store/journal/thunks"

import { NothingSelectedView } from "../views/NothingSelectedView"
import { NoteView } from '../views/NoteView'


export const JournalPages = () => {
const dispatch= useDispatch()
const {isSaving,active}= useSelector(state=> state.journal)


const onClickNewNote=()=>{
  dispatch(startNewNote());
}

  return (
    <JournalLayout >
      {(!!active)? <NoteView/>
    :<NothingSelectedView/>}

<IconButton
disabled={isSaving}
onClick={onClickNewNote}
size='large'
sx={{color:'white',
backgroundColor:'error.main',
':hover':{backgroundColor:'error.main', opacity:0.9},
position:'fixed',
right:50,
bottom:50
}}>
<AddOutlined sx={{fontSize:30}}/>
</IconButton>

    </JournalLayout>
    
  )
}
