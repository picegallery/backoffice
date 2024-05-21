export const handleErrorMessages = (error?: string) => {
  switch (error) {
    case 'Rejected':
      return 'Email or password is incorrect. Please try again.'
    default:
      return 'Something went wrong. Please try again.'
  }
}
