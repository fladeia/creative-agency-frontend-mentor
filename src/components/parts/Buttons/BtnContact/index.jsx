import * as C from './styles'

export const ContactPrimary = ({secondary}) => {
  return (
      <C.Button>Contato</C.Button>
  )
}

export const ContactSecondary = () => {
  return (
      <C.Button secondary>Contato</C.Button>
  )
}

export const ContactTertiary = () => {
  return (
    <C.ButtonTertiary ><span>Contato</span></C.ButtonTertiary>
  )
}


// export const BtnContact = () => {
//   return (
//     <>
//       <C.Button>Contato</C.Button>
//       <C.Button secondary>Contato</C.Button>
//       <C.ButtonTertiary ><span>Contato</span></C.ButtonTertiary>
//     </>
//   )
// }