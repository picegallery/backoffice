import { HTMLInputTypeAttribute, useRef, useState } from 'react'
import { Control, Controller, FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { FormControl, FormHelperText, InputLabel, TextField } from '@mui/material'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import { ImageContainerStyled, InputImageContainerStyled } from './InputImage.styled'

interface FormInputControllerProps<TFieldsType extends FieldValues> {
  name: Path<TFieldsType>
  defaultValue?: string
  rules?: RegisterOptions
  error?: FieldError
  control: Control<TFieldsType>
}

interface InputImageProps<TFieldsType extends FieldValues> extends FormInputControllerProps<TFieldsType> {
  label?: string
  type?: HTMLInputTypeAttribute
  id?: string
  helperText?: string
}

const InputImage = <TFieldsType extends FieldValues>({
  name,
  control,
  label = 'Upload Photo',
  id = 'upload-image',
  helperText = 'Choose a photo to upload'
}: InputImageProps<TFieldsType>) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null)

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  return (
    <InputImageContainerStyled fullWidth>
      {imagePreviewUrl && (
        <ImageContainerStyled>
          <Image src={imagePreviewUrl} alt='Preview' layout='fill' objectFit='cover' />
        </ImageContainerStyled>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, onChange, onBlur, name } }) => (
          <>
            <input
              ref={(e) => {
                ref(e)
                fileInputRef.current = e // Assign to ref
              }}
              onChange={(e) => {
                onChange(e)
                handleImageChange(e)
              }}
              onBlur={onBlur}
              name={name}
              type='file'
              accept='image/*'
              style={{ display: 'none' }} // Hide the actual input
            />
            <Button variant='contained' component='span' onClick={handleButtonClick}>
              {label}
            </Button>
          </>
        )}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </InputImageContainerStyled>
  )
}

export default InputImage
