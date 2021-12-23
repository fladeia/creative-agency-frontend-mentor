import * as C from './styles'

export const ContactPrimary = ({secondary}) => {
  return (
      <C.Button mobile>Contato</C.Button>
  )
}

export const ContactSecondary = () => {
  return (
      <C.ButtonSecondary>Contato</C.ButtonSecondary>
  )
}

export const ContactTertiary = () => {
  return (
    <C.Button tertiary><span>Contato</span></C.Button>
  )
}
