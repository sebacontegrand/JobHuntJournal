import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/JournalSlice";



export const SideBarItem = ({title='',body,id,date, imageUrls=[]}) => {
const dispatch= useDispatch();
    const handleOnClick=()=>{
dispatch(setActiveNote({title,body,id,date, imageUrls}))
       
    }

    const newTitle = useMemo(()=>{
        return title.lenth > 17
        ? title.substring(0,17)+'...'
        :title;
    },[title])
  return (
    <ListItem  disablePadding>
                            <ListItemButton onClick={handleOnClick}>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={title} />
                                    <ListItemText secondary={body} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
  )
}
