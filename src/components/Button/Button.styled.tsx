import { styled } from '@mui/material/styles'
import { Button as ButtonMUI, ButtonProps as ButtonMUIProps, createTheme } from '@mui/material';

const StyledButton = styled(ButtonMUI)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius || '4px',
  padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
  transition: 'background-color 0.3s ease',

  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },

}));

type ButtonProps = ButtonMUIProps;

const CustomButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const theme = createTheme();

  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;