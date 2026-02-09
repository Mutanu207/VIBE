import Button from '@mui/material/Button';
function PrimaryButton(props){
    return(
        <Button variant="contained"
                size={props.size}
                onClick={props.onClick}
                sx={{
                    border: "2px black solid",
                    borderRadius: "10px",
                    background: props.background,
                    color: props.color,
                    fontWeight: 'bold'
                }}>
                   {props.children} 
                </Button>

    )
}
export default PrimaryButton;